---
name: igniteui-sample-styling
description: "Rules for writing and reviewing the CSS of a sample that the Ignite UI documentation embeds, so that the sample works in every theme the docs theme picker offers (Material, Fluent, Bootstrap and Indigo, in light and dark). Use when writing, changing or reviewing a sample component's .scss, when a sample color looks wrong in one theme, or when a design review flags a sample's colors. Not for building an application theme or a custom palette (use igniteui-angular-theming)."
---

# Ignite UI sample styling

The docs theme picker switches every embedded sample between Material, Fluent, Bootstrap and
Indigo, in light and dark. A color that a sample sets by hand either fights the theme or needs one
more exception for one theme. These rules keep a sample's stylesheet out of the theme's way.

In this repo the sample stylesheet is the component `.scss` next to the sample, for example
`src/app/lists/combo/combo-validation/combo-validation.component.scss`. The theme is not compiled
into the app: `src/app/services/theme.service.ts` swaps the prebuilt theme stylesheet when the docs
picker posts a selection into the sample's iframe.

These rules apply to sample stylesheets only. Where they differ from
[`igniteui-angular-theming`](../igniteui-angular-theming/SKILL.md), which is about building an
application theme, these rules win for a sample.

## Rules

The rules are shared by the Angular, Web Components, React and Blazor samples repos, worded the
same in each. Only the [platform section](#platform-angular) differs.

### 1. A sample's CSS holds layout only

A sample's CSS holds layout only: display, grid and flex, gaps, padding and sizes. It sets no
color, background or border color.

Wrong: the card title already gets its color from the theme.

```scss
h2 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    color: var(--ig-gray-900);
}

.panel {
    background: var(--ig-surface-500);
    border: 1px solid var(--ig-gray-300);
}
```

Right:

```scss
h2 {
    margin: 0 0 1rem;
}

.panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}
```

### 2. Colors and text styles come from the theme

Colors come from the theme. The caption style of the sample labels, the "Aktiv Grotesk" font with
its gray color, is deliberate and stays as it is. Other text styles that the design asks for use
the theme's typography classes, such as `ig-typography__subtitle-2` or `ig-typography__body-2`,
inside an element with the `ig-typography` class.

Wrong: a hand-made text style with its own size, weight and color.

```html
<span class="group-title">Destinations by region</span>
```

```scss
.group-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--ig-gray-800);
}
```

Right: the theme's typography class, and the sample label caption kept as it is.

```html
<span class="ig-typography__subtitle-2">Destinations by region</span>
<span class="state-label">Success</span>
```

```scss
/* the sample label caption, deliberate in every sample */
.state-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}
```

### 3. No color rules for one theme

A sample has no color rules for one theme. When a color looks wrong in one theme, the fix removes
the custom color and lets the theme decide. It does not add a rule for that theme.

Wrong: a custom color, then an exception for the theme it looked wrong in.

```scss
.item-menu {
    color: var(--ig-gray-700);
}

@container style(--ig-theme: indigo) {
    .item-menu {
        color: var(--ig-gray-500);
    }
}
```

Right: both rules removed, so the icon button keeps the theme's own color.

```scss
.item-menu igx-icon {
    font-size: 1.5rem;
}
```

### 4. Layout may change by theme only when the theme changes what the sample can show

A sample may change its layout by theme when the theme itself changes what the sample can show. An
example is the box type of the input components, such as Input, Select and Combo, which only
Material draws differently from the border type. The sample root gets `container-name: sample`, and
the rule uses `@container sample not style(--ig-theme: material)`. Such a rule changes layout only.

Wrong: no container name, a rule that matches one theme, and a color inside it.

```scss
@container style(--ig-theme: fluent) {
    .box-type {
        display: none;
        border-color: var(--ig-gray-400);
    }
}
```

Right: from `combo-validation.component.scss`.

```scss
:host {
    display: flex;
    container-name: sample;
}

/* the box type looks like the border type outside the Material theme, so the other themes show
   the border type alone, without the type labels */
@container sample not style(--ig-theme: material) {
    .states {
        grid-template-columns: repeat(3, minmax(0, 17.4375rem));
    }

    .type-label,
    .box-type {
        display: none;
    }
}
```

### 5. A state the component does not have may take a palette color

When a component has no built-in state that the sample shows, the sample may color that state from
the theme palette, for example `var(--ig-success-500)`. An example is the success or warn state,
which the Web Components input components do not have. The rule is the same in every theme and on
all four platforms.

Wrong: a fixed color, or a different color per theme.

```scss
.status--success {
    color: #2e7d32;
}

@container style(--ig-theme: bootstrap) {
    .status--success {
        color: var(--ig-success-700);
    }
}
```

Right: one palette color, in every theme.

```scss
.status--success {
    color: var(--ig-success-500);
}
```

### 6. A sample does not import or force a theme

A sample does not import or force a theme, because the docs picker sets it. The four platforms stay
in step through `--ig-size`, not through a theme.

Wrong: a theme compiled into the sample's stylesheet.

```scss
@use "igniteui-angular/theming" as *;

:host {
    @include theme($palette: $palette, $schema: $light-indigo-schema);
}
```

Right: the size set through `--ig-size`, and the theme left to the picker.

```scss
:host {
    /* styles.scss asks the page for the large size; the combos keep their own
       default medium size here. */
    --ig-size: var(--ig-size-medium);
}
```

## Platform: Angular

Style igx components through their CSS variables. Look a variable up with
`get_component_design_tokens` rather than guessing it, and set only the layout ones, such as sizes,
spacing and radius.

Wrong: overriding the component's internal class from outside.

```scss
::ng-deep .igx-button--fab {
    border-radius: 50%;
}
```

Right: the component's own CSS variable, from `checkbox-overview.component.scss`.

```scss
.add-item {
    --ig-size: var(--ig-size-large);
    --ig-fab-button-border-radius: 50%;
}
```

`src/index.html` puts the `ig-typography` class on `<body>`, so the typography classes of rule 2
work anywhere in a sample without another wrapper.

## Theming MCP server

Use the Ignite UI theming MCP server from the `igniteui-theming` package. It serves Angular, Web
Components, React and Blazor. The repo configures it for VS Code in `.vscode/mcp.json` and for
Claude Code in `.mcp.json`, both starting it with `npx -y igniteui-theming igniteui-theming-mcp`.
If its tools are not available, ask the user to enable the server and reload the editor.

- Call `detect_platform` once first. It reads `package.json` and returns `angular`.
- Look up the CSS variables of a component with `get_component_design_tokens` instead of guessing
  their names.
- Look up a palette color with `get_color`, for example `{ color: "success", variant: "500" }`,
  instead of writing its name by hand.
- Follow the color guidance the server serves. Read these resources with `read_resource`:
  `theming://guidance/colors/rules`, `theming://guidance/colors/usage`,
  `theming://guidance/colors/states` and `theming://guidance/colors/themes`.

Do not use the theme generation tools, such as `create_theme`, `create_palette` or
`create_component_theme`, for a sample. A sample does not carry a theme of its own (rule 6).

## Review checklist

Compare the sample under every theme before you finish, and when you review a sample's CSS.

1. Start the app with `npm start` and open the sample by its route, for example
   `http://localhost:4200/lists/combo-validation`.
2. Make the frame the size of the docs sample: about 810px wide. Use the browser's device toolbar
   in responsive mode, or a narrower window.
3. Switch the theme from the browser console the way the docs picker does:

   ```js
   window.postMessage({ type: 'igd-sample-theme', theme: 'fluent', mode: 'dark' }, '*');
   ```

   `theme` is `material`, `fluent`, `bootstrap` or `indigo`, and `mode` is `light` or `dark`.
4. Go through all eight combinations:

   | Theme | Light | Dark |
   | --- | --- | --- |
   | Material | [ ] | [ ] |
   | Fluent | [ ] | [ ] |
   | Bootstrap | [ ] | [ ] |
   | Indigo | [ ] | [ ] |

5. In each one, check that:
   - all text is readable, and no element keeps a light-theme color in dark or the other way
     round;
   - nothing is clipped or overflows the 810px frame;
   - a theme rule, if any, changes layout only and uses `@container sample` (rule 4).
6. Search the stylesheet for `color`, `background`, `border` and `@container`, and check each hit
   against rules 1 to 5.

## Related skills

- [`igniteui-angular-theming`](../igniteui-angular-theming/SKILL.md): building application themes,
  palettes and component themes, and the theming MCP server setup.
- [`igniteui-angular-components`](../igniteui-angular-components/SKILL.md): the components
  themselves.

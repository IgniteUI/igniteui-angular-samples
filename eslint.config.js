// @ts-check
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

// Rules carried over from the original .eslintrc.json
const sharedTsRules = {
  // angular-eslint rules not in the original config
  "@angular-eslint/prefer-on-push-component-change-detection": "off",
  "@angular-eslint/prefer-inject": "off",
  "@angular-eslint/prefer-standalone": "off",
  // explicit typescript-eslint rules from .eslintrc.json
  "@typescript-eslint/array-type": ["error", { default: "array" }],
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": "off",
  "@typescript-eslint/dot-notation": "off",
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/prefer-for-of": "off",
  // explicit eslint core rules from .eslintrc.json
  "arrow-parens": ["off", "always"],
  "comma-dangle": "error",
  "no-underscore-dangle": "off",
  "id-blacklist": "error",
  "no-bitwise": "off",
  "no-duplicate-case": "error",
  "no-duplicate-imports": "error",
  "no-extra-bind": "error",
  "no-fallthrough": "off",
  "no-new-func": "error",
  "no-redeclare": "error",
  "no-return-await": "error",
  "no-sequences": "error",
  "no-sparse-arrays": "error",
  "no-template-curly-in-string": "error",
  "prefer-object-spread": "off",
  "space-in-parens": ["error", "never"],
};

const subProjectRules = {
  "@angular-eslint/component-selector": [
    "error",
    { type: "element", prefix: "app", style: "kebab-case" },
  ],
  "@angular-eslint/directive-selector": [
    "error",
    { type: "attribute", prefix: "app", style: "camelCase" },
  ],
};

module.exports = tseslint.config(
  // ── main app (src/) ──
  {
    files: ["src/**/*.ts"],
    extends: [
      tseslint.configs.base,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
    rules: { ...sharedTsRules },
  },
  {
    files: ["src/**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  },

  // ── app-lob ──
  {
    files: ["projects/app-lob/**/*.ts"],
    extends: [
      tseslint.configs.base,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        project: [
          "projects/app-lob/tsconfig.app.json",
          "projects/app-lob/tsconfig.spec.json",
        ],
      },
    },
    rules: { ...sharedTsRules, ...subProjectRules },
  },
  {
    files: ["projects/app-lob/**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  },

  // ── app-crm ──
  {
    files: ["projects/app-crm/**/*.ts"],
    extends: [
      tseslint.configs.base,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        project: [
          "projects/app-crm/tsconfig.app.json",
          "projects/app-crm/tsconfig.spec.json",
        ],
      },
    },
    rules: { ...sharedTsRules, ...subProjectRules },
  },
  {
    files: ["projects/app-crm/**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  }
);

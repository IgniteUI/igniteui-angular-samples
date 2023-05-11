/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called 'evergreen' browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
* BROWSER POLYFILLS
*/

//import 'core-js/es7/object';

//import 'core-js/es7/array'; // for Array.includes()  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following for the Reflect API. */
//import 'core-js/es6/reflect';

/* Evergreen browsers require these. */
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
//import 'core-js/es7/reflect';  // Run `npm install --save web-animations-js`.

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'hammerjs/hammer';
import 'zone.js';  // Included with Angular CLI.

/***************************************************************************************************
 * @angular/animations polyfill
 */
// if (!Element.prototype.matches) {
//     Element.prototype.matches = (Element.prototype as any).msMatchesSelector;
// }

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
// import 'intl/locale-data/jsonp/de';
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';

/**
 * - 타입스크립트에만 있는 문법으로(`export =`), CommonJS 문법을 사용하기 위해 존재한다.
 * - JQuery는 CommonJS 지원. (참조. node_modules/jquery/dist/jquery.js)
 * ```
 * // node_modules/@types/jquery/index.d.ts
 * export = jQuery;
 * ```
 *
 * - 타입스크립트에서 require로 import 할 수 없으므로, import 사용 (ECMAScript 모듈 방식)
 * - tscomfig.json 에서 옵션을 true 로 했기 때문에 가능
 * ```
 * "esModuleInterop": true
 * ```
 */
import $ from 'jquery';

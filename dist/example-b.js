"use strict";var axengine=(()=>{const e=function(){if("undefined"!=typeof window&&window.require)try{var e=window.require("electron");if(e&&"remote"in e)return e.remote.require}catch(e){}return require}(),r=e("fs"),t=e("path");for(var a="undefined"!=typeof __dirname?__dirname:"./";;){var n=t.join(a,"axengine.js");try{return e(n)}catch(e){if(r.existsSync(n))throw e}n=t.normalize(t.join(a,".."));if(a==n)throw new Error("Failed to load AxEngine!");a=n}})();Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStaticArray=exports.setStaticArray=void 0;class ArrayManager{}function setStaticArray(r){return axengine.__axe_get(0,c=>eval(c),this,arguments)}function getStaticArray(){return axengine.__axe_get(1,c=>eval(c),this,arguments)}ArrayManager.singletonArray=[],exports.setStaticArray=setStaticArray,exports.getStaticArray=getStaticArray;
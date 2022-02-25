/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Heroes.ts":
/*!***********************!*\
  !*** ./src/Heroes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heroes": () => (/* binding */ Heroes)
/* harmony export */ });
class Heroes {
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heroes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heroes */ "./src/Heroes.ts");
//pour l'installation -> npm i typescript webpack webpack-cli ts-loader
//npx webpack --watch

const heroes = new _Heroes__WEBPACK_IMPORTED_MODULE_0__.Heroes();
/*###########################################################
#                                                           #
#--------------------Les décorteurs         ----------------#
#                                                           #
#############################################################*/
/*
Pour commencer il faudra ajouter le drapeau de configuration
        "experimentalDecorators": true
dans le fichier de configuration de ts

les décorateurs vous nous permettrent de rajouter des métadonnée avec un comportement spécifique

pour permettre de les comprendre, ajoutons directement un décorateur, créons un cas concrèt dans le web,
nous allons créer nos propre tag html, comme dans beaucoup de framework front
*/
/*
function CustomElement(name : string)
{
    return function(constructor : typeof HTMLElement){
        customElements.define(name, constructor)
    }
}

@CustomElement("demo-test")
class Demo extends HTMLElement{
    connectedCallback () {
        this.innerHTML = "Bonjour à tous"
    }
}
*/
/* explication
on étant une class de html element pour pouvoir use inner text
on a décorer la class d'une méthode decorateur,
cette méthode prendra un paramètre de type string, name -> demo-test


la methode dois avoir un return, un return de fonction,
cette méthode en elle meme devra recevoir le type direct
de ce htmlelement, on aura plus qu'a dedans define, le nouveau
tag html.

connectedCallback est appeler directement quand le custom element
est appeler pour la première fois.
*/
/*
On peux égalament, par exemple, créer un décorateur de propriété
qui ferais de la validation


*/
/*
function Constraint({min, max} : {min : number, max : number})
{
    //si on veux rester générique
    
    return function(target : Users, key : keyof Users){

    }

    return function (target : Users, key : 'age'){

    }
    //ici c'est totalement utilisable uniquement sur une prop de age

    //ou alors avec des générique total
    return function<T>(target : T, key : keyof T)
    {
        let val = target[key] as any

        const getter = () => {
            return val
        }

        const setter = (v : unknown) => {

            console.log(v)
            if(typeof v === 'number' &&
                v > min && v < max)
            {
                val = v
                return
            }

            throw new Error(`on attend un nombre entre ${min} et ${max}`)
        }

        Object.defineProperty(target, key, {
            set : setter,
            get : getter
        })
    }
}

class Users{

    @Constraint({min : 0, max: 100})
    age : number
}

const u = new Users()
u.age = 50
*/
//un dernier exemple bien utile est le fait de pouvoir sceller un class,
/*
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}*/ 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDs7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ2tDO0FBQ2xDLG1CQUFtQiwyQ0FBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVSxHQUFHLDJCQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxLQUFLLEtBQUssSUFBSTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRod2VicGFjay8uL3NyYy9IZXJvZXMudHMiLCJ3ZWJwYWNrOi8vd2l0aHdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2l0aHdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dpdGh3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2l0aHdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aXRod2VicGFjay8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhlcm9lcyB7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL3BvdXIgbCdpbnN0YWxsYXRpb24gLT4gbnBtIGkgdHlwZXNjcmlwdCB3ZWJwYWNrIHdlYnBhY2stY2xpIHRzLWxvYWRlclxyXG4vL25weCB3ZWJwYWNrIC0td2F0Y2hcclxuaW1wb3J0IHsgSGVyb2VzIH0gZnJvbSAnLi9IZXJvZXMnO1xyXG5jb25zdCBoZXJvZXMgPSBuZXcgSGVyb2VzKCk7XHJcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xyXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS1MZXMgZMOpY29ydGV1cnMgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tI1xyXG4jICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjXHJcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xyXG4vKlxyXG5Qb3VyIGNvbW1lbmNlciBpbCBmYXVkcmEgYWpvdXRlciBsZSBkcmFwZWF1IGRlIGNvbmZpZ3VyYXRpb25cclxuICAgICAgICBcImV4cGVyaW1lbnRhbERlY29yYXRvcnNcIjogdHJ1ZVxyXG5kYW5zIGxlIGZpY2hpZXIgZGUgY29uZmlndXJhdGlvbiBkZSB0c1xyXG5cclxubGVzIGTDqWNvcmF0ZXVycyB2b3VzIG5vdXMgcGVybWV0dHJlbnQgZGUgcmFqb3V0ZXIgZGVzIG3DqXRhZG9ubsOpZSBhdmVjIHVuIGNvbXBvcnRlbWVudCBzcMOpY2lmaXF1ZVxyXG5cclxucG91ciBwZXJtZXR0cmUgZGUgbGVzIGNvbXByZW5kcmUsIGFqb3V0b25zIGRpcmVjdGVtZW50IHVuIGTDqWNvcmF0ZXVyLCBjcsOpb25zIHVuIGNhcyBjb25jcsOodCBkYW5zIGxlIHdlYixcclxubm91cyBhbGxvbnMgY3LDqWVyIG5vcyBwcm9wcmUgdGFnIGh0bWwsIGNvbW1lIGRhbnMgYmVhdWNvdXAgZGUgZnJhbWV3b3JrIGZyb250XHJcbiovXHJcbi8qXHJcbmZ1bmN0aW9uIEN1c3RvbUVsZW1lbnQobmFtZSA6IHN0cmluZylcclxue1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnN0cnVjdG9yIDogdHlwZW9mIEhUTUxFbGVtZW50KXtcclxuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgY29uc3RydWN0b3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbkBDdXN0b21FbGVtZW50KFwiZGVtby10ZXN0XCIpXHJcbmNsYXNzIERlbW8gZXh0ZW5kcyBIVE1MRWxlbWVudHtcclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiQm9uam91ciDDoCB0b3VzXCJcclxuICAgIH1cclxufVxyXG4qL1xyXG4vKiBleHBsaWNhdGlvblxyXG5vbiDDqXRhbnQgdW5lIGNsYXNzIGRlIGh0bWwgZWxlbWVudCBwb3VyIHBvdXZvaXIgdXNlIGlubmVyIHRleHRcclxub24gYSBkw6ljb3JlciBsYSBjbGFzcyBkJ3VuZSBtw6l0aG9kZSBkZWNvcmF0ZXVyLFxyXG5jZXR0ZSBtw6l0aG9kZSBwcmVuZHJhIHVuIHBhcmFtw6h0cmUgZGUgdHlwZSBzdHJpbmcsIG5hbWUgLT4gZGVtby10ZXN0XHJcblxyXG5cclxubGEgbWV0aG9kZSBkb2lzIGF2b2lyIHVuIHJldHVybiwgdW4gcmV0dXJuIGRlIGZvbmN0aW9uLFxyXG5jZXR0ZSBtw6l0aG9kZSBlbiBlbGxlIG1lbWUgZGV2cmEgcmVjZXZvaXIgbGUgdHlwZSBkaXJlY3RcclxuZGUgY2UgaHRtbGVsZW1lbnQsIG9uIGF1cmEgcGx1cyBxdSdhIGRlZGFucyBkZWZpbmUsIGxlIG5vdXZlYXVcclxudGFnIGh0bWwuXHJcblxyXG5jb25uZWN0ZWRDYWxsYmFjayBlc3QgYXBwZWxlciBkaXJlY3RlbWVudCBxdWFuZCBsZSBjdXN0b20gZWxlbWVudFxyXG5lc3QgYXBwZWxlciBwb3VyIGxhIHByZW1pw6hyZSBmb2lzLlxyXG4qL1xyXG4vKlxyXG5PbiBwZXV4IMOpZ2FsYW1lbnQsIHBhciBleGVtcGxlLCBjcsOpZXIgdW4gZMOpY29yYXRldXIgZGUgcHJvcHJpw6l0w6lcclxucXVpIGZlcmFpcyBkZSBsYSB2YWxpZGF0aW9uXHJcblxyXG5cclxuKi9cclxuLypcclxuZnVuY3Rpb24gQ29uc3RyYWludCh7bWluLCBtYXh9IDoge21pbiA6IG51bWJlciwgbWF4IDogbnVtYmVyfSlcclxue1xyXG4gICAgLy9zaSBvbiB2ZXV4IHJlc3RlciBnw6luw6lyaXF1ZVxyXG4gICAgXHJcbiAgICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0IDogVXNlcnMsIGtleSA6IGtleW9mIFVzZXJzKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQgOiBVc2Vycywga2V5IDogJ2FnZScpe1xyXG5cclxuICAgIH1cclxuICAgIC8vaWNpIGMnZXN0IHRvdGFsZW1lbnQgdXRpbGlzYWJsZSB1bmlxdWVtZW50IHN1ciB1bmUgcHJvcCBkZSBhZ2VcclxuXHJcbiAgICAvL291IGFsb3JzIGF2ZWMgZGVzIGfDqW7DqXJpcXVlIHRvdGFsXHJcbiAgICByZXR1cm4gZnVuY3Rpb248VD4odGFyZ2V0IDogVCwga2V5IDoga2V5b2YgVClcclxuICAgIHtcclxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tleV0gYXMgYW55XHJcblxyXG4gICAgICAgIGNvbnN0IGdldHRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0dGVyID0gKHYgOiB1bmtub3duKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2KVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdiA9PT0gJ251bWJlcicgJiZcclxuICAgICAgICAgICAgICAgIHYgPiBtaW4gJiYgdiA8IG1heClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gdlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgb24gYXR0ZW5kIHVuIG5vbWJyZSBlbnRyZSAke21pbn0gZXQgJHttYXh9YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICBzZXQgOiBzZXR0ZXIsXHJcbiAgICAgICAgICAgIGdldCA6IGdldHRlclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFVzZXJze1xyXG5cclxuICAgIEBDb25zdHJhaW50KHttaW4gOiAwLCBtYXg6IDEwMH0pXHJcbiAgICBhZ2UgOiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgdSA9IG5ldyBVc2VycygpXHJcbnUuYWdlID0gNTBcclxuKi9cclxuLy91biBkZXJuaWVyIGV4ZW1wbGUgYmllbiB1dGlsZSBlc3QgbGUgZmFpdCBkZSBwb3V2b2lyIHNjZWxsZXIgdW4gY2xhc3MsXHJcbi8qXHJcbmZ1bmN0aW9uIHNlYWxlZChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pIHtcclxuICAgIE9iamVjdC5zZWFsKGNvbnN0cnVjdG9yKTtcclxuICAgIE9iamVjdC5zZWFsKGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XHJcbiAgfVxyXG5cclxuQHNlYWxlZFxyXG5jbGFzcyBCdWdSZXBvcnQge1xyXG4gIHR5cGUgPSBcInJlcG9ydFwiO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiBcclxuICBjb25zdHJ1Y3Rvcih0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0O1xyXG4gIH1cclxufSovIFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
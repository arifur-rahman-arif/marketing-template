/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-possible-prototype.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-possible-prototype.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isPossiblePrototype = __webpack_require__(/*! ../internals/is-possible-prototype */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-possible-prototype.js");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/add-to-unscopables.js ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-create.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js").f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-instance.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-instance.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-prototype-of.js");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-includes.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-iteration.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-iteration.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-method-is-strict.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-method-is-strict.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-slice.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-slice.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-sort.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-sort.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-slice.js");

var floor = Math.floor;

var sort = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor(length / 2);
    var left = sort(arraySlice(array, 0, middle), comparefn);
    var right = sort(arraySlice(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

module.exports = sort;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-species-constructor.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-species-constructor.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-species-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-species-create.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/collection-weak.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/collection-weak.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-ins.js");
var getWeakData = (__webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-metadata.js").getWeakData);
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterate.js");
var ArrayIterationModule = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-iteration.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: null
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          if (data) return data[state.id];
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/collection.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/collection.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-forced.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/copy-constructor-properties.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/correct-prototype-getter.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-iter-result-object.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-iter-result-object.js ***!
  \*******************************************************************************************************/
/***/ ((module) => {


// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-non-enumerable-property.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property-descriptor.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property-descriptor.js ***!
  \********************************************************************************************************/
/***/ ((module) => {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in-accessor.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in-accessor.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/make-built-in.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-ins.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-ins.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-global-property.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-global-property.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/delete-property-or-throw.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/delete-property-or-throw.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/document-create-element.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/document-create-element.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/dom-iterables.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/dom-iterables.js ***!
  \*******************************************************************************************/
/***/ ((module) => {


// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/dom-token-list-prototype.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/enum-bug-keys.js ***!
  \*******************************************************************************************/
/***/ ((module) => {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-ff-version.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-ff-version.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-user-agent.js");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-is-ie-or-edge.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-is-ie-or-edge.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var UA = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-user-agent.js");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-user-agent.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-user-agent.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-v8-version.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-v8-version.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-user-agent.js");

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-webkit-version.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-webkit-version.js ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-user-agent.js");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js ***!
  \***********************************************************************************/
/***/ ((module) => {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/freezing.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/freezing.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-context.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-context.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-native.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-native.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-name.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-name.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this-accessor.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this-clause.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-built-in.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-built-in.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-direct.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-direct.js ***!
  \*************************************************************************************************/
/***/ ((module) => {


// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-method.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-method.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-method.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-method.js");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-method.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-method.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/hidden-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/hidden-keys.js ***!
  \*****************************************************************************************/
/***/ ((module) => {


module.exports = {};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/html.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ie8-dom-define.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/indexed-object.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/indexed-object.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inherit-if-required.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inherit-if-required.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inspect-source.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inspect-source.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-metadata.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-metadata.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names-external.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-extensible.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/freezing.js");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-state.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-state.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/weak-map-basic-detection.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array-iterator-method.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js ***!
  \*****************************************************************************************/
/***/ ((module) => {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-constructor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-constructor.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-forced.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-forced.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js ***!
  \**************************************************************************************************/
/***/ ((module) => {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-possible-prototype.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-possible-prototype.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js ***!
  \*************************************************************************************/
/***/ ((module) => {


module.exports = false;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-symbol.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-symbol.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterate.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterate.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-close.js");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-close.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-close.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-create-constructor.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-create-constructor.js ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-define.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-define.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-create-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators-core.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators-core.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js ***!
  \***************************************************************************************/
/***/ ((module) => {


module.exports = {};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/length-of-array-like.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/length-of-array-like.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/make-built-in.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/make-built-in.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/math-trunc.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/math-trunc.js ***!
  \****************************************************************************************/
/***/ ((module) => {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/number-parse-float.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/number-parse-float.js ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/whitespaces.js");

var charAt = uncurryThis(''.charAt);
var $parseFloat = globalThis.parseFloat;
var Symbol = globalThis.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-create.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-properties.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-properties.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names.js").f);
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-slice.js");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-prototype-of.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-extensible.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-extensible.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-buffer-non-extensible.js");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-prototype-of.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-prototype-of.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys-internal.js ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-set-prototype-of.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this-accessor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/require-object-coercible.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ordinary-to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/own-keys.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/own-keys.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/require-object-coercible.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/require-object-coercible.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/set-to-string-tag.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-key.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-store.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-store.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.41.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-store.js");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/string-trim.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/string-trim.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/symbol-constructor-detection.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-absolute-index.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-integer-or-infinity.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var trunc = __webpack_require__(/*! ../internals/math-trunc */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-length.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-object.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-primitive.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-property-key.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-property-key.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string-tag-support.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string-tag-support.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/try-to-string.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/try-to-string.js ***!
  \*******************************************************************************************/
/***/ ((module) => {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/uid.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/use-symbol-as-uid.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/weak-map-basic-detection.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/whitespaces.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/whitespaces.js ***!
  \*****************************************************************************************/
/***/ ((module) => {


// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.array.iterator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.array.iterator.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-state.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js").f);
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-iter-result-object.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.array.sort.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.array.sort.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/length-of-array-like.js");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/delete-property-or-throw.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-sort.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-method-is-strict.js");
var FF = __webpack_require__(/*! ../internals/environment-ff-version */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-ff-version.js");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/environment-is-ie-or-edge */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-is-ie-or-edge.js");
var V8 = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-v8-version.js");
var WEBKIT = __webpack_require__(/*! ../internals/environment-webkit-version */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-webkit-version.js");

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.constructor.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.constructor.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in-accessor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");
var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js");

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.for-each.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.for-each.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-direct.js");

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    anObject(this);
    aCallable(fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.parse-float.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.parse-float.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat !== $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.weak-map.constructor.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.weak-map.constructor.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/freezing.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-ins.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-metadata.js");
var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/collection.js");
var collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/collection-weak.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js");
var enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-state.js").enforce);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/weak-map-basic-detection.js");

var $Object = Object;
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = $Object.isExtensible;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = $Object.isFrozen;
// eslint-disable-next-line es/no-object-issealed -- safe
var isSealed = $Object.isSealed;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = $Object.freeze;
// eslint-disable-next-line es/no-object-seal -- safe
var seal = $Object.seal;

var IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis(WeakMapPrototype.set);

// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
var hasMSEdgeFreezingBug = function () {
  return FREEZING && fails(function () {
    var frozenArray = freeze([]);
    nativeSet(new $WeakMap(), frozenArray, 1);
    return !isFrozen(frozenArray);
  });
};

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP) if (IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
// Chakra Edge frozen keys fix
} else if (hasMSEdgeFreezingBug()) {
  defineBuiltIns(WeakMapPrototype, {
    set: function set(key, value) {
      var arrayIntegrityLevel;
      if (isArray(key)) {
        if (isFrozen(key)) arrayIntegrityLevel = freeze;
        else if (isSealed(key)) arrayIntegrityLevel = seal;
      }
      nativeSet(this, key, value);
      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
      return this;
    }
  });
}


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.weak-map.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.weak-map.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(/*! ../modules/es.weak-map.constructor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.weak-map.constructor.js");


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/esnext.iterator.constructor.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/esnext.iterator.constructor.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../modules/es.iterator.constructor */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.constructor.js");


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/esnext.iterator.for-each.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/esnext.iterator.for-each.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../modules/es.iterator.for-each */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.for-each.js");


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/dom-token-list-prototype.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-non-enumerable-property.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/set-to-string-tag.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.5.3_typescript@5.8.2_webpack@5.98.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.86.0_webpack@5.98.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/style.css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.5.3_typescript@5.8.2_webpack@5.98.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.86.0_webpack@5.98.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/style.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.range-slider {
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  display: block;
  position: relative;
  width: 100%;
  height: 8px;
  background: #ddd;
  border-radius: 4px;
}

.range-slider[data-vertical] {
  height: 100%;
  width: 8px;
}

.range-slider[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.range-slider .range-slider__thumb {
  position: absolute;
  z-index: 3;
  top: 50%;
  width: 24px;
  height: 24px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #2196f3;
}

.range-slider .range-slider__thumb:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 6px rgba(33, 150, 243, 0.5);
}

.range-slider[data-vertical] .range-slider__thumb {
  left: 50%;
}

.range-slider .range-slider__thumb[data-disabled] {
  z-index: 2;
}

.range-slider .range-slider__range {
  position: absolute;
  z-index: 1;
  transform: translate(0, -50%);
  top: 50%;
  width: 100%;
  height: 100%;
  background: #51adf6;
}

.range-slider[data-vertical] .range-slider__range {
  left: 50%;
  transform: translate(-50%, 0);
}

.range-slider input[type=range] {
  -webkit-appearance: none;
  pointer-events: none;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  background-color: transparent;
}

.range-slider input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

.range-slider input[type=range]::-moz-range-thumb {
  width: 0;
  height: 0;
  border: 0;
}

.range-slider input[type=range]:focus {
  outline: 0;
}`, "",{"version":3,"sources":["webpack://./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,wCAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AACA;EACE,YAAA;EACA,UAAA;AAEF;;AAAA;EACE,YAAA;EACA,mBAAA;AAGF;;AADA;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,kBAAA;EACA,mBAAA;AAIF;;AAFA;EACE,UAAA;EACA,6CAAA;AAKF;;AAHA;EACE,SAAA;AAMF;;AAJA;EACE,UAAA;AAOF;;AALA;EACE,kBAAA;EACA,UAAA;EACA,6BAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;AAQF;;AANA;EACE,SAAA;EACA,6BAAA;AASF;;AAPA;EACE,wBAAA;EACA,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,6BAAA;AAUF;;AARA;EACE,wBAAA;EACA,gBAAA;AAWF;;AATA;EACE,QAAA;EACA,SAAA;EACA,SAAA;AAYF;;AAVA;EACE,UAAA;AAaF","sourcesContent":[".range-slider {\r\n  touch-action: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  cursor: pointer;\r\n  display: block;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 8px;\r\n  background: #ddd;\r\n  border-radius: 4px;\r\n}\r\n.range-slider[data-vertical] {\r\n  height: 100%;\r\n  width: 8px;\r\n}\r\n.range-slider[data-disabled] {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n.range-slider .range-slider__thumb {\r\n  position: absolute;\r\n  z-index: 3;\r\n  top: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 50%;\r\n  background: #2196f3;\r\n}\r\n.range-slider .range-slider__thumb:focus-visible {\r\n  outline: 0;\r\n  box-shadow: 0 0 0 6px rgba(33, 150, 243, 0.5);\r\n}\r\n.range-slider[data-vertical] .range-slider__thumb {\r\n  left: 50%;\r\n}\r\n.range-slider .range-slider__thumb[data-disabled] {\r\n  z-index: 2;\r\n}\r\n.range-slider .range-slider__range {\r\n  position: absolute;\r\n  z-index: 1;\r\n  transform: translate(0, -50%);\r\n  top: 50%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #51adf6;\r\n}\r\n.range-slider[data-vertical] .range-slider__range {\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n}\r\n.range-slider input[type=\"range\"] {\r\n  -webkit-appearance: none;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n  width: 0;\r\n  height: 0;\r\n  background-color: transparent;\r\n}\r\n.range-slider input[type=\"range\"]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n}\r\n.range-slider input[type=\"range\"]::-moz-range-thumb {\r\n  width: 0;\r\n  height: 0;\r\n  border: 0;\r\n}\r\n.range-slider input[type=\"range\"]:focus {\r\n  outline: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.5.3_typescript@5.8.2_webpack@5.98.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.86.0_webpack@5.98.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Filter/Input.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.5.3_typescript@5.8.2_webpack@5.98.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.86.0_webpack@5.98.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Filter/Input.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.qDSfvKR5wnuJYEPBKZLG .range-slider {
  height: 0.75rem;
  border-radius: var(--Border-Radius-border-radius-large);
  background: #facab0;
}
.qDSfvKR5wnuJYEPBKZLG .range-slider__range {
  background: var(--P-100);
}
.qDSfvKR5wnuJYEPBKZLG .range-slider__thumb {
  background: var(--P-100);
  width: 1.8rem;
  height: 1.8rem;
}
.qDSfvKR5wnuJYEPBKZLG .range-slider__thumb::before {
  content: "";
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: var(--White);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}`, "",{"version":3,"sources":["webpack://./src/components/Filter/Input.module.scss"],"names":[],"mappings":"AAEQ;EACI,eAAA;EACA,uDAAA;EACA,mBAAA;AADZ;AAIY;EACI,wBAAA;AAFhB;AAKY;EACI,wBAAA;EACA,aAAA;EACA,cAAA;AAHhB;AAKgB;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,8BAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AAHpB","sourcesContent":[".styles {\n    :global {\n        .range-slider {\n            height: 0.75rem;\n            border-radius: var(--Border-Radius-border-radius-large);\n            background: #facab0;\n            // opacity: 0.5;\n\n            &__range {\n                background: var(--P-100);\n            }\n\n            &__thumb {\n                background: var(--P-100);\n                width: 1.8rem;\n                height: 1.8rem;\n\n                &::before {\n                    content: '';\n                    position: absolute;\n                    width: 1.3rem;\n                    height: 1.3rem;\n                    border-radius: 50%;\n                    background-color: var(--White);\n                    left: 50%;\n                    top: 50%;\n                    transform: translate(-50%, -50%);\n                }\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"styles": `qDSfvKR5wnuJYEPBKZLG`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dequal: () => (/* binding */ dequal)
/* harmony export */ });
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/.pnpm/proxy-compare@3.0.1/node_modules/proxy-compare/dist/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/proxy-compare@3.0.1/node_modules/proxy-compare/dist/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   affectedToPathList: () => (/* binding */ affectedToPathList),
/* harmony export */   createProxy: () => (/* binding */ createProxy),
/* harmony export */   getUntracked: () => (/* binding */ getUntracked),
/* harmony export */   isChanged: () => (/* binding */ isChanged),
/* harmony export */   markToTrack: () => (/* binding */ markToTrack),
/* harmony export */   replaceNewProxy: () => (/* binding */ replaceNewProxy),
/* harmony export */   trackMemo: () => (/* binding */ trackMemo)
/* harmony export */ });
/* eslint @typescript-eslint/no-explicit-any: off */
// symbols
const TRACK_MEMO_SYMBOL = Symbol();
const GET_ORIGINAL_SYMBOL = Symbol();
// properties
const AFFECTED_PROPERTY = 'a';
const IS_TARGET_COPIED_PROPERTY = 'f';
const PROXY_PROPERTY = 'p';
const PROXY_CACHE_PROPERTY = 'c';
const TARGET_CACHE_PROPERTY = 't';
const HAS_KEY_PROPERTY = 'h';
const ALL_OWN_KEYS_PROPERTY = 'w';
const HAS_OWN_KEY_PROPERTY = 'o';
const KEYS_PROPERTY = 'k';
// function to create a new bare proxy
let newProxy = (target, handler) => new Proxy(target, handler);
// get object prototype
const getProto = Object.getPrototypeOf;
const objectsToTrack = new WeakMap();
// check if obj is a plain object or an array
const isObjectToTrack = (obj) => obj &&
    (objectsToTrack.has(obj)
        ? objectsToTrack.get(obj)
        : getProto(obj) === Object.prototype || getProto(obj) === Array.prototype);
// check if it is object
const isObject = (x) => typeof x === 'object' && x !== null;
// Properties that are both non-configurable and non-writable will break
// the proxy get trap when we try to return a recursive/child compare proxy
// from them. We can avoid this by making a copy of the target object with
// all descriptors marked as configurable, see `copyTargetObject`.
// See: https://github.com/dai-shi/proxy-compare/pull/8
const needsToCopyTargetObject = (obj) => Object.values(Object.getOwnPropertyDescriptors(obj)).some((descriptor) => !descriptor.configurable && !descriptor.writable);
// Make a copy with all descriptors marked as configurable.
const copyTargetObject = (obj) => {
    if (Array.isArray(obj)) {
        // Arrays need a special way to copy
        return Array.from(obj);
    }
    // For non-array objects, we create a new object keeping the prototype
    // with changing all configurable options (otherwise, proxies will complain)
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    Object.values(descriptors).forEach((desc) => {
        desc.configurable = true;
    });
    return Object.create(getProto(obj), descriptors);
};
const createProxyHandler = (origObj, isTargetCopied) => {
    const state = {
        [IS_TARGET_COPIED_PROPERTY]: isTargetCopied,
    };
    let trackObject = false; // for trackMemo
    const recordUsage = (type, key) => {
        if (!trackObject) {
            let used = state[AFFECTED_PROPERTY].get(origObj);
            if (!used) {
                used = {};
                state[AFFECTED_PROPERTY].set(origObj, used);
            }
            if (type === ALL_OWN_KEYS_PROPERTY) {
                used[ALL_OWN_KEYS_PROPERTY] = true;
            }
            else {
                let set = used[type];
                if (!set) {
                    set = new Set();
                    used[type] = set;
                }
                set.add(key);
            }
        }
    };
    const recordObjectAsUsed = () => {
        trackObject = true;
        state[AFFECTED_PROPERTY].delete(origObj);
    };
    const handler = {
        get(target, key) {
            if (key === GET_ORIGINAL_SYMBOL) {
                return origObj;
            }
            recordUsage(KEYS_PROPERTY, key);
            return createProxy(Reflect.get(target, key), state[AFFECTED_PROPERTY], state[PROXY_CACHE_PROPERTY], state[TARGET_CACHE_PROPERTY]);
        },
        has(target, key) {
            if (key === TRACK_MEMO_SYMBOL) {
                recordObjectAsUsed();
                return true;
            }
            recordUsage(HAS_KEY_PROPERTY, key);
            return Reflect.has(target, key);
        },
        getOwnPropertyDescriptor(target, key) {
            recordUsage(HAS_OWN_KEY_PROPERTY, key);
            return Reflect.getOwnPropertyDescriptor(target, key);
        },
        ownKeys(target) {
            recordUsage(ALL_OWN_KEYS_PROPERTY);
            return Reflect.ownKeys(target);
        },
    };
    if (isTargetCopied) {
        handler.set = handler.deleteProperty = () => false;
    }
    return [handler, state];
};
const getOriginalObject = (obj) => 
// unwrap proxy
obj[GET_ORIGINAL_SYMBOL] ||
    // otherwise
    obj;
/**
 * Create a proxy.
 *
 * This function will create a proxy at top level and proxy nested objects as you access them,
 * in order to keep track of which properties were accessed via get/has proxy handlers:
 *
 * NOTE: Printing of WeakMap is hard to inspect and not very readable
 * for this purpose you can use the `affectedToPathList` helper.
 *
 * @param {object} obj - Object that will be wrapped on the proxy.
 * @param {WeakMap<object, unknown>} affected -
 * WeakMap that will hold the tracking of which properties in the proxied object were accessed.
 * @param {WeakMap<object, unknown>} [proxyCache] -
 * WeakMap that will help keep referential identity for proxies.
 * @returns {Proxy<object>} - Object wrapped in a proxy.
 *
 * @example
 * import { createProxy } from 'proxy-compare';
 *
 * const original = { a: "1", c: "2", d: { e: "3" } };
 * const affected = new WeakMap();
 * const proxy = createProxy(original, affected);
 *
 * proxy.a // Will mark as used and track its value.
 * // This will update the affected WeakMap with original as key
 * // and a Set with "a"
 *
 * proxy.d // Will mark "d" as accessed to track and proxy itself ({ e: "3" }).
 * // This will update the affected WeakMap with original as key
 * // and a Set with "d"
 */
const createProxy = (obj, affected, proxyCache, targetCache) => {
    if (!isObjectToTrack(obj))
        return obj;
    let targetAndCopied = targetCache && targetCache.get(obj);
    if (!targetAndCopied) {
        const target = getOriginalObject(obj);
        if (needsToCopyTargetObject(target)) {
            targetAndCopied = [target, copyTargetObject(target)];
        }
        else {
            targetAndCopied = [target];
        }
        targetCache === null || targetCache === void 0 ? void 0 : targetCache.set(obj, targetAndCopied);
    }
    const [target, copiedTarget] = targetAndCopied;
    let handlerAndState = proxyCache && proxyCache.get(target);
    if (!handlerAndState ||
        handlerAndState[1][IS_TARGET_COPIED_PROPERTY] !== !!copiedTarget) {
        handlerAndState = createProxyHandler(target, !!copiedTarget);
        handlerAndState[1][PROXY_PROPERTY] = newProxy(copiedTarget || target, handlerAndState[0]);
        if (proxyCache) {
            proxyCache.set(target, handlerAndState);
        }
    }
    handlerAndState[1][AFFECTED_PROPERTY] = affected;
    handlerAndState[1][PROXY_CACHE_PROPERTY] = proxyCache;
    handlerAndState[1][TARGET_CACHE_PROPERTY] = targetCache;
    return handlerAndState[1][PROXY_PROPERTY];
};
const isAllOwnKeysChanged = (prevObj, nextObj) => {
    const prevKeys = Reflect.ownKeys(prevObj);
    const nextKeys = Reflect.ownKeys(nextObj);
    return (prevKeys.length !== nextKeys.length ||
        prevKeys.some((k, i) => k !== nextKeys[i]));
};
/**
 * Compare changes on objects.
 *
 * This will compare the affected properties on tracked objects inside the proxy
 * to check if there were any changes made to it,
 * by default if no property was accessed on the proxy it will attempt to do a
 * reference equality check for the objects provided (Object.is(a, b)). If you access a property
 * on the proxy, then isChanged will only compare the affected properties.
 *
 * @param {object} prevObj - The previous object to compare.
 * @param {object} nextObj - Object to compare with the previous one.
 * @param {WeakMap<object, unknown>} affected -
 * WeakMap that holds the tracking of which properties in the proxied object were accessed.
 * @param {WeakMap<object, unknown>} [cache] -
 * WeakMap that holds a cache of the comparisons for better performance with repetitive comparisons,
 * and to avoid infinite loop with circular structures.
 * @returns {boolean} - Boolean indicating if the affected property on the object has changed.
 *
 * @example
 * import { createProxy, isChanged } from 'proxy-compare';
 *
 * const obj = { a: "1", c: "2", d: { e: "3" } };
 * const affected = new WeakMap();
 *
 * const proxy = createProxy(obj, affected);
 *
 * proxy.a
 *
 * isChanged(obj, { a: "1" }, affected) // false
 *
 * proxy.a = "2"
 *
 * isChanged(obj, { a: "1" }, affected) // true
 */
const isChanged = (prevObj, nextObj, affected, cache, // for object with cycles
isEqual = Object.is) => {
    if (isEqual(prevObj, nextObj)) {
        return false;
    }
    if (!isObject(prevObj) || !isObject(nextObj))
        return true;
    const used = affected.get(getOriginalObject(prevObj));
    if (!used)
        return true;
    if (cache) {
        const hit = cache.get(prevObj);
        if (hit === nextObj) {
            return false;
        }
        // for object with cycles
        cache.set(prevObj, nextObj);
    }
    let changed = null;
    for (const key of used[HAS_KEY_PROPERTY] || []) {
        changed = Reflect.has(prevObj, key) !== Reflect.has(nextObj, key);
        if (changed)
            return changed;
    }
    if (used[ALL_OWN_KEYS_PROPERTY] === true) {
        changed = isAllOwnKeysChanged(prevObj, nextObj);
        if (changed)
            return changed;
    }
    else {
        for (const key of used[HAS_OWN_KEY_PROPERTY] || []) {
            const hasPrev = !!Reflect.getOwnPropertyDescriptor(prevObj, key);
            const hasNext = !!Reflect.getOwnPropertyDescriptor(nextObj, key);
            changed = hasPrev !== hasNext;
            if (changed)
                return changed;
        }
    }
    for (const key of used[KEYS_PROPERTY] || []) {
        changed = isChanged(prevObj[key], nextObj[key], affected, cache, isEqual);
        if (changed)
            return changed;
    }
    if (changed === null)
        throw new Error('invalid used');
    return changed;
};
// explicitly track object with memo
const trackMemo = (obj) => {
    if (isObjectToTrack(obj)) {
        return TRACK_MEMO_SYMBOL in obj;
    }
    return false;
};
/**
 * Unwrap proxy to get the original object.
 *
 * Used to retrieve the original object used to create the proxy instance with `createProxy`.
 *
 * @param {Proxy<object>} obj -  The proxy wrapper of the originial object.
 * @returns {object | null} - Return either the unwrapped object if exists.
 *
 * @example
 * import { createProxy, getUntracked } from 'proxy-compare';
 *
 * const original = { a: "1", c: "2", d: { e: "3" } };
 * const affected = new WeakMap();
 *
 * const proxy = createProxy(original, affected);
 * const originalFromProxy = getUntracked(proxy)
 *
 * Object.is(original, originalFromProxy) // true
 * isChanged(original, originalFromProxy, affected) // false
 */
const getUntracked = (obj) => {
    if (isObjectToTrack(obj)) {
        return obj[GET_ORIGINAL_SYMBOL] || null;
    }
    return null;
};
/**
 * Mark object to be tracked.
 *
 * This function marks an object that will be passed into `createProxy`
 * as marked to track or not. By default only Array and Object are marked to track,
 * so this is useful for example to mark a class instance to track or to mark a object
 * to be untracked when creating your proxy.
 *
 * @param obj - Object to mark as tracked or not.
 * @param mark - Boolean indicating whether you want to track this object or not.
 * @returns - No return.
 *
 * @example
 * import { createProxy, markToTrack, isChanged } from 'proxy-compare';
 *
 * const nested = { e: "3" }
 *
 * markToTrack(nested, false)
 *
 * const original = { a: "1", c: "2", d: nested };
 * const affected = new WeakMap();
 *
 * const proxy = createProxy(original, affected);
 *
 * proxy.d.e
 *
 * isChanged(original, { d: { e: "3" } }, affected) // true
 */
const markToTrack = (obj, mark = true) => {
    objectsToTrack.set(obj, mark);
};
/**
 * Convert `affected` to path list
 *
 * `affected` is a weak map which is not printable.
 * This function is can convert it to printable path list.
 * It's for debugging purpose.
 *
 * @param obj - An object that is used with `createProxy`.
 * @param affected - A weak map that is used with `createProxy`.
 * @param onlyWithValues - An optional boolean to exclude object getters.
 * @returns - An array of paths.
 */
const affectedToPathList = (obj, affected, onlyWithValues) => {
    const list = [];
    const seen = new WeakSet();
    const walk = (x, path) => {
        var _a, _b, _c;
        if (seen.has(x)) {
            // for object with cycles
            return;
        }
        if (isObject(x)) {
            seen.add(x);
        }
        const used = isObject(x) && affected.get(getOriginalObject(x));
        if (used) {
            (_a = used[HAS_KEY_PROPERTY]) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
                const segment = `:has(${String(key)})`;
                list.push(path ? [...path, segment] : [segment]);
            });
            if (used[ALL_OWN_KEYS_PROPERTY] === true) {
                const segment = ':ownKeys';
                list.push(path ? [...path, segment] : [segment]);
            }
            else {
                (_b = used[HAS_OWN_KEY_PROPERTY]) === null || _b === void 0 ? void 0 : _b.forEach((key) => {
                    const segment = `:hasOwn(${String(key)})`;
                    list.push(path ? [...path, segment] : [segment]);
                });
            }
            (_c = used[KEYS_PROPERTY]) === null || _c === void 0 ? void 0 : _c.forEach((key) => {
                if (!onlyWithValues ||
                    'value' in (Object.getOwnPropertyDescriptor(x, key) || {})) {
                    walk(x[key], path ? [...path, key] : [key]);
                }
            });
        }
        else if (path) {
            list.push(path);
        }
    };
    walk(obj);
    return list;
};
/**
 * replace newProxy function.
 *
 * This can be used if you want to use proxy-polyfill.
 * Note that proxy-polyfill can't polyfill everything.
 * Use it at your own risk.
 */
const replaceNewProxy = (fn) => {
    newProxy = fn;
};


/***/ }),

/***/ "./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/components/RangeSlider.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/components/RangeSlider.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/esnext.iterator.for-each.js");
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Aliases
const abs = Math.abs;
const float = parseFloat;

// Values
const MIN = 'min';
const MAX = 'max';
const ANY = 'any';
const VERTICAL = 'vertical';
const TABINDEX = 'tabindex';

// Data Attributes
const DATA_LOWER = 'data-lower';
const DATA_UPPER = 'data-upper';
const DATA_ACTIVE = 'data-active';
const DATA_VERTICAL = 'data-vertical';
const DATA_DISABLED = 'data-disabled';

// ARIA Attributes
const ARIA_LABEL = 'aria-label';
const ARIA_LABELLEDBY = 'aria-labelledby';
class RangeSlider extends _react.PureComponent {
  constructor() {
    super();
    this.element = /*#__PURE__*/(0, _react.createRef)();
    this.input = [];
    this.thumb = [/*#__PURE__*/(0, _react.createRef)(), /*#__PURE__*/(0, _react.createRef)()];
    this.range = /*#__PURE__*/(0, _react.createRef)();
    this.options = {};
    this.isControlled = false;
    this.externalInput = false;
    this.isComponentMounted = false;
    this.lastValueProp = [];
  }
  initiateInputRange(index) {
    const inputElement = document.createElement('input');
    inputElement.type = 'range';
    inputElement.min = this.options.min;
    inputElement.max = this.options.max;
    inputElement.step = this.options.step;
    inputElement.value = this.props.value ? this.options.value[index] : this.options.defaultValue[index];
    return inputElement;
  }
  updateInputRange(index) {
    this.input[index].min = this.options.min;
    this.input[index].max = this.options.max;
    this.input[index].step = this.options.step;
    this.input[index].value = this.props.value ? this.options.value[index] : index === 1 ? this.value.max : this.value.min;
  }
  componentDidMount() {
    if (!this.isComponentMounted) {
      // input[type="range"] elements for syncing values
      this.input = [this.initiateInputRange(0), this.initiateInputRange(1)];
      this.value = this.setMinMaxProps();

      // Thumb indexes for min and max values
      // (swapped when the thumbs cross each other)
      this.index = this.setMinMaxProps(0, 1);

      // Thumb width & height for calculation of exact positions and sizes of horizontal thumbs and range
      this.thumbWidth = this.setMinMaxProps();
      this.thumbHeight = this.setMinMaxProps();

      // Slidable range limits (when a thumb is dragged)
      this.rangeLimits = this.setMinMaxProps();

      // Slider value depending on the user interaction
      this.sliderValue = this.setMinMaxProps();

      // For dragging thumbs and range
      this.maxRangeWidth = 0;
      this.rangeWidth = 0;
      this.isDragging = false;
      this.thumbDrag = false;
      this.startPos = 0;

      // initial
      this.reset(true);

      // Add listeners to element
      this.addNodeEventListener(this.element.current, 'pointerdown', e => {
        this.elementFocused(e);
      });

      // Add listeners to thumbs and set [data-disabled] on disabled thumbs
      this.thumb.forEach((t, i) => {
        this.addNodeEventListener(t.current, 'pointerdown', e => {
          this.initiateThumbDrag(e, i, t.current);
        });
        this.addNodeEventListener(t.current, 'keydown', e => {
          if (e.which >= 37 && e.which <= 40) {
            e.preventDefault();
            this.stepValue(i, e.which);
          }
        });
      });

      // Add listeners to range
      this.addNodeEventListener(this.range.current, 'pointerdown', e => {
        this.initiateRangeDrag(e);
      });

      // Define and add global listeners
      this.pointerMoveEvent = e => {
        this.drag(e);
      };
      this.pointerUpEvent = () => {
        if (this.isDragging) {
          this.removeNodeAttribute(this.thumb[0].current, DATA_ACTIVE);
          this.removeNodeAttribute(this.thumb[1].current, DATA_ACTIVE);
          this.removeNodeAttribute(this.range.current, DATA_ACTIVE);
          this.isDragging = false;
          if (this.thumbDrag) {
            if (this.options.onThumbDragEnd) {
              this.options.onThumbDragEnd();
            }
          } else {
            if (this.options.onRangeDragEnd) {
              this.options.onRangeDragEnd();
            }
          }
        }
      };
      this.resizeEvent = () => {
        this.syncThumbDimensions();
        this.updateThumbs();
        this.updateRange();
      };
      this.addNodeEventListener(document, 'pointermove', this.pointerMoveEvent);
      this.addNodeEventListener(document, 'pointerup', this.pointerUpEvent);
      this.addNodeEventListener(window, 'resize', this.resizeEvent);
      this.isComponentMounted = true;
    }
  }
  componentDidUpdate() {
    this.updateInputRange(0);
    this.updateInputRange(1);
    this.reset();
  }
  componentWillUnmount() {
    // Remove global listeners
    this.removeNodeEventListener(document, 'pointermove', this.pointerMoveEvent);
    this.removeNodeEventListener(document, 'pointerup', this.pointerUpEvent);
    this.removeNodeEventListener(window, 'resize', this.resizeEvent);
    this.isComponentMounted = false;
  }
  reset() {
    let first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.isControlled = !!this.props.value;
    if (this.isControlled) {
      if (first || this.props.value !== this.lastValueProp) {
        this.externalInput = true;
      }
      this.lastValueProp = this.props.value;
    }
    this.maxRangeWidth = this.options.max - this.options.min;
    this.updateOrientation();
    this.setValue('', true, false);
    this.updateRangeLimits();
    this.updateDisabledState();
    this.updateThumbsDisabledState();
    this.updateTabIndexes();
    if (first) {
      this.sliderValue = this.value;
    }
  }
  isNumber(n) {
    // check for NaN explicitly
    // because with NaN, the second exp. evaluates to true
    return !isNaN(n) && +n + '' === n + '';
  }
  setMinMaxProps() {
    let min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      min,
      max
    };
  }
  iterateMinMaxProps(fn) {
    [MIN, MAX].forEach(fn);
  }
  getSetProps(condition, expression, fn) {
    if (condition) {
      return expression;
    } else {
      fn();
    }
  }
  setNodeAttribute(node, attribute) {
    let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    node.setAttribute(attribute, value);
  }
  removeNodeAttribute(node, attribute) {
    node.removeAttribute(attribute);
  }
  addNodeEventListener(node, event, fn) {
    let isPointerEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    // with options for pointer events
    node.addEventListener(event, fn, isPointerEvent ? {
      passive: false,
      capture: true
    } : {});
  }
  removeNodeEventListener(node, event, fn) {
    let isPointerEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    // with options for pointer events
    node.removeEventListener(event, fn, isPointerEvent ? {
      passive: false,
      capture: true
    } : {});
  }
  fallbackToDefault(property, defaultValue) {
    this.options[property] = this.props[property] ? this.props[property] : defaultValue;
  }
  ifVerticalElse(vertical, horizontal) {
    return this.options.orientation === VERTICAL ? vertical : horizontal;
  }
  currentIndex(i) {
    return i === 1 ? this.index.max : this.index.min;
  }

  // Set min and max values to 1 (arbitrarily) if any of the min or max values are "invalid"
  // Setting both values 1 will disable the slider
  // Called when,
  // -> the element is initially set
  // -> min or max properties are modified
  safeMinMaxValues() {
    let error = false;
    if (!this.isNumber(this.options.min) || !this.isNumber(this.options.max)) {
      error = true;
    }
    this.options.min = error ? 1 : +this.options.min;
    this.options.max = error ? 1 : +this.options.max;
  }

  // Reframe the thumbsDisabled value if "invalid"
  // Called when,
  // -> the element is initially set
  // -> thumbsDisabled property is modified
  safeThumbsDisabledValues() {
    if (this.options.thumbsDisabled instanceof Array) {
      if (this.options.thumbsDisabled.length === 1) {
        this.options.thumbsDisabled.push(false);
      }
      if (this.options.thumbsDisabled.length !== 1 && this.options.thumbsDisabled.length !== 2) {
        this.options.thumbsDisabled = [false, false];
      }
    } else {
      this.options.thumbsDisabled = [this.options.thumbsDisabled, this.options.thumbsDisabled];
    }

    // Boolean Values
    this.options.thumbsDisabled[0] = !!this.options.thumbsDisabled[0];
    this.options.thumbsDisabled[1] = !!this.options.thumbsDisabled[1];
  }

  // Called when,
  // -> the element is initially set
  // -> min, max, step or value properties are modified
  // -> thumbs are dragged
  // -> element is clicked upon
  // -> an arrow key is pressed
  setValue(newValue) {
    let forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    // Current value as set in the input elements
    // which could change while changing min, max and step values
    const currentValue = this.setMinMaxProps(this.input[0].value, this.input[1].value);

    // var value is synced with the values set in the input elements if no newValue is passed
    newValue = newValue || currentValue;
    this.input[this.index.min].value = newValue.min;
    this.input[this.index.max].value = this.thumbDrag || forceSet ? newValue.max : newValue.min + this.rangeWidth;
    this.syncValues();

    // Check if the thumbs cross each other
    if (this.value.min > this.value.max) {
      var _this$props, _this$props2, _this$props3, _this$props4;
      // Switch thumb indexes
      this.index.min = +!this.index.min;
      this.index.max = +!this.index.max;

      // Switch thumb attributes
      this.removeNodeAttribute(this.thumb[this.index.min].current, DATA_UPPER);
      this.removeNodeAttribute(this.thumb[this.index.max].current, DATA_LOWER);
      this.setNodeAttribute(this.thumb[this.index.min].current, DATA_LOWER);
      this.setNodeAttribute(this.thumb[this.index.max].current, DATA_UPPER);
      this.setNodeAttribute(this.thumb[this.index.min].current, ARIA_LABEL, (_this$props = this.props) === null || _this$props === void 0 || (_this$props = _this$props.ariaLabel) === null || _this$props === void 0 ? void 0 : _this$props[0]);
      this.setNodeAttribute(this.thumb[this.index.max].current, ARIA_LABEL, (_this$props2 = this.props) === null || _this$props2 === void 0 || (_this$props2 = _this$props2.ariaLabel) === null || _this$props2 === void 0 ? void 0 : _this$props2[1]);
      this.setNodeAttribute(this.thumb[this.index.min].current, ARIA_LABELLEDBY, (_this$props3 = this.props) === null || _this$props3 === void 0 || (_this$props3 = _this$props3.ariaLabelledBy) === null || _this$props3 === void 0 ? void 0 : _this$props3[0]);
      this.setNodeAttribute(this.thumb[this.index.max].current, ARIA_LABELLEDBY, (_this$props4 = this.props) === null || _this$props4 === void 0 || (_this$props4 = _this$props4.ariaLabelledBy) === null || _this$props4 === void 0 ? void 0 : _this$props4[1]);

      // Switch thumb drag labels
      if (this.thumbDrag) {
        this.thumbDrag = this.thumbDrag === MIN ? MAX : MIN;
      }
      this.syncValues();
    }
    this.sliderValue = forceSet ? this.sliderValue : newValue;
    let valueSet = false;
    const currentValues = [currentValue.min, currentValue.max].sort((a, b) => a - b);
    const elementValues = [this.input[0].value, this.input[1].value].sort((a, b) => a - b);
    if (currentValues[0] !== elementValues[0] || forceSet) {
      valueSet = true;
    }
    if (currentValues[1] !== elementValues[1] || forceSet) {
      valueSet = true;
    }

    // Update the positions, dimensions and aria attributes everytime a value is set
    // and call the onInput function from options (if set)
    if (valueSet) {
      if (callback && this.options.onInput) {
        this.options.onInput([this.value.min, this.value.max]);
      }
      if (!this.isControlled || this.externalInput) {
        this.externalInput = false;
        this.syncThumbDimensions();
        this.updateThumbs();
        this.updateRange();
        this.updateAriaValueAttributes();
      }
    }
  }

  // Sync var value with the input elements
  syncValues() {
    this.iterateMinMaxProps(_ => {
      this.value[_] = +this.input[this.index[_]].value;
    });
  }

  // Called when,
  // -> setValue is called and a value is set
  // -> window is resized
  updateThumbs() {
    this.iterateMinMaxProps(_ => {
      this.thumb[this.index[_]].current.style[this.ifVerticalElse('top', 'left')] = "calc(".concat((this.value[_] - this.options.min) / this.maxRangeWidth * 100, "% + ").concat((0.5 - (this.value[_] - this.options.min) / this.maxRangeWidth) * this.ifVerticalElse(this.thumbHeight, this.thumbWidth)[_], "px)");
    });
  }

  // Called when,
  // -> setValue is called and a value is set
  // -> window is resized
  updateRange() {
    const elementBounds = this.element.current.getBoundingClientRect();
    const deltaOffset = (0.5 - (this.value.min - this.options.min) / this.maxRangeWidth) * this.ifVerticalElse(this.thumbHeight, this.thumbWidth).min / this.ifVerticalElse(elementBounds.bottom - elementBounds.top, elementBounds.right - elementBounds.left);
    const deltaDimension = (0.5 - (this.value.max - this.options.min) / this.maxRangeWidth) * this.ifVerticalElse(this.thumbHeight, this.thumbWidth).max / this.ifVerticalElse(elementBounds.bottom - elementBounds.top, elementBounds.right - elementBounds.left);
    this.range.current.style[this.ifVerticalElse('top', 'left')] = "".concat(((this.value.min - this.options.min) / this.maxRangeWidth + deltaOffset) * 100, "%");
    this.range.current.style[this.ifVerticalElse('height', 'width')] = "".concat(((this.value.max - this.options.min) / this.maxRangeWidth - (this.value.min - this.options.min) / this.maxRangeWidth - deltaOffset + deltaDimension) * 100, "%");
  }
  updateRangeLimits() {
    this.iterateMinMaxProps((_, i) => {
      this.rangeLimits[_] = this.options.thumbsDisabled[i] ? this.value[_] : this.options[_];
    });
  }

  // Called when,
  // -> thumbs are initially set
  // -> thumbs are disabled / enabled
  updateTabIndexes() {
    this.iterateMinMaxProps((_, i) => {
      if (!this.options.disabled && !this.options.thumbsDisabled[i]) {
        this.setNodeAttribute(this.thumb[this.currentIndex(i)].current, TABINDEX, 0);
      } else {
        this.removeNodeAttribute(this.thumb[this.currentIndex(i)].current, TABINDEX);
      }
    });
  }

  // Called when,
  // -> setValue is called and a value is set
  updateAriaValueAttributes() {
    this.iterateMinMaxProps(_ => {
      this.setNodeAttribute(this.thumb[this.index[_]].current, 'aria-valuemin', this.options.min);
      this.setNodeAttribute(this.thumb[this.index[_]].current, 'aria-valuemax', this.options.max);
      this.setNodeAttribute(this.thumb[this.index[_]].current, 'aria-valuenow', this.value[_]);
      this.setNodeAttribute(this.thumb[this.index[_]].current, 'aria-valuetext', this.value[_]);
    });
  }

  // Called when,
  // -> disabled property is modified
  updateDisabledState() {
    if (this.options.disabled) {
      this.setNodeAttribute(this.element.current, DATA_DISABLED);
    } else {
      this.removeNodeAttribute(this.element.current, DATA_DISABLED);
    }
  }

  // Called when,
  // -> thumbsDisabled property is modified
  updateThumbsDisabledState() {
    this.options.thumbsDisabled.forEach((d, i) => {
      const currIndex = this.currentIndex(i);
      if (d) {
        this.setNodeAttribute(this.thumb[currIndex].current, DATA_DISABLED);
        this.setNodeAttribute(this.thumb[currIndex].current, 'aria-disabled', true);
      } else {
        this.removeNodeAttribute(this.thumb[currIndex].current, DATA_DISABLED);
        this.setNodeAttribute(this.thumb[currIndex].current, 'aria-disabled', false);
      }
    });
  }

  // Called when,
  // -> min or max values are modified
  updateLimits(limit) {
    let m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.options[limit] = m;
    this.safeMinMaxValues();
    this.iterateMinMaxProps(_ => {
      this.input[0][_] = this.options[_];
      this.input[1][_] = this.options[_];
    });
    this.maxRangeWidth = this.options.max - this.options.min;
    this.setValue('', true);
    this.updateRangeLimits();
  }

  // Called when,
  // -> the element is initially set
  // -> orientation property is modified
  updateOrientation() {
    if (this.options.orientation === VERTICAL) {
      this.setNodeAttribute(this.element.current, DATA_VERTICAL);
    } else {
      this.removeNodeAttribute(this.element.current, DATA_VERTICAL);
    }
    this.range.current.style[this.ifVerticalElse('left', 'top')] = '';
    this.range.current.style[this.ifVerticalElse('width', 'height')] = '';
    this.thumb[0].current.style[this.ifVerticalElse('left', 'top')] = '';
    this.thumb[1].current.style[this.ifVerticalElse('left', 'top')] = '';
  }

  // thumb width & height values are to be synced with the CSS values for correct calculation of
  // thumb position and range width & position
  // Called when,
  // -> setValue is called and a value is set (called before updateThumbs() and updateRange())
  // -> thumb / range drag is initiated
  // -> window is resized
  syncThumbDimensions() {
    this.iterateMinMaxProps(_ => {
      this.thumbWidth[_] = float(window.getComputedStyle(this.thumb[this.index[_]].current).width);
      this.thumbHeight[_] = float(window.getComputedStyle(this.thumb[this.index[_]].current).height);
    });
  }

  // thumb position calculation depending upon the pointer position
  currentPosition(e, node) {
    const elementBounds = this.element.current.getBoundingClientRect();
    const nodeBounds = node.getBoundingClientRect();
    const currPos = (this.ifVerticalElse(nodeBounds.top - elementBounds.top, nodeBounds.left - elementBounds.left) + (e["client".concat(this.ifVerticalElse('Y', 'X'))] - node.getBoundingClientRect()[this.ifVerticalElse('top', 'left')]) - (this.thumbDrag ? (0.5 - (this.value[this.thumbDrag] - this.options.min) / this.maxRangeWidth) * this.ifVerticalElse(this.thumbHeight, this.thumbWidth)[this.thumbDrag] : 0)) / this.ifVerticalElse(elementBounds.bottom - elementBounds.top, elementBounds.right - elementBounds.left) * this.maxRangeWidth + this.options.min;
    if (currPos < this.options.min) {
      return this.options.min;
    }
    if (currPos > this.options.max) {
      return this.options.max;
    }
    return currPos;
  }
  doesntHaveClassName(e, className) {
    return !e.target.classList.contains(className);
  }
  elementFocused(e) {
    let repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let setFocus = false;
    if (!this.options.disabled && (this.doesntHaveClassName(e, 'range-slider__thumb') && this.doesntHaveClassName(e, 'range-slider__range') || this.options.rangeSlideDisabled && this.doesntHaveClassName(e, 'range-slider__thumb'))) {
      setFocus = true;
    }

    // No action if both thumbs are disabled
    if (setFocus && this.options.thumbsDisabled[0] && this.options.thumbsDisabled[1]) {
      setFocus = false;
    }
    if (setFocus) {
      const currPos = this.currentPosition(e, this.range.current);
      const deltaMin = abs(this.value.min - currPos);
      const deltaMax = abs(this.value.max - currPos);
      if (this.options.thumbsDisabled[0]) {
        if (currPos >= this.value.min) {
          this.setValue(this.setMinMaxProps(this.value.min, currPos), true, !repeat);
          this.initiateThumbDrag(e, this.index.max, this.thumb[this.index.max].current, !repeat);
        }
      } else if (this.options.thumbsDisabled[1]) {
        if (currPos <= this.value.max) {
          this.setValue(this.setMinMaxProps(currPos, this.value.max), true, !repeat);
          this.initiateThumbDrag(e, this.index.min, this.thumb[this.index.min].current, !repeat);
        }
      } else {
        let nearestThumbIndex = this.index.max;
        if (deltaMin === deltaMax) {
          this.setValue(this.setMinMaxProps(this.value.min, currPos), true, !repeat);
        } else {
          this.setValue(this.setMinMaxProps(deltaMin < deltaMax ? currPos : this.value.min, deltaMax < deltaMin ? currPos : this.value.max), true, !repeat);
          nearestThumbIndex = deltaMin < deltaMax ? this.index.min : this.index.max;
        }
        this.initiateThumbDrag(e, nearestThumbIndex, this.thumb[nearestThumbIndex].current, !repeat);
      }
      if (repeat) {
        this.elementFocused(e, false);
      }
    }
  }
  initiateDrag(e, node) {
    this.syncThumbDimensions();
    this.setNodeAttribute(node, DATA_ACTIVE);
    this.startPos = this.currentPosition(e, node);
    this.isDragging = true;
  }
  initiateThumbDrag(e, i, node) {
    let callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    if (!this.options.disabled && !this.options.thumbsDisabled[this.currentIndex(i)]) {
      this.initiateDrag(e, node);
      this.thumbDrag = this.index.min === i ? MIN : MAX;
      if (callback && this.options.onThumbDragStart) {
        this.options.onThumbDragStart();
      }
    }
  }
  initiateRangeDrag(e) {
    if (!this.options.disabled && !this.options.rangeSlideDisabled) {
      this.initiateDrag(e, this.range.current);
      this.rangeWidth = this.value.max - this.value.min;
      this.thumbDrag = false;
      if (this.options.onRangeDragStart) {
        this.options.onRangeDragStart();
      }
    }
  }
  drag(e) {
    if (this.isDragging) {
      const lastPos = this.currentPosition(e, this.range.current);
      const delta = lastPos - this.startPos;
      let min = this.value.min;
      let max = this.value.max;
      const lower = this.thumbDrag ? this.rangeLimits.min : this.options.min;
      const upper = this.thumbDrag ? this.rangeLimits.max : this.options.max;
      if (!this.thumbDrag || this.thumbDrag === MIN) {
        min = this.thumbDrag ? lastPos : this.sliderValue.min + delta;
      }
      if (!this.thumbDrag || this.thumbDrag === MAX) {
        max = this.thumbDrag ? lastPos : this.sliderValue.max + delta;
      }
      if (min >= lower && min <= upper && max >= lower && max <= upper) {
        this.setValue({
          min,
          max
        });
        this.startPos = lastPos;
      } else {
        // When min thumb reaches upper limit
        if (min > upper && this.thumbDrag) {
          this.setValue(this.setMinMaxProps(upper, upper));
          this.startPos = lastPos;
        }
        // When max thumb reaches lower limit
        if (max < lower && this.thumbDrag) {
          this.setValue(this.setMinMaxProps(lower, lower));
          this.startPos = lastPos;
        }
        // When range / min thumb reaches lower limit
        if (min < lower) {
          if (!this.thumbDrag) {
            this.setValue(this.setMinMaxProps(lower, this.value.max - this.value.min + lower));
          } else {
            this.setValue(this.setMinMaxProps(lower, this.value.max));
          }
          this.startPos = lastPos;
        }
        // When range / max thumb reaches upper limit
        if (max > upper) {
          if (!this.thumbDrag) {
            this.setValue(this.setMinMaxProps(this.value.min - this.value.max + upper, upper));
          } else {
            this.setValue(this.setMinMaxProps(this.value.min, upper));
          }
          this.startPos = lastPos;
        }
      }
      if (!this.thumbDrag) {
        this.updateRangeLimits();
      }
    }
  }
  actualStepValue() {
    const step = float(this.input[0].step);
    return this.input[0].step === ANY ? ANY : step === 0 || isNaN(step) ? 1 : step;
  }

  // Step value (up or down) using arrow keys
  stepValue(i, key) {
    const direction = (key === 37 || key === 40 ? -1 : 1) * this.ifVerticalElse(-1, 1);
    if (!this.options.disabled && !this.options.thumbsDisabled[this.currentIndex(i)]) {
      let step = this.actualStepValue();
      step = step === ANY ? 1 : step;
      let min = this.value.min + step * (this.index.min === i ? direction : 0);
      let max = this.value.max + step * (this.index.max === i ? direction : 0);

      // When min thumb reaches upper limit
      if (min > this.rangeLimits.max) {
        min = this.rangeLimits.max;
      }

      // When max thumb reaches lower limit
      if (max < this.rangeLimits.min) {
        max = this.rangeLimits.min;
      }
      this.setValue({
        min,
        max
      }, true);
    }
  }
  render() {
    var _this$props5, _this$props6, _this$props7, _this$props8;
    // Set options to default values if not set
    this.fallbackToDefault('rangeSlideDisabled', false);
    this.fallbackToDefault('thumbsDisabled', [false, false]);
    this.fallbackToDefault('orientation', 'horizontal');
    this.fallbackToDefault('defaultValue', [25, 75]);
    this.fallbackToDefault('disabled', false);
    this.fallbackToDefault('onThumbDragStart', false);
    this.fallbackToDefault('onRangeDragStart', false);
    this.fallbackToDefault('onThumbDragEnd', false);
    this.fallbackToDefault('onRangeDragEnd', false);
    this.fallbackToDefault('onInput', false);
    this.fallbackToDefault('step', 1);
    this.fallbackToDefault('min', 0);
    this.fallbackToDefault('max', 100);
    if (this.props.value) {
      this.fallbackToDefault('value', [25, 75]);
    }
    this.safeMinMaxValues();
    this.safeThumbsDisabledValues();
    return /*#__PURE__*/_react.default.createElement("div", {
      "data-testid": "element",
      id: this.props.id,
      ref: this.element,
      className: (0, _clsx.default)('range-slider', this.props.className)
    }, /*#__PURE__*/_react.default.createElement("div", {
      ref: this.thumb[0],
      role: "slider",
      className: "range-slider__thumb",
      "data-lower": true,
      "aria-label": (_this$props5 = this.props) === null || _this$props5 === void 0 || (_this$props5 = _this$props5.ariaLabel) === null || _this$props5 === void 0 ? void 0 : _this$props5[0],
      "aria-labelledby": (_this$props6 = this.props) === null || _this$props6 === void 0 || (_this$props6 = _this$props6.ariaLabelledBy) === null || _this$props6 === void 0 ? void 0 : _this$props6[0]
    }), /*#__PURE__*/_react.default.createElement("div", {
      ref: this.thumb[1],
      role: "slider",
      className: "range-slider__thumb",
      "data-upper": true,
      "aria-label": (_this$props7 = this.props) === null || _this$props7 === void 0 || (_this$props7 = _this$props7.ariaLabel) === null || _this$props7 === void 0 ? void 0 : _this$props7[1],
      "aria-labelledby": (_this$props8 = this.props) === null || _this$props8 === void 0 || (_this$props8 = _this$props8.ariaLabelledBy) === null || _this$props8 === void 0 ? void 0 : _this$props8[1]
    }), /*#__PURE__*/_react.default.createElement("div", {
      ref: this.range,
      className: "range-slider__range"
    }));
  }
}
;
var _default = exports["default"] = RangeSlider;

/***/ }),

/***/ "./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/index.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _RangeSlider = _interopRequireDefault(__webpack_require__(/*! ./components/RangeSlider */ "./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/components/RangeSlider.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports["default"] = _RangeSlider.default;

/***/ }),

/***/ "./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/style.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/style.css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../postcss-loader@7.3.4_postcss@8.5.3_typescript@5.8.2_webpack@5.98.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../sass-loader@13.3.3_sass@1.86.0_webpack@5.98.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./style.css */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.5.3_typescript@5.8.2_webpack@5.98.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.86.0_webpack@5.98.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*************************************************************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \********************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ noop),
/* harmony export */   B: () => (/* binding */ isPromiseLike),
/* harmony export */   I: () => (/* binding */ IS_REACT_LEGACY),
/* harmony export */   O: () => (/* binding */ OBJECT),
/* harmony export */   S: () => (/* binding */ SWRConfigContext),
/* harmony export */   U: () => (/* binding */ UNDEFINED),
/* harmony export */   a: () => (/* binding */ isFunction),
/* harmony export */   b: () => (/* binding */ SWRGlobalState),
/* harmony export */   c: () => (/* binding */ cache),
/* harmony export */   d: () => (/* binding */ defaultConfig),
/* harmony export */   e: () => (/* binding */ isUndefined),
/* harmony export */   f: () => (/* binding */ mergeConfigs),
/* harmony export */   g: () => (/* binding */ SWRConfig),
/* harmony export */   h: () => (/* binding */ initCache),
/* harmony export */   i: () => (/* binding */ isWindowDefined),
/* harmony export */   j: () => (/* binding */ mutate),
/* harmony export */   k: () => (/* binding */ compare),
/* harmony export */   l: () => (/* binding */ stableHash),
/* harmony export */   m: () => (/* binding */ mergeObjects),
/* harmony export */   n: () => (/* binding */ internalMutate),
/* harmony export */   o: () => (/* binding */ getTimestamp),
/* harmony export */   p: () => (/* binding */ preset),
/* harmony export */   q: () => (/* binding */ defaultConfigOptions),
/* harmony export */   r: () => (/* binding */ IS_SERVER),
/* harmony export */   s: () => (/* binding */ serialize),
/* harmony export */   t: () => (/* binding */ rAF),
/* harmony export */   u: () => (/* binding */ useIsomorphicLayoutEffect),
/* harmony export */   v: () => (/* binding */ slowConnection),
/* harmony export */   w: () => (/* binding */ isDocumentDefined),
/* harmony export */   x: () => (/* binding */ isLegacyDeno),
/* harmony export */   y: () => (/* binding */ hasRequestAnimationFrame),
/* harmony export */   z: () => (/* binding */ createCacheHelper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _events_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.mjs */ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/events.mjs");
/* harmony import */ var dequal_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dequal/lite */ "./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs");
'use client';




// Global state used to deduplicate requests and store listeners
const SWRGlobalState = new WeakMap();

// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
const mergeObjects = (a, b)=>({
        ...a,
        ...b
    });
const isPromiseLike = (x)=>isFunction(x.then);

const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
// NOTE: Use the function to guarantee it's re-evaluated between jsdom and node runtime for tests.
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const isLegacyDeno = isWindowDefined && 'Deno' in window;
const hasRequestAnimationFrame = ()=>isWindowDefined && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
const createCacheHelper = (cache, key)=>{
    const state = SWRGlobalState.get(cache);
    return [
        // Getter
        ()=>!isUndefined(key) && cache.get(key) || EMPTY_CACHE,
        // Setter
        (info)=>{
            if (!isUndefined(key)) {
                const prev = cache.get(key);
                // Before writing to the store, we keep the value in the initial cache
                // if it's not there yet.
                if (!(key in INITIAL_CACHE)) {
                    INITIAL_CACHE[key] = prev;
                }
                state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
            }
        },
        // Subscriber
        state[6],
        // Get server cache snapshot
        ()=>{
            if (!isUndefined(key)) {
                // If the cache was updated on the client, we return the stored initial value.
                if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
            }
            // If we haven't done any client-side updates, we return the current value.
            return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
        }
    ];
} // export { UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike }
;

/**
 * Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a workaround, we always assume it's online on the first load, and change
 * the status upon `online` or `offline` events.
 */ let online = true;
const isOnline = ()=>online;
// For node and React Native, `add/removeEventListener` doesn't exist on window.
const [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
    window.addEventListener.bind(window),
    window.removeEventListener.bind(window)
] : [
    noop,
    noop
];
const isVisible = ()=>{
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
const initFocus = (callback)=>{
    // focus revalidate
    if (isDocumentDefined) {
        document.addEventListener('visibilitychange', callback);
    }
    onWindowEvent('focus', callback);
    return ()=>{
        if (isDocumentDefined) {
            document.removeEventListener('visibilitychange', callback);
        }
        offWindowEvent('focus', callback);
    };
};
const initReconnect = (callback)=>{
    // revalidate on reconnected
    const onOnline = ()=>{
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    const onOffline = ()=>{
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return ()=>{
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
const preset = {
    isOnline,
    isVisible
};
const defaultConfigOptions = {
    initFocus,
    initReconnect
};

const IS_REACT_LEGACY = !react__WEBPACK_IMPORTED_MODULE_0__.useId;
const IS_SERVER = !isWindowDefined || isLegacyDeno;
// Polyfill requestAnimationFrame
const rAF = (f)=>hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
// This assignment is to extend the Navigator type to use effectiveType.
const navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
const slowConnection = !IS_SERVER && navigatorConnection && ([
    'slow-2g',
    '2g'
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};

const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};

// Global timestamp.
let __timestamp = 0;
const getTimestamp = ()=>++__timestamp;

async function internalMutate(...args) {
    const [cache, _key, _data, _opts] = args;
    // When passing as a boolean, it's explicitly used to disable/enable
    // revalidation.
    const options = mergeObjects({
        populateCache: true,
        throwOnError: true
    }, typeof _opts === 'boolean' ? {
        revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const rollbackOnError = (error)=>{
        return typeof rollbackOnErrorOption === 'function' ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    // If the second argument is a key filter, return the mutation results for all
    // filtered keys.
    if (isFunction(_key)) {
        const keyFilter = _key;
        const matchedKeys = [];
        const it = cache.keys();
        for (const key of it){
            if (// Skip the special useSWRInfinite and useSWRSubscription keys.
            !/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) {
                matchedKeys.push(key);
            }
        }
        return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    async function mutateByKey(_k) {
        // Serialize key
        const [key] = serialize(_k);
        if (!key) return;
        const [get, set] = createCacheHelper(cache, key);
        const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
        const startRevalidate = ()=>{
            const revalidators = EVENT_REVALIDATORS[key];
            const revalidate = isFunction(options.revalidate) ? options.revalidate(get().data, _k) : options.revalidate !== false;
            if (revalidate) {
                // Invalidate the key by deleting the concurrent request markers so new
                // requests will not be deduped.
                delete FETCH[key];
                delete PRELOAD[key];
                if (revalidators && revalidators[0]) {
                    return revalidators[0](_events_mjs__WEBPACK_IMPORTED_MODULE_2__.MUTATE_EVENT).then(()=>get().data);
                }
            }
            return get().data;
        };
        // If there is no new data provided, revalidate the key with current state.
        if (args.length < 3) {
            // Revalidate and broadcast state.
            return startRevalidate();
        }
        let data = _data;
        let error;
        // Update global timestamps.
        const beforeMutationTs = getTimestamp();
        MUTATION[key] = [
            beforeMutationTs,
            0
        ];
        const hasOptimisticData = !isUndefined(optimisticData);
        const state = get();
        // `displayedData` is the current value on screen. It could be the optimistic value
        // that is going to be overridden by a `committedData`, or get reverted back.
        // `committedData` is the validated value that comes from a fetch or mutation.
        const displayedData = state.data;
        const currentData = state._c;
        const committedData = isUndefined(currentData) ? displayedData : currentData;
        // Do optimistic data update.
        if (hasOptimisticData) {
            optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
            // When we set optimistic data, backup the current committedData data in `_c`.
            set({
                data: optimisticData,
                _c: committedData
            });
        }
        if (isFunction(data)) {
            // `data` is a function, call it passing current cache value.
            try {
                data = data(committedData);
            } catch (err) {
                // If it throws an error synchronously, we shouldn't update the cache.
                error = err;
            }
        }
        // `data` is a promise/thenable, resolve the final data first.
        if (data && isPromiseLike(data)) {
            // This means that the mutation is async, we need to check timestamps to
            // avoid race conditions.
            data = await data.catch((err)=>{
                error = err;
            });
            // Check if other mutations have occurred since we've started this mutation.
            // If there's a race we don't update cache or broadcast the change,
            // just return the data.
            if (beforeMutationTs !== MUTATION[key][0]) {
                if (error) throw error;
                return data;
            } else if (error && hasOptimisticData && rollbackOnError(error)) {
                // Rollback. Always populate the cache in this case but without
                // transforming the data.
                populateCache = true;
                // Reset data to be the latest committed data, and clear the `_c` value.
                set({
                    data: committedData,
                    _c: UNDEFINED
                });
            }
        }
        // If we should write back the cache after request.
        if (populateCache) {
            if (!error) {
                // Transform the result into data.
                if (isFunction(populateCache)) {
                    const populateCachedData = populateCache(data, committedData);
                    set({
                        data: populateCachedData,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                } else {
                    // Only update cached data and reset the error if there's no error. Data can be `undefined` here.
                    set({
                        data,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                }
            }
        }
        // Reset the timestamp to mark the mutation has ended.
        MUTATION[key][1] = getTimestamp();
        // Update existing SWR Hooks' internal states:
        Promise.resolve(startRevalidate()).then(()=>{
            // The mutation and revalidation are ended, we can clear it since the data is
            // not an optimistic value anymore.
            set({
                _c: UNDEFINED
            });
        });
        // Throw error or return data
        if (error) {
            if (throwOnError) throw error;
            return;
        }
        return data;
    }
}

const revalidateAllKeys = (revalidators, type)=>{
    for(const key in revalidators){
        if (revalidators[key][0]) revalidators[key][0](type);
    }
};
const initCache = (provider, options)=>{
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that is bound to
    // the cache.
    // The provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        const opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        const EVENT_REVALIDATORS = Object.create(null);
        const mutate = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = Object.create(null);
        const subscribe = (key, callback)=>{
            const subs = subscriptions[key] || [];
            subscriptions[key] = subs;
            subs.push(callback);
            return ()=>subs.splice(subs.indexOf(callback), 1);
        };
        const setter = (key, value, prev)=>{
            provider.set(key, value);
            const subs = subscriptions[key];
            if (subs) {
                for (const fn of subs){
                    fn(value, prev);
                }
            }
        };
        const initProvider = ()=>{
            if (!SWRGlobalState.has(provider)) {
                // Update the state if it's new, or if the provider has been extended.
                SWRGlobalState.set(provider, [
                    EVENT_REVALIDATORS,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    mutate,
                    setter,
                    subscribe
                ]);
                if (!IS_SERVER) {
                    // When listening to the native events for auto revalidations,
                    // we intentionally put a delay (setTimeout) here to make sure they are
                    // fired after immediate JavaScript executions, which can be
                    // React's state updates.
                    // This avoids some unnecessary revalidations such as
                    // https://github.com/vercel/swr/issues/1680.
                    const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, _events_mjs__WEBPACK_IMPORTED_MODULE_2__.FOCUS_EVENT)));
                    const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, _events_mjs__WEBPACK_IMPORTED_MODULE_2__.RECONNECT_EVENT)));
                    unmount = ()=>{
                        releaseFocus && releaseFocus();
                        releaseReconnect && releaseReconnect();
                        // When un-mounting, we need to remove the cache provider from the state
                        // storage too because it's a side-effect. Otherwise, when re-mounting we
                        // will not re-register those event listeners.
                        SWRGlobalState.delete(provider);
                    };
                }
            }
        };
        initProvider();
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [
            provider,
            mutate,
            initProvider,
            unmount
        ];
    }
    return [
        provider,
        SWRGlobalState.get(provider)[4]
    ];
};

// error retry
const onErrorRetry = (_, __, config, revalidate, opts)=>{
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    // Exponential backoff
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
const compare = dequal_lite__WEBPACK_IMPORTED_MODULE_1__.dequal;
// Default cache provider
const [cache, mutate] = initCache(new Map());
// Default config
const defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare,
    isPaused: ()=>false,
    cache,
    mutate,
    fallback: {}
}, // use web preset by default
preset);

const mergeConfigs = (a, b)=>{
    // Need to create a new object to avoid mutating the original here.
    const v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        const { use: u1, fallback: f1 } = a;
        const { use: u2, fallback: f2 } = b;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};

const SWRConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const SWRConfig = (props)=>{
    const { value } = props;
    const parentConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>isFunctionalConfig ? value(parentConfig) : value, [
        isFunctionalConfig,
        parentConfig,
        value
    ]);
    // Extend parent context values and middleware.
    const extendedConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
        isFunctionalConfig,
        parentConfig,
        config
    ]);
    // Should not use the inherited provider.
    const provider = config && config.provider;
    // initialize the cache only on first access.
    const cacheContextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(UNDEFINED);
    if (provider && !cacheContextRef.current) {
        cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect(()=>{
        if (cacheContext) {
            cacheContext[2] && cacheContext[2]();
            return cacheContext[3];
        }
    }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};




/***/ }),

/***/ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/constants.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/constants.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INFINITE_PREFIX: () => (/* binding */ INFINITE_PREFIX)
/* harmony export */ });
const INFINITE_PREFIX = '$inf$';




/***/ }),

/***/ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/events.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/events.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_REVALIDATE_EVENT: () => (/* binding */ ERROR_REVALIDATE_EVENT),
/* harmony export */   FOCUS_EVENT: () => (/* binding */ FOCUS_EVENT),
/* harmony export */   MUTATE_EVENT: () => (/* binding */ MUTATE_EVENT),
/* harmony export */   RECONNECT_EVENT: () => (/* binding */ RECONNECT_EVENT)
/* harmony export */ });
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;




/***/ }),

/***/ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/index.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/index.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INFINITE_PREFIX: () => (/* reexport safe */ _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.INFINITE_PREFIX),
/* harmony export */   IS_REACT_LEGACY: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   IS_SERVER: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   OBJECT: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   SWRConfig: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   SWRGlobalState: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   UNDEFINED: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   cache: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   compare: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   createCacheHelper: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   defaultConfig: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   defaultConfigOptions: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   getTimestamp: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   hasRequestAnimationFrame: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   initCache: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   internalMutate: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   isDocumentDefined: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   isFunction: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   isLegacyDeno: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   isPromiseLike: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   isUndefined: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   isWindowDefined: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   mergeConfigs: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   mergeObjects: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   mutate: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   noop: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   preload: () => (/* binding */ preload),
/* harmony export */   preset: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   rAF: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   revalidateEvents: () => (/* reexport module object */ _events_mjs__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   serialize: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   slowConnection: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   stableHash: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   subscribeCallback: () => (/* binding */ subscribeCallback),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* reexport safe */ _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   useSWRConfig: () => (/* binding */ useSWRConfig),
/* harmony export */   withArgs: () => (/* binding */ withArgs),
/* harmony export */   withMiddleware: () => (/* binding */ withMiddleware)
/* harmony export */ });
/* harmony import */ var _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-context-client-v7VOFo66.mjs */ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs");
/* harmony import */ var _events_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.mjs */ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/events.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/constants.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");









// @ts-expect-error
const enableDevtools = _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.i && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = ()=>{
    if (enableDevtools) {
        // @ts-expect-error
        window.__SWR_DEVTOOLS_REACT__ = react__WEBPACK_IMPORTED_MODULE_3__;
    }
};

const normalize = (args)=>{
    return (0,_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
    ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
    ];
};

const useSWRConfig = ()=>{
    return (0,_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.d, (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.S));
};

const preload = (key_, fetcher)=>{
    const [key, fnArg] = (0,_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(key_);
    const [, , , PRELOAD] = _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.b.get(_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.c);
    // Prevent preload to be called multiple times before used.
    if (PRELOAD[key]) return PRELOAD[key];
    const req = fetcher(fnArg);
    PRELOAD[key] = req;
    return req;
};
const middleware = (useSWRNext)=>(key_, fetcher_, config)=>{
        // fetcher might be a sync function, so this should not be an async function
        const fetcher = fetcher_ && ((...args)=>{
            const [key] = (0,_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(key_);
            const [, , , PRELOAD] = _config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.b.get(_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.c);
            if (key.startsWith(_constants_mjs__WEBPACK_IMPORTED_MODULE_2__.INFINITE_PREFIX)) {
                // we want the infinite fetcher to be called.
                // handling of the PRELOAD cache happens there.
                return fetcher_(...args);
            }
            const req = PRELOAD[key];
            if ((0,_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(req)) return fetcher_(...args);
            delete PRELOAD[key];
            return req;
        });
        return useSWRNext(key_, fetcher, config);
    };

const BUILT_IN_MIDDLEWARE = use.concat(middleware);

// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
const withArgs = (hook)=>{
    return function useSWRArgs(...args) {
        // Get the default and inherited configuration.
        const fallbackConfig = useSWRConfig();
        // Normalize arguments.
        const [key, fn, _config] = normalize(args);
        // Merge configurations.
        const config = (0,_config_context_client_v7VOFo66_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(fallbackConfig, _config);
        // Apply middleware
        let next = hook;
        const { use } = config;
        const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
        for(let i = middleware.length; i--;){
            next = middleware[i](next);
        }
        return next(key, fn || config.fetcher || null, config);
    };
};

// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
const subscribeCallback = (key, callbacks, callback)=>{
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return ()=>{
        const index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};

// Create a custom hook with a middleware
const withMiddleware = (useSWR, middleware)=>{
    return (...args)=>{
        const [key, fn, config] = normalize(args);
        const uses = (config.use || []).concat(middleware);
        return useSWR(key, fn, {
            ...config,
            use: uses
        });
    };
};

setupDevTools();




/***/ }),

/***/ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/index/index.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/index/index.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SWRConfig: () => (/* binding */ SWRConfig),
/* harmony export */   "default": () => (/* binding */ useSWR),
/* harmony export */   mutate: () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.j),
/* harmony export */   preload: () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.preload),
/* harmony export */   unstable_serialize: () => (/* binding */ unstable_serialize),
/* harmony export */   useSWRConfig: () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.useSWRConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/shim/index.js */ "./node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/shim/index.js");
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_internal/index.mjs */ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs");
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_internal/index.mjs */ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/events.mjs");
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_internal/index.mjs */ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/_internal/index.mjs");





// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};

const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};

const unstable_serialize = (key)=>serialize(key)[0];

/// <reference types="react/experimental" />
const use = react__WEBPACK_IMPORTED_MODULE_0__.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((thenable)=>{
    switch(thenable.status){
        case 'pending':
            throw thenable;
        case 'fulfilled':
            return thenable.value;
        case 'rejected':
            throw thenable.reason;
        default:
            thenable.status = 'pending';
            thenable.then((v)=>{
                thenable.status = 'fulfilled';
                thenable.value = v;
            }, (e)=>{
                thenable.status = 'rejected';
                thenable.reason = e;
            });
            throw thenable;
    }
});
const WITH_DEDUPE = {
    dedupe: true
};
const useSWRHandler = (_key, fetcher, config)=>{
    const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.b.get(cache);
    // `key` is the identifier of the SWR internal state,
    // `fnArg` is the argument/arguments parsed from the key, which will be passed
    // to the fetcher.
    // All of them are derived from `_key`.
    const [key, fnArg] = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(_key);
    // If it's the initial render of this hook.
    const initialMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    const unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // Refs to keep the key and config.
    const keyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key);
    const fetcherRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fetcher);
    const configRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config);
    const getConfig = ()=>configRef.current;
    const isActive = ()=>getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.z)(cache, key);
    const stateDependencies = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}).current;
    // Resolve the fallback data from either the inline option, or the global provider.
    // If it's a promise, we simply let React suspend and resolve it for us.
    const fallback = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(fallbackData) ? (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(config.fallback) ? _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.U : config.fallback[key] : fallbackData;
    const isEqual = (prev, current)=>{
        for(const _ in stateDependencies){
            const t = _;
            if (t === 'data') {
                if (!compare(prev[t], current[t])) {
                    if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(prev[t])) {
                        return false;
                    }
                    if (!compare(returnedData, current[t])) {
                        return false;
                    }
                }
            } else {
                if (current[t] !== prev[t]) {
                    return false;
                }
            }
        }
        return true;
    };
    const getSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const shouldStartRequest = (()=>{
            if (!key) return false;
            if (!fetcher) return false;
            // If `revalidateOnMount` is set, we take the value directly.
            if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(revalidateOnMount)) return revalidateOnMount;
            // If it's paused, we skip revalidation.
            if (getConfig().isPaused()) return false;
            if (suspense) return false;
            return revalidateIfStale !== false;
        })();
        // Get the cache and merge it with expected states.
        const getSelectedCache = (state)=>{
            // We only select the needed fields from the state.
            const snapshot = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(state);
            delete snapshot._k;
            if (!shouldStartRequest) {
                return snapshot;
            }
            return {
                isValidating: true,
                isLoading: true,
                ...snapshot
            };
        };
        const cachedData = getCache();
        const initialData = getInitialCache();
        const clientSnapshot = getSelectedCache(cachedData);
        const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
        // To make sure that we are returning the same object reference to avoid
        // unnecessary re-renders, we keep the previous snapshot and use deep
        // comparison to check if we need to return a new one.
        let memorizedSnapshot = clientSnapshot;
        return [
            ()=>{
                const newSnapshot = getSelectedCache(getCache());
                const compareResult = isEqual(newSnapshot, memorizedSnapshot);
                if (compareResult) {
                    // Mentally, we should always return the `memorizedSnapshot` here
                    // as there's no change between the new and old snapshots.
                    // However, since the `isEqual` function only compares selected fields,
                    // the values of the unselected fields might be changed. That's
                    // simply because we didn't track them.
                    // To support the case in https://github.com/vercel/swr/pull/2576,
                    // we need to update these fields in the `memorizedSnapshot` too
                    // with direct mutations to ensure the snapshot is always up-to-date
                    // even for the unselected fields, but only trigger re-renders when
                    // the selected fields are changed.
                    memorizedSnapshot.data = newSnapshot.data;
                    memorizedSnapshot.isLoading = newSnapshot.isLoading;
                    memorizedSnapshot.isValidating = newSnapshot.isValidating;
                    memorizedSnapshot.error = newSnapshot.error;
                    return memorizedSnapshot;
                } else {
                    memorizedSnapshot = newSnapshot;
                    return newSnapshot;
                }
            },
            ()=>serverSnapshot
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cache,
        key
    ]);
    // Get the current state that SWR should return.
    const cached = (0,use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore)((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((callback)=>subscribeCache(key, (current, prev)=>{
            if (!isEqual(prev, current)) callback();
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        cache,
        key
    ]), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cachedData) ? fallback && (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.B)(fallback) ? use(fallback) : fallback : cachedData;
    const error = cached.error;
    // Use a ref to store previously returned data. Use the initial data as its initial value.
    const laggyDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(data);
    const returnedData = keepPreviousData ? (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cachedData) ? (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(laggyDataRef.current) ? data : laggyDataRef.current : cachedData : data;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    const shouldDoInitialRevalidation = (()=>{
        // if a key already has revalidators and also has error, we should not trigger revalidation
        if (hasRevalidator && !(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(error)) return false;
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(revalidateOnMount)) return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused()) return false;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately mount it again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense) return (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(data) ? false : revalidateIfStale;
        // If there is no stale data, we need to revalidate when mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(data) || revalidateIfStale;
    })();
    // Resolve the default validating state:
    // If it's able to validate, and it should revalidate when mount, this will be true.
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    const revalidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (revalidateOpts)=>{
        const currentFetcher = fetcherRef.current;
        if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
            return false;
        }
        let newData;
        let startAt;
        let loading = true;
        const opts = revalidateOpts || {};
        // If there is no ongoing concurrent request, or `dedupe` is not set, a
        // new request should be initiated.
        const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
        /*
         For React 17
         Do unmount check for calls:
         If key has changed during the revalidation, or the component has been
         unmounted, old dispatch and old event callbacks should not take any
         effect

        For React 18
        only check if key has changed
        https://github.com/reactwg/react-18/discussions/82
      */ const callbackSafeguard = ()=>{
            if (_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.I) {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            }
            return key === keyRef.current;
        };
        // The final state object when the request finishes.
        const finalState = {
            isValidating: false,
            isLoading: false
        };
        const finishRequestAndUpdateState = ()=>{
            setCache(finalState);
        };
        const cleanupState = ()=>{
            // Check if it's still the same request before deleting it.
            const requestInfo = FETCH[key];
            if (requestInfo && requestInfo[1] === startAt) {
                delete FETCH[key];
            }
        };
        // Start fetching. Change the `isValidating` state, update the cache.
        const initialState = {
            isValidating: true
        };
        // It is in the `isLoading` state, if and only if there is no cached data.
        // This bypasses fallback data and laggy data.
        if ((0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(getCache().data)) {
            initialState.isLoading = true;
        }
        try {
            if (shouldStartNewRequest) {
                setCache(initialState);
                // If no cache is being rendered currently (it shows a blank page),
                // we trigger the loading slow event.
                if (config.loadingTimeout && (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(getCache().data)) {
                    setTimeout(()=>{
                        if (loading && callbackSafeguard()) {
                            getConfig().onLoadingSlow(key, config);
                        }
                    }, config.loadingTimeout);
                }
                // Start the request and save the timestamp.
                // Key must be truthy if entering here.
                FETCH[key] = [
                    currentFetcher(fnArg),
                    (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.o)()
                ];
            }
            // Wait until the ongoing request is done. Deduplication is also
            // considered here.
            ;
            [newData, startAt] = FETCH[key];
            newData = await newData;
            if (shouldStartNewRequest) {
                // If the request isn't interrupted, clean it up after the
                // deduplication interval.
                setTimeout(cleanupState, config.dedupingInterval);
            }
            // If there're other ongoing request(s), started after the current one,
            // we need to ignore the current one to avoid possible race conditions:
            //   req1------------------>res1        (current one)
            //        req2---------------->res2
            // the request that fired later will always be kept.
            // The timestamp maybe be `undefined` or a number
            if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            // Clear error.
            finalState.error = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.U;
            // If there're other mutations(s), that overlapped with the current revalidation:
            // case 1:
            //   req------------------>res
            //       mutate------>end
            // case 2:
            //         req------------>res
            //   mutate------>end
            // case 3:
            //   req------------------>res
            //       mutate-------...---------->
            // we have to ignore the revalidation result (res) because it's no longer fresh.
            // meanwhile, a new revalidation should be triggered when the mutation ends.
            const mutationInfo = MUTATION[key];
            if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(mutationInfo) && // case 1
            (startAt <= mutationInfo[0] || // case 2
            startAt <= mutationInfo[1] || // case 3
            mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            // Deep compare with the latest state to avoid extra re-renders.
            // For local state, compare and assign.
            const cacheData = getCache().data;
            // Since the compare fn could be custom fn
            // cacheData might be different from newData even when compare fn returns True
            finalState.data = compare(cacheData, newData) ? cacheData : newData;
            // Trigger the successful callback if it's the original request.
            if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                    getConfig().onSuccess(newData, key, config);
                }
            }
        } catch (err) {
            cleanupState();
            const currentConfig = getConfig();
            const { shouldRetryOnError } = currentConfig;
            // Not paused, we continue handling the error. Otherwise, discard it.
            if (!currentConfig.isPaused()) {
                // Get a new error, don't use deep comparison for errors.
                finalState.error = err;
                // Error event and retry logic. Only for the actual request, not
                // deduped ones.
                if (shouldStartNewRequest && callbackSafeguard()) {
                    currentConfig.onError(err, key, currentConfig);
                    if (shouldRetryOnError === true || (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(shouldRetryOnError) && shouldRetryOnError(err)) {
                        if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                            // If it's inactive, stop. It will auto-revalidate when
                            // refocusing or reconnecting.
                            // When retrying, deduplication is always enabled.
                            currentConfig.onErrorRetry(err, key, currentConfig, (_opts)=>{
                                const revalidators = EVENT_REVALIDATORS[key];
                                if (revalidators && revalidators[0]) {
                                    revalidators[0](_internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__.ERROR_REVALIDATE_EVENT, _opts);
                                }
                            }, {
                                retryCount: (opts.retryCount || 0) + 1,
                                dedupe: true
                            });
                        }
                    }
                }
            }
        }
        // Mark loading as stopped.
        loading = false;
        // Update the current hook's state.
        finishRequestAndUpdateState();
        return true;
    }, // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        key,
        cache
    ]);
    // Similar to the global mutate but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    const boundMutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(// Use callback to make sure `keyRef.current` returns latest result every time
    (...args)=>{
        return (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(cache, keyRef.current, ...args);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // The logic for updating refs.
    (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.u)(()=>{
        fetcherRef.current = fetcher;
        configRef.current = config;
        // Handle laggy data updates. If there's cached data of the current key,
        // it'll be the correct reference.
        if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cachedData)) {
            laggyDataRef.current = cachedData;
        }
    });
    // After mounted or key changed.
    (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.u)(()=>{
        if (!key) return;
        const softRevalidate = revalidate.bind(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.U, WITH_DEDUPE);
        let nextFocusRevalidatedAt = 0;
        if (getConfig().revalidateOnFocus) {
            const initNow = Date.now();
            nextFocusRevalidatedAt = initNow + getConfig().focusThrottleInterval;
        }
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        const onRevalidate = (type, opts = {})=>{
            if (type == _internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__.FOCUS_EVENT) {
                const now = Date.now();
                if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            } else if (type == _internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__.RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            } else if (type == _internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__.MUTATE_EVENT) {
                return revalidate();
            } else if (type == _internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__.ERROR_REVALIDATE_EVENT) {
                return revalidate(opts);
            }
            return;
        };
        const unsubEvents = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.subscribeCallback)(key, EVENT_REVALIDATORS, onRevalidate);
        // Mark the component as mounted and update corresponding refs.
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        // Keep the original key in the cache.
        setCache({
            _k: fnArg
        });
        // Trigger a revalidation
        if (shouldDoInitialRevalidation) {
            if ((0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(data) || _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.r) {
                // Revalidate immediately.
                softRevalidate();
            } else {
                // Delay the revalidate if we have data to return so we won't block
                // rendering.
                (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.t)(softRevalidate);
            }
        }
        return ()=>{
            // Mark it as unmounted.
            unmountedRef.current = true;
            unsubEvents();
        };
    }, [
        key
    ]);
    // Polling
    (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.u)(()=>{
        let timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            const interval = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
            // We only start the next interval if `refreshInterval` is not 0, and:
            // - `force` is true, which is the start of polling
            // - or `timer` is not 0, which means the effect wasn't canceled
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            // Check if it's OK to execute:
            // Only revalidate when the page is visible, online, and not errored.
            if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            } else {
                // Schedule the next interval to check again.
                next();
            }
        }
        next();
        return ()=>{
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
    ]);
    // Display debug info in React DevTools.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(returnedData);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is an `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(data) && key) {
        // SWR should throw when trying to use Suspense on the server with React 18,
        // without providing any fallback data. This causes hydration errors. See:
        // https://github.com/vercel/swr/issues/1832
        if (!_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.I && _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.r) {
            throw new Error('Fallback data is required when using Suspense in SSR.');
        }
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        const req = PRELOAD[key];
        if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(req)) {
            const promise = boundMutate(req);
            use(promise);
        }
        if ((0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(error)) {
            const promise = revalidate(WITH_DEDUPE);
            if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(returnedData)) {
                promise.status = 'fulfilled';
                promise.value = true;
            }
            use(promise);
        } else {
            throw error;
        }
    }
    const swrResponse = {
        mutate: boundMutate,
        get data () {
            stateDependencies.data = true;
            return returnedData;
        },
        get error () {
            stateDependencies.error = true;
            return error;
        },
        get isValidating () {
            stateDependencies.isValidating = true;
            return isValidating;
        },
        get isLoading () {
            stateDependencies.isLoading = true;
            return isLoading;
        }
    };
    return swrResponse;
};
const SWRConfig = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.O.defineProperty(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.g, 'defaultValue', {
    value: _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.d
});
/**
 * A hook to fetch data.
 *
 * @link https://swr.vercel.app
 * @example
 * ```jsx
 * import useSWR from 'swr'
 * function Profile() {
 *   const { data, error, isLoading } = useSWR('/api/user', fetcher)
 *   if (error) return <div>failed to load</div>
 *   if (isLoading) return <div>loading...</div>
 *   return <div>hello {data.name}!</div>
 * }
 * ```
 */ const useSWR = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.withArgs)(useSWRHandler);

// useSWR




/***/ }),

/***/ "./node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function is(x, y) {
      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
      didWarnOld18Alpha ||
        void 0 === React.startTransition ||
        ((didWarnOld18Alpha = !0),
        console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
      var value = getSnapshot();
      if (!didWarnUncachedGetSnapshot) {
        var cachedValue = getSnapshot();
        objectIs(value, cachedValue) ||
          (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ),
          (didWarnUncachedGetSnapshot = !0));
      }
      cachedValue = useState({
        inst: { value: value, getSnapshot: getSnapshot }
      });
      var inst = cachedValue[0].inst,
        forceUpdate = cachedValue[1];
      useLayoutEffect(
        function () {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
        },
        [subscribe, value, getSnapshot]
      );
      useEffect(
        function () {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
          return subscribe(function () {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
          });
        },
        [subscribe]
      );
      useDebugValue(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return !0;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
      return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __webpack_require__(/*! react */ "react"),
      objectIs = "function" === typeof Object.is ? Object.is : is,
      useState = React.useState,
      useEffect = React.useEffect,
      useLayoutEffect = React.useLayoutEffect,
      useDebugValue = React.useDebugValue,
      didWarnOld18Alpha = !1,
      didWarnUncachedGetSnapshot = !1,
      shim =
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
          ? useSyncExternalStore$1
          : useSyncExternalStore$2;
    exports.useSyncExternalStore =
      void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "./node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/shim/index.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/shim/index.js ***!
  \**************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "./node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/react.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/react.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSnapshot: () => (/* binding */ useSnapshot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var proxy_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proxy-compare */ "./node_modules/.pnpm/proxy-compare@3.0.1/node_modules/proxy-compare/dist/index.js");
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! valtio/vanilla */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/vanilla.mjs");




const useAffectedDebugValue = (state, affected) => {
  const pathList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    pathList.current = (0,proxy_compare__WEBPACK_IMPORTED_MODULE_1__.affectedToPathList)(state, affected, true);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(pathList.current);
};
const condUseAffectedDebugValue = useAffectedDebugValue;
const targetCache = /* @__PURE__ */ new WeakMap();
function useSnapshot(proxyObject, options) {
  const notifyInSync = options == null ? void 0 : options.sync;
  const affected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => proxyObject && /* @__PURE__ */ new WeakMap(),
    [proxyObject]
  );
  const lastSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);
  let inRender = true;
  const currSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (callback) => {
        const unsub = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_2__.subscribe)(proxyObject, callback, notifyInSync);
        callback();
        return unsub;
      },
      [proxyObject, notifyInSync]
    ),
    () => {
      const nextSnapshot = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_2__.snapshot)(proxyObject);
      try {
        if (!inRender && lastSnapshot.current && !(0,proxy_compare__WEBPACK_IMPORTED_MODULE_1__.isChanged)(
          lastSnapshot.current,
          nextSnapshot,
          affected,
          /* @__PURE__ */ new WeakMap()
        )) {
          return lastSnapshot.current;
        }
      } catch (e) {
      }
      return nextSnapshot;
    },
    () => (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_2__.snapshot)(proxyObject)
  );
  inRender = false;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    lastSnapshot.current = currSnapshot;
  });
  if (( false ? 0 : void 0) !== "production") {
    condUseAffectedDebugValue(currSnapshot, affected);
  }
  const proxyCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /* @__PURE__ */ new WeakMap(), []);
  return (0,proxy_compare__WEBPACK_IMPORTED_MODULE_1__.createProxy)(currSnapshot, affected, proxyCache, targetCache);
}




/***/ }),

/***/ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/vanilla.mjs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/vanilla.mjs ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVersion: () => (/* binding */ getVersion),
/* harmony export */   proxy: () => (/* binding */ proxy),
/* harmony export */   ref: () => (/* binding */ ref),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   subscribe: () => (/* binding */ subscribe),
/* harmony export */   unstable_getInternalStates: () => (/* binding */ unstable_getInternalStates),
/* harmony export */   unstable_replaceInternalFunction: () => (/* binding */ unstable_replaceInternalFunction)
/* harmony export */ });
/* harmony import */ var proxy_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-compare */ "./node_modules/.pnpm/proxy-compare@3.0.1/node_modules/proxy-compare/dist/index.js");


const isObject = (x) => typeof x === "object" && x !== null;
const canProxyDefault = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer) && !(x instanceof Promise);
const createSnapshotDefault = (target, version) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const { enumerable } = Reflect.getOwnPropertyDescriptor(
      target,
      key
    );
    const desc = {
      value,
      enumerable,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(value, false);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshotDefault(target2, ensureVersion());
    }
    Object.defineProperty(snap, key, desc);
  });
  return Object.preventExtensions(snap);
};
const createHandlerDefault = (isInitializing, addPropListener, removePropListener, notifyUpdate) => ({
  deleteProperty(target, prop) {
    const prevValue = Reflect.get(target, prop);
    removePropListener(prop);
    const deleted = Reflect.deleteProperty(target, prop);
    if (deleted) {
      notifyUpdate(["delete", [prop], prevValue]);
    }
    return deleted;
  },
  set(target, prop, value, receiver) {
    const hasPrevValue = !isInitializing() && Reflect.has(target, prop);
    const prevValue = Reflect.get(target, prop, receiver);
    if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
      return true;
    }
    removePropListener(prop);
    if (isObject(value)) {
      value = (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.getUntracked)(value) || value;
    }
    const nextValue = !proxyStateMap.has(value) && canProxy(value) ? proxy(value) : value;
    addPropListener(prop, nextValue);
    Reflect.set(target, prop, nextValue, receiver);
    notifyUpdate(["set", [prop], value, prevValue]);
    return true;
  }
});
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const snapCache = /* @__PURE__ */ new WeakMap();
const versionHolder = [1, 1];
const proxyCache = /* @__PURE__ */ new WeakMap();
let objectIs = Object.is;
let newProxy = (target, handler) => new Proxy(target, handler);
let canProxy = canProxyDefault;
let createSnapshot = createSnapshotDefault;
let createHandler = createHandlerDefault;
function proxy(baseObject = {}) {
  if (!isObject(baseObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(baseObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propValue) => {
    const propProxyState = !refSet.has(propValue) && proxyStateMap.get(propValue);
    if (propProxyState) {
      if (( false ? 0 : void 0) !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if (( false ? 0 : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  let initializing = true;
  const handler = createHandler(
    () => initializing,
    addPropListener,
    removePropListener,
    notifyUpdate
  );
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(baseObject, proxyObject);
  const proxyState = [baseObject, ensureVersion, addListener];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(baseObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      baseObject,
      key
    );
    if ("value" in desc && desc.writable) {
      proxyObject[key] = baseObject[key];
    }
  });
  initializing = false;
  return proxyObject;
}
function getVersion(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if (( false ? 0 : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[2];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  if (( false ? 0 : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion] = proxyState;
  return createSnapshot(target, ensureVersion());
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}
function unstable_getInternalStates() {
  return {
    proxyStateMap,
    refSet,
    snapCache,
    versionHolder,
    proxyCache
  };
}
function unstable_replaceInternalFunction(name, fn) {
  switch (name) {
    case "objectIs":
      objectIs = fn(objectIs);
      break;
    case "newProxy":
      newProxy = fn(newProxy);
      break;
    case "canProxy":
      canProxy = fn(canProxy);
      break;
    case "createSnapshot":
      createSnapshot = fn(createSnapshot);
      break;
    case "createHandler":
      createHandler = fn(createHandler);
      break;
    default:
      throw new Error("unknown function");
  }
}




/***/ }),

/***/ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepClone: () => (/* binding */ deepClone),
/* harmony export */   devtools: () => (/* binding */ devtools),
/* harmony export */   proxyMap: () => (/* binding */ proxyMap),
/* harmony export */   proxySet: () => (/* binding */ proxySet),
/* harmony export */   subscribeKey: () => (/* binding */ subscribeKey),
/* harmony export */   watch: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! valtio/vanilla */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/vanilla.mjs");


function subscribeKey(proxyObject, key, callback, notifyInSync) {
  let prevValue = proxyObject[key];
  return (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.subscribe)(
    proxyObject,
    () => {
      const nextValue = proxyObject[key];
      if (!Object.is(prevValue, nextValue)) {
        callback(prevValue = nextValue);
      }
    },
    notifyInSync
  );
}

let currentCleanups;
function watch(callback, options) {
  let alive = true;
  const cleanups = /* @__PURE__ */ new Set();
  const subscriptions = /* @__PURE__ */ new Map();
  const cleanup = () => {
    if (alive) {
      alive = false;
      cleanups.forEach((clean) => clean());
      cleanups.clear();
      subscriptions.forEach((unsubscribe) => unsubscribe());
      subscriptions.clear();
    }
  };
  const revalidate = async () => {
    if (!alive) {
      return;
    }
    cleanups.forEach((clean) => clean());
    cleanups.clear();
    const proxiesToSubscribe = /* @__PURE__ */ new Set();
    const parent = currentCleanups;
    currentCleanups = cleanups;
    try {
      const promiseOrPossibleCleanup = callback((proxyObject) => {
        proxiesToSubscribe.add(proxyObject);
        if (alive && !subscriptions.has(proxyObject)) {
          const unsubscribe = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.subscribe)(proxyObject, revalidate, options == null ? void 0 : options.sync);
          subscriptions.set(proxyObject, unsubscribe);
        }
        return proxyObject;
      });
      const couldBeCleanup = promiseOrPossibleCleanup && promiseOrPossibleCleanup instanceof Promise ? await promiseOrPossibleCleanup : promiseOrPossibleCleanup;
      if (couldBeCleanup) {
        if (alive) {
          cleanups.add(couldBeCleanup);
        } else {
          cleanup();
        }
      }
    } finally {
      currentCleanups = parent;
    }
    subscriptions.forEach((unsubscribe, proxyObject) => {
      if (!proxiesToSubscribe.has(proxyObject)) {
        subscriptions.delete(proxyObject);
        unsubscribe();
      }
    });
  };
  if (currentCleanups) {
    currentCleanups.add(cleanup);
  }
  revalidate();
  return cleanup;
}

const DEVTOOLS = Symbol();
function devtools(proxyObject, options) {
  const { enabled, name = "", ...rest } = options || {};
  let extension;
  try {
    extension = (enabled != null ? enabled : ( false ? 0 : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch (e) {
  }
  if (!extension) {
    if (( false ? 0 : void 0) !== "production" && enabled) {
      console.warn("[Warning] Please install/enable Redux devtools extension");
    }
    return;
  }
  let isTimeTraveling = false;
  const devtools2 = extension.connect({ name, ...rest });
  const unsub1 = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.subscribe)(proxyObject, (ops) => {
    const action = ops.filter(([_, path]) => path[0] !== DEVTOOLS).map(([op, path]) => `${op}:${path.map(String).join(".")}`).join(", ");
    if (!action) {
      return;
    }
    if (isTimeTraveling) {
      isTimeTraveling = false;
    } else {
      const snapWithoutDevtools = Object.assign({}, (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.snapshot)(proxyObject));
      delete snapWithoutDevtools[DEVTOOLS];
      devtools2.send(
        {
          type: action,
          updatedAt: (/* @__PURE__ */ new Date()).toLocaleString()
        },
        snapWithoutDevtools
      );
    }
  });
  const unsub2 = devtools2.subscribe((message) => {
    var _a, _b, _c, _d, _e, _f;
    if (message.type === "ACTION" && message.payload) {
      try {
        Object.assign(proxyObject, JSON.parse(message.payload));
      } catch (e) {
        console.error(
          "please dispatch a serializable value that JSON.parse() and proxy() support\n",
          e
        );
      }
    }
    if (message.type === "DISPATCH" && message.state) {
      if (((_a = message.payload) == null ? void 0 : _a.type) === "JUMP_TO_ACTION" || ((_b = message.payload) == null ? void 0 : _b.type) === "JUMP_TO_STATE") {
        isTimeTraveling = true;
        const state = JSON.parse(message.state);
        Object.assign(proxyObject, state);
      }
      proxyObject[DEVTOOLS] = message;
    } else if (message.type === "DISPATCH" && ((_c = message.payload) == null ? void 0 : _c.type) === "COMMIT") {
      devtools2.init((0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.snapshot)(proxyObject));
    } else if (message.type === "DISPATCH" && ((_d = message.payload) == null ? void 0 : _d.type) === "IMPORT_STATE") {
      const actions = (_e = message.payload.nextLiftedState) == null ? void 0 : _e.actionsById;
      const computedStates = ((_f = message.payload.nextLiftedState) == null ? void 0 : _f.computedStates) || [];
      isTimeTraveling = true;
      computedStates.forEach(({ state }, index) => {
        const action = actions[index] || "No action found";
        Object.assign(proxyObject, state);
        if (index === 0) {
          devtools2.init((0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.snapshot)(proxyObject));
        } else {
          devtools2.send(action, (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.snapshot)(proxyObject));
        }
      });
    }
  });
  devtools2.init((0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.snapshot)(proxyObject));
  return () => {
    unsub1();
    unsub2 == null ? void 0 : unsub2();
  };
}

const { proxyStateMap: proxyStateMap$1, snapCache: snapCache$1 } = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.unstable_getInternalStates)();
const isProxy$1 = (x) => proxyStateMap$1.has(x);
const isProxyMap = (obj) => {
  return Symbol.toStringTag in obj && obj[Symbol.toStringTag] === "Map" && proxyStateMap$1.has(obj);
};
function proxyMap(entries) {
  const initialData = [];
  let initialIndex = 0;
  const indexMap = /* @__PURE__ */ new Map();
  const snapMapCache = /* @__PURE__ */ new WeakMap();
  const registerSnapMap = () => {
    const cache = snapCache$1.get(vObject);
    const latestSnap = cache == null ? void 0 : cache[1];
    if (latestSnap && !snapMapCache.has(latestSnap)) {
      const clonedMap = new Map(indexMap);
      snapMapCache.set(latestSnap, clonedMap);
    }
  };
  const getMapForThis = (x) => snapMapCache.get(x) || indexMap;
  if (entries) {
    if (typeof entries[Symbol.iterator] !== "function") {
      throw new TypeError(
        "proxyMap:\n	initial state must be iterable\n		tip: structure should be [[key, value]]"
      );
    }
    for (const [key, value] of entries) {
      indexMap.set(key, initialIndex);
      initialData[initialIndex++] = value;
    }
  }
  const vObject = {
    data: initialData,
    index: initialIndex,
    epoch: 0,
    get size() {
      if (!isProxy$1(this)) {
        registerSnapMap();
      }
      const map = getMapForThis(this);
      return map.size;
    },
    get(key) {
      const map = getMapForThis(this);
      const index = map.get(key);
      if (index === void 0) {
        this.epoch;
        return void 0;
      }
      return this.data[index];
    },
    has(key) {
      const map = getMapForThis(this);
      this.epoch;
      return map.has(key);
    },
    set(key, value) {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      const index = indexMap.get(key);
      if (index === void 0) {
        indexMap.set(key, this.index);
        this.data[this.index++] = value;
      } else {
        this.data[index] = value;
      }
      this.epoch++;
      return this;
    },
    delete(key) {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      const index = indexMap.get(key);
      if (index === void 0) {
        return false;
      }
      delete this.data[index];
      indexMap.delete(key);
      this.epoch++;
      return true;
    },
    clear() {
      if (!isProxy$1(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      this.data.length = 0;
      this.index = 0;
      this.epoch++;
      indexMap.clear();
    },
    forEach(cb) {
      this.epoch;
      const map = getMapForThis(this);
      map.forEach((index, key) => {
        cb(this.data[index], key, this);
      });
    },
    *entries() {
      this.epoch;
      const map = getMapForThis(this);
      for (const [key, index] of map) {
        yield [key, this.data[index]];
      }
    },
    *keys() {
      this.epoch;
      const map = getMapForThis(this);
      for (const key of map.keys()) {
        yield key;
      }
    },
    *values() {
      this.epoch;
      const map = getMapForThis(this);
      for (const index of map.values()) {
        yield this.data[index];
      }
    },
    [Symbol.iterator]() {
      return this.entries();
    },
    get [Symbol.toStringTag]() {
      return "Map";
    },
    toJSON() {
      return new Map(this.entries());
    }
  };
  const proxiedObject = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.proxy)(vObject);
  Object.defineProperties(proxiedObject, {
    size: { enumerable: false },
    index: { enumerable: false },
    epoch: { enumerable: false },
    data: { enumerable: false },
    toJSON: { enumerable: false }
  });
  Object.seal(proxiedObject);
  return proxiedObject;
}

const { proxyStateMap, snapCache } = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.unstable_getInternalStates)();
const maybeProxify = (x) => typeof x === "object" ? (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.proxy)({ x }).x : x;
const isProxy = (x) => proxyStateMap.has(x);
const isProxySet = (obj) => {
  return Symbol.toStringTag in obj && obj[Symbol.toStringTag] === "Set" && proxyStateMap.has(obj);
};
function proxySet(initialValues) {
  const initialData = [];
  const indexMap = /* @__PURE__ */ new Map();
  let initialIndex = 0;
  const snapMapCache = /* @__PURE__ */ new WeakMap();
  const registerSnapMap = () => {
    const cache = snapCache.get(vObject);
    const latestSnap = cache == null ? void 0 : cache[1];
    if (latestSnap && !snapMapCache.has(latestSnap)) {
      const clonedMap = new Map(indexMap);
      snapMapCache.set(latestSnap, clonedMap);
    }
  };
  const getMapForThis = (x) => snapMapCache.get(x) || indexMap;
  if (initialValues) {
    if (typeof initialValues[Symbol.iterator] !== "function") {
      throw new TypeError("not iterable");
    }
    for (const value of initialValues) {
      if (!indexMap.has(value)) {
        const v = maybeProxify(value);
        indexMap.set(v, initialIndex);
        initialData[initialIndex++] = v;
      }
    }
  }
  const vObject = {
    data: initialData,
    index: initialIndex,
    epoch: 0,
    get size() {
      if (!isProxy(this)) {
        registerSnapMap();
      }
      return indexMap.size;
    },
    has(value) {
      const map = getMapForThis(this);
      const v = maybeProxify(value);
      this.epoch;
      return map.has(v);
    },
    add(value) {
      if (!isProxy(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      const v = maybeProxify(value);
      if (!indexMap.has(v)) {
        indexMap.set(v, this.index);
        this.data[this.index++] = v;
        this.epoch++;
      }
      return this;
    },
    delete(value) {
      if (!isProxy(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      const v = maybeProxify(value);
      const index = indexMap.get(v);
      if (index === void 0) {
        return false;
      }
      delete this.data[index];
      indexMap.delete(v);
      this.epoch++;
      return true;
    },
    clear() {
      if (!isProxy(this)) {
        throw new Error("Cannot perform mutations on a snapshot");
      }
      this.data.length = 0;
      this.index = 0;
      this.epoch++;
      indexMap.clear();
    },
    forEach(cb) {
      this.epoch;
      const map = getMapForThis(this);
      map.forEach((index) => {
        cb(this.data[index], this.data[index], this);
      });
    },
    *values() {
      this.epoch;
      const map = getMapForThis(this);
      for (const index of map.values()) {
        yield this.data[index];
      }
    },
    keys() {
      this.epoch;
      return this.values();
    },
    *entries() {
      this.epoch;
      const map = getMapForThis(this);
      for (const index of map.values()) {
        const value = this.data[index];
        yield [value, value];
      }
    },
    toJSON() {
      return new Set(this.values());
    },
    [Symbol.iterator]() {
      return this.values();
    },
    get [Symbol.toStringTag]() {
      return "Set";
    },
    intersection(other) {
      this.epoch;
      const otherSet = proxySet(other);
      const resultSet = proxySet();
      for (const value of this.values()) {
        if (otherSet.has(value)) {
          resultSet.add(value);
        }
      }
      return proxySet(resultSet);
    },
    union(other) {
      this.epoch;
      const resultSet = proxySet();
      const otherSet = proxySet(other);
      for (const value of this.values()) {
        resultSet.add(value);
      }
      for (const value of otherSet) {
        resultSet.add(value);
      }
      return proxySet(resultSet);
    },
    difference(other) {
      this.epoch;
      const resultSet = proxySet();
      const otherSet = proxySet(other);
      for (const value of this.values()) {
        if (!otherSet.has(value)) {
          resultSet.add(value);
        }
      }
      return proxySet(resultSet);
    },
    symmetricDifference(other) {
      this.epoch;
      const resultSet = proxySet();
      const otherSet = proxySet(other);
      for (const value of this.values()) {
        if (!otherSet.has(value)) {
          resultSet.add(value);
        }
      }
      for (const value of otherSet.values()) {
        if (!this.has(value)) {
          resultSet.add(value);
        }
      }
      return proxySet(resultSet);
    },
    isSubsetOf(other) {
      this.epoch;
      const otherSet = proxySet(other);
      return this.size <= other.size && [...this.values()].every((value) => otherSet.has(value));
    },
    isSupersetOf(other) {
      this.epoch;
      const otherSet = proxySet(other);
      return this.size >= other.size && [...otherSet].every((value) => this.has(value));
    },
    isDisjointFrom(other) {
      this.epoch;
      const otherSet = proxySet(other);
      return [...this.values()].every((value) => !otherSet.has(value));
    }
  };
  const proxiedObject = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.proxy)(vObject);
  Object.defineProperties(proxiedObject, {
    size: { enumerable: false },
    data: { enumerable: false },
    index: { enumerable: false },
    epoch: { enumerable: false },
    toJSON: { enumerable: false }
  });
  Object.seal(proxiedObject);
  return proxiedObject;
}

const isObject = (x) => typeof x === "object" && x !== null;
let defaultRefSet;
const getDefaultRefSet = () => {
  if (!defaultRefSet) {
    defaultRefSet = (0,valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__.unstable_getInternalStates)().refSet;
  }
  return defaultRefSet;
};
function deepClone(obj, getRefSet = getDefaultRefSet) {
  if (!isObject(obj) || getRefSet().has(obj)) {
    return obj;
  }
  if (isProxySet(obj)) {
    return proxySet([...obj]);
  }
  if (isProxyMap(obj)) {
    return proxyMap([
      ...obj.entries()
    ]);
  }
  const baseObject = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  Reflect.ownKeys(obj).forEach((key) => {
    baseObject[key] = deepClone(obj[key], getRefSet);
  });
  return baseObject;
}




/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_CentreList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/CentreList */ "./src/components/CentreList.tsx");
/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Filter */ "./src/components/Filter/index.tsx");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Map */ "./src/components/Map.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/.pnpm/swr@2.3.3_react@19.0.0/node_modules/swr/dist/index/index.mjs");





/**
 * Quote form react component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  /**
   * Sends data to a specified URL using a POST request.
   *
   * @param {string} url - The URL to send the data to.
   * @param {object} payload - The payload object containing the data to be sent.
   * @param {any} payload.arg - The argument to be included in the payload.
   *
   * @returns {Promise<any>} - A promise that resolves to the JSON response from the server.
   */
  const getData = async url => {
    const res = await fetch(url, {
      headers: {
        'X-WP-NONCE': globalVariables.nonce // Include the nonce in the request headers
      }
    });
    return await res.json();
  };
  const url = '';
  const {
    data
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(url, getData);
  if (!data?.success) {
    // state.formData = cloneDeep(data?.data);
    // https://stgmfs5.wpenginepowered.com/wp-json/wp/v2/centre/?per_page=100&_fields=id,title,acf

    return /*#__PURE__*/React.createElement("form", {
      className: "grid gap-8 md:gap-10"
    }, /*#__PURE__*/React.createElement(_components_Filter__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_components_CentreList__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "rounded-radius2 bg-color15 grid min-h-[30rem] place-items-center md:min-h-[40rem]"
    }, /*#__PURE__*/React.createElement("img", {
      alt: "Loading",
      width: "60",
      height: "60",
      className: "",
      src: "/assets/images/icons/spinner-dark.svg"
    }));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/CentreList.tsx":
/*!***************************************!*\
  !*** ./src/components/CentreList.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CentreList = () => {
  return /*#__PURE__*/React.createElement("div", null, "CentreList");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CentreList);

/***/ }),

/***/ "./src/components/Filter/FilterOptions.tsx":
/*!*************************************************!*\
  !*** ./src/components/Filter/FilterOptions.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store.ts");
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! valtio */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/react.mjs");
/* harmony import */ var react_range_slider_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-range-slider-input */ "./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/index.js");
/* harmony import */ var react_range_slider_input_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-range-slider-input/dist/style.css */ "./node_modules/.pnpm/react-range-slider-input@3.2.1/node_modules/react-range-slider-input/dist/style.css");
/* harmony import */ var _Input_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input.module.scss */ "./src/components/Filter/Input.module.scss");





const FilterOptions = () => {
  const snap = (0,valtio__WEBPACK_IMPORTED_MODULE_4__.useSnapshot)(_store__WEBPACK_IMPORTED_MODULE_0__.state);
  return /*#__PURE__*/React.createElement("div", {
    className: `grid gap-6 ${_Input_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].styles}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold"
  }, "Distance"), /*#__PURE__*/React.createElement(react_range_slider_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    min: snap.formData.distance.min,
    max: snap.formData.distance.max,
    value: snap.formData.distance.value,
    onInput: value => _store__WEBPACK_IMPORTED_MODULE_0__.state.formData.distance.value = value
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterOptions);

/***/ }),

/***/ "./src/components/Filter/Input.module.scss":
/*!*************************************************!*\
  !*** ./src/components/Filter/Input.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.98.0/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.5.3_typescript@5.8.2_webpack@5.98.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.86.0_webpack@5.98.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./Input.module.scss */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.98.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.5.3_typescript@5.8.2_webpack@5.98.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.86.0_webpack@5.98.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Filter/Input.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_3_3_4_webpack_5_98_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_98_0_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_5_3_typescript_5_8_2_webpack_5_98_0_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_13_3_3_sass_1_86_0_webpack_5_98_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_Input_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Filter/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Filter/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilterOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterOptions */ "./src/components/Filter/FilterOptions.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./src/store.ts");
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! valtio */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/react.mjs");



const Filter = () => {
  const snap = (0,valtio__WEBPACK_IMPORTED_MODULE_2__.useSnapshot)(_store__WEBPACK_IMPORTED_MODULE_1__.state);
  return /*#__PURE__*/React.createElement("div", {
    className: "grid gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-input relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: snap.formData?.search,
    onChange: e => _store__WEBPACK_IMPORTED_MODULE_1__.state.formData.search = e.target.value,
    className: "!pr-12"
  }), /*#__PURE__*/React.createElement("img", {
    src: "/public/assets/images/icons/icon-search.svg",
    alt: "",
    width: 24,
    height: 24,
    className: "absolute right-4 top-1/2 z-[3] -translate-y-1/2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-4 pb-4",
    style: {
      borderBottom: '1px solid var(--Gray-80)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flex items-center justify-start gap-4 text-lg font-700",
    onClick: () => _store__WEBPACK_IMPORTED_MODULE_1__.state.modalOpen = !snap.modalOpen
  }, /*#__PURE__*/React.createElement("img", {
    src: "/public/assets/images/icons/icon-filter.svg",
    alt: "",
    width: 24,
    height: 24
  }), "Filters (9)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-sm font-700 underline decoration-gray-80 decoration-2 underline-offset-[5px]",
    onClick: snap.handleReset
  }, "Reset")), /*#__PURE__*/React.createElement("div", {
    className: `container fixed left-0 top-0 z-20 h-full w-full overflow-y-auto overflow-x-hidden bg-white transition-all duration-700 ${snap.modalOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-6 pb-24 pt-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => _store__WEBPACK_IMPORTED_MODULE_1__.state.modalOpen = false
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/images/icons/icon-cross.svg",
    alt: "",
    width: 24,
    height: 24
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-700"
  }, "Filters"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-base font-700 underline decoration-gray-80 decoration-2 underline-offset-[10px]",
    onClick: snap.handleReset
  }, "Reset")), /*#__PURE__*/React.createElement(_FilterOptions__WEBPACK_IMPORTED_MODULE_0__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./src/components/Map.tsx":
/*!********************************!*\
  !*** ./src/components/Map.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Map = () => {
  return /*#__PURE__*/React.createElement("div", null, "Map");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! valtio */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/vanilla.mjs");
/* harmony import */ var valtio_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! valtio/utils */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@18.3.20_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs");


const defaultFormData = {
  centreType: [{
    label: 'All',
    value: 'all',
    active: true
  }, {
    label: 'Early Years Centre',
    value: 'early-years-centre',
    active: false
  }, {
    label: 'Large Childcare Centre',
    value: 'large-childcare-centre',
    active: false
  }],
  programmeType: [{
    label: 'Infant Care',
    value: 'infant-care',
    active: true
  }, {
    label: 'Playgroup',
    value: 'playgroup',
    active: false
  }, {
    label: 'Nursery 1',
    value: 'nursery-1',
    active: false
  }, {
    label: 'Nursery 2',
    value: 'nursery-2',
    active: false
  }, {
    label: 'Kindergarten 1',
    value: 'kindergarten-1',
    active: false
  }, {
    label: 'Kindergarten 2',
    value: 'kindergarten-2',
    active: false
  }],
  distance: {
    min: 0,
    max: 20,
    value: [5, 15]
  },
  motherTongue: [{
    label: 'All',
    value: 'all',
    active: true
  }, {
    label: 'Malay',
    value: 'malay',
    active: false
  }, {
    label: 'Chinese',
    value: 'chinese',
    active: false
  }, {
    label: 'Tamil',
    value: 'tamil',
    active: false
  }],
  isCertified: false,
  search: '',
  latitude: 0,
  longitude: 0
};
const state = (0,valtio__WEBPACK_IMPORTED_MODULE_0__.proxy)({
  formData: {
    ...defaultFormData
  },
  modalOpen: true,
  handleReset: () => {
    state.formData = {
      ...defaultFormData
    };
  }
});
(0,valtio_utils__WEBPACK_IMPORTED_MODULE_1__.devtools)(state, {
  name: 'Centre Search',
  enabled: true
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.tsx");


const element = document.getElementById('centre-search');
if (element) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const root = ReactDOM.createRoot(element);
  root.render(/*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFlOzs7Ozs7Ozs7O0FDeHFCakI7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiwwQ0FBMEMsbUJBQU8sQ0FBQywwSkFBMEI7QUFDNUUscUNBQXFDLGlDQUFpQztBQUN0RSxlQUFlLGtCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDlCLE1BQTBJO0FBQzFJLE1BQWdJO0FBQ2hJLE1BQXVJO0FBQ3ZJLE1BQTBKO0FBQzFKLE1BQW1KO0FBQ25KLE1BQW1KO0FBQ25KLE1BQXViO0FBQ3ZiO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHVJQUFtQjtBQUMvQyx3QkFBd0Isb0pBQWE7O0FBRXJDLHVCQUF1Qix5SUFBYTtBQUNwQztBQUNBLGlCQUFpQixpSUFBTTtBQUN2Qiw2QkFBNkIsd0lBQWtCOztBQUUvQyxhQUFhLDRJQUFHLENBQUMsNlhBQU87Ozs7QUFJaVk7QUFDelosT0FBTyxpRUFBZSw2WEFBTyxJQUFJLDZYQUFPLFVBQVUsNlhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ3FIO0FBQ3BFO0FBQ1o7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsWUFBWTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix3Q0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBSztBQUM3QjtBQUNBLFlBQVksbUJBQW1CO0FBQy9CLFlBQVksbUJBQW1CO0FBQy9CLGFBQWEsbUJBQW1CO0FBQ2hDLGFBQWEsbUJBQW1CO0FBQ2hDLGNBQWM7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBFQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuZ0J2QjtBQUNSO0FBQ047QUFHVjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUksR0FBRyxHQUFHQSxDQUFBLEtBQU07RUFDZDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxNQUFNQyxPQUFPLEdBQUcsTUFBT0MsR0FBVyxJQUFLO0lBQ25DLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsRUFBRTtNQUN6QkcsT0FBTyxFQUFFO1FBQ0wsWUFBWSxFQUFFQyxlQUFlLENBQUNDLEtBQUssQ0FBQztNQUN4QztJQUNKLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTUosR0FBRyxDQUFDSyxJQUFJLENBQUMsQ0FBQztFQUMzQixDQUFDO0VBRUQsTUFBTU4sR0FBRyxHQUFHLEVBQUU7RUFFZCxNQUFNO0lBQUVPO0VBQUssQ0FBQyxHQUFHViwrQ0FBTSxDQUFDRyxHQUFHLEVBQUVELE9BQU8sQ0FBQztFQUVyQyxJQUFJLENBQUNRLElBQUksRUFBRUMsT0FBTyxFQUFFO0lBQ2hCO0lBQ0E7O0lBRUEsb0JBQ0lDLEtBQUEsQ0FBQUMsYUFBQTtNQUFNQyxTQUFTLEVBQUM7SUFBc0IsZ0JBQ2xDRixLQUFBLENBQUFDLGFBQUEsQ0FBQ2YsMERBQU0sTUFBRSxDQUFDLGVBQ1ZjLEtBQUEsQ0FBQUMsYUFBQSxDQUFDaEIsOERBQVUsTUFBRSxDQUFDLGVBQ2RlLEtBQUEsQ0FBQUMsYUFBQSxDQUFDZCx1REFBRyxNQUFFLENBQ0osQ0FBQztFQUVmLENBQUMsTUFBTTtJQUNILG9CQUNJYSxLQUFBLENBQUFDLGFBQUE7TUFBS0MsU0FBUyxFQUFDO0lBQW1GLGdCQUM5RkYsS0FBQSxDQUFBQyxhQUFBO01BQUtFLEdBQUcsRUFBQyxTQUFTO01BQUNDLEtBQUssRUFBQyxJQUFJO01BQUNDLE1BQU0sRUFBQyxJQUFJO01BQUNILFNBQVMsRUFBQyxFQUFFO01BQUNJLEdBQUcsRUFBQztJQUF1QyxDQUFFLENBQ25HLENBQUM7RUFFZDtBQUNKLENBQUM7QUFFRCxpRUFBZWpCLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDeERsQixNQUFNSixVQUFVLEdBQUdBLENBQUEsS0FBTTtFQUNyQixvQkFBT2UsS0FBQSxDQUFBQyxhQUFBLGNBQUssWUFBZSxDQUFDO0FBQ2hDLENBQUM7QUFFRCxpRUFBZWhCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTztBQUNLO0FBRWM7QUFDRjtBQUNSO0FBRXpDLE1BQU0wQixhQUFhLEdBQUdBLENBQUEsS0FBTTtFQUN4QixNQUFNQyxJQUFJLEdBQUdKLG1EQUFXLENBQUNELHlDQUFLLENBQUM7RUFFL0Isb0JBQ0lQLEtBQUEsQ0FBQUMsYUFBQTtJQUFLQyxTQUFTLEVBQUUsY0FBY1EsMERBQU0sQ0FBQ0EsTUFBTTtFQUFHLGdCQUUxQ1YsS0FBQSxDQUFBQyxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFZLGdCQUN2QkYsS0FBQSxDQUFBQyxhQUFBO0lBQU1DLFNBQVMsRUFBQztFQUFtQixHQUFDLFVBQWMsQ0FBQyxlQUVuREYsS0FBQSxDQUFBQyxhQUFBLENBQUNRLGdFQUFXO0lBQ1JJLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxRQUFRLENBQUNDLFFBQVEsQ0FBQ0YsR0FBSTtJQUNoQ0csR0FBRyxFQUFFSixJQUFJLENBQUNFLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxHQUFJO0lBQ2hDQyxLQUFLLEVBQUVMLElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxRQUFRLENBQUNFLEtBQU07SUFDcENDLE9BQU8sRUFBRUQsS0FBSyxJQUFLVix5Q0FBSyxDQUFDTyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0UsS0FBSyxHQUFHQTtFQUFPLENBQzdELENBQ0EsQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlTixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUI1QixNQUEwSjtBQUMxSixNQUFnSjtBQUNoSixNQUF1SjtBQUN2SixNQUEwSztBQUMxSyxNQUFtSztBQUNuSyxNQUFtSztBQUNuSyxNQUErZTtBQUMvZTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qix5SkFBbUI7QUFDL0Msd0JBQXdCLHNLQUFhOztBQUVyQyx1QkFBdUIsMkpBQWE7QUFDcEM7QUFDQSxpQkFBaUIsbUpBQU07QUFDdkIsNkJBQTZCLDBKQUFrQjs7QUFFL0MsYUFBYSw4SkFBRyxDQUFDLDJiQUFPOzs7O0FBSXliO0FBQ2pkLE9BQU8saUVBQWUsMmJBQU8sSUFBSSwyYkFBTyxVQUFVLDJiQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmpDO0FBQ1o7QUFDSztBQUVyQyxNQUFNekIsTUFBTSxHQUFHQSxDQUFBLEtBQU07RUFDakIsTUFBTTBCLElBQUksR0FBR0osbURBQVcsQ0FBQ0QseUNBQUssQ0FBQztFQUUvQixvQkFDSVAsS0FBQSxDQUFBQyxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFZLGdCQUN2QkYsS0FBQSxDQUFBQyxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUFxQixnQkFDaENGLEtBQUEsQ0FBQUMsYUFBQTtJQUNJa0IsSUFBSSxFQUFDLE1BQU07SUFDWEYsS0FBSyxFQUFFTCxJQUFJLENBQUNFLFFBQVEsRUFBRU0sTUFBTztJQUM3QkMsUUFBUSxFQUFFQyxDQUFDLElBQUtmLHlDQUFLLENBQUNPLFFBQVEsQ0FBQ00sTUFBTSxHQUFHRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ04sS0FBTztJQUN4RGYsU0FBUyxFQUFDO0VBQVEsQ0FDckIsQ0FBQyxlQUNGRixLQUFBLENBQUFDLGFBQUE7SUFDSUssR0FBRyxFQUFDLDZDQUE2QztJQUNqREgsR0FBRyxFQUFDLEVBQUU7SUFDTkMsS0FBSyxFQUFFLEVBQUc7SUFDVkMsTUFBTSxFQUFFLEVBQUc7SUFDWEgsU0FBUyxFQUFDO0VBQWlELENBQzlELENBQ0EsQ0FBQyxlQUdORixLQUFBLENBQUFDLGFBQUE7SUFDSUMsU0FBUyxFQUFDLDhDQUE4QztJQUN4RHNCLEtBQUssRUFBRTtNQUFFQyxZQUFZLEVBQUU7SUFBMkI7RUFBRSxnQkFFcER6QixLQUFBLENBQUFDLGFBQUE7SUFDSWtCLElBQUksRUFBQyxRQUFRO0lBQ2JqQixTQUFTLEVBQUMsd0RBQXdEO0lBQ2xFd0IsT0FBTyxFQUFFQSxDQUFBLEtBQU9uQix5Q0FBSyxDQUFDb0IsU0FBUyxHQUFHLENBQUNmLElBQUksQ0FBQ2U7RUFBVyxnQkFFbkQzQixLQUFBLENBQUFDLGFBQUE7SUFBS0ssR0FBRyxFQUFDLDZDQUE2QztJQUFDSCxHQUFHLEVBQUMsRUFBRTtJQUFDQyxLQUFLLEVBQUUsRUFBRztJQUFDQyxNQUFNLEVBQUU7RUFBRyxDQUFFLENBQUMsZUFFbkYsQ0FBQyxlQUVUTCxLQUFBLENBQUFDLGFBQUE7SUFDSWtCLElBQUksRUFBQyxRQUFRO0lBQ2JqQixTQUFTLEVBQUMsbUZBQW1GO0lBQzdGd0IsT0FBTyxFQUFFZCxJQUFJLENBQUNnQjtFQUFZLEdBQzdCLE9BRU8sQ0FDUCxDQUFDLGVBR041QixLQUFBLENBQUFDLGFBQUE7SUFDSUMsU0FBUyxFQUFFLDBIQUEwSFUsSUFBSSxDQUFDZSxTQUFTLEdBQUcsK0NBQStDLEdBQUcsZ0RBQWdEO0VBQUcsZ0JBRTNQM0IsS0FBQSxDQUFBQyxhQUFBO0lBQUtDLFNBQVMsRUFBQztFQUF3QixnQkFFbkNGLEtBQUEsQ0FBQUMsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBeUMsZ0JBQ3BERixLQUFBLENBQUFDLGFBQUE7SUFBUWtCLElBQUksRUFBQyxRQUFRO0lBQUNPLE9BQU8sRUFBRUEsQ0FBQSxLQUFPbkIseUNBQUssQ0FBQ29CLFNBQVMsR0FBRztFQUFPLGdCQUMzRDNCLEtBQUEsQ0FBQUMsYUFBQTtJQUFLSyxHQUFHLEVBQUMscUNBQXFDO0lBQUNILEdBQUcsRUFBQyxFQUFFO0lBQUNDLEtBQUssRUFBRSxFQUFHO0lBQUNDLE1BQU0sRUFBRTtFQUFHLENBQUUsQ0FDMUUsQ0FBQyxlQUVUTCxLQUFBLENBQUFDLGFBQUE7SUFBTUMsU0FBUyxFQUFDO0VBQWtCLEdBQUMsU0FBYSxDQUFDLGVBRWpERixLQUFBLENBQUFDLGFBQUE7SUFDSWtCLElBQUksRUFBQyxRQUFRO0lBQ2JqQixTQUFTLEVBQUMsc0ZBQXNGO0lBQ2hHd0IsT0FBTyxFQUFFZCxJQUFJLENBQUNnQjtFQUFZLEdBQzdCLE9BRU8sQ0FDUCxDQUFDLGVBR041QixLQUFBLENBQUFDLGFBQUEsQ0FBQ1Usc0RBQWEsTUFBRSxDQUNmLENBQ0osQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlekIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUM5RXJCLE1BQU1DLEdBQUcsR0FBR0EsQ0FBQSxLQUFNO0VBQ2Qsb0JBQU9hLEtBQUEsQ0FBQUMsYUFBQSxjQUFLLEtBQVEsQ0FBQztBQUN6QixDQUFDO0FBRUQsaUVBQWVkLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKYTtBQUNTO0FBZ0R4QyxNQUFNNEMsZUFBa0MsR0FBRztFQUN2Q0MsVUFBVSxFQUFFLENBQ1I7SUFDSUMsS0FBSyxFQUFFLEtBQUs7SUFDWmhCLEtBQUssRUFBRSxLQUFLO0lBQ1ppQixNQUFNLEVBQUU7RUFDWixDQUFDLEVBQ0Q7SUFDSUQsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQmhCLEtBQUssRUFBRSxvQkFBb0I7SUFDM0JpQixNQUFNLEVBQUU7RUFDWixDQUFDLEVBQ0Q7SUFDSUQsS0FBSyxFQUFFLHdCQUF3QjtJQUMvQmhCLEtBQUssRUFBRSx3QkFBd0I7SUFDL0JpQixNQUFNLEVBQUU7RUFDWixDQUFDLENBQ0o7RUFDREMsYUFBYSxFQUFFLENBQ1g7SUFDSUYsS0FBSyxFQUFFLGFBQWE7SUFDcEJoQixLQUFLLEVBQUUsYUFBYTtJQUNwQmlCLE1BQU0sRUFBRTtFQUNaLENBQUMsRUFDRDtJQUNJRCxLQUFLLEVBQUUsV0FBVztJQUNsQmhCLEtBQUssRUFBRSxXQUFXO0lBQ2xCaUIsTUFBTSxFQUFFO0VBQ1osQ0FBQyxFQUNEO0lBQ0lELEtBQUssRUFBRSxXQUFXO0lBQ2xCaEIsS0FBSyxFQUFFLFdBQVc7SUFDbEJpQixNQUFNLEVBQUU7RUFDWixDQUFDLEVBQ0Q7SUFDSUQsS0FBSyxFQUFFLFdBQVc7SUFDbEJoQixLQUFLLEVBQUUsV0FBVztJQUNsQmlCLE1BQU0sRUFBRTtFQUNaLENBQUMsRUFDRDtJQUNJRCxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCaEIsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QmlCLE1BQU0sRUFBRTtFQUNaLENBQUMsRUFDRDtJQUNJRCxLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCaEIsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QmlCLE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FDSjtFQUNEbkIsUUFBUSxFQUFFO0lBQ05GLEdBQUcsRUFBRSxDQUFDO0lBQ05HLEdBQUcsRUFBRSxFQUFFO0lBQ1BDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0VBQ2pCLENBQUM7RUFDRG1CLFlBQVksRUFBRSxDQUNWO0lBQ0lILEtBQUssRUFBRSxLQUFLO0lBQ1poQixLQUFLLEVBQUUsS0FBSztJQUNaaUIsTUFBTSxFQUFFO0VBQ1osQ0FBQyxFQUNEO0lBQ0lELEtBQUssRUFBRSxPQUFPO0lBQ2RoQixLQUFLLEVBQUUsT0FBTztJQUNkaUIsTUFBTSxFQUFFO0VBQ1osQ0FBQyxFQUNEO0lBQ0lELEtBQUssRUFBRSxTQUFTO0lBQ2hCaEIsS0FBSyxFQUFFLFNBQVM7SUFDaEJpQixNQUFNLEVBQUU7RUFDWixDQUFDLEVBQ0Q7SUFDSUQsS0FBSyxFQUFFLE9BQU87SUFDZGhCLEtBQUssRUFBRSxPQUFPO0lBQ2RpQixNQUFNLEVBQUU7RUFDWixDQUFDLENBQ0o7RUFDREcsV0FBVyxFQUFFLEtBQUs7RUFDbEJqQixNQUFNLEVBQUUsRUFBRTtFQUNWa0IsUUFBUSxFQUFFLENBQUM7RUFDWEMsU0FBUyxFQUFFO0FBQ2YsQ0FBQztBQUVNLE1BQU1oQyxLQUFxQixHQUFHc0IsNkNBQUssQ0FBaUI7RUFDdkRmLFFBQVEsRUFBRTtJQUFFLEdBQUdpQjtFQUFnQixDQUFDO0VBQ2hDSixTQUFTLEVBQUUsSUFBSTtFQUNmQyxXQUFXLEVBQUVBLENBQUEsS0FBTTtJQUNmckIsS0FBSyxDQUFDTyxRQUFRLEdBQUc7TUFBRSxHQUFHaUI7SUFBZ0IsQ0FBQztFQUMzQztBQUNKLENBQW1CLENBQUM7QUFFcEJELHNEQUFRLENBQUN2QixLQUFLLEVBQUU7RUFBRWlDLElBQUksRUFBRSxlQUFlO0VBQUVDLE9BQU8sRUFBRTtBQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQzVJekQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNYO0FBRXhCLE1BQU1FLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO0FBRXhELElBQUlGLE9BQU8sRUFBRTtFQUNUO0VBQ0E7RUFDQSxNQUFNRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDTCxPQUFzQixDQUFDO0VBRXhERyxJQUFJLENBQUNHLE1BQU0sY0FDUGpELEtBQUEsQ0FBQUMsYUFBQSxDQUFDeUMsNkNBQVUscUJBQ1AxQyxLQUFBLENBQUFDLGFBQUEsQ0FBQ1osNENBQUcsTUFBRSxDQUNFLENBQ2hCLENBQUM7QUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nsc3hAMS4yLjEvbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci1ub24tZXh0ZW5zaWJsZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNsaWNlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc29ydC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvbGxlY3Rpb24td2Vhay5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlci1yZXN1bHQtb2JqZWN0LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3IuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlbGV0ZS1wcm9wZXJ0eS1vci10aHJvdy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Vudmlyb25tZW50LWZmLXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1pZS1vci1lZGdlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC13ZWJraXQtdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnJlZXppbmcuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWFjY2Vzc29yLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC10aGlzLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtc3ltYm9sLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItZGVmaW5lLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1leHRlbnNpYmxlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZvci1lYWNoLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLndlYWstbWFwLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLndlYWstbWFwLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmFuZ2Utc2xpZGVyLWlucHV0QDMuMi4xL25vZGVfbW9kdWxlcy9yZWFjdC1yYW5nZS1zbGlkZXItaW5wdXQvZGlzdC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyL0lucHV0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDYuMTEuMF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDYuMTEuMF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vZGVxdWFsQDIuMC4zL25vZGVfbW9kdWxlcy9kZXF1YWwvbGl0ZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3Byb3h5LWNvbXBhcmVAMy4wLjEvbm9kZV9tb2R1bGVzL3Byb3h5LWNvbXBhcmUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmFuZ2Utc2xpZGVyLWlucHV0QDMuMi4xL25vZGVfbW9kdWxlcy9yZWFjdC1yYW5nZS1zbGlkZXItaW5wdXQvZGlzdC9jb21wb25lbnRzL1JhbmdlU2xpZGVyLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yYW5nZS1zbGlkZXItaW5wdXRAMy4yLjEvbm9kZV9tb2R1bGVzL3JlYWN0LXJhbmdlLXNsaWRlci1pbnB1dC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yYW5nZS1zbGlkZXItaW5wdXRAMy4yLjEvbm9kZV9tb2R1bGVzL3JlYWN0LXJhbmdlLXNsaWRlci1pbnB1dC9kaXN0L3N0eWxlLmNzcz9lYzM5Iiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy40X3dlYnBhY2tANS45OC4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy40X3dlYnBhY2tANS45OC4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy40X3dlYnBhY2tANS45OC4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N3ckAyLjMuM19yZWFjdEAxOS4wLjAvbm9kZV9tb2R1bGVzL3N3ci9kaXN0L19pbnRlcm5hbC9jb25maWctY29udGV4dC1jbGllbnQtdjdWT0ZvNjYubWpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9zd3JAMi4zLjNfcmVhY3RAMTkuMC4wL25vZGVfbW9kdWxlcy9zd3IvZGlzdC9faW50ZXJuYWwvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vc3dyQDIuMy4zX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvc3dyL2Rpc3QvX2ludGVybmFsL2V2ZW50cy5tanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N3ckAyLjMuM19yZWFjdEAxOS4wLjAvbm9kZV9tb2R1bGVzL3N3ci9kaXN0L19pbnRlcm5hbC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N3ckAyLjMuM19yZWFjdEAxOS4wLjAvbm9kZV9tb2R1bGVzL3N3ci9kaXN0L2luZGV4L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmVAMS40LjBfcmVhY3RAMTkuMC4wL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmVAMS40LjBfcmVhY3RAMTkuMC4wL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL2luZGV4LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS92YWx0aW9AMi4xLjRfQHR5cGVzK3JlYWN0QDE4LjMuMjBfcmVhY3RAMTkuMC4wL25vZGVfbW9kdWxlcy92YWx0aW8vZXNtL3JlYWN0Lm1qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFsdGlvQDIuMS40X0B0eXBlcytyZWFjdEAxOC4zLjIwX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvdmFsdGlvL2VzbS92YW5pbGxhLm1qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFsdGlvQDIuMS40X0B0eXBlcytyZWFjdEAxOC4zLjIwX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvdmFsdGlvL2VzbS92YW5pbGxhL3V0aWxzLm1qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9zcmMvY29tcG9uZW50cy9DZW50cmVMaXN0LnRzeCIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXIvRmlsdGVyT3B0aW9ucy50c3giLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyL0lucHV0Lm1vZHVsZS5zY3NzP2Q3ZTMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9zcmMvY29tcG9uZW50cy9NYXAudHN4Iiwid2VicGFjazovL2RhdGUtdGltZS8uL3NyYy9zdG9yZS50cyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvZXh0ZXJuYWwgdmFyIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RhdGUtdGltZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKWZvcih0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpO2Vsc2UgZm9yKHQgaW4gZSllW3RdJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCI7Zjxhcmd1bWVudHMubGVuZ3RoOykoZT1hcmd1bWVudHNbZisrXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc1Bvc3NpYmxlUHJvdG90eXBlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArICRTdHJpbmcoYXJndW1lbnQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PT0gdW5kZWZpbmVkKSB7XG4gIGRlZmluZVByb3BlcnR5KEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcbiAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRkYyNi0gYnVnOiBBcnJheUJ1ZmZlcnMgYXJlIG5vbi1leHRlbnNpYmxlLCBidXQgT2JqZWN0LmlzRXh0ZW5zaWJsZSBkb2VzIG5vdCByZXBvcnQgaXRcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig4KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzZXh0ZW5zaWJsZSwgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBpZiAoT2JqZWN0LmlzRXh0ZW5zaWJsZShidWZmZXIpKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoYnVmZmVyLCAnYScsIHsgdmFsdWU6IDggfSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyUmVqZWN0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09PSA2O1xuICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT09IDc7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKHNlbGYpO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0KTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfUkVKRUNUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJSZWplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyhbXS5zbGljZSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG52YXIgc29ydCA9IGZ1bmN0aW9uIChhcnJheSwgY29tcGFyZWZuKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCA8IDgpIHtcbiAgICAvLyBpbnNlcnRpb24gc29ydFxuICAgIHZhciBpID0gMTtcbiAgICB2YXIgZWxlbWVudCwgajtcblxuICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICBqID0gaTtcbiAgICAgIGVsZW1lbnQgPSBhcnJheVtpXTtcbiAgICAgIHdoaWxlIChqICYmIGNvbXBhcmVmbihhcnJheVtqIC0gMV0sIGVsZW1lbnQpID4gMCkge1xuICAgICAgICBhcnJheVtqXSA9IGFycmF5Wy0tal07XG4gICAgICB9XG4gICAgICBpZiAoaiAhPT0gaSsrKSBhcnJheVtqXSA9IGVsZW1lbnQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIG1lcmdlIHNvcnRcbiAgICB2YXIgbWlkZGxlID0gZmxvb3IobGVuZ3RoIC8gMik7XG4gICAgdmFyIGxlZnQgPSBzb3J0KGFycmF5U2xpY2UoYXJyYXksIDAsIG1pZGRsZSksIGNvbXBhcmVmbik7XG4gICAgdmFyIHJpZ2h0ID0gc29ydChhcnJheVNsaWNlKGFycmF5LCBtaWRkbGUpLCBjb21wYXJlZm4pO1xuICAgIHZhciBsbGVuZ3RoID0gbGVmdC5sZW5ndGg7XG4gICAgdmFyIHJsZW5ndGggPSByaWdodC5sZW5ndGg7XG4gICAgdmFyIGxpbmRleCA9IDA7XG4gICAgdmFyIHJpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAobGluZGV4IDwgbGxlbmd0aCB8fCByaW5kZXggPCBybGVuZ3RoKSB7XG4gICAgICBhcnJheVtsaW5kZXggKyByaW5kZXhdID0gKGxpbmRleCA8IGxsZW5ndGggJiYgcmluZGV4IDwgcmxlbmd0aClcbiAgICAgICAgPyBjb21wYXJlZm4obGVmdFtsaW5kZXhdLCByaWdodFtyaW5kZXhdKSA8PSAwID8gbGVmdFtsaW5kZXgrK10gOiByaWdodFtyaW5kZXgrK11cbiAgICAgICAgOiBsaW5kZXggPCBsbGVuZ3RoID8gbGVmdFtsaW5kZXgrK10gOiByaWdodFtyaW5kZXgrK107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzb3J0O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgJEFycmF5ID0gQXJyYXk7XG5cbi8vIGEgcGFydCBvZiBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5KSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKGlzQ29uc3RydWN0b3IoQykgJiYgKEMgPT09ICRBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyAkQXJyYXkgOiBDO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICB0cnkge1xuICAgIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIHdvcmthcm91bmQgb2Ygb2xkIFdlYktpdCArIGBldmFsYCBidWdcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWlucycpO1xudmFyIGdldFdlYWtEYXRhID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhJykuZ2V0V2Vha0RhdGE7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgQXJyYXlJdGVyYXRpb25Nb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgaW50ZXJuYWxTdGF0ZUdldHRlckZvciA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yO1xudmFyIGZpbmQgPSBBcnJheUl0ZXJhdGlvbk1vZHVsZS5maW5kO1xudmFyIGZpbmRJbmRleCA9IEFycmF5SXRlcmF0aW9uTW9kdWxlLmZpbmRJbmRleDtcbnZhciBzcGxpY2UgPSB1bmN1cnJ5VGhpcyhbXS5zcGxpY2UpO1xudmFyIGlkID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuZnJvemVuIHx8IChzdGF0ZS5mcm96ZW4gPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSgpKTtcbn07XG5cbnZhciBVbmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVudHJpZXMgPSBbXTtcbn07XG5cbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbiAoc3RvcmUsIGtleSkge1xuICByZXR1cm4gZmluZChzdG9yZS5lbnRyaWVzLCBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgfSk7XG59O1xuXG5VbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KSByZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KSBlbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2UgdGhpcy5lbnRyaWVzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSxcbiAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgaW5kZXggPSBmaW5kSW5kZXgodGhpcy5lbnRyaWVzLCBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgIH0pO1xuICAgIGlmICh+aW5kZXgpIHNwbGljZSh0aGlzLmVudHJpZXMsIGluZGV4LCAxKTtcbiAgICByZXR1cm4gISF+aW5kZXg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQ29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBQcm90b3R5cGUpO1xuICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGF0LCB7XG4gICAgICAgIHR5cGU6IENPTlNUUlVDVE9SX05BTUUsXG4gICAgICAgIGlkOiBpZCsrLFxuICAgICAgICBmcm96ZW46IG51bGxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdGVyYWJsZSkpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB7IHRoYXQ6IHRoYXQsIEFTX0VOVFJJRVM6IElTX01BUCB9KTtcbiAgICB9KTtcblxuICAgIHZhciBQcm90b3R5cGUgPSBDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbiAgICB2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG5cbiAgICB2YXIgZGVmaW5lID0gZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICB2YXIgZGF0YSA9IGdldFdlYWtEYXRhKGFuT2JqZWN0KGtleSksIHRydWUpO1xuICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHVuY2F1Z2h0RnJvemVuU3RvcmUoc3RhdGUpLnNldChrZXksIHZhbHVlKTtcbiAgICAgIGVsc2UgZGF0YVtzdGF0ZS5pZF0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGF0O1xuICAgIH07XG5cbiAgICBkZWZpbmVCdWlsdElucyhQcm90b3R5cGUsIHtcbiAgICAgIC8vIGB7IFdlYWtNYXAsIFdlYWtTZXQgfS5wcm90b3R5cGUuZGVsZXRlKGtleSlgIG1ldGhvZHNcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha21hcC5wcm90b3R5cGUuZGVsZXRlXG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWtzZXQucHJvdG90eXBlLmRlbGV0ZVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2Vha0RhdGEoa2V5KTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHN0YXRlKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgaGFzT3duKGRhdGEsIHN0YXRlLmlkKSAmJiBkZWxldGUgZGF0YVtzdGF0ZS5pZF07XG4gICAgICB9LFxuICAgICAgLy8gYHsgV2Vha01hcCwgV2Vha1NldCB9LnByb3RvdHlwZS5oYXMoa2V5KWAgbWV0aG9kc1xuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrbWFwLnByb3RvdHlwZS5oYXNcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha3NldC5wcm90b3R5cGUuaGFzXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2Vha0RhdGEoa2V5KTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHN0YXRlKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgaGFzT3duKGRhdGEsIHN0YXRlLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlZmluZUJ1aWx0SW5zKFByb3RvdHlwZSwgSVNfTUFQID8ge1xuICAgICAgLy8gYFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtd2Vha21hcC5wcm90b3R5cGUuZ2V0XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWtEYXRhKGtleSk7XG4gICAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgICAgICBpZiAoZGF0YSkgcmV0dXJuIGRhdGFbc3RhdGUuaWRdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWttYXAucHJvdG90eXBlLnNldFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gOiB7XG4gICAgICAvLyBgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlYWtzZXQucHJvdG90eXBlLmFkZFxuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FLCB3cmFwcGVyLCBjb21tb24pIHtcbiAgdmFyIElTX01BUCA9IENPTlNUUlVDVE9SX05BTUUuaW5kZXhPZignTWFwJykgIT09IC0xO1xuICB2YXIgSVNfV0VBSyA9IENPTlNUUlVDVE9SX05BTUUuaW5kZXhPZignV2VhaycpICE9PSAtMTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIE5hdGl2ZUNvbnN0cnVjdG9yID0gZ2xvYmFsVGhpc1tDT05TVFJVQ1RPUl9OQU1FXTtcbiAgdmFyIE5hdGl2ZVByb3RvdHlwZSA9IE5hdGl2ZUNvbnN0cnVjdG9yICYmIE5hdGl2ZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgdmFyIENvbnN0cnVjdG9yID0gTmF0aXZlQ29uc3RydWN0b3I7XG4gIHZhciBleHBvcnRlZCA9IHt9O1xuXG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIHVuY3VycmllZE5hdGl2ZU1ldGhvZCA9IHVuY3VycnlUaGlzKE5hdGl2ZVByb3RvdHlwZVtLRVldKTtcbiAgICBkZWZpbmVCdWlsdEluKE5hdGl2ZVByb3RvdHlwZSwgS0VZLFxuICAgICAgS0VZID09PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgICB1bmN1cnJpZWROYXRpdmVNZXRob2QodGhpcywgdmFsdWUgPT09IDAgPyAwIDogdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gOiBLRVkgPT09ICdkZWxldGUnID8gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IGZhbHNlIDogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IEtFWSA9PT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gdW5kZWZpbmVkIDogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IEtFWSA9PT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gZmFsc2UgOiB1bmN1cnJpZWROYXRpdmVNZXRob2QodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG4gICAgICB9IDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICB2YXIgUkVQTEFDRSA9IGlzRm9yY2VkKFxuICAgIENPTlNUUlVDVE9SX05BTUUsXG4gICAgIWlzQ2FsbGFibGUoTmF0aXZlQ29uc3RydWN0b3IpIHx8ICEoSVNfV0VBSyB8fCBOYXRpdmVQcm90b3R5cGUuZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCkuZW50cmllcygpLm5leHQoKTtcbiAgICB9KSlcbiAgKTtcblxuICBpZiAoUkVQTEFDRSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQ29uc3RydWN0b3IgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZS5lbmFibGUoKTtcbiAgfSBlbHNlIGlmIChpc0ZvcmNlZChDT05TVFJVQ1RPUl9OQU1FLCB0cnVlKSkge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9PSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+IENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkgeyBuZXcgTmF0aXZlQ29uc3RydWN0b3IoaXRlcmFibGUpOyB9KTtcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuXG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKGR1bW15LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKGR1bW15LCBOYXRpdmVQcm90b3R5cGUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpLCBkdW1teSwgQ29uc3RydWN0b3IpO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0ZXJhYmxlKSkgaXRlcmF0ZShpdGVyYWJsZSwgdGhhdFtBRERFUl0sIHsgdGhhdDogdGhhdCwgQVNfRU5UUklFUzogSVNfTUFQIH0pO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gTmF0aXZlUHJvdG90eXBlO1xuICAgICAgTmF0aXZlUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuXG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG5cbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIE5hdGl2ZVByb3RvdHlwZS5jbGVhcikgZGVsZXRlIE5hdGl2ZVByb3RvdHlwZS5jbGVhcjtcbiAgfVxuXG4gIGV4cG9ydGVkW0NPTlNUUlVDVE9SX05BTUVdID0gQ29uc3RydWN0b3I7XG4gICQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IENvbnN0cnVjdG9yICE9PSBOYXRpdmVDb25zdHJ1Y3RvciB9LCBleHBvcnRlZCk7XG5cbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUpO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQ29uc3RydWN0b3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBgQ3JlYXRlSXRlclJlc3VsdE9iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWl0ZXJyZXN1bHRvYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBkb25lKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZG9uZSB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBQKSB7XG4gIGlmICghZGVsZXRlIE9bUF0pIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3QgZGVsZXRlIHByb3BlcnR5ICcgKyB0cnlUb1N0cmluZyhQKSArICcgb2YgJyArIHRyeVRvU3RyaW5nKE8pKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBpbiBvbGQgV2ViS2l0IHZlcnNpb25zLCBgZWxlbWVudC5jbGFzc0xpc3RgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBnbG9iYWwgYERPTVRva2VuTGlzdGBcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxudmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc3BhbicpLmNsYXNzTGlzdDtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NVG9rZW5MaXN0UHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlID8gdW5kZWZpbmVkIDogRE9NVG9rZW5MaXN0UHJvdG90eXBlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIGZpcmVmb3ggPSB1c2VyQWdlbnQubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvaSk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFmaXJlZm94ICYmICtmaXJlZm94WzFdO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFVBID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvTVNJRXxUcmlkZW50Ly50ZXN0KFVBKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciB3ZWJraXQgPSB1c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLyk7XG5cbm1vZHVsZS5leHBvcnRzID0gISF3ZWJraXQgJiYgK3dlYmtpdFsxXTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pc2V4dGVuc2libGUsIGVzL25vLW9iamVjdC1wcmV2ZW50ZXh0ZW5zaW9ucyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgbWV0aG9kKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuICAgIHJldHVybiB1bmN1cnJ5VGhpcyhhQ2FsbGFibGUoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSlbbWV0aG9kXSkpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gTmFzaG9ybiBidWc6XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMjhcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEzMFxuICBpZiAoY2xhc3NvZlJhdyhmbikgPT09ICdGdW5jdGlvbicpIHJldHVybiB1bmN1cnJ5VGhpcyhmbik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgcmV0dXJuIGdldE1ldGhvZChpdCwgSVRFUkFUT1IpXG4gICAgfHwgZ2V0TWV0aG9kKGl0LCAnQEBpdGVyYXRvcicpXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQsIHVzaW5nSXRlcmF0b3IpIHtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBnZXRJdGVyYXRvck1ldGhvZChhcmd1bWVudCkgOiB1c2luZ0l0ZXJhdG9yO1xuICBpZiAoYUNhbGxhYmxlKGl0ZXJhdG9yTWV0aG9kKSkgcmV0dXJuIGFuT2JqZWN0KGNhbGwoaXRlcmF0b3JNZXRob2QsIGFyZ3VtZW50KSk7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcblxuLy8gbWFrZXMgc3ViY2xhc3Npbmcgd29yayBjb3JyZWN0IGZvciB3cmFwcGVkIGJ1aWx0LWluc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHRoaXMsIGR1bW15LCBXcmFwcGVyKSB7XG4gIHZhciBOZXdUYXJnZXQsIE5ld1RhcmdldFByb3RvdHlwZTtcbiAgaWYgKFxuICAgIC8vIGl0IGNhbiB3b3JrIG9ubHkgd2l0aCBuYXRpdmUgYHNldFByb3RvdHlwZU9mYFxuICAgIHNldFByb3RvdHlwZU9mICYmXG4gICAgLy8gd2UgaGF2ZW4ndCBjb21wbGV0ZWx5IGNvcnJlY3QgcHJlLUVTNiB3YXkgZm9yIGdldHRpbmcgYG5ldy50YXJnZXRgLCBzbyB1c2UgdGhpc1xuICAgIGlzQ2FsbGFibGUoTmV3VGFyZ2V0ID0gZHVtbXkuY29uc3RydWN0b3IpICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWxNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwnKTtcbnZhciBpc0V4dGVuc2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLWV4dGVuc2libGUnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgRlJFRVpJTkcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnJlZXppbmcnKTtcblxudmFyIFJFUVVJUkVEID0gZmFsc2U7XG52YXIgTUVUQURBVEEgPSB1aWQoJ21ldGEnKTtcbnZhciBpZCA9IDA7XG5cbnZhciBzZXRNZXRhZGF0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBkZWZpbmVQcm9wZXJ0eShpdCwgTUVUQURBVEEsIHsgdmFsdWU6IHtcbiAgICBvYmplY3RJRDogJ08nICsgaWQrKywgLy8gb2JqZWN0IElEXG4gICAgd2Vha0RhdGE6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xuXG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBhIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXNPd24oaXQsIE1FVEFEQVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhZGF0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQURBVEFdLm9iamVjdElEO1xufTtcblxudmFyIGdldFdlYWtEYXRhID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXNPd24oaXQsIE1FVEFEQVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhZGF0YShpdCk7XG4gIC8vIHJldHVybiB0aGUgc3RvcmUgb2Ygd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQURBVEFdLndlYWtEYXRhO1xufTtcblxuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaSU5HICYmIFJFUVVJUkVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhc093bihpdCwgTUVUQURBVEEpKSBzZXRNZXRhZGF0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cbnZhciBlbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIG1ldGEuZW5hYmxlID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuICBSRVFVSVJFRCA9IHRydWU7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mO1xuICB2YXIgc3BsaWNlID0gdW5jdXJyeVRoaXMoW10uc3BsaWNlKTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdGVzdFtNRVRBREFUQV0gPSAxO1xuXG4gIC8vIHByZXZlbnQgZXhwb3Npbmcgb2YgbWV0YWRhdGEga2V5XG4gIGlmIChnZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QpLmxlbmd0aCkge1xuICAgIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdldE93blByb3BlcnR5TmFtZXMoaXQpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVzdWx0W2ldID09PSBNRVRBREFUQSkge1xuICAgICAgICAgIHNwbGljZShyZXN1bHQsIGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgICQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgICAgZ2V0T3duUHJvcGVydHlOYW1lczogZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsTW9kdWxlLmZcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW5hYmxlOiBlbmFibGUsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWtEYXRhOiBnZXRXZWFrRGF0YSxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5oaWRkZW5LZXlzW01FVEFEQVRBXSA9IHRydWU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIGNvbnN0cnVjdCA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnY29uc3RydWN0Jyk7XG52YXIgY29uc3RydWN0b3JSZWdFeHAgPSAvXlxccyooPzpjbGFzc3xmdW5jdGlvbilcXGIvO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcyhjb25zdHJ1Y3RvclJlZ0V4cC5leGVjKTtcbnZhciBJTkNPUlJFQ1RfVE9fU1RSSU5HID0gIWNvbnN0cnVjdG9yUmVnRXhwLnRlc3Qobm9vcCk7XG5cbnZhciBpc0NvbnN0cnVjdG9yTW9kZXJuID0gZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gIHRyeSB7XG4gICAgY29uc3RydWN0KG5vb3AsIFtdLCBhcmd1bWVudCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG52YXIgaXNDb25zdHJ1Y3RvckxlZ2FjeSA9IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcbiAgaWYgKCFpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGZhbHNlO1xuICBzd2l0Y2ggKGNsYXNzb2YoYXJndW1lbnQpKSB7XG4gICAgY2FzZSAnQXN5bmNGdW5jdGlvbic6XG4gICAgY2FzZSAnR2VuZXJhdG9yRnVuY3Rpb24nOlxuICAgIGNhc2UgJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nOiByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyB3ZSBjYW4ndCBjaGVjayAucHJvdG90eXBlIHNpbmNlIGNvbnN0cnVjdG9ycyBwcm9kdWNlZCBieSAuYmluZCBoYXZlbid0IGl0XG4gICAgLy8gYEZ1bmN0aW9uI3RvU3RyaW5nYCB0aHJvd3Mgb24gc29tZSBidWlsdC1pdCBmdW5jdGlvbiBpbiBzb21lIGxlZ2FjeSBlbmdpbmVzXG4gICAgLy8gKGZvciBleGFtcGxlLCBgRE9NUXVhZGAgYW5kIHNpbWlsYXIgaW4gRkY0MS0pXG4gICAgcmV0dXJuIElOQ09SUkVDVF9UT19TVFJJTkcgfHwgISFleGVjKGNvbnN0cnVjdG9yUmVnRXhwLCBpbnNwZWN0U291cmNlKGFyZ3VtZW50KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmlzQ29uc3RydWN0b3JMZWdhY3kuc2hhbSA9IHRydWU7XG5cbi8vIGBJc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSAhY29uc3RydWN0IHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbGxlZDtcbiAgcmV0dXJuIGlzQ29uc3RydWN0b3JNb2Rlcm4oaXNDb25zdHJ1Y3Rvck1vZGVybi5jYWxsKVxuICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKE9iamVjdClcbiAgICB8fCAhaXNDb25zdHJ1Y3Rvck1vZGVybihmdW5jdGlvbiAoKSB7IGNhbGxlZCA9IHRydWU7IH0pXG4gICAgfHwgY2FsbGVkO1xufSkgPyBpc0NvbnN0cnVjdG9yTGVnYWN5IDogaXNDb25zdHJ1Y3Rvck1vZGVybjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGFyZ3VtZW50KSB8fCBhcmd1bWVudCA9PT0gbnVsbDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIFJlc3VsdFByb3RvdHlwZSA9IFJlc3VsdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCB1bmJvdW5kRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgdmFyIHRoYXQgPSBvcHRpb25zICYmIG9wdGlvbnMudGhhdDtcbiAgdmFyIEFTX0VOVFJJRVMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuQVNfRU5UUklFUyk7XG4gIHZhciBJU19SRUNPUkQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfUkVDT1JEKTtcbiAgdmFyIElTX0lURVJBVE9SID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX0lURVJBVE9SKTtcbiAgdmFyIElOVEVSUlVQVEVEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklOVEVSUlVQVEVEKTtcbiAgdmFyIGZuID0gYmluZCh1bmJvdW5kRnVuY3Rpb24sIHRoYXQpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIHZhciBzdG9wID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcsIGNvbmRpdGlvbik7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgY29uZGl0aW9uKTtcbiAgfTtcblxuICB2YXIgY2FsbEZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKEFTX0VOVFJJRVMpIHtcbiAgICAgIGFuT2JqZWN0KHZhbHVlKTtcbiAgICAgIHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSwgc3RvcCkgOiBmbih2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgIH0gcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWUsIHN0b3ApIDogZm4odmFsdWUpO1xuICB9O1xuXG4gIGlmIChJU19SRUNPUkQpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlLml0ZXJhdG9yO1xuICB9IGVsc2UgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgaWYgKCFpdGVyRm4pIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGl0ZXJhYmxlKSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShpdGVyYWJsZSk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IGNhbGxGbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoaXRlcmFibGUsIGl0ZXJGbik7XG4gIH1cblxuICBuZXh0ID0gSVNfUkVDT1JEID8gaXRlcmFibGUubmV4dCA6IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBjYWxsRm4oc3RlcC52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG4gIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcbiAgYW5PYmplY3QoaXRlcmF0b3IpO1xuICB0cnkge1xuICAgIGlubmVyUmVzdWx0ID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgaWYgKCFpbm5lclJlc3VsdCkge1xuICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpbm5lclJlc3VsdCA9IGNhbGwoaW5uZXJSZXN1bHQsIGl0ZXJhdG9yKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbm5lckVycm9yID0gdHJ1ZTtcbiAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQsIEVOVU1FUkFCTEVfTkVYVCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCshRU5VTUVSQUJMRV9ORVhULCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBGdW5jdGlvbk5hbWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1jb25zdHJ1Y3RvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJyk7XG5cbnZhciBQUk9QRVJfRlVOQ1RJT05fTkFNRSA9IEZ1bmN0aW9uTmFtZS5QUk9QRVI7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSBGdW5jdGlvbk5hbWUuQ09ORklHVVJBQkxFO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG52YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG4gICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuXG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgLy8gZml4IG5hdGl2ZVxuICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcbiAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgaWYgKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG4gICAgICAgICAgZGVmaW5lQnVpbHRJbihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlLCB0cnVlKTtcbiAgICAgIGlmIChJU19QVVJFKSBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpeCBBcnJheS5wcm90b3R5cGUueyB2YWx1ZXMsIEBAaXRlcmF0b3IgfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKFBST1BFUl9GVU5DVElPTl9OQU1FICYmIERFRkFVTFQgPT09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBpZiAoIUlTX1BVUkUgJiYgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgJ25hbWUnLCBWQUxVRVMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gY2FsbChuYXRpdmVJdGVyYXRvciwgdGhpcyk7IH07XG4gICAgfVxuICB9XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIGRlZmluZUJ1aWx0SW4oSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgJCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG4gIH1cblxuICAvLyBkZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgZGVmaW5lQnVpbHRJbihJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvciwgeyBuYW1lOiBERUZBVUxUIH0pO1xuICB9XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUta2V5cyAtLSBzYWZlICovXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbnZhciBORVdfSVRFUkFUT1JfUFJPVE9UWVBFID0gIWlzT2JqZWN0KEl0ZXJhdG9yUHJvdG90eXBlKSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXN0ID0ge307XG4gIC8vIEZGNDQtIGxlZ2FjeSBpdGVyYXRvcnMgY2FzZVxuICByZXR1cm4gSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdLmNhbGwodGVzdCkgIT09IHRlc3Q7XG59KTtcblxuaWYgKE5FV19JVEVSQVRPUl9QUk9UT1RZUEUpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5lbHNlIGlmIChJU19QVVJFKSBJdGVyYXRvclByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLUBAaXRlcmF0b3JcbmlmICghaXNDYWxsYWJsZShJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG4gIGRlZmluZUJ1aWx0SW4oSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbFRoaXMucGFyc2VGbG9hdDtcbnZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcbnZhciBJVEVSQVRPUiA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRk9SQ0VEID0gMSAvICRwYXJzZUZsb2F0KHdoaXRlc3BhY2VzICsgJy0wJykgIT09IC1JbmZpbml0eVxuICAvLyBNUyBFZGdlIDE4LSBicm9rZW4gd2l0aCBib3hlZCBzeW1ib2xzXG4gIHx8IChJVEVSQVRPUiAmJiAhZmFpbHMoZnVuY3Rpb24gKCkgeyAkcGFyc2VGbG9hdChPYmplY3QoSVRFUkFUT1IpKTsgfSkpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbSh0b1N0cmluZyhzdHJpbmcpKTtcbiAgdmFyIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHRyaW1tZWRTdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIGNoYXJBdCh0cmltbWVkU3RyaW5nLCAwKSA9PT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtYXNzaWdubWVudCAtLSBhdm9pZCBtZW1vcnkgbGVha1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsO1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXNNb2R1bGUuZihyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZSAqL1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gYXJyYXlTbGljZSh3aW5kb3dOYW1lcyk7XG4gIH1cbn07XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiBjbGFzc29mKGl0KSA9PT0gJ1dpbmRvdydcbiAgICA/IGdldFdpbmRvd05hbWVzKGl0KVxuICAgIDogJGdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KGl0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBPYmplY3RQcm90b3R5cGUgPSAkT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mICRPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBBUlJBWV9CVUZGRVJfTk9OX0VYVEVOU0lCTEUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLW5vbi1leHRlbnNpYmxlJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNleHRlbnNpYmxlIC0tIHNhZmVcbnZhciAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyAkaXNFeHRlbnNpYmxlKDEpOyB9KTtcblxuLy8gYE9iamVjdC5pc0V4dGVuc2libGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuaXNleHRlbnNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IChGQUlMU19PTl9QUklNSVRJVkVTIHx8IEFSUkFZX0JVRkZFUl9OT05fRVhURU5TSUJMRSkgPyBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBmYWxzZTtcbiAgaWYgKEFSUkFZX0JVRkZFUl9OT05fRVhURU5TSUJMRSAmJiBjbGFzc29mKGl0KSA9PT0gJ0FycmF5QnVmZmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZTtcbn0gOiAkaXNFeHRlbnNpYmxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gLS0gc2FmZSAqL1xudmFyIHVuY3VycnlUaGlzQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWFjY2Vzc29yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LXNldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gdW5jdXJyeVRoaXNBY2Nlc3NvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJywgJ3NldCcpO1xuICAgIHNldHRlcih0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgcmVxdWlyZU9iamVjdENvZXJjaWJsZShPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmICghaXNPYmplY3QoTykpIHJldHVybiBPO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBUQUcsIFNUQVRJQykge1xuICBpZiAodGFyZ2V0ICYmICFTVEFUSUMpIHRhcmdldCA9IHRhcmdldC5wcm90b3R5cGU7XG4gIGlmICh0YXJnZXQgJiYgIWhhc093bih0YXJnZXQsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjQxLjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjQxLjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXlsnICsgd2hpdGVzcGFjZXMgKyAnXSsnKTtcbnZhciBydHJpbSA9IFJlZ0V4cCgnKF58W14nICsgd2hpdGVzcGFjZXMgKyAnXSlbJyArIHdoaXRlc3BhY2VzICsgJ10rJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSByZXBsYWNlKHN0cmluZywgbHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHJlcGxhY2Uoc3RyaW5nLCBydHJpbSwgJyQxJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDInICtcbiAgJ1xcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItZGVmaW5lJyk7XG52YXIgY3JlYXRlSXRlclJlc3VsdE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlci1yZXN1bHQtb2JqZWN0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIEFSUkFZX0lURVJBVE9SID0gJ0FycmF5IEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKEFSUkFZX0lURVJBVE9SKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5lbnRyaWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmVudHJpZXNcbi8vIGBBcnJheS5wcm90b3R5cGUua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5rZXlzXG4vLyBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS52YWx1ZXNcbi8vIGBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEBpdGVyYXRvclxuLy8gYENyZWF0ZUFycmF5SXRlcmF0b3JgIGludGVybmFsIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVhcnJheWl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZUl0ZXJhdG9yKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogQVJSQVlfSVRFUkFUT1IsXG4gICAgdGFyZ2V0OiB0b0luZGV4ZWRPYmplY3QoaXRlcmF0ZWQpLCAvLyB0YXJnZXRcbiAgICBpbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgICBraW5kOiBraW5kICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgfSk7XG4vLyBgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0lYXJyYXlpdGVyYXRvcnByb3RvdHlwZSUubmV4dFxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgdGFyZ2V0ID0gc3RhdGUudGFyZ2V0O1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gbnVsbDtcbiAgICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICB9XG4gIHN3aXRjaCAoc3RhdGUua2luZCkge1xuICAgIGNhc2UgJ2tleXMnOiByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChpbmRleCwgZmFsc2UpO1xuICAgIGNhc2UgJ3ZhbHVlcyc6IHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHRhcmdldFtpbmRleF0sIGZhbHNlKTtcbiAgfSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChbaW5kZXgsIHRhcmdldFtpbmRleF1dLCBmYWxzZSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVtYXBwZWRhcmd1bWVudHNvYmplY3RcbnZhciB2YWx1ZXMgPSBJdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuLy8gVjggfiBDaHJvbWUgNDUtIGJ1Z1xuaWYgKCFJU19QVVJFICYmIERFU0NSSVBUT1JTICYmIHZhbHVlcy5uYW1lICE9PSAndmFsdWVzJykgdHJ5IHtcbiAgZGVmaW5lUHJvcGVydHkodmFsdWVzLCAnbmFtZScsIHsgdmFsdWU6ICd2YWx1ZXMnIH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWxldGUtcHJvcGVydHktb3ItdGhyb3cnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGludGVybmFsU29ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgRkYgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtZmYtdmVyc2lvbicpO1xudmFyIElFX09SX0VER0UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtaWUtb3ItZWRnZScpO1xudmFyIFY4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBXRUJLSVQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtd2Via2l0LXZlcnNpb24nKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdW5jdXJyeVRoaXModGVzdC5zb3J0KTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXModGVzdC5wdXNoKTtcblxuLy8gSUU4LVxudmFyIEZBSUxTX09OX1VOREVGSU5FRCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KHVuZGVmaW5lZCk7XG59KTtcbi8vIFY4IGJ1Z1xudmFyIEZBSUxTX09OX05VTEwgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydChudWxsKTtcbn0pO1xuLy8gT2xkIFdlYktpdFxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdzb3J0Jyk7XG5cbnZhciBTVEFCTEVfU09SVCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGZlYXR1cmUgZGV0ZWN0aW9uIGNhbiBiZSB0b28gc2xvdywgc28gY2hlY2sgZW5naW5lcyB2ZXJzaW9uc1xuICBpZiAoVjgpIHJldHVybiBWOCA8IDcwO1xuICBpZiAoRkYgJiYgRkYgPiAzKSByZXR1cm47XG4gIGlmIChJRV9PUl9FREdFKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKFdFQktJVCkgcmV0dXJuIFdFQktJVCA8IDYwMztcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjb2RlLCBjaHIsIHZhbHVlLCBpbmRleDtcblxuICAvLyBnZW5lcmF0ZSBhbiBhcnJheSB3aXRoIG1vcmUgNTEyIGVsZW1lbnRzIChDaGFrcmEgYW5kIG9sZCBWOCBmYWlscyBvbmx5IGluIHRoaXMgY2FzZSlcbiAgZm9yIChjb2RlID0gNjU7IGNvZGUgPCA3NjsgY29kZSsrKSB7XG4gICAgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcblxuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgY2FzZSA2NjogY2FzZSA2OTogY2FzZSA3MDogY2FzZSA3MjogdmFsdWUgPSAzOyBicmVhaztcbiAgICAgIGNhc2UgNjg6IGNhc2UgNzE6IHZhbHVlID0gNDsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB2YWx1ZSA9IDI7XG4gICAgfVxuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgNDc7IGluZGV4KyspIHtcbiAgICAgIHRlc3QucHVzaCh7IGs6IGNociArIGluZGV4LCB2OiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICB0ZXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGIudiAtIGEudjsgfSk7XG5cbiAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdGVzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjaHIgPSB0ZXN0W2luZGV4XS5rLmNoYXJBdCgwKTtcbiAgICBpZiAocmVzdWx0LmNoYXJBdChyZXN1bHQubGVuZ3RoIC0gMSkgIT09IGNocikgcmVzdWx0ICs9IGNocjtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgIT09ICdER0JFRkhBQ0lKSyc7XG59KTtcblxudmFyIEZPUkNFRCA9IEZBSUxTX09OX1VOREVGSU5FRCB8fCAhRkFJTFNfT05fTlVMTCB8fCAhU1RSSUNUX01FVEhPRCB8fCAhU1RBQkxFX1NPUlQ7XG5cbnZhciBnZXRTb3J0Q29tcGFyZSA9IGZ1bmN0aW9uIChjb21wYXJlZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIC0xO1xuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHJldHVybiAxO1xuICAgIGlmIChjb21wYXJlZm4gIT09IHVuZGVmaW5lZCkgcmV0dXJuICtjb21wYXJlZm4oeCwgeSkgfHwgMDtcbiAgICByZXR1cm4gdG9TdHJpbmcoeCkgPiB0b1N0cmluZyh5KSA/IDEgOiAtMTtcbiAgfTtcbn07XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc29ydGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb3J0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgIGlmIChjb21wYXJlZm4gIT09IHVuZGVmaW5lZCkgYUNhbGxhYmxlKGNvbXBhcmVmbik7XG5cbiAgICB2YXIgYXJyYXkgPSB0b09iamVjdCh0aGlzKTtcblxuICAgIGlmIChTVEFCTEVfU09SVCkgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkID8gbmF0aXZlU29ydChhcnJheSkgOiBuYXRpdmVTb3J0KGFycmF5LCBjb21wYXJlZm4pO1xuXG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoYXJyYXkpO1xuICAgIHZhciBpdGVtc0xlbmd0aCwgaW5kZXg7XG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGluZGV4IGluIGFycmF5KSBwdXNoKGl0ZW1zLCBhcnJheVtpbmRleF0pO1xuICAgIH1cblxuICAgIGludGVybmFsU29ydChpdGVtcywgZ2V0U29ydENvbXBhcmUoY29tcGFyZWZuKSk7XG5cbiAgICBpdGVtc0xlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKGl0ZW1zKTtcbiAgICBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBpdGVtc0xlbmd0aCkgYXJyYXlbaW5kZXhdID0gaXRlbXNbaW5kZXgrK107XG4gICAgd2hpbGUgKGluZGV4IDwgYXJyYXlMZW5ndGgpIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyhhcnJheSwgaW5kZXgrKyk7XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIENPTlNUUlVDVE9SID0gJ2NvbnN0cnVjdG9yJztcbnZhciBJVEVSQVRPUiA9ICdJdGVyYXRvcic7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTmF0aXZlSXRlcmF0b3IgPSBnbG9iYWxUaGlzW0lURVJBVE9SXTtcblxuLy8gRkY1Ni0gaGF2ZSBub24tc3RhbmRhcmQgZ2xvYmFsIGhlbHBlciBgSXRlcmF0b3JgXG52YXIgRk9SQ0VEID0gSVNfUFVSRVxuICB8fCAhaXNDYWxsYWJsZShOYXRpdmVJdGVyYXRvcilcbiAgfHwgTmF0aXZlSXRlcmF0b3IucHJvdG90eXBlICE9PSBJdGVyYXRvclByb3RvdHlwZVxuICAvLyBGRjQ0LSBub24tc3RhbmRhcmQgYEl0ZXJhdG9yYCBwYXNzZXMgcHJldmlvdXMgdGVzdHNcbiAgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHsgTmF0aXZlSXRlcmF0b3Ioe30pOyB9KTtcblxudmFyIEl0ZXJhdG9yQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBJdGVyYXRvcigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gIGlmIChnZXRQcm90b3R5cGVPZih0aGlzKSA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBYnN0cmFjdCBjbGFzcyBJdGVyYXRvciBub3QgZGlyZWN0bHkgY29uc3RydWN0YWJsZScpO1xufTtcblxudmFyIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoSXRlcmF0b3JQcm90b3R5cGUsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChyZXBsYWNlbWVudCkge1xuICAgICAgICBhbk9iamVjdCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIllvdSBjYW4ndCByZWRlZmluZSB0aGlzIHByb3BlcnR5XCIpO1xuICAgICAgICBpZiAoaGFzT3duKHRoaXMsIGtleSkpIHRoaXNba2V5XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICBlbHNlIGNyZWF0ZVByb3BlcnR5KHRoaXMsIGtleSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgSXRlcmF0b3JQcm90b3R5cGVba2V5XSA9IHZhbHVlO1xufTtcblxuaWYgKCFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKFRPX1NUUklOR19UQUcsIElURVJBVE9SKTtcblxuaWYgKEZPUkNFRCB8fCAhaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBDT05TVFJVQ1RPUikgfHwgSXRlcmF0b3JQcm90b3R5cGVbQ09OU1RSVUNUT1JdID09PSBPYmplY3QpIHtcbiAgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihDT05TVFJVQ1RPUiwgSXRlcmF0b3JDb25zdHJ1Y3Rvcik7XG59XG5cbkl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gSXRlcmF0b3JQcm90b3R5cGU7XG5cbi8vIGBJdGVyYXRvcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3JcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIEl0ZXJhdG9yOiBJdGVyYXRvckNvbnN0cnVjdG9yXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKGZuKTtcbiAgICB2YXIgcmVjb3JkID0gZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyk7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGZuKHZhbHVlLCBjb3VudGVyKyspO1xuICAgIH0sIHsgSVNfUkVDT1JEOiB0cnVlIH0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT09ICRwYXJzZUZsb2F0IH0sIHtcbiAgcGFyc2VGbG9hdDogJHBhcnNlRmxvYXRcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEZSRUVaSU5HID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZyZWV6aW5nJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZUJ1aWx0SW5zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbnMnKTtcbnZhciBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhJyk7XG52YXIgY29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb2xsZWN0aW9uJyk7XG52YXIgY29sbGVjdGlvbldlYWsgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbi13ZWFrJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKS5lbmZvcmNlO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNleHRlbnNpYmxlIC0tIHNhZmVcbnZhciBpc0V4dGVuc2libGUgPSAkT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNmcm96ZW4gLS0gc2FmZVxudmFyIGlzRnJvemVuID0gJE9iamVjdC5pc0Zyb3plbjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNzZWFsZWQgLS0gc2FmZVxudmFyIGlzU2VhbGVkID0gJE9iamVjdC5pc1NlYWxlZDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZnJlZXplIC0tIHNhZmVcbnZhciBmcmVlemUgPSAkT2JqZWN0LmZyZWV6ZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2VhbCAtLSBzYWZlXG52YXIgc2VhbCA9ICRPYmplY3Quc2VhbDtcblxudmFyIElTX0lFMTEgPSAhZ2xvYmFsVGhpcy5BY3RpdmVYT2JqZWN0ICYmICdBY3RpdmVYT2JqZWN0JyBpbiBnbG9iYWxUaGlzO1xudmFyIEludGVybmFsV2Vha01hcDtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn07XG5cbi8vIGBXZWFrTWFwYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy13ZWFrbWFwLWNvbnN0cnVjdG9yXG52YXIgJFdlYWtNYXAgPSBjb2xsZWN0aW9uKCdXZWFrTWFwJywgd3JhcHBlciwgY29sbGVjdGlvbldlYWspO1xudmFyIFdlYWtNYXBQcm90b3R5cGUgPSAkV2Vha01hcC5wcm90b3R5cGU7XG52YXIgbmF0aXZlU2V0ID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5zZXQpO1xuXG4vLyBDaGFrcmEgRWRnZSBidWc6IGFkZGluZyBmcm96ZW4gYXJyYXlzIHRvIFdlYWtNYXAgdW5mcmVlemUgdGhlbVxudmFyIGhhc01TRWRnZUZyZWV6aW5nQnVnID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRlJFRVpJTkcgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBmcm96ZW5BcnJheSA9IGZyZWV6ZShbXSk7XG4gICAgbmF0aXZlU2V0KG5ldyAkV2Vha01hcCgpLCBmcm96ZW5BcnJheSwgMSk7XG4gICAgcmV0dXJuICFpc0Zyb3plbihmcm96ZW5BcnJheSk7XG4gIH0pO1xufTtcblxuLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuLy8gV2UgY2FuJ3QgdXNlIGZlYXR1cmUgZGV0ZWN0aW9uIGJlY2F1c2UgaXQgY3Jhc2ggc29tZSBvbGQgSUUgYnVpbGRzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDg1XG5pZiAoTkFUSVZFX1dFQUtfTUFQKSBpZiAoSVNfSUUxMSkge1xuICBJbnRlcm5hbFdlYWtNYXAgPSBjb2xsZWN0aW9uV2Vhay5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCAnV2Vha01hcCcsIHRydWUpO1xuICBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlLmVuYWJsZSgpO1xuICB2YXIgbmF0aXZlRGVsZXRlID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZVsnZGVsZXRlJ10pO1xuICB2YXIgbmF0aXZlSGFzID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5oYXMpO1xuICB2YXIgbmF0aXZlR2V0ID0gdW5jdXJyeVRoaXMoV2Vha01hcFByb3RvdHlwZS5nZXQpO1xuICBkZWZpbmVCdWlsdElucyhXZWFrTWFwUHJvdG90eXBlLCB7XG4gICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChpc09iamVjdChrZXkpICYmICFpc0V4dGVuc2libGUoa2V5KSkge1xuICAgICAgICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgICAgaWYgKCFzdGF0ZS5mcm96ZW4pIHN0YXRlLmZyb3plbiA9IG5ldyBJbnRlcm5hbFdlYWtNYXAoKTtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZURlbGV0ZSh0aGlzLCBrZXkpIHx8IHN0YXRlLmZyb3plblsnZGVsZXRlJ10oa2V5KTtcbiAgICAgIH0gcmV0dXJuIG5hdGl2ZURlbGV0ZSh0aGlzLCBrZXkpO1xuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICBpZiAoaXNPYmplY3Qoa2V5KSAmJiAhaXNFeHRlbnNpYmxlKGtleSkpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodGhpcyk7XG4gICAgICAgIGlmICghc3RhdGUuZnJvemVuKSBzdGF0ZS5mcm96ZW4gPSBuZXcgSW50ZXJuYWxXZWFrTWFwKCk7XG4gICAgICAgIHJldHVybiBuYXRpdmVIYXModGhpcywga2V5KSB8fCBzdGF0ZS5mcm96ZW4uaGFzKGtleSk7XG4gICAgICB9IHJldHVybiBuYXRpdmVIYXModGhpcywga2V5KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgaWYgKGlzT2JqZWN0KGtleSkgJiYgIWlzRXh0ZW5zaWJsZShrZXkpKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgICBpZiAoIXN0YXRlLmZyb3plbikgc3RhdGUuZnJvemVuID0gbmV3IEludGVybmFsV2Vha01hcCgpO1xuICAgICAgICByZXR1cm4gbmF0aXZlSGFzKHRoaXMsIGtleSkgPyBuYXRpdmVHZXQodGhpcywga2V5KSA6IHN0YXRlLmZyb3plbi5nZXQoa2V5KTtcbiAgICAgIH0gcmV0dXJuIG5hdGl2ZUdldCh0aGlzLCBrZXkpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KGtleSkgJiYgIWlzRXh0ZW5zaWJsZShrZXkpKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgICBpZiAoIXN0YXRlLmZyb3plbikgc3RhdGUuZnJvemVuID0gbmV3IEludGVybmFsV2Vha01hcCgpO1xuICAgICAgICBuYXRpdmVIYXModGhpcywga2V5KSA/IG5hdGl2ZVNldCh0aGlzLCBrZXksIHZhbHVlKSA6IHN0YXRlLmZyb3plbi5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgbmF0aXZlU2V0KHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9KTtcbi8vIENoYWtyYSBFZGdlIGZyb3plbiBrZXlzIGZpeFxufSBlbHNlIGlmIChoYXNNU0VkZ2VGcmVlemluZ0J1ZygpKSB7XG4gIGRlZmluZUJ1aWx0SW5zKFdlYWtNYXBQcm90b3R5cGUsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgYXJyYXlJbnRlZ3JpdHlMZXZlbDtcbiAgICAgIGlmIChpc0FycmF5KGtleSkpIHtcbiAgICAgICAgaWYgKGlzRnJvemVuKGtleSkpIGFycmF5SW50ZWdyaXR5TGV2ZWwgPSBmcmVlemU7XG4gICAgICAgIGVsc2UgaWYgKGlzU2VhbGVkKGtleSkpIGFycmF5SW50ZWdyaXR5TGV2ZWwgPSBzZWFsO1xuICAgICAgfVxuICAgICAgbmF0aXZlU2V0KHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKGFycmF5SW50ZWdyaXR5TGV2ZWwpIGFycmF5SW50ZWdyaXR5TGV2ZWwoa2V5KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHJlcGxhY2VkIHRvIG1vZHVsZSBiZWxvd1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy53ZWFrLW1hcC5jb25zdHJ1Y3RvcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuaXRlcmF0b3IuY29uc3RydWN0b3InKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLmZvci1lYWNoJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIEFycmF5SXRlcmF0b3JNZXRob2RzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBBcnJheUl0ZXJhdG9yTWV0aG9kcy52YWx1ZXM7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSwgQ09MTEVDVElPTl9OQU1FKSB7XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdICE9PSBBcnJheVZhbHVlcykgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBzZXRUb1N0cmluZ1RhZyhDb2xsZWN0aW9uUHJvdG90eXBlLCBDT0xMRUNUSU9OX05BTUUsIHRydWUpO1xuICAgIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkgZm9yICh2YXIgTUVUSE9EX05BTUUgaW4gQXJyYXlJdGVyYXRvck1ldGhvZHMpIHtcbiAgICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdICE9PSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pIHRyeSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBNRVRIT0RfTkFNRSwgQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdID0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUsIENPTExFQ1RJT05fTkFNRSk7XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUsICdET01Ub2tlbkxpc3QnKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyQDYuMTEuMF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlckA2LjExLjBfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucmFuZ2Utc2xpZGVyIHtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnJhbmdlLXNsaWRlcltkYXRhLXZlcnRpY2FsXSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDhweDtcbn1cblxuLnJhbmdlLXNsaWRlcltkYXRhLWRpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnJhbmdlLXNsaWRlciAucmFuZ2Utc2xpZGVyX190aHVtYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG59XG5cbi5yYW5nZS1zbGlkZXIgLnJhbmdlLXNsaWRlcl9fdGh1bWI6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDMzLCAxNTAsIDI0MywgMC41KTtcbn1cblxuLnJhbmdlLXNsaWRlcltkYXRhLXZlcnRpY2FsXSAucmFuZ2Utc2xpZGVyX190aHVtYiB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLnJhbmdlLXNsaWRlciAucmFuZ2Utc2xpZGVyX190aHVtYltkYXRhLWRpc2FibGVkXSB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5yYW5nZS1zbGlkZXIgLnJhbmdlLXNsaWRlcl9fcmFuZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzUxYWRmNjtcbn1cblxuLnJhbmdlLXNsaWRlcltkYXRhLXZlcnRpY2FsXSAucmFuZ2Utc2xpZGVyX19yYW5nZSB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4ucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG4ucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yYW5nZS1zbGlkZXItaW5wdXRAMy4yLjEvbm9kZV9tb2R1bGVzL3JlYWN0LXJhbmdlLXNsaWRlci1pbnB1dC9kaXN0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0VBQ0EsNkNBQUE7QUFLRjs7QUFIQTtFQUNFLFNBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFOQTtFQUNFLFNBQUE7RUFDQSw2QkFBQTtBQVNGOztBQVBBO0VBQ0Usd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBQVVGOztBQVJBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQVdGOztBQVRBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBWUY7O0FBVkE7RUFDRSxVQUFBO0FBYUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJhbmdlLXNsaWRlciB7XFxyXFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogOHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2RkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuLnJhbmdlLXNsaWRlcltkYXRhLXZlcnRpY2FsXSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG4ucmFuZ2Utc2xpZGVyW2RhdGEtZGlzYWJsZWRdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcbi5yYW5nZS1zbGlkZXIgLnJhbmdlLXNsaWRlcl9fdGh1bWIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMztcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7XFxyXFxufVxcclxcbi5yYW5nZS1zbGlkZXIgLnJhbmdlLXNsaWRlcl9fdGh1bWI6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgNnB4IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjUpO1xcclxcbn1cXHJcXG4ucmFuZ2Utc2xpZGVyW2RhdGEtdmVydGljYWxdIC5yYW5nZS1zbGlkZXJfX3RodW1iIHtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuLnJhbmdlLXNsaWRlciAucmFuZ2Utc2xpZGVyX190aHVtYltkYXRhLWRpc2FibGVkXSB7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4ucmFuZ2Utc2xpZGVyIC5yYW5nZS1zbGlkZXJfX3JhbmdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTFhZGY2O1xcclxcbn1cXHJcXG4ucmFuZ2Utc2xpZGVyW2RhdGEtdmVydGljYWxdIC5yYW5nZS1zbGlkZXJfX3JhbmdlIHtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcclxcbn1cXHJcXG4ucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5yYW5nZS1zbGlkZXIgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLnJhbmdlLXNsaWRlciBpbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG4ucmFuZ2Utc2xpZGVyIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA2LjExLjBfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDYuMTEuMF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5xRFNmdktSNXdudUpZRVBCS1pMRyAucmFuZ2Utc2xpZGVyIHtcbiAgaGVpZ2h0OiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1Cb3JkZXItUmFkaXVzLWJvcmRlci1yYWRpdXMtbGFyZ2UpO1xuICBiYWNrZ3JvdW5kOiAjZmFjYWIwO1xufVxuLnFEU2Z2S1I1d251SllFUEJLWkxHIC5yYW5nZS1zbGlkZXJfX3JhbmdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tUC0xMDApO1xufVxuLnFEU2Z2S1I1d251SllFUEJLWkxHIC5yYW5nZS1zbGlkZXJfX3RodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tUC0xMDApO1xuICB3aWR0aDogMS44cmVtO1xuICBoZWlnaHQ6IDEuOHJlbTtcbn1cbi5xRFNmdktSNXdudUpZRVBCS1pMRyAucmFuZ2Utc2xpZGVyX190aHVtYjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMS4zcmVtO1xuICBoZWlnaHQ6IDEuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyL0lucHV0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVRO0VBQ0ksZUFBQTtFQUNBLHVEQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUlZO0VBQ0ksd0JBQUE7QUFGaEI7QUFLWTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFIaEI7QUFLZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FBSHBCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdHlsZXMge1xcbiAgICA6Z2xvYmFsIHtcXG4gICAgICAgIC5yYW5nZS1zbGlkZXIge1xcbiAgICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1Cb3JkZXItUmFkaXVzLWJvcmRlci1yYWRpdXMtbGFyZ2UpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWNhYjA7XFxuICAgICAgICAgICAgLy8gb3BhY2l0eTogMC41O1xcblxcbiAgICAgICAgICAgICZfX3JhbmdlIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tUC0xMDApO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmX190aHVtYiB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLVAtMTAwKTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxuXFxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjNyZW07XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic3R5bGVzXCI6IGBxRFNmdktSNXdudUpZRVBCS1pMR2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuO1xuXHRpZiAoZm9vID09PSBiYXIpIHJldHVybiB0cnVlO1xuXG5cdGlmIChmb28gJiYgYmFyICYmIChjdG9yPWZvby5jb25zdHJ1Y3RvcikgPT09IGJhci5jb25zdHJ1Y3Rvcikge1xuXHRcdGlmIChjdG9yID09PSBEYXRlKSByZXR1cm4gZm9vLmdldFRpbWUoKSA9PT0gYmFyLmdldFRpbWUoKTtcblx0XHRpZiAoY3RvciA9PT0gUmVnRXhwKSByZXR1cm4gZm9vLnRvU3RyaW5nKCkgPT09IGJhci50b1N0cmluZygpO1xuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28ubGVuZ3RoKSA9PT0gYmFyLmxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZGVxdWFsKGZvb1tsZW5dLCBiYXJbbGVuXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdG9yIHx8IHR5cGVvZiBmb28gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRsZW4gPSAwO1xuXHRcdFx0Zm9yIChjdG9yIGluIGZvbykge1xuXHRcdFx0XHRpZiAoaGFzLmNhbGwoZm9vLCBjdG9yKSAmJiArK2xlbiAmJiAhaGFzLmNhbGwoYmFyLCBjdG9yKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZiAoIShjdG9yIGluIGJhcikgfHwgIWRlcXVhbChmb29bY3Rvcl0sIGJhcltjdG9yXSkpIHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhiYXIpLmxlbmd0aCA9PT0gbGVuO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmb28gIT09IGZvbyAmJiBiYXIgIT09IGJhcjtcbn1cbiIsIi8qIGVzbGludCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55OiBvZmYgKi9cbi8vIHN5bWJvbHNcbmNvbnN0IFRSQUNLX01FTU9fU1lNQk9MID0gU3ltYm9sKCk7XG5jb25zdCBHRVRfT1JJR0lOQUxfU1lNQk9MID0gU3ltYm9sKCk7XG4vLyBwcm9wZXJ0aWVzXG5jb25zdCBBRkZFQ1RFRF9QUk9QRVJUWSA9ICdhJztcbmNvbnN0IElTX1RBUkdFVF9DT1BJRURfUFJPUEVSVFkgPSAnZic7XG5jb25zdCBQUk9YWV9QUk9QRVJUWSA9ICdwJztcbmNvbnN0IFBST1hZX0NBQ0hFX1BST1BFUlRZID0gJ2MnO1xuY29uc3QgVEFSR0VUX0NBQ0hFX1BST1BFUlRZID0gJ3QnO1xuY29uc3QgSEFTX0tFWV9QUk9QRVJUWSA9ICdoJztcbmNvbnN0IEFMTF9PV05fS0VZU19QUk9QRVJUWSA9ICd3JztcbmNvbnN0IEhBU19PV05fS0VZX1BST1BFUlRZID0gJ28nO1xuY29uc3QgS0VZU19QUk9QRVJUWSA9ICdrJztcbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBiYXJlIHByb3h5XG5sZXQgbmV3UHJveHkgPSAodGFyZ2V0LCBoYW5kbGVyKSA9PiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbi8vIGdldCBvYmplY3QgcHJvdG90eXBlXG5jb25zdCBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbmNvbnN0IG9iamVjdHNUb1RyYWNrID0gbmV3IFdlYWtNYXAoKTtcbi8vIGNoZWNrIGlmIG9iaiBpcyBhIHBsYWluIG9iamVjdCBvciBhbiBhcnJheVxuY29uc3QgaXNPYmplY3RUb1RyYWNrID0gKG9iaikgPT4gb2JqICYmXG4gICAgKG9iamVjdHNUb1RyYWNrLmhhcyhvYmopXG4gICAgICAgID8gb2JqZWN0c1RvVHJhY2suZ2V0KG9iailcbiAgICAgICAgOiBnZXRQcm90byhvYmopID09PSBPYmplY3QucHJvdG90eXBlIHx8IGdldFByb3RvKG9iaikgPT09IEFycmF5LnByb3RvdHlwZSk7XG4vLyBjaGVjayBpZiBpdCBpcyBvYmplY3RcbmNvbnN0IGlzT2JqZWN0ID0gKHgpID0+IHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuLy8gUHJvcGVydGllcyB0aGF0IGFyZSBib3RoIG5vbi1jb25maWd1cmFibGUgYW5kIG5vbi13cml0YWJsZSB3aWxsIGJyZWFrXG4vLyB0aGUgcHJveHkgZ2V0IHRyYXAgd2hlbiB3ZSB0cnkgdG8gcmV0dXJuIGEgcmVjdXJzaXZlL2NoaWxkIGNvbXBhcmUgcHJveHlcbi8vIGZyb20gdGhlbS4gV2UgY2FuIGF2b2lkIHRoaXMgYnkgbWFraW5nIGEgY29weSBvZiB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoXG4vLyBhbGwgZGVzY3JpcHRvcnMgbWFya2VkIGFzIGNvbmZpZ3VyYWJsZSwgc2VlIGBjb3B5VGFyZ2V0T2JqZWN0YC5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhaS1zaGkvcHJveHktY29tcGFyZS9wdWxsLzhcbmNvbnN0IG5lZWRzVG9Db3B5VGFyZ2V0T2JqZWN0ID0gKG9iaikgPT4gT2JqZWN0LnZhbHVlcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopKS5zb21lKChkZXNjcmlwdG9yKSA9PiAhZGVzY3JpcHRvci5jb25maWd1cmFibGUgJiYgIWRlc2NyaXB0b3Iud3JpdGFibGUpO1xuLy8gTWFrZSBhIGNvcHkgd2l0aCBhbGwgZGVzY3JpcHRvcnMgbWFya2VkIGFzIGNvbmZpZ3VyYWJsZS5cbmNvbnN0IGNvcHlUYXJnZXRPYmplY3QgPSAob2JqKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAvLyBBcnJheXMgbmVlZCBhIHNwZWNpYWwgd2F5IHRvIGNvcHlcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqKTtcbiAgICB9XG4gICAgLy8gRm9yIG5vbi1hcnJheSBvYmplY3RzLCB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IGtlZXBpbmcgdGhlIHByb3RvdHlwZVxuICAgIC8vIHdpdGggY2hhbmdpbmcgYWxsIGNvbmZpZ3VyYWJsZSBvcHRpb25zIChvdGhlcndpc2UsIHByb3hpZXMgd2lsbCBjb21wbGFpbilcbiAgICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaik7XG4gICAgT2JqZWN0LnZhbHVlcyhkZXNjcmlwdG9ycykuZm9yRWFjaCgoZGVzYykgPT4ge1xuICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoZ2V0UHJvdG8ob2JqKSwgZGVzY3JpcHRvcnMpO1xufTtcbmNvbnN0IGNyZWF0ZVByb3h5SGFuZGxlciA9IChvcmlnT2JqLCBpc1RhcmdldENvcGllZCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBbSVNfVEFSR0VUX0NPUElFRF9QUk9QRVJUWV06IGlzVGFyZ2V0Q29waWVkLFxuICAgIH07XG4gICAgbGV0IHRyYWNrT2JqZWN0ID0gZmFsc2U7IC8vIGZvciB0cmFja01lbW9cbiAgICBjb25zdCByZWNvcmRVc2FnZSA9ICh0eXBlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKCF0cmFja09iamVjdCkge1xuICAgICAgICAgICAgbGV0IHVzZWQgPSBzdGF0ZVtBRkZFQ1RFRF9QUk9QRVJUWV0uZ2V0KG9yaWdPYmopO1xuICAgICAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdXNlZCA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlW0FGRkVDVEVEX1BST1BFUlRZXS5zZXQob3JpZ09iaiwgdXNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gQUxMX09XTl9LRVlTX1BST1BFUlRZKSB7XG4gICAgICAgICAgICAgICAgdXNlZFtBTExfT1dOX0tFWVNfUFJPUEVSVFldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXQgPSB1c2VkW3R5cGVdO1xuICAgICAgICAgICAgICAgIGlmICghc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlZFt0eXBlXSA9IHNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZWNvcmRPYmplY3RBc1VzZWQgPSAoKSA9PiB7XG4gICAgICAgIHRyYWNrT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgc3RhdGVbQUZGRUNURURfUFJPUEVSVFldLmRlbGV0ZShvcmlnT2JqKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZXIgPSB7XG4gICAgICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gR0VUX09SSUdJTkFMX1NZTUJPTCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnT2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjb3JkVXNhZ2UoS0VZU19QUk9QRVJUWSwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm94eShSZWZsZWN0LmdldCh0YXJnZXQsIGtleSksIHN0YXRlW0FGRkVDVEVEX1BST1BFUlRZXSwgc3RhdGVbUFJPWFlfQ0FDSEVfUFJPUEVSVFldLCBzdGF0ZVtUQVJHRVRfQ0FDSEVfUFJPUEVSVFldKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzKHRhcmdldCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBUUkFDS19NRU1PX1NZTUJPTCkge1xuICAgICAgICAgICAgICAgIHJlY29yZE9iamVjdEFzVXNlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjb3JkVXNhZ2UoSEFTX0tFWV9QUk9QRVJUWSwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIGtleSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkge1xuICAgICAgICAgICAgcmVjb3JkVXNhZ2UoSEFTX09XTl9LRVlfUFJPUEVSVFksIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgICB9LFxuICAgICAgICBvd25LZXlzKHRhcmdldCkge1xuICAgICAgICAgICAgcmVjb3JkVXNhZ2UoQUxMX09XTl9LRVlTX1BST1BFUlRZKTtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChpc1RhcmdldENvcGllZCkge1xuICAgICAgICBoYW5kbGVyLnNldCA9IGhhbmRsZXIuZGVsZXRlUHJvcGVydHkgPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIFtoYW5kbGVyLCBzdGF0ZV07XG59O1xuY29uc3QgZ2V0T3JpZ2luYWxPYmplY3QgPSAob2JqKSA9PiBcbi8vIHVud3JhcCBwcm94eVxub2JqW0dFVF9PUklHSU5BTF9TWU1CT0xdIHx8XG4gICAgLy8gb3RoZXJ3aXNlXG4gICAgb2JqO1xuLyoqXG4gKiBDcmVhdGUgYSBwcm94eS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIGEgcHJveHkgYXQgdG9wIGxldmVsIGFuZCBwcm94eSBuZXN0ZWQgb2JqZWN0cyBhcyB5b3UgYWNjZXNzIHRoZW0sXG4gKiBpbiBvcmRlciB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIHByb3BlcnRpZXMgd2VyZSBhY2Nlc3NlZCB2aWEgZ2V0L2hhcyBwcm94eSBoYW5kbGVyczpcbiAqXG4gKiBOT1RFOiBQcmludGluZyBvZiBXZWFrTWFwIGlzIGhhcmQgdG8gaW5zcGVjdCBhbmQgbm90IHZlcnkgcmVhZGFibGVcbiAqIGZvciB0aGlzIHB1cnBvc2UgeW91IGNhbiB1c2UgdGhlIGBhZmZlY3RlZFRvUGF0aExpc3RgIGhlbHBlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gT2JqZWN0IHRoYXQgd2lsbCBiZSB3cmFwcGVkIG9uIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7V2Vha01hcDxvYmplY3QsIHVua25vd24+fSBhZmZlY3RlZCAtXG4gKiBXZWFrTWFwIHRoYXQgd2lsbCBob2xkIHRoZSB0cmFja2luZyBvZiB3aGljaCBwcm9wZXJ0aWVzIGluIHRoZSBwcm94aWVkIG9iamVjdCB3ZXJlIGFjY2Vzc2VkLlxuICogQHBhcmFtIHtXZWFrTWFwPG9iamVjdCwgdW5rbm93bj59IFtwcm94eUNhY2hlXSAtXG4gKiBXZWFrTWFwIHRoYXQgd2lsbCBoZWxwIGtlZXAgcmVmZXJlbnRpYWwgaWRlbnRpdHkgZm9yIHByb3hpZXMuXG4gKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn0gLSBPYmplY3Qgd3JhcHBlZCBpbiBhIHByb3h5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjcmVhdGVQcm94eSB9IGZyb20gJ3Byb3h5LWNvbXBhcmUnO1xuICpcbiAqIGNvbnN0IG9yaWdpbmFsID0geyBhOiBcIjFcIiwgYzogXCIyXCIsIGQ6IHsgZTogXCIzXCIgfSB9O1xuICogY29uc3QgYWZmZWN0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICogY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShvcmlnaW5hbCwgYWZmZWN0ZWQpO1xuICpcbiAqIHByb3h5LmEgLy8gV2lsbCBtYXJrIGFzIHVzZWQgYW5kIHRyYWNrIGl0cyB2YWx1ZS5cbiAqIC8vIFRoaXMgd2lsbCB1cGRhdGUgdGhlIGFmZmVjdGVkIFdlYWtNYXAgd2l0aCBvcmlnaW5hbCBhcyBrZXlcbiAqIC8vIGFuZCBhIFNldCB3aXRoIFwiYVwiXG4gKlxuICogcHJveHkuZCAvLyBXaWxsIG1hcmsgXCJkXCIgYXMgYWNjZXNzZWQgdG8gdHJhY2sgYW5kIHByb3h5IGl0c2VsZiAoeyBlOiBcIjNcIiB9KS5cbiAqIC8vIFRoaXMgd2lsbCB1cGRhdGUgdGhlIGFmZmVjdGVkIFdlYWtNYXAgd2l0aCBvcmlnaW5hbCBhcyBrZXlcbiAqIC8vIGFuZCBhIFNldCB3aXRoIFwiZFwiXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm94eSA9IChvYmosIGFmZmVjdGVkLCBwcm94eUNhY2hlLCB0YXJnZXRDYWNoZSkgPT4ge1xuICAgIGlmICghaXNPYmplY3RUb1RyYWNrKG9iaikpXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgbGV0IHRhcmdldEFuZENvcGllZCA9IHRhcmdldENhY2hlICYmIHRhcmdldENhY2hlLmdldChvYmopO1xuICAgIGlmICghdGFyZ2V0QW5kQ29waWVkKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldE9yaWdpbmFsT2JqZWN0KG9iaik7XG4gICAgICAgIGlmIChuZWVkc1RvQ29weVRhcmdldE9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRBbmRDb3BpZWQgPSBbdGFyZ2V0LCBjb3B5VGFyZ2V0T2JqZWN0KHRhcmdldCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0QW5kQ29waWVkID0gW3RhcmdldF07XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0Q2FjaGUgPT09IG51bGwgfHwgdGFyZ2V0Q2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldENhY2hlLnNldChvYmosIHRhcmdldEFuZENvcGllZCk7XG4gICAgfVxuICAgIGNvbnN0IFt0YXJnZXQsIGNvcGllZFRhcmdldF0gPSB0YXJnZXRBbmRDb3BpZWQ7XG4gICAgbGV0IGhhbmRsZXJBbmRTdGF0ZSA9IHByb3h5Q2FjaGUgJiYgcHJveHlDYWNoZS5nZXQodGFyZ2V0KTtcbiAgICBpZiAoIWhhbmRsZXJBbmRTdGF0ZSB8fFxuICAgICAgICBoYW5kbGVyQW5kU3RhdGVbMV1bSVNfVEFSR0VUX0NPUElFRF9QUk9QRVJUWV0gIT09ICEhY29waWVkVGFyZ2V0KSB7XG4gICAgICAgIGhhbmRsZXJBbmRTdGF0ZSA9IGNyZWF0ZVByb3h5SGFuZGxlcih0YXJnZXQsICEhY29waWVkVGFyZ2V0KTtcbiAgICAgICAgaGFuZGxlckFuZFN0YXRlWzFdW1BST1hZX1BST1BFUlRZXSA9IG5ld1Byb3h5KGNvcGllZFRhcmdldCB8fCB0YXJnZXQsIGhhbmRsZXJBbmRTdGF0ZVswXSk7XG4gICAgICAgIGlmIChwcm94eUNhY2hlKSB7XG4gICAgICAgICAgICBwcm94eUNhY2hlLnNldCh0YXJnZXQsIGhhbmRsZXJBbmRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlckFuZFN0YXRlWzFdW0FGRkVDVEVEX1BST1BFUlRZXSA9IGFmZmVjdGVkO1xuICAgIGhhbmRsZXJBbmRTdGF0ZVsxXVtQUk9YWV9DQUNIRV9QUk9QRVJUWV0gPSBwcm94eUNhY2hlO1xuICAgIGhhbmRsZXJBbmRTdGF0ZVsxXVtUQVJHRVRfQ0FDSEVfUFJPUEVSVFldID0gdGFyZ2V0Q2FjaGU7XG4gICAgcmV0dXJuIGhhbmRsZXJBbmRTdGF0ZVsxXVtQUk9YWV9QUk9QRVJUWV07XG59O1xuY29uc3QgaXNBbGxPd25LZXlzQ2hhbmdlZCA9IChwcmV2T2JqLCBuZXh0T2JqKSA9PiB7XG4gICAgY29uc3QgcHJldktleXMgPSBSZWZsZWN0Lm93bktleXMocHJldk9iaik7XG4gICAgY29uc3QgbmV4dEtleXMgPSBSZWZsZWN0Lm93bktleXMobmV4dE9iaik7XG4gICAgcmV0dXJuIChwcmV2S2V5cy5sZW5ndGggIT09IG5leHRLZXlzLmxlbmd0aCB8fFxuICAgICAgICBwcmV2S2V5cy5zb21lKChrLCBpKSA9PiBrICE9PSBuZXh0S2V5c1tpXSkpO1xufTtcbi8qKlxuICogQ29tcGFyZSBjaGFuZ2VzIG9uIG9iamVjdHMuXG4gKlxuICogVGhpcyB3aWxsIGNvbXBhcmUgdGhlIGFmZmVjdGVkIHByb3BlcnRpZXMgb24gdHJhY2tlZCBvYmplY3RzIGluc2lkZSB0aGUgcHJveHlcbiAqIHRvIGNoZWNrIGlmIHRoZXJlIHdlcmUgYW55IGNoYW5nZXMgbWFkZSB0byBpdCxcbiAqIGJ5IGRlZmF1bHQgaWYgbm8gcHJvcGVydHkgd2FzIGFjY2Vzc2VkIG9uIHRoZSBwcm94eSBpdCB3aWxsIGF0dGVtcHQgdG8gZG8gYVxuICogcmVmZXJlbmNlIGVxdWFsaXR5IGNoZWNrIGZvciB0aGUgb2JqZWN0cyBwcm92aWRlZCAoT2JqZWN0LmlzKGEsIGIpKS4gSWYgeW91IGFjY2VzcyBhIHByb3BlcnR5XG4gKiBvbiB0aGUgcHJveHksIHRoZW4gaXNDaGFuZ2VkIHdpbGwgb25seSBjb21wYXJlIHRoZSBhZmZlY3RlZCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2T2JqIC0gVGhlIHByZXZpb3VzIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHRPYmogLSBPYmplY3QgdG8gY29tcGFyZSB3aXRoIHRoZSBwcmV2aW91cyBvbmUuXG4gKiBAcGFyYW0ge1dlYWtNYXA8b2JqZWN0LCB1bmtub3duPn0gYWZmZWN0ZWQgLVxuICogV2Vha01hcCB0aGF0IGhvbGRzIHRoZSB0cmFja2luZyBvZiB3aGljaCBwcm9wZXJ0aWVzIGluIHRoZSBwcm94aWVkIG9iamVjdCB3ZXJlIGFjY2Vzc2VkLlxuICogQHBhcmFtIHtXZWFrTWFwPG9iamVjdCwgdW5rbm93bj59IFtjYWNoZV0gLVxuICogV2Vha01hcCB0aGF0IGhvbGRzIGEgY2FjaGUgb2YgdGhlIGNvbXBhcmlzb25zIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2Ugd2l0aCByZXBldGl0aXZlIGNvbXBhcmlzb25zLFxuICogYW5kIHRvIGF2b2lkIGluZmluaXRlIGxvb3Agd2l0aCBjaXJjdWxhciBzdHJ1Y3R1cmVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBhZmZlY3RlZCBwcm9wZXJ0eSBvbiB0aGUgb2JqZWN0IGhhcyBjaGFuZ2VkLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjcmVhdGVQcm94eSwgaXNDaGFuZ2VkIH0gZnJvbSAncHJveHktY29tcGFyZSc7XG4gKlxuICogY29uc3Qgb2JqID0geyBhOiBcIjFcIiwgYzogXCIyXCIsIGQ6IHsgZTogXCIzXCIgfSB9O1xuICogY29uc3QgYWZmZWN0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICpcbiAqIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkob2JqLCBhZmZlY3RlZCk7XG4gKlxuICogcHJveHkuYVxuICpcbiAqIGlzQ2hhbmdlZChvYmosIHsgYTogXCIxXCIgfSwgYWZmZWN0ZWQpIC8vIGZhbHNlXG4gKlxuICogcHJveHkuYSA9IFwiMlwiXG4gKlxuICogaXNDaGFuZ2VkKG9iaiwgeyBhOiBcIjFcIiB9LCBhZmZlY3RlZCkgLy8gdHJ1ZVxuICovXG5leHBvcnQgY29uc3QgaXNDaGFuZ2VkID0gKHByZXZPYmosIG5leHRPYmosIGFmZmVjdGVkLCBjYWNoZSwgLy8gZm9yIG9iamVjdCB3aXRoIGN5Y2xlc1xuaXNFcXVhbCA9IE9iamVjdC5pcykgPT4ge1xuICAgIGlmIChpc0VxdWFsKHByZXZPYmosIG5leHRPYmopKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFpc09iamVjdChwcmV2T2JqKSB8fCAhaXNPYmplY3QobmV4dE9iaikpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHVzZWQgPSBhZmZlY3RlZC5nZXQoZ2V0T3JpZ2luYWxPYmplY3QocHJldk9iaikpO1xuICAgIGlmICghdXNlZClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlLmdldChwcmV2T2JqKTtcbiAgICAgICAgaWYgKGhpdCA9PT0gbmV4dE9iaikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvciBvYmplY3Qgd2l0aCBjeWNsZXNcbiAgICAgICAgY2FjaGUuc2V0KHByZXZPYmosIG5leHRPYmopO1xuICAgIH1cbiAgICBsZXQgY2hhbmdlZCA9IG51bGw7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdXNlZFtIQVNfS0VZX1BST1BFUlRZXSB8fCBbXSkge1xuICAgICAgICBjaGFuZ2VkID0gUmVmbGVjdC5oYXMocHJldk9iaiwga2V5KSAhPT0gUmVmbGVjdC5oYXMobmV4dE9iaiwga2V5KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG4gICAgaWYgKHVzZWRbQUxMX09XTl9LRVlTX1BST1BFUlRZXSA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGFuZ2VkID0gaXNBbGxPd25LZXlzQ2hhbmdlZChwcmV2T2JqLCBuZXh0T2JqKTtcbiAgICAgICAgaWYgKGNoYW5nZWQpXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHVzZWRbSEFTX09XTl9LRVlfUFJPUEVSVFldIHx8IFtdKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNQcmV2ID0gISFSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcmV2T2JqLCBrZXkpO1xuICAgICAgICAgICAgY29uc3QgaGFzTmV4dCA9ICEhUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dE9iaiwga2V5KTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSBoYXNQcmV2ICE9PSBoYXNOZXh0O1xuICAgICAgICAgICAgaWYgKGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdXNlZFtLRVlTX1BST1BFUlRZXSB8fCBbXSkge1xuICAgICAgICBjaGFuZ2VkID0gaXNDaGFuZ2VkKHByZXZPYmpba2V5XSwgbmV4dE9ialtrZXldLCBhZmZlY3RlZCwgY2FjaGUsIGlzRXF1YWwpO1xuICAgICAgICBpZiAoY2hhbmdlZClcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZCA9PT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHVzZWQnKTtcbiAgICByZXR1cm4gY2hhbmdlZDtcbn07XG4vLyBleHBsaWNpdGx5IHRyYWNrIG9iamVjdCB3aXRoIG1lbW9cbmV4cG9ydCBjb25zdCB0cmFja01lbW8gPSAob2JqKSA9PiB7XG4gICAgaWYgKGlzT2JqZWN0VG9UcmFjayhvYmopKSB7XG4gICAgICAgIHJldHVybiBUUkFDS19NRU1PX1NZTUJPTCBpbiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG4vKipcbiAqIFVud3JhcCBwcm94eSB0byBnZXQgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBVc2VkIHRvIHJldHJpZXZlIHRoZSBvcmlnaW5hbCBvYmplY3QgdXNlZCB0byBjcmVhdGUgdGhlIHByb3h5IGluc3RhbmNlIHdpdGggYGNyZWF0ZVByb3h5YC5cbiAqXG4gKiBAcGFyYW0ge1Byb3h5PG9iamVjdD59IG9iaiAtICBUaGUgcHJveHkgd3JhcHBlciBvZiB0aGUgb3JpZ2luaWFsIG9iamVjdC5cbiAqIEByZXR1cm5zIHtvYmplY3QgfCBudWxsfSAtIFJldHVybiBlaXRoZXIgdGhlIHVud3JhcHBlZCBvYmplY3QgaWYgZXhpc3RzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjcmVhdGVQcm94eSwgZ2V0VW50cmFja2VkIH0gZnJvbSAncHJveHktY29tcGFyZSc7XG4gKlxuICogY29uc3Qgb3JpZ2luYWwgPSB7IGE6IFwiMVwiLCBjOiBcIjJcIiwgZDogeyBlOiBcIjNcIiB9IH07XG4gKiBjb25zdCBhZmZlY3RlZCA9IG5ldyBXZWFrTWFwKCk7XG4gKlxuICogY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShvcmlnaW5hbCwgYWZmZWN0ZWQpO1xuICogY29uc3Qgb3JpZ2luYWxGcm9tUHJveHkgPSBnZXRVbnRyYWNrZWQocHJveHkpXG4gKlxuICogT2JqZWN0LmlzKG9yaWdpbmFsLCBvcmlnaW5hbEZyb21Qcm94eSkgLy8gdHJ1ZVxuICogaXNDaGFuZ2VkKG9yaWdpbmFsLCBvcmlnaW5hbEZyb21Qcm94eSwgYWZmZWN0ZWQpIC8vIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVbnRyYWNrZWQgPSAob2JqKSA9PiB7XG4gICAgaWYgKGlzT2JqZWN0VG9UcmFjayhvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmpbR0VUX09SSUdJTkFMX1NZTUJPTF0gfHwgbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuLyoqXG4gKiBNYXJrIG9iamVjdCB0byBiZSB0cmFja2VkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWFya3MgYW4gb2JqZWN0IHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byBgY3JlYXRlUHJveHlgXG4gKiBhcyBtYXJrZWQgdG8gdHJhY2sgb3Igbm90LiBCeSBkZWZhdWx0IG9ubHkgQXJyYXkgYW5kIE9iamVjdCBhcmUgbWFya2VkIHRvIHRyYWNrLFxuICogc28gdGhpcyBpcyB1c2VmdWwgZm9yIGV4YW1wbGUgdG8gbWFyayBhIGNsYXNzIGluc3RhbmNlIHRvIHRyYWNrIG9yIHRvIG1hcmsgYSBvYmplY3RcbiAqIHRvIGJlIHVudHJhY2tlZCB3aGVuIGNyZWF0aW5nIHlvdXIgcHJveHkuXG4gKlxuICogQHBhcmFtIG9iaiAtIE9iamVjdCB0byBtYXJrIGFzIHRyYWNrZWQgb3Igbm90LlxuICogQHBhcmFtIG1hcmsgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB5b3Ugd2FudCB0byB0cmFjayB0aGlzIG9iamVjdCBvciBub3QuXG4gKiBAcmV0dXJucyAtIE5vIHJldHVybi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY3JlYXRlUHJveHksIG1hcmtUb1RyYWNrLCBpc0NoYW5nZWQgfSBmcm9tICdwcm94eS1jb21wYXJlJztcbiAqXG4gKiBjb25zdCBuZXN0ZWQgPSB7IGU6IFwiM1wiIH1cbiAqXG4gKiBtYXJrVG9UcmFjayhuZXN0ZWQsIGZhbHNlKVxuICpcbiAqIGNvbnN0IG9yaWdpbmFsID0geyBhOiBcIjFcIiwgYzogXCIyXCIsIGQ6IG5lc3RlZCB9O1xuICogY29uc3QgYWZmZWN0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICpcbiAqIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkob3JpZ2luYWwsIGFmZmVjdGVkKTtcbiAqXG4gKiBwcm94eS5kLmVcbiAqXG4gKiBpc0NoYW5nZWQob3JpZ2luYWwsIHsgZDogeyBlOiBcIjNcIiB9IH0sIGFmZmVjdGVkKSAvLyB0cnVlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXJrVG9UcmFjayA9IChvYmosIG1hcmsgPSB0cnVlKSA9PiB7XG4gICAgb2JqZWN0c1RvVHJhY2suc2V0KG9iaiwgbWFyayk7XG59O1xuLyoqXG4gKiBDb252ZXJ0IGBhZmZlY3RlZGAgdG8gcGF0aCBsaXN0XG4gKlxuICogYGFmZmVjdGVkYCBpcyBhIHdlYWsgbWFwIHdoaWNoIGlzIG5vdCBwcmludGFibGUuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbiBjb252ZXJ0IGl0IHRvIHByaW50YWJsZSBwYXRoIGxpc3QuXG4gKiBJdCdzIGZvciBkZWJ1Z2dpbmcgcHVycG9zZS5cbiAqXG4gKiBAcGFyYW0gb2JqIC0gQW4gb2JqZWN0IHRoYXQgaXMgdXNlZCB3aXRoIGBjcmVhdGVQcm94eWAuXG4gKiBAcGFyYW0gYWZmZWN0ZWQgLSBBIHdlYWsgbWFwIHRoYXQgaXMgdXNlZCB3aXRoIGBjcmVhdGVQcm94eWAuXG4gKiBAcGFyYW0gb25seVdpdGhWYWx1ZXMgLSBBbiBvcHRpb25hbCBib29sZWFuIHRvIGV4Y2x1ZGUgb2JqZWN0IGdldHRlcnMuXG4gKiBAcmV0dXJucyAtIEFuIGFycmF5IG9mIHBhdGhzLlxuICovXG5leHBvcnQgY29uc3QgYWZmZWN0ZWRUb1BhdGhMaXN0ID0gKG9iaiwgYWZmZWN0ZWQsIG9ubHlXaXRoVmFsdWVzKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgV2Vha1NldCgpO1xuICAgIGNvbnN0IHdhbGsgPSAoeCwgcGF0aCkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgaWYgKHNlZW4uaGFzKHgpKSB7XG4gICAgICAgICAgICAvLyBmb3Igb2JqZWN0IHdpdGggY3ljbGVzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JqZWN0KHgpKSB7XG4gICAgICAgICAgICBzZWVuLmFkZCh4KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1c2VkID0gaXNPYmplY3QoeCkgJiYgYWZmZWN0ZWQuZ2V0KGdldE9yaWdpbmFsT2JqZWN0KHgpKTtcbiAgICAgICAgaWYgKHVzZWQpIHtcbiAgICAgICAgICAgIChfYSA9IHVzZWRbSEFTX0tFWV9QUk9QRVJUWV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gYDpoYXMoJHtTdHJpbmcoa2V5KX0pYDtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocGF0aCA/IFsuLi5wYXRoLCBzZWdtZW50XSA6IFtzZWdtZW50XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh1c2VkW0FMTF9PV05fS0VZU19QUk9QRVJUWV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gJzpvd25LZXlzJztcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocGF0aCA/IFsuLi5wYXRoLCBzZWdtZW50XSA6IFtzZWdtZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoX2IgPSB1c2VkW0hBU19PV05fS0VZX1BST1BFUlRZXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gYDpoYXNPd24oJHtTdHJpbmcoa2V5KX0pYDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHBhdGggPyBbLi4ucGF0aCwgc2VnbWVudF0gOiBbc2VnbWVudF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9jID0gdXNlZFtLRVlTX1BST1BFUlRZXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghb25seVdpdGhWYWx1ZXMgfHxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJyBpbiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih4LCBrZXkpIHx8IHt9KSkge1xuICAgICAgICAgICAgICAgICAgICB3YWxrKHhba2V5XSwgcGF0aCA/IFsuLi5wYXRoLCBrZXldIDogW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIGxpc3QucHVzaChwYXRoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2FsayhvYmopO1xuICAgIHJldHVybiBsaXN0O1xufTtcbi8qKlxuICogcmVwbGFjZSBuZXdQcm94eSBmdW5jdGlvbi5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGlmIHlvdSB3YW50IHRvIHVzZSBwcm94eS1wb2x5ZmlsbC5cbiAqIE5vdGUgdGhhdCBwcm94eS1wb2x5ZmlsbCBjYW4ndCBwb2x5ZmlsbCBldmVyeXRoaW5nLlxuICogVXNlIGl0IGF0IHlvdXIgb3duIHJpc2suXG4gKi9cbmV4cG9ydCBjb25zdCByZXBsYWNlTmV3UHJveHkgPSAoZm4pID0+IHtcbiAgICBuZXdQcm94eSA9IGZuO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLndlYWstbWFwLmpzXCIpO1xucmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc29ydC5qc1wiKTtcbnJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtZmxvYXQuanNcIik7XG5yZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qc1wiKTtcbnJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXNuZXh0Lml0ZXJhdG9yLmZvci1lYWNoLmpzXCIpO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2Nsc3ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbHN4XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShlKSB7IGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIFdlYWtNYXApIHJldHVybiBudWxsOyB2YXIgciA9IG5ldyBXZWFrTWFwKCksIHQgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShlKSB7IHJldHVybiBlID8gdCA6IHI7IH0pKGUpOyB9XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChlLCByKSB7IGlmICghciAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7IGlmIChudWxsID09PSBlIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIGUgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlKSByZXR1cm4geyBkZWZhdWx0OiBlIH07IHZhciB0ID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKHIpOyBpZiAodCAmJiB0LmhhcyhlKSkgcmV0dXJuIHQuZ2V0KGUpOyB2YXIgbiA9IHsgX19wcm90b19fOiBudWxsIH0sIGEgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIgdSBpbiBlKSBpZiAoXCJkZWZhdWx0XCIgIT09IHUgJiYge30uaGFzT3duUHJvcGVydHkuY2FsbChlLCB1KSkgeyB2YXIgaSA9IGEgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHUpIDogbnVsbDsgaSAmJiAoaS5nZXQgfHwgaS5zZXQpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIHUsIGkpIDogblt1XSA9IGVbdV07IH0gcmV0dXJuIG4uZGVmYXVsdCA9IGUsIHQgJiYgdC5zZXQoZSwgbiksIG47IH1cbi8vIEFsaWFzZXNcbmNvbnN0IGFicyA9IE1hdGguYWJzO1xuY29uc3QgZmxvYXQgPSBwYXJzZUZsb2F0O1xuXG4vLyBWYWx1ZXNcbmNvbnN0IE1JTiA9ICdtaW4nO1xuY29uc3QgTUFYID0gJ21heCc7XG5jb25zdCBBTlkgPSAnYW55JztcbmNvbnN0IFZFUlRJQ0FMID0gJ3ZlcnRpY2FsJztcbmNvbnN0IFRBQklOREVYID0gJ3RhYmluZGV4JztcblxuLy8gRGF0YSBBdHRyaWJ1dGVzXG5jb25zdCBEQVRBX0xPV0VSID0gJ2RhdGEtbG93ZXInO1xuY29uc3QgREFUQV9VUFBFUiA9ICdkYXRhLXVwcGVyJztcbmNvbnN0IERBVEFfQUNUSVZFID0gJ2RhdGEtYWN0aXZlJztcbmNvbnN0IERBVEFfVkVSVElDQUwgPSAnZGF0YS12ZXJ0aWNhbCc7XG5jb25zdCBEQVRBX0RJU0FCTEVEID0gJ2RhdGEtZGlzYWJsZWQnO1xuXG4vLyBBUklBIEF0dHJpYnV0ZXNcbmNvbnN0IEFSSUFfTEFCRUwgPSAnYXJpYS1sYWJlbCc7XG5jb25zdCBBUklBX0xBQkVMTEVEQlkgPSAnYXJpYS1sYWJlbGxlZGJ5JztcbmNsYXNzIFJhbmdlU2xpZGVyIGV4dGVuZHMgX3JlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWxlbWVudCA9IC8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNyZWF0ZVJlZikoKTtcbiAgICB0aGlzLmlucHV0ID0gW107XG4gICAgdGhpcy50aHVtYiA9IFsvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5jcmVhdGVSZWYpKCksIC8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNyZWF0ZVJlZikoKV07XG4gICAgdGhpcy5yYW5nZSA9IC8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNyZWF0ZVJlZikoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzQ29udHJvbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZXh0ZXJuYWxJbnB1dCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21wb25lbnRNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5sYXN0VmFsdWVQcm9wID0gW107XG4gIH1cbiAgaW5pdGlhdGVJbnB1dFJhbmdlKGluZGV4KSB7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dEVsZW1lbnQudHlwZSA9ICdyYW5nZSc7XG4gICAgaW5wdXRFbGVtZW50Lm1pbiA9IHRoaXMub3B0aW9ucy5taW47XG4gICAgaW5wdXRFbGVtZW50Lm1heCA9IHRoaXMub3B0aW9ucy5tYXg7XG4gICAgaW5wdXRFbGVtZW50LnN0ZXAgPSB0aGlzLm9wdGlvbnMuc3RlcDtcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlID8gdGhpcy5vcHRpb25zLnZhbHVlW2luZGV4XSA6IHRoaXMub3B0aW9ucy5kZWZhdWx0VmFsdWVbaW5kZXhdO1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQ7XG4gIH1cbiAgdXBkYXRlSW5wdXRSYW5nZShpbmRleCkge1xuICAgIHRoaXMuaW5wdXRbaW5kZXhdLm1pbiA9IHRoaXMub3B0aW9ucy5taW47XG4gICAgdGhpcy5pbnB1dFtpbmRleF0ubWF4ID0gdGhpcy5vcHRpb25zLm1heDtcbiAgICB0aGlzLmlucHV0W2luZGV4XS5zdGVwID0gdGhpcy5vcHRpb25zLnN0ZXA7XG4gICAgdGhpcy5pbnB1dFtpbmRleF0udmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlID8gdGhpcy5vcHRpb25zLnZhbHVlW2luZGV4XSA6IGluZGV4ID09PSAxID8gdGhpcy52YWx1ZS5tYXggOiB0aGlzLnZhbHVlLm1pbjtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNDb21wb25lbnRNb3VudGVkKSB7XG4gICAgICAvLyBpbnB1dFt0eXBlPVwicmFuZ2VcIl0gZWxlbWVudHMgZm9yIHN5bmNpbmcgdmFsdWVzXG4gICAgICB0aGlzLmlucHV0ID0gW3RoaXMuaW5pdGlhdGVJbnB1dFJhbmdlKDApLCB0aGlzLmluaXRpYXRlSW5wdXRSYW5nZSgxKV07XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zZXRNaW5NYXhQcm9wcygpO1xuXG4gICAgICAvLyBUaHVtYiBpbmRleGVzIGZvciBtaW4gYW5kIG1heCB2YWx1ZXNcbiAgICAgIC8vIChzd2FwcGVkIHdoZW4gdGhlIHRodW1icyBjcm9zcyBlYWNoIG90aGVyKVxuICAgICAgdGhpcy5pbmRleCA9IHRoaXMuc2V0TWluTWF4UHJvcHMoMCwgMSk7XG5cbiAgICAgIC8vIFRodW1iIHdpZHRoICYgaGVpZ2h0IGZvciBjYWxjdWxhdGlvbiBvZiBleGFjdCBwb3NpdGlvbnMgYW5kIHNpemVzIG9mIGhvcml6b250YWwgdGh1bWJzIGFuZCByYW5nZVxuICAgICAgdGhpcy50aHVtYldpZHRoID0gdGhpcy5zZXRNaW5NYXhQcm9wcygpO1xuICAgICAgdGhpcy50aHVtYkhlaWdodCA9IHRoaXMuc2V0TWluTWF4UHJvcHMoKTtcblxuICAgICAgLy8gU2xpZGFibGUgcmFuZ2UgbGltaXRzICh3aGVuIGEgdGh1bWIgaXMgZHJhZ2dlZClcbiAgICAgIHRoaXMucmFuZ2VMaW1pdHMgPSB0aGlzLnNldE1pbk1heFByb3BzKCk7XG5cbiAgICAgIC8vIFNsaWRlciB2YWx1ZSBkZXBlbmRpbmcgb24gdGhlIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgIHRoaXMuc2xpZGVyVmFsdWUgPSB0aGlzLnNldE1pbk1heFByb3BzKCk7XG5cbiAgICAgIC8vIEZvciBkcmFnZ2luZyB0aHVtYnMgYW5kIHJhbmdlXG4gICAgICB0aGlzLm1heFJhbmdlV2lkdGggPSAwO1xuICAgICAgdGhpcy5yYW5nZVdpZHRoID0gMDtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy50aHVtYkRyYWcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhcnRQb3MgPSAwO1xuXG4gICAgICAvLyBpbml0aWFsXG4gICAgICB0aGlzLnJlc2V0KHRydWUpO1xuXG4gICAgICAvLyBBZGQgbGlzdGVuZXJzIHRvIGVsZW1lbnRcbiAgICAgIHRoaXMuYWRkTm9kZUV2ZW50TGlzdGVuZXIodGhpcy5lbGVtZW50LmN1cnJlbnQsICdwb2ludGVyZG93bicsIGUgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRGb2N1c2VkKGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBsaXN0ZW5lcnMgdG8gdGh1bWJzIGFuZCBzZXQgW2RhdGEtZGlzYWJsZWRdIG9uIGRpc2FibGVkIHRodW1ic1xuICAgICAgdGhpcy50aHVtYi5mb3JFYWNoKCh0LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkTm9kZUV2ZW50TGlzdGVuZXIodC5jdXJyZW50LCAncG9pbnRlcmRvd24nLCBlID0+IHtcbiAgICAgICAgICB0aGlzLmluaXRpYXRlVGh1bWJEcmFnKGUsIGksIHQuY3VycmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZE5vZGVFdmVudExpc3RlbmVyKHQuY3VycmVudCwgJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICBpZiAoZS53aGljaCA+PSAzNyAmJiBlLndoaWNoIDw9IDQwKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnN0ZXBWYWx1ZShpLCBlLndoaWNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBsaXN0ZW5lcnMgdG8gcmFuZ2VcbiAgICAgIHRoaXMuYWRkTm9kZUV2ZW50TGlzdGVuZXIodGhpcy5yYW5nZS5jdXJyZW50LCAncG9pbnRlcmRvd24nLCBlID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWF0ZVJhbmdlRHJhZyhlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEZWZpbmUgYW5kIGFkZCBnbG9iYWwgbGlzdGVuZXJzXG4gICAgICB0aGlzLnBvaW50ZXJNb3ZlRXZlbnQgPSBlID0+IHtcbiAgICAgICAgdGhpcy5kcmFnKGUpO1xuICAgICAgfTtcbiAgICAgIHRoaXMucG9pbnRlclVwRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZU5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlswXS5jdXJyZW50LCBEQVRBX0FDVElWRSk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVOb2RlQXR0cmlidXRlKHRoaXMudGh1bWJbMV0uY3VycmVudCwgREFUQV9BQ1RJVkUpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlTm9kZUF0dHJpYnV0ZSh0aGlzLnJhbmdlLmN1cnJlbnQsIERBVEFfQUNUSVZFKTtcbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy50aHVtYkRyYWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25UaHVtYkRyYWdFbmQpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uVGh1bWJEcmFnRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25SYW5nZURyYWdFbmQpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uUmFuZ2VEcmFnRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5yZXNpemVFdmVudCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zeW5jVGh1bWJEaW1lbnNpb25zKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVGh1bWJzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmFuZ2UoKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmFkZE5vZGVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLnBvaW50ZXJNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5hZGROb2RlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMucG9pbnRlclVwRXZlbnQpO1xuICAgICAgdGhpcy5hZGROb2RlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLnJlc2l6ZUV2ZW50KTtcbiAgICAgIHRoaXMuaXNDb21wb25lbnRNb3VudGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlSW5wdXRSYW5nZSgwKTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0UmFuZ2UoMSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBnbG9iYWwgbGlzdGVuZXJzXG4gICAgdGhpcy5yZW1vdmVOb2RlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5wb2ludGVyTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlbW92ZU5vZGVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5wb2ludGVyVXBFdmVudCk7XG4gICAgdGhpcy5yZW1vdmVOb2RlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLnJlc2l6ZUV2ZW50KTtcbiAgICB0aGlzLmlzQ29tcG9uZW50TW91bnRlZCA9IGZhbHNlO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIGxldCBmaXJzdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgdGhpcy5pc0NvbnRyb2xsZWQgPSAhIXRoaXMucHJvcHMudmFsdWU7XG4gICAgaWYgKHRoaXMuaXNDb250cm9sbGVkKSB7XG4gICAgICBpZiAoZmlyc3QgfHwgdGhpcy5wcm9wcy52YWx1ZSAhPT0gdGhpcy5sYXN0VmFsdWVQcm9wKSB7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxJbnB1dCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RWYWx1ZVByb3AgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLm1heFJhbmdlV2lkdGggPSB0aGlzLm9wdGlvbnMubWF4IC0gdGhpcy5vcHRpb25zLm1pbjtcbiAgICB0aGlzLnVwZGF0ZU9yaWVudGF0aW9uKCk7XG4gICAgdGhpcy5zZXRWYWx1ZSgnJywgdHJ1ZSwgZmFsc2UpO1xuICAgIHRoaXMudXBkYXRlUmFuZ2VMaW1pdHMoKTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZVRodW1ic0Rpc2FibGVkU3RhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZVRhYkluZGV4ZXMoKTtcbiAgICBpZiAoZmlyc3QpIHtcbiAgICAgIHRoaXMuc2xpZGVyVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfVxuICBpc051bWJlcihuKSB7XG4gICAgLy8gY2hlY2sgZm9yIE5hTiBleHBsaWNpdGx5XG4gICAgLy8gYmVjYXVzZSB3aXRoIE5hTiwgdGhlIHNlY29uZCBleHAuIGV2YWx1YXRlcyB0byB0cnVlXG4gICAgcmV0dXJuICFpc05hTihuKSAmJiArbiArICcnID09PSBuICsgJyc7XG4gIH1cbiAgc2V0TWluTWF4UHJvcHMoKSB7XG4gICAgbGV0IG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICBsZXQgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHJldHVybiB7XG4gICAgICBtaW4sXG4gICAgICBtYXhcbiAgICB9O1xuICB9XG4gIGl0ZXJhdGVNaW5NYXhQcm9wcyhmbikge1xuICAgIFtNSU4sIE1BWF0uZm9yRWFjaChmbik7XG4gIH1cbiAgZ2V0U2V0UHJvcHMoY29uZGl0aW9uLCBleHByZXNzaW9uLCBmbikge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxuICBzZXROb2RlQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkge1xuICAgIGxldCB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gIH1cbiAgcmVtb3ZlTm9kZUF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUpIHtcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICB9XG4gIGFkZE5vZGVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBmbikge1xuICAgIGxldCBpc1BvaW50ZXJFdmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogdHJ1ZTtcbiAgICAvLyB3aXRoIG9wdGlvbnMgZm9yIHBvaW50ZXIgZXZlbnRzXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgaXNQb2ludGVyRXZlbnQgPyB7XG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9IDoge30pO1xuICB9XG4gIHJlbW92ZU5vZGVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBmbikge1xuICAgIGxldCBpc1BvaW50ZXJFdmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogdHJ1ZTtcbiAgICAvLyB3aXRoIG9wdGlvbnMgZm9yIHBvaW50ZXIgZXZlbnRzXG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgaXNQb2ludGVyRXZlbnQgPyB7XG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9IDoge30pO1xuICB9XG4gIGZhbGxiYWNrVG9EZWZhdWx0KHByb3BlcnR5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnNbcHJvcGVydHldID0gdGhpcy5wcm9wc1twcm9wZXJ0eV0gPyB0aGlzLnByb3BzW3Byb3BlcnR5XSA6IGRlZmF1bHRWYWx1ZTtcbiAgfVxuICBpZlZlcnRpY2FsRWxzZSh2ZXJ0aWNhbCwgaG9yaXpvbnRhbCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09IFZFUlRJQ0FMID8gdmVydGljYWwgOiBob3Jpem9udGFsO1xuICB9XG4gIGN1cnJlbnRJbmRleChpKSB7XG4gICAgcmV0dXJuIGkgPT09IDEgPyB0aGlzLmluZGV4Lm1heCA6IHRoaXMuaW5kZXgubWluO1xuICB9XG5cbiAgLy8gU2V0IG1pbiBhbmQgbWF4IHZhbHVlcyB0byAxIChhcmJpdHJhcmlseSkgaWYgYW55IG9mIHRoZSBtaW4gb3IgbWF4IHZhbHVlcyBhcmUgXCJpbnZhbGlkXCJcbiAgLy8gU2V0dGluZyBib3RoIHZhbHVlcyAxIHdpbGwgZGlzYWJsZSB0aGUgc2xpZGVyXG4gIC8vIENhbGxlZCB3aGVuLFxuICAvLyAtPiB0aGUgZWxlbWVudCBpcyBpbml0aWFsbHkgc2V0XG4gIC8vIC0+IG1pbiBvciBtYXggcHJvcGVydGllcyBhcmUgbW9kaWZpZWRcbiAgc2FmZU1pbk1heFZhbHVlcygpIHtcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNOdW1iZXIodGhpcy5vcHRpb25zLm1pbikgfHwgIXRoaXMuaXNOdW1iZXIodGhpcy5vcHRpb25zLm1heCkpIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLm1pbiA9IGVycm9yID8gMSA6ICt0aGlzLm9wdGlvbnMubWluO1xuICAgIHRoaXMub3B0aW9ucy5tYXggPSBlcnJvciA/IDEgOiArdGhpcy5vcHRpb25zLm1heDtcbiAgfVxuXG4gIC8vIFJlZnJhbWUgdGhlIHRodW1ic0Rpc2FibGVkIHZhbHVlIGlmIFwiaW52YWxpZFwiXG4gIC8vIENhbGxlZCB3aGVuLFxuICAvLyAtPiB0aGUgZWxlbWVudCBpcyBpbml0aWFsbHkgc2V0XG4gIC8vIC0+IHRodW1ic0Rpc2FibGVkIHByb3BlcnR5IGlzIG1vZGlmaWVkXG4gIHNhZmVUaHVtYnNEaXNhYmxlZFZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRodW1ic0Rpc2FibGVkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudGh1bWJzRGlzYWJsZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50aHVtYnNEaXNhYmxlZC5wdXNoKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudGh1bWJzRGlzYWJsZWQubGVuZ3RoICE9PSAxICYmIHRoaXMub3B0aW9ucy50aHVtYnNEaXNhYmxlZC5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRodW1ic0Rpc2FibGVkID0gW2ZhbHNlLCBmYWxzZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9ucy50aHVtYnNEaXNhYmxlZCA9IFt0aGlzLm9wdGlvbnMudGh1bWJzRGlzYWJsZWQsIHRoaXMub3B0aW9ucy50aHVtYnNEaXNhYmxlZF07XG4gICAgfVxuXG4gICAgLy8gQm9vbGVhbiBWYWx1ZXNcbiAgICB0aGlzLm9wdGlvbnMudGh1bWJzRGlzYWJsZWRbMF0gPSAhIXRoaXMub3B0aW9ucy50aHVtYnNEaXNhYmxlZFswXTtcbiAgICB0aGlzLm9wdGlvbnMudGh1bWJzRGlzYWJsZWRbMV0gPSAhIXRoaXMub3B0aW9ucy50aHVtYnNEaXNhYmxlZFsxXTtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuLFxuICAvLyAtPiB0aGUgZWxlbWVudCBpcyBpbml0aWFsbHkgc2V0XG4gIC8vIC0+IG1pbiwgbWF4LCBzdGVwIG9yIHZhbHVlIHByb3BlcnRpZXMgYXJlIG1vZGlmaWVkXG4gIC8vIC0+IHRodW1icyBhcmUgZHJhZ2dlZFxuICAvLyAtPiBlbGVtZW50IGlzIGNsaWNrZWQgdXBvblxuICAvLyAtPiBhbiBhcnJvdyBrZXkgaXMgcHJlc3NlZFxuICBzZXRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIGxldCBmb3JjZVNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgbGV0IGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICAgIC8vIEN1cnJlbnQgdmFsdWUgYXMgc2V0IGluIHRoZSBpbnB1dCBlbGVtZW50c1xuICAgIC8vIHdoaWNoIGNvdWxkIGNoYW5nZSB3aGlsZSBjaGFuZ2luZyBtaW4sIG1heCBhbmQgc3RlcCB2YWx1ZXNcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnNldE1pbk1heFByb3BzKHRoaXMuaW5wdXRbMF0udmFsdWUsIHRoaXMuaW5wdXRbMV0udmFsdWUpO1xuXG4gICAgLy8gdmFyIHZhbHVlIGlzIHN5bmNlZCB3aXRoIHRoZSB2YWx1ZXMgc2V0IGluIHRoZSBpbnB1dCBlbGVtZW50cyBpZiBubyBuZXdWYWx1ZSBpcyBwYXNzZWRcbiAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlIHx8IGN1cnJlbnRWYWx1ZTtcbiAgICB0aGlzLmlucHV0W3RoaXMuaW5kZXgubWluXS52YWx1ZSA9IG5ld1ZhbHVlLm1pbjtcbiAgICB0aGlzLmlucHV0W3RoaXMuaW5kZXgubWF4XS52YWx1ZSA9IHRoaXMudGh1bWJEcmFnIHx8IGZvcmNlU2V0ID8gbmV3VmFsdWUubWF4IDogbmV3VmFsdWUubWluICsgdGhpcy5yYW5nZVdpZHRoO1xuICAgIHRoaXMuc3luY1ZhbHVlcygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHRodW1icyBjcm9zcyBlYWNoIG90aGVyXG4gICAgaWYgKHRoaXMudmFsdWUubWluID4gdGhpcy52YWx1ZS5tYXgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcywgX3RoaXMkcHJvcHMyLCBfdGhpcyRwcm9wczMsIF90aGlzJHByb3BzNDtcbiAgICAgIC8vIFN3aXRjaCB0aHVtYiBpbmRleGVzXG4gICAgICB0aGlzLmluZGV4Lm1pbiA9ICshdGhpcy5pbmRleC5taW47XG4gICAgICB0aGlzLmluZGV4Lm1heCA9ICshdGhpcy5pbmRleC5tYXg7XG5cbiAgICAgIC8vIFN3aXRjaCB0aHVtYiBhdHRyaWJ1dGVzXG4gICAgICB0aGlzLnJlbW92ZU5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4Lm1pbl0uY3VycmVudCwgREFUQV9VUFBFUik7XG4gICAgICB0aGlzLnJlbW92ZU5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4Lm1heF0uY3VycmVudCwgREFUQV9MT1dFUik7XG4gICAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4Lm1pbl0uY3VycmVudCwgREFUQV9MT1dFUik7XG4gICAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4Lm1heF0uY3VycmVudCwgREFUQV9VUFBFUik7XG4gICAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4Lm1pbl0uY3VycmVudCwgQVJJQV9MQUJFTCwgKF90aGlzJHByb3BzID0gdGhpcy5wcm9wcykgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMgPT09IHZvaWQgMCB8fCAoX3RoaXMkcHJvcHMgPSBfdGhpcyRwcm9wcy5hcmlhTGFiZWwpID09PSBudWxsIHx8IF90aGlzJHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwcm9wc1swXSk7XG4gICAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4Lm1heF0uY3VycmVudCwgQVJJQV9MQUJFTCwgKF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzMiA9PT0gdm9pZCAwIHx8IChfdGhpcyRwcm9wczIgPSBfdGhpcyRwcm9wczIuYXJpYUxhYmVsKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzMlsxXSk7XG4gICAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4Lm1pbl0uY3VycmVudCwgQVJJQV9MQUJFTExFREJZLCAoX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcykgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMzID09PSB2b2lkIDAgfHwgKF90aGlzJHByb3BzMyA9IF90aGlzJHByb3BzMy5hcmlhTGFiZWxsZWRCeSkgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwcm9wczNbMF0pO1xuICAgICAgdGhpcy5zZXROb2RlQXR0cmlidXRlKHRoaXMudGh1bWJbdGhpcy5pbmRleC5tYXhdLmN1cnJlbnQsIEFSSUFfTEFCRUxMRURCWSwgKF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzNCA9PT0gdm9pZCAwIHx8IChfdGhpcyRwcm9wczQgPSBfdGhpcyRwcm9wczQuYXJpYUxhYmVsbGVkQnkpID09PSBudWxsIHx8IF90aGlzJHByb3BzNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcHJvcHM0WzFdKTtcblxuICAgICAgLy8gU3dpdGNoIHRodW1iIGRyYWcgbGFiZWxzXG4gICAgICBpZiAodGhpcy50aHVtYkRyYWcpIHtcbiAgICAgICAgdGhpcy50aHVtYkRyYWcgPSB0aGlzLnRodW1iRHJhZyA9PT0gTUlOID8gTUFYIDogTUlOO1xuICAgICAgfVxuICAgICAgdGhpcy5zeW5jVmFsdWVzKCk7XG4gICAgfVxuICAgIHRoaXMuc2xpZGVyVmFsdWUgPSBmb3JjZVNldCA/IHRoaXMuc2xpZGVyVmFsdWUgOiBuZXdWYWx1ZTtcbiAgICBsZXQgdmFsdWVTZXQgPSBmYWxzZTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gW2N1cnJlbnRWYWx1ZS5taW4sIGN1cnJlbnRWYWx1ZS5tYXhdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICBjb25zdCBlbGVtZW50VmFsdWVzID0gW3RoaXMuaW5wdXRbMF0udmFsdWUsIHRoaXMuaW5wdXRbMV0udmFsdWVdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICBpZiAoY3VycmVudFZhbHVlc1swXSAhPT0gZWxlbWVudFZhbHVlc1swXSB8fCBmb3JjZVNldCkge1xuICAgICAgdmFsdWVTZXQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFZhbHVlc1sxXSAhPT0gZWxlbWVudFZhbHVlc1sxXSB8fCBmb3JjZVNldCkge1xuICAgICAgdmFsdWVTZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb25zLCBkaW1lbnNpb25zIGFuZCBhcmlhIGF0dHJpYnV0ZXMgZXZlcnl0aW1lIGEgdmFsdWUgaXMgc2V0XG4gICAgLy8gYW5kIGNhbGwgdGhlIG9uSW5wdXQgZnVuY3Rpb24gZnJvbSBvcHRpb25zIChpZiBzZXQpXG4gICAgaWYgKHZhbHVlU2V0KSB7XG4gICAgICBpZiAoY2FsbGJhY2sgJiYgdGhpcy5vcHRpb25zLm9uSW5wdXQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uSW5wdXQoW3RoaXMudmFsdWUubWluLCB0aGlzLnZhbHVlLm1heF0pO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmlzQ29udHJvbGxlZCB8fCB0aGlzLmV4dGVybmFsSW5wdXQpIHtcbiAgICAgICAgdGhpcy5leHRlcm5hbElucHV0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3luY1RodW1iRGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRodW1icygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQXJpYVZhbHVlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN5bmMgdmFyIHZhbHVlIHdpdGggdGhlIGlucHV0IGVsZW1lbnRzXG4gIHN5bmNWYWx1ZXMoKSB7XG4gICAgdGhpcy5pdGVyYXRlTWluTWF4UHJvcHMoXyA9PiB7XG4gICAgICB0aGlzLnZhbHVlW19dID0gK3RoaXMuaW5wdXRbdGhpcy5pbmRleFtfXV0udmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvLyBDYWxsZWQgd2hlbixcbiAgLy8gLT4gc2V0VmFsdWUgaXMgY2FsbGVkIGFuZCBhIHZhbHVlIGlzIHNldFxuICAvLyAtPiB3aW5kb3cgaXMgcmVzaXplZFxuICB1cGRhdGVUaHVtYnMoKSB7XG4gICAgdGhpcy5pdGVyYXRlTWluTWF4UHJvcHMoXyA9PiB7XG4gICAgICB0aGlzLnRodW1iW3RoaXMuaW5kZXhbX11dLmN1cnJlbnQuc3R5bGVbdGhpcy5pZlZlcnRpY2FsRWxzZSgndG9wJywgJ2xlZnQnKV0gPSBcImNhbGMoXCIuY29uY2F0KCh0aGlzLnZhbHVlW19dIC0gdGhpcy5vcHRpb25zLm1pbikgLyB0aGlzLm1heFJhbmdlV2lkdGggKiAxMDAsIFwiJSArIFwiKS5jb25jYXQoKDAuNSAtICh0aGlzLnZhbHVlW19dIC0gdGhpcy5vcHRpb25zLm1pbikgLyB0aGlzLm1heFJhbmdlV2lkdGgpICogdGhpcy5pZlZlcnRpY2FsRWxzZSh0aGlzLnRodW1iSGVpZ2h0LCB0aGlzLnRodW1iV2lkdGgpW19dLCBcInB4KVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuLFxuICAvLyAtPiBzZXRWYWx1ZSBpcyBjYWxsZWQgYW5kIGEgdmFsdWUgaXMgc2V0XG4gIC8vIC0+IHdpbmRvdyBpcyByZXNpemVkXG4gIHVwZGF0ZVJhbmdlKCkge1xuICAgIGNvbnN0IGVsZW1lbnRCb3VuZHMgPSB0aGlzLmVsZW1lbnQuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZWx0YU9mZnNldCA9ICgwLjUgLSAodGhpcy52YWx1ZS5taW4gLSB0aGlzLm9wdGlvbnMubWluKSAvIHRoaXMubWF4UmFuZ2VXaWR0aCkgKiB0aGlzLmlmVmVydGljYWxFbHNlKHRoaXMudGh1bWJIZWlnaHQsIHRoaXMudGh1bWJXaWR0aCkubWluIC8gdGhpcy5pZlZlcnRpY2FsRWxzZShlbGVtZW50Qm91bmRzLmJvdHRvbSAtIGVsZW1lbnRCb3VuZHMudG9wLCBlbGVtZW50Qm91bmRzLnJpZ2h0IC0gZWxlbWVudEJvdW5kcy5sZWZ0KTtcbiAgICBjb25zdCBkZWx0YURpbWVuc2lvbiA9ICgwLjUgLSAodGhpcy52YWx1ZS5tYXggLSB0aGlzLm9wdGlvbnMubWluKSAvIHRoaXMubWF4UmFuZ2VXaWR0aCkgKiB0aGlzLmlmVmVydGljYWxFbHNlKHRoaXMudGh1bWJIZWlnaHQsIHRoaXMudGh1bWJXaWR0aCkubWF4IC8gdGhpcy5pZlZlcnRpY2FsRWxzZShlbGVtZW50Qm91bmRzLmJvdHRvbSAtIGVsZW1lbnRCb3VuZHMudG9wLCBlbGVtZW50Qm91bmRzLnJpZ2h0IC0gZWxlbWVudEJvdW5kcy5sZWZ0KTtcbiAgICB0aGlzLnJhbmdlLmN1cnJlbnQuc3R5bGVbdGhpcy5pZlZlcnRpY2FsRWxzZSgndG9wJywgJ2xlZnQnKV0gPSBcIlwiLmNvbmNhdCgoKHRoaXMudmFsdWUubWluIC0gdGhpcy5vcHRpb25zLm1pbikgLyB0aGlzLm1heFJhbmdlV2lkdGggKyBkZWx0YU9mZnNldCkgKiAxMDAsIFwiJVwiKTtcbiAgICB0aGlzLnJhbmdlLmN1cnJlbnQuc3R5bGVbdGhpcy5pZlZlcnRpY2FsRWxzZSgnaGVpZ2h0JywgJ3dpZHRoJyldID0gXCJcIi5jb25jYXQoKCh0aGlzLnZhbHVlLm1heCAtIHRoaXMub3B0aW9ucy5taW4pIC8gdGhpcy5tYXhSYW5nZVdpZHRoIC0gKHRoaXMudmFsdWUubWluIC0gdGhpcy5vcHRpb25zLm1pbikgLyB0aGlzLm1heFJhbmdlV2lkdGggLSBkZWx0YU9mZnNldCArIGRlbHRhRGltZW5zaW9uKSAqIDEwMCwgXCIlXCIpO1xuICB9XG4gIHVwZGF0ZVJhbmdlTGltaXRzKCkge1xuICAgIHRoaXMuaXRlcmF0ZU1pbk1heFByb3BzKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLnJhbmdlTGltaXRzW19dID0gdGhpcy5vcHRpb25zLnRodW1ic0Rpc2FibGVkW2ldID8gdGhpcy52YWx1ZVtfXSA6IHRoaXMub3B0aW9uc1tfXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuLFxuICAvLyAtPiB0aHVtYnMgYXJlIGluaXRpYWxseSBzZXRcbiAgLy8gLT4gdGh1bWJzIGFyZSBkaXNhYmxlZCAvIGVuYWJsZWRcbiAgdXBkYXRlVGFiSW5kZXhlcygpIHtcbiAgICB0aGlzLml0ZXJhdGVNaW5NYXhQcm9wcygoXywgaSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQgJiYgIXRoaXMub3B0aW9ucy50aHVtYnNEaXNhYmxlZFtpXSkge1xuICAgICAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmN1cnJlbnRJbmRleChpKV0uY3VycmVudCwgVEFCSU5ERVgsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVOb2RlQXR0cmlidXRlKHRoaXMudGh1bWJbdGhpcy5jdXJyZW50SW5kZXgoaSldLmN1cnJlbnQsIFRBQklOREVYKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuLFxuICAvLyAtPiBzZXRWYWx1ZSBpcyBjYWxsZWQgYW5kIGEgdmFsdWUgaXMgc2V0XG4gIHVwZGF0ZUFyaWFWYWx1ZUF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5pdGVyYXRlTWluTWF4UHJvcHMoXyA9PiB7XG4gICAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4W19dXS5jdXJyZW50LCAnYXJpYS12YWx1ZW1pbicsIHRoaXMub3B0aW9ucy5taW4pO1xuICAgICAgdGhpcy5zZXROb2RlQXR0cmlidXRlKHRoaXMudGh1bWJbdGhpcy5pbmRleFtfXV0uY3VycmVudCwgJ2FyaWEtdmFsdWVtYXgnLCB0aGlzLm9wdGlvbnMubWF4KTtcbiAgICAgIHRoaXMuc2V0Tm9kZUF0dHJpYnV0ZSh0aGlzLnRodW1iW3RoaXMuaW5kZXhbX11dLmN1cnJlbnQsICdhcmlhLXZhbHVlbm93JywgdGhpcy52YWx1ZVtfXSk7XG4gICAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUodGhpcy50aHVtYlt0aGlzLmluZGV4W19dXS5jdXJyZW50LCAnYXJpYS12YWx1ZXRleHQnLCB0aGlzLnZhbHVlW19dKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuLFxuICAvLyAtPiBkaXNhYmxlZCBwcm9wZXJ0eSBpcyBtb2RpZmllZFxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0Tm9kZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQuY3VycmVudCwgREFUQV9ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlTm9kZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQuY3VycmVudCwgREFUQV9ESVNBQkxFRCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsbGVkIHdoZW4sXG4gIC8vIC0+IHRodW1ic0Rpc2FibGVkIHByb3BlcnR5IGlzIG1vZGlmaWVkXG4gIHVwZGF0ZVRodW1ic0Rpc2FibGVkU3RhdGUoKSB7XG4gICAgdGhpcy5vcHRpb25zLnRodW1ic0Rpc2FibGVkLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJJbmRleCA9IHRoaXMuY3VycmVudEluZGV4KGkpO1xuICAgICAgaWYgKGQpIHtcbiAgICAgICAgdGhpcy5zZXROb2RlQXR0cmlidXRlKHRoaXMudGh1bWJbY3VyckluZGV4XS5jdXJyZW50LCBEQVRBX0RJU0FCTEVEKTtcbiAgICAgICAgdGhpcy5zZXROb2RlQXR0cmlidXRlKHRoaXMudGh1bWJbY3VyckluZGV4XS5jdXJyZW50LCAnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVOb2RlQXR0cmlidXRlKHRoaXMudGh1bWJbY3VyckluZGV4XS5jdXJyZW50LCBEQVRBX0RJU0FCTEVEKTtcbiAgICAgICAgdGhpcy5zZXROb2RlQXR0cmlidXRlKHRoaXMudGh1bWJbY3VyckluZGV4XS5jdXJyZW50LCAnYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuLFxuICAvLyAtPiBtaW4gb3IgbWF4IHZhbHVlcyBhcmUgbW9kaWZpZWRcbiAgdXBkYXRlTGltaXRzKGxpbWl0KSB7XG4gICAgbGV0IG0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHRoaXMub3B0aW9uc1tsaW1pdF0gPSBtO1xuICAgIHRoaXMuc2FmZU1pbk1heFZhbHVlcygpO1xuICAgIHRoaXMuaXRlcmF0ZU1pbk1heFByb3BzKF8gPT4ge1xuICAgICAgdGhpcy5pbnB1dFswXVtfXSA9IHRoaXMub3B0aW9uc1tfXTtcbiAgICAgIHRoaXMuaW5wdXRbMV1bX10gPSB0aGlzLm9wdGlvbnNbX107XG4gICAgfSk7XG4gICAgdGhpcy5tYXhSYW5nZVdpZHRoID0gdGhpcy5vcHRpb25zLm1heCAtIHRoaXMub3B0aW9ucy5taW47XG4gICAgdGhpcy5zZXRWYWx1ZSgnJywgdHJ1ZSk7XG4gICAgdGhpcy51cGRhdGVSYW5nZUxpbWl0cygpO1xuICB9XG5cbiAgLy8gQ2FsbGVkIHdoZW4sXG4gIC8vIC0+IHRoZSBlbGVtZW50IGlzIGluaXRpYWxseSBzZXRcbiAgLy8gLT4gb3JpZW50YXRpb24gcHJvcGVydHkgaXMgbW9kaWZpZWRcbiAgdXBkYXRlT3JpZW50YXRpb24oKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gVkVSVElDQUwpIHtcbiAgICAgIHRoaXMuc2V0Tm9kZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQuY3VycmVudCwgREFUQV9WRVJUSUNBTCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlTm9kZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQuY3VycmVudCwgREFUQV9WRVJUSUNBTCk7XG4gICAgfVxuICAgIHRoaXMucmFuZ2UuY3VycmVudC5zdHlsZVt0aGlzLmlmVmVydGljYWxFbHNlKCdsZWZ0JywgJ3RvcCcpXSA9ICcnO1xuICAgIHRoaXMucmFuZ2UuY3VycmVudC5zdHlsZVt0aGlzLmlmVmVydGljYWxFbHNlKCd3aWR0aCcsICdoZWlnaHQnKV0gPSAnJztcbiAgICB0aGlzLnRodW1iWzBdLmN1cnJlbnQuc3R5bGVbdGhpcy5pZlZlcnRpY2FsRWxzZSgnbGVmdCcsICd0b3AnKV0gPSAnJztcbiAgICB0aGlzLnRodW1iWzFdLmN1cnJlbnQuc3R5bGVbdGhpcy5pZlZlcnRpY2FsRWxzZSgnbGVmdCcsICd0b3AnKV0gPSAnJztcbiAgfVxuXG4gIC8vIHRodW1iIHdpZHRoICYgaGVpZ2h0IHZhbHVlcyBhcmUgdG8gYmUgc3luY2VkIHdpdGggdGhlIENTUyB2YWx1ZXMgZm9yIGNvcnJlY3QgY2FsY3VsYXRpb24gb2ZcbiAgLy8gdGh1bWIgcG9zaXRpb24gYW5kIHJhbmdlIHdpZHRoICYgcG9zaXRpb25cbiAgLy8gQ2FsbGVkIHdoZW4sXG4gIC8vIC0+IHNldFZhbHVlIGlzIGNhbGxlZCBhbmQgYSB2YWx1ZSBpcyBzZXQgKGNhbGxlZCBiZWZvcmUgdXBkYXRlVGh1bWJzKCkgYW5kIHVwZGF0ZVJhbmdlKCkpXG4gIC8vIC0+IHRodW1iIC8gcmFuZ2UgZHJhZyBpcyBpbml0aWF0ZWRcbiAgLy8gLT4gd2luZG93IGlzIHJlc2l6ZWRcbiAgc3luY1RodW1iRGltZW5zaW9ucygpIHtcbiAgICB0aGlzLml0ZXJhdGVNaW5NYXhQcm9wcyhfID0+IHtcbiAgICAgIHRoaXMudGh1bWJXaWR0aFtfXSA9IGZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMudGh1bWJbdGhpcy5pbmRleFtfXV0uY3VycmVudCkud2lkdGgpO1xuICAgICAgdGhpcy50aHVtYkhlaWdodFtfXSA9IGZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMudGh1bWJbdGhpcy5pbmRleFtfXV0uY3VycmVudCkuaGVpZ2h0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRodW1iIHBvc2l0aW9uIGNhbGN1bGF0aW9uIGRlcGVuZGluZyB1cG9uIHRoZSBwb2ludGVyIHBvc2l0aW9uXG4gIGN1cnJlbnRQb3NpdGlvbihlLCBub2RlKSB7XG4gICAgY29uc3QgZWxlbWVudEJvdW5kcyA9IHRoaXMuZWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5vZGVCb3VuZHMgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGN1cnJQb3MgPSAodGhpcy5pZlZlcnRpY2FsRWxzZShub2RlQm91bmRzLnRvcCAtIGVsZW1lbnRCb3VuZHMudG9wLCBub2RlQm91bmRzLmxlZnQgLSBlbGVtZW50Qm91bmRzLmxlZnQpICsgKGVbXCJjbGllbnRcIi5jb25jYXQodGhpcy5pZlZlcnRpY2FsRWxzZSgnWScsICdYJykpXSAtIG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbdGhpcy5pZlZlcnRpY2FsRWxzZSgndG9wJywgJ2xlZnQnKV0pIC0gKHRoaXMudGh1bWJEcmFnID8gKDAuNSAtICh0aGlzLnZhbHVlW3RoaXMudGh1bWJEcmFnXSAtIHRoaXMub3B0aW9ucy5taW4pIC8gdGhpcy5tYXhSYW5nZVdpZHRoKSAqIHRoaXMuaWZWZXJ0aWNhbEVsc2UodGhpcy50aHVtYkhlaWdodCwgdGhpcy50aHVtYldpZHRoKVt0aGlzLnRodW1iRHJhZ10gOiAwKSkgLyB0aGlzLmlmVmVydGljYWxFbHNlKGVsZW1lbnRCb3VuZHMuYm90dG9tIC0gZWxlbWVudEJvdW5kcy50b3AsIGVsZW1lbnRCb3VuZHMucmlnaHQgLSBlbGVtZW50Qm91bmRzLmxlZnQpICogdGhpcy5tYXhSYW5nZVdpZHRoICsgdGhpcy5vcHRpb25zLm1pbjtcbiAgICBpZiAoY3VyclBvcyA8IHRoaXMub3B0aW9ucy5taW4pIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWluO1xuICAgIH1cbiAgICBpZiAoY3VyclBvcyA+IHRoaXMub3B0aW9ucy5tYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWF4O1xuICAgIH1cbiAgICByZXR1cm4gY3VyclBvcztcbiAgfVxuICBkb2VzbnRIYXZlQ2xhc3NOYW1lKGUsIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cbiAgZWxlbWVudEZvY3VzZWQoZSkge1xuICAgIGxldCByZXBlYXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgbGV0IHNldEZvY3VzID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQgJiYgKHRoaXMuZG9lc250SGF2ZUNsYXNzTmFtZShlLCAncmFuZ2Utc2xpZGVyX190aHVtYicpICYmIHRoaXMuZG9lc250SGF2ZUNsYXNzTmFtZShlLCAncmFuZ2Utc2xpZGVyX19yYW5nZScpIHx8IHRoaXMub3B0aW9ucy5yYW5nZVNsaWRlRGlzYWJsZWQgJiYgdGhpcy5kb2VzbnRIYXZlQ2xhc3NOYW1lKGUsICdyYW5nZS1zbGlkZXJfX3RodW1iJykpKSB7XG4gICAgICBzZXRGb2N1cyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTm8gYWN0aW9uIGlmIGJvdGggdGh1bWJzIGFyZSBkaXNhYmxlZFxuICAgIGlmIChzZXRGb2N1cyAmJiB0aGlzLm9wdGlvbnMudGh1bWJzRGlzYWJsZWRbMF0gJiYgdGhpcy5vcHRpb25zLnRodW1ic0Rpc2FibGVkWzFdKSB7XG4gICAgICBzZXRGb2N1cyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc2V0Rm9jdXMpIHtcbiAgICAgIGNvbnN0IGN1cnJQb3MgPSB0aGlzLmN1cnJlbnRQb3NpdGlvbihlLCB0aGlzLnJhbmdlLmN1cnJlbnQpO1xuICAgICAgY29uc3QgZGVsdGFNaW4gPSBhYnModGhpcy52YWx1ZS5taW4gLSBjdXJyUG9zKTtcbiAgICAgIGNvbnN0IGRlbHRhTWF4ID0gYWJzKHRoaXMudmFsdWUubWF4IC0gY3VyclBvcyk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRodW1ic0Rpc2FibGVkWzBdKSB7XG4gICAgICAgIGlmIChjdXJyUG9zID49IHRoaXMudmFsdWUubWluKSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNldE1pbk1heFByb3BzKHRoaXMudmFsdWUubWluLCBjdXJyUG9zKSwgdHJ1ZSwgIXJlcGVhdCk7XG4gICAgICAgICAgdGhpcy5pbml0aWF0ZVRodW1iRHJhZyhlLCB0aGlzLmluZGV4Lm1heCwgdGhpcy50aHVtYlt0aGlzLmluZGV4Lm1heF0uY3VycmVudCwgIXJlcGVhdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnRodW1ic0Rpc2FibGVkWzFdKSB7XG4gICAgICAgIGlmIChjdXJyUG9zIDw9IHRoaXMudmFsdWUubWF4KSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNldE1pbk1heFByb3BzKGN1cnJQb3MsIHRoaXMudmFsdWUubWF4KSwgdHJ1ZSwgIXJlcGVhdCk7XG4gICAgICAgICAgdGhpcy5pbml0aWF0ZVRodW1iRHJhZyhlLCB0aGlzLmluZGV4Lm1pbiwgdGhpcy50aHVtYlt0aGlzLmluZGV4Lm1pbl0uY3VycmVudCwgIXJlcGVhdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZWFyZXN0VGh1bWJJbmRleCA9IHRoaXMuaW5kZXgubWF4O1xuICAgICAgICBpZiAoZGVsdGFNaW4gPT09IGRlbHRhTWF4KSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNldE1pbk1heFByb3BzKHRoaXMudmFsdWUubWluLCBjdXJyUG9zKSwgdHJ1ZSwgIXJlcGVhdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnNldE1pbk1heFByb3BzKGRlbHRhTWluIDwgZGVsdGFNYXggPyBjdXJyUG9zIDogdGhpcy52YWx1ZS5taW4sIGRlbHRhTWF4IDwgZGVsdGFNaW4gPyBjdXJyUG9zIDogdGhpcy52YWx1ZS5tYXgpLCB0cnVlLCAhcmVwZWF0KTtcbiAgICAgICAgICBuZWFyZXN0VGh1bWJJbmRleCA9IGRlbHRhTWluIDwgZGVsdGFNYXggPyB0aGlzLmluZGV4Lm1pbiA6IHRoaXMuaW5kZXgubWF4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhdGVUaHVtYkRyYWcoZSwgbmVhcmVzdFRodW1iSW5kZXgsIHRoaXMudGh1bWJbbmVhcmVzdFRodW1iSW5kZXhdLmN1cnJlbnQsICFyZXBlYXQpO1xuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRGb2N1c2VkKGUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW5pdGlhdGVEcmFnKGUsIG5vZGUpIHtcbiAgICB0aGlzLnN5bmNUaHVtYkRpbWVuc2lvbnMoKTtcbiAgICB0aGlzLnNldE5vZGVBdHRyaWJ1dGUobm9kZSwgREFUQV9BQ1RJVkUpO1xuICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLmN1cnJlbnRQb3NpdGlvbihlLCBub2RlKTtcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICB9XG4gIGluaXRpYXRlVGh1bWJEcmFnKGUsIGksIG5vZGUpIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHRydWU7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQgJiYgIXRoaXMub3B0aW9ucy50aHVtYnNEaXNhYmxlZFt0aGlzLmN1cnJlbnRJbmRleChpKV0pIHtcbiAgICAgIHRoaXMuaW5pdGlhdGVEcmFnKGUsIG5vZGUpO1xuICAgICAgdGhpcy50aHVtYkRyYWcgPSB0aGlzLmluZGV4Lm1pbiA9PT0gaSA/IE1JTiA6IE1BWDtcbiAgICAgIGlmIChjYWxsYmFjayAmJiB0aGlzLm9wdGlvbnMub25UaHVtYkRyYWdTdGFydCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25UaHVtYkRyYWdTdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpbml0aWF0ZVJhbmdlRHJhZyhlKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQgJiYgIXRoaXMub3B0aW9ucy5yYW5nZVNsaWRlRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhdGVEcmFnKGUsIHRoaXMucmFuZ2UuY3VycmVudCk7XG4gICAgICB0aGlzLnJhbmdlV2lkdGggPSB0aGlzLnZhbHVlLm1heCAtIHRoaXMudmFsdWUubWluO1xuICAgICAgdGhpcy50aHVtYkRyYWcgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub25SYW5nZURyYWdTdGFydCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25SYW5nZURyYWdTdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkcmFnKGUpIHtcbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBjb25zdCBsYXN0UG9zID0gdGhpcy5jdXJyZW50UG9zaXRpb24oZSwgdGhpcy5yYW5nZS5jdXJyZW50KTtcbiAgICAgIGNvbnN0IGRlbHRhID0gbGFzdFBvcyAtIHRoaXMuc3RhcnRQb3M7XG4gICAgICBsZXQgbWluID0gdGhpcy52YWx1ZS5taW47XG4gICAgICBsZXQgbWF4ID0gdGhpcy52YWx1ZS5tYXg7XG4gICAgICBjb25zdCBsb3dlciA9IHRoaXMudGh1bWJEcmFnID8gdGhpcy5yYW5nZUxpbWl0cy5taW4gOiB0aGlzLm9wdGlvbnMubWluO1xuICAgICAgY29uc3QgdXBwZXIgPSB0aGlzLnRodW1iRHJhZyA/IHRoaXMucmFuZ2VMaW1pdHMubWF4IDogdGhpcy5vcHRpb25zLm1heDtcbiAgICAgIGlmICghdGhpcy50aHVtYkRyYWcgfHwgdGhpcy50aHVtYkRyYWcgPT09IE1JTikge1xuICAgICAgICBtaW4gPSB0aGlzLnRodW1iRHJhZyA/IGxhc3RQb3MgOiB0aGlzLnNsaWRlclZhbHVlLm1pbiArIGRlbHRhO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnRodW1iRHJhZyB8fCB0aGlzLnRodW1iRHJhZyA9PT0gTUFYKSB7XG4gICAgICAgIG1heCA9IHRoaXMudGh1bWJEcmFnID8gbGFzdFBvcyA6IHRoaXMuc2xpZGVyVmFsdWUubWF4ICsgZGVsdGE7XG4gICAgICB9XG4gICAgICBpZiAobWluID49IGxvd2VyICYmIG1pbiA8PSB1cHBlciAmJiBtYXggPj0gbG93ZXIgJiYgbWF4IDw9IHVwcGVyKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICAgIG1pbixcbiAgICAgICAgICBtYXhcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSBsYXN0UG9zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2hlbiBtaW4gdGh1bWIgcmVhY2hlcyB1cHBlciBsaW1pdFxuICAgICAgICBpZiAobWluID4gdXBwZXIgJiYgdGhpcy50aHVtYkRyYWcpIHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2V0TWluTWF4UHJvcHModXBwZXIsIHVwcGVyKSk7XG4gICAgICAgICAgdGhpcy5zdGFydFBvcyA9IGxhc3RQb3M7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiBtYXggdGh1bWIgcmVhY2hlcyBsb3dlciBsaW1pdFxuICAgICAgICBpZiAobWF4IDwgbG93ZXIgJiYgdGhpcy50aHVtYkRyYWcpIHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2V0TWluTWF4UHJvcHMobG93ZXIsIGxvd2VyKSk7XG4gICAgICAgICAgdGhpcy5zdGFydFBvcyA9IGxhc3RQb3M7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiByYW5nZSAvIG1pbiB0aHVtYiByZWFjaGVzIGxvd2VyIGxpbWl0XG4gICAgICAgIGlmIChtaW4gPCBsb3dlcikge1xuICAgICAgICAgIGlmICghdGhpcy50aHVtYkRyYWcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zZXRNaW5NYXhQcm9wcyhsb3dlciwgdGhpcy52YWx1ZS5tYXggLSB0aGlzLnZhbHVlLm1pbiArIGxvd2VyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zZXRNaW5NYXhQcm9wcyhsb3dlciwgdGhpcy52YWx1ZS5tYXgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdGFydFBvcyA9IGxhc3RQb3M7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiByYW5nZSAvIG1heCB0aHVtYiByZWFjaGVzIHVwcGVyIGxpbWl0XG4gICAgICAgIGlmIChtYXggPiB1cHBlcikge1xuICAgICAgICAgIGlmICghdGhpcy50aHVtYkRyYWcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zZXRNaW5NYXhQcm9wcyh0aGlzLnZhbHVlLm1pbiAtIHRoaXMudmFsdWUubWF4ICsgdXBwZXIsIHVwcGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zZXRNaW5NYXhQcm9wcyh0aGlzLnZhbHVlLm1pbiwgdXBwZXIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdGFydFBvcyA9IGxhc3RQb3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50aHVtYkRyYWcpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSYW5nZUxpbWl0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhY3R1YWxTdGVwVmFsdWUoKSB7XG4gICAgY29uc3Qgc3RlcCA9IGZsb2F0KHRoaXMuaW5wdXRbMF0uc3RlcCk7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRbMF0uc3RlcCA9PT0gQU5ZID8gQU5ZIDogc3RlcCA9PT0gMCB8fCBpc05hTihzdGVwKSA/IDEgOiBzdGVwO1xuICB9XG5cbiAgLy8gU3RlcCB2YWx1ZSAodXAgb3IgZG93bikgdXNpbmcgYXJyb3cga2V5c1xuICBzdGVwVmFsdWUoaSwga2V5KSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gKGtleSA9PT0gMzcgfHwga2V5ID09PSA0MCA/IC0xIDogMSkgKiB0aGlzLmlmVmVydGljYWxFbHNlKC0xLCAxKTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlZCAmJiAhdGhpcy5vcHRpb25zLnRodW1ic0Rpc2FibGVkW3RoaXMuY3VycmVudEluZGV4KGkpXSkge1xuICAgICAgbGV0IHN0ZXAgPSB0aGlzLmFjdHVhbFN0ZXBWYWx1ZSgpO1xuICAgICAgc3RlcCA9IHN0ZXAgPT09IEFOWSA/IDEgOiBzdGVwO1xuICAgICAgbGV0IG1pbiA9IHRoaXMudmFsdWUubWluICsgc3RlcCAqICh0aGlzLmluZGV4Lm1pbiA9PT0gaSA/IGRpcmVjdGlvbiA6IDApO1xuICAgICAgbGV0IG1heCA9IHRoaXMudmFsdWUubWF4ICsgc3RlcCAqICh0aGlzLmluZGV4Lm1heCA9PT0gaSA/IGRpcmVjdGlvbiA6IDApO1xuXG4gICAgICAvLyBXaGVuIG1pbiB0aHVtYiByZWFjaGVzIHVwcGVyIGxpbWl0XG4gICAgICBpZiAobWluID4gdGhpcy5yYW5nZUxpbWl0cy5tYXgpIHtcbiAgICAgICAgbWluID0gdGhpcy5yYW5nZUxpbWl0cy5tYXg7XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gbWF4IHRodW1iIHJlYWNoZXMgbG93ZXIgbGltaXRcbiAgICAgIGlmIChtYXggPCB0aGlzLnJhbmdlTGltaXRzLm1pbikge1xuICAgICAgICBtYXggPSB0aGlzLnJhbmdlTGltaXRzLm1pbjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBtaW4sXG4gICAgICAgIG1heFxuICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHM1LCBfdGhpcyRwcm9wczYsIF90aGlzJHByb3BzNywgX3RoaXMkcHJvcHM4O1xuICAgIC8vIFNldCBvcHRpb25zIHRvIGRlZmF1bHQgdmFsdWVzIGlmIG5vdCBzZXRcbiAgICB0aGlzLmZhbGxiYWNrVG9EZWZhdWx0KCdyYW5nZVNsaWRlRGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgdGhpcy5mYWxsYmFja1RvRGVmYXVsdCgndGh1bWJzRGlzYWJsZWQnLCBbZmFsc2UsIGZhbHNlXSk7XG4gICAgdGhpcy5mYWxsYmFja1RvRGVmYXVsdCgnb3JpZW50YXRpb24nLCAnaG9yaXpvbnRhbCcpO1xuICAgIHRoaXMuZmFsbGJhY2tUb0RlZmF1bHQoJ2RlZmF1bHRWYWx1ZScsIFsyNSwgNzVdKTtcbiAgICB0aGlzLmZhbGxiYWNrVG9EZWZhdWx0KCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB0aGlzLmZhbGxiYWNrVG9EZWZhdWx0KCdvblRodW1iRHJhZ1N0YXJ0JywgZmFsc2UpO1xuICAgIHRoaXMuZmFsbGJhY2tUb0RlZmF1bHQoJ29uUmFuZ2VEcmFnU3RhcnQnLCBmYWxzZSk7XG4gICAgdGhpcy5mYWxsYmFja1RvRGVmYXVsdCgnb25UaHVtYkRyYWdFbmQnLCBmYWxzZSk7XG4gICAgdGhpcy5mYWxsYmFja1RvRGVmYXVsdCgnb25SYW5nZURyYWdFbmQnLCBmYWxzZSk7XG4gICAgdGhpcy5mYWxsYmFja1RvRGVmYXVsdCgnb25JbnB1dCcsIGZhbHNlKTtcbiAgICB0aGlzLmZhbGxiYWNrVG9EZWZhdWx0KCdzdGVwJywgMSk7XG4gICAgdGhpcy5mYWxsYmFja1RvRGVmYXVsdCgnbWluJywgMCk7XG4gICAgdGhpcy5mYWxsYmFja1RvRGVmYXVsdCgnbWF4JywgMTAwKTtcbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5mYWxsYmFja1RvRGVmYXVsdCgndmFsdWUnLCBbMjUsIDc1XSk7XG4gICAgfVxuICAgIHRoaXMuc2FmZU1pbk1heFZhbHVlcygpO1xuICAgIHRoaXMuc2FmZVRodW1ic0Rpc2FibGVkVmFsdWVzKCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIFwiZGF0YS10ZXN0aWRcIjogXCJlbGVtZW50XCIsXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHJlZjogdGhpcy5lbGVtZW50LFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2Nsc3guZGVmYXVsdCkoJ3JhbmdlLXNsaWRlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKVxuICAgIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogdGhpcy50aHVtYlswXSxcbiAgICAgIHJvbGU6IFwic2xpZGVyXCIsXG4gICAgICBjbGFzc05hbWU6IFwicmFuZ2Utc2xpZGVyX190aHVtYlwiLFxuICAgICAgXCJkYXRhLWxvd2VyXCI6IHRydWUsXG4gICAgICBcImFyaWEtbGFiZWxcIjogKF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzNSA9PT0gdm9pZCAwIHx8IChfdGhpcyRwcm9wczUgPSBfdGhpcyRwcm9wczUuYXJpYUxhYmVsKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzNVswXSxcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IChfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczYgPT09IHZvaWQgMCB8fCAoX3RoaXMkcHJvcHM2ID0gX3RoaXMkcHJvcHM2LmFyaWFMYWJlbGxlZEJ5KSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzNlswXVxuICAgIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICByZWY6IHRoaXMudGh1bWJbMV0sXG4gICAgICByb2xlOiBcInNsaWRlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcInJhbmdlLXNsaWRlcl9fdGh1bWJcIixcbiAgICAgIFwiZGF0YS11cHBlclwiOiB0cnVlLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IChfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wczcgPT09IHZvaWQgMCB8fCAoX3RoaXMkcHJvcHM3ID0gX3RoaXMkcHJvcHM3LmFyaWFMYWJlbCkgPT09IG51bGwgfHwgX3RoaXMkcHJvcHM3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwcm9wczdbMV0sXG4gICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAoX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcykgPT09IG51bGwgfHwgX3RoaXMkcHJvcHM4ID09PSB2b2lkIDAgfHwgKF90aGlzJHByb3BzOCA9IF90aGlzJHByb3BzOC5hcmlhTGFiZWxsZWRCeSkgPT09IG51bGwgfHwgX3RoaXMkcHJvcHM4ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwcm9wczhbMV1cbiAgICB9KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgcmVmOiB0aGlzLnJhbmdlLFxuICAgICAgY2xhc3NOYW1lOiBcInJhbmdlLXNsaWRlcl9fcmFuZ2VcIlxuICAgIH0pKTtcbiAgfVxufVxuO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gUmFuZ2VTbGlkZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX1JhbmdlU2xpZGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL1JhbmdlU2xpZGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IF9SYW5nZVNsaWRlci5kZWZhdWx0OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckAzLjMuNF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckAzLjMuNF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckAzLjMuNF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlckAzLjMuNF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlckA2LjExLjBfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyQDcuMy40X3Bvc3Rjc3NAOC41LjNfdHlwZXNjcmlwdEA1LjguMl93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uLy4uLy4uL3Nhc3MtbG9hZGVyQDEzLjMuM19zYXNzQDEuODYuMF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlckA2LjExLjBfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyQDcuMy40X3Bvc3Rjc3NAOC41LjNfdHlwZXNjcmlwdEA1LjguMl93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uLy4uLy4uL3Nhc3MtbG9hZGVyQDEzLjMuM19zYXNzQDEuODYuMF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZiwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHJldmFsaWRhdGVFdmVudHMgZnJvbSAnLi9ldmVudHMubWpzJztcbmltcG9ydCB7IGRlcXVhbCB9IGZyb20gJ2RlcXVhbC9saXRlJztcblxuLy8gR2xvYmFsIHN0YXRlIHVzZWQgdG8gZGVkdXBsaWNhdGUgcmVxdWVzdHMgYW5kIHN0b3JlIGxpc3RlbmVyc1xuY29uc3QgU1dSR2xvYmFsU3RhdGUgPSBuZXcgV2Vha01hcCgpO1xuXG4vLyBTaGFyZWQgc3RhdGUgYmV0d2VlbiBzZXJ2ZXIgY29tcG9uZW50cyBhbmQgY2xpZW50IGNvbXBvbmVudHNcbmNvbnN0IG5vb3AgPSAoKT0+e307XG4vLyBVc2luZyBub29wKCkgYXMgdGhlIHVuZGVmaW5lZCB2YWx1ZSBhcyB1bmRlZmluZWQgY2FuIGJlIHJlcGxhY2VkXG4vLyBieSBzb21ldGhpbmcgZWxzZS4gUHJldHRpZXIgaWdub3JlIGFuZCBleHRyYSBwYXJlbnRoZXNlcyBhcmUgbmVjZXNzYXJ5IGhlcmVcbi8vIHRvIGVuc3VyZSB0aGF0IHRzYyBkb2Vzbid0IHJlbW92ZSB0aGUgX19OT0lOTElORV9fIGNvbW1lbnQuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFVOREVGSU5FRCA9IC8qI19fTk9JTkxJTkVfXyovIG5vb3AoKTtcbmNvbnN0IE9CSkVDVCA9IE9iamVjdDtcbmNvbnN0IGlzVW5kZWZpbmVkID0gKHYpPT52ID09PSBVTkRFRklORUQ7XG5jb25zdCBpc0Z1bmN0aW9uID0gKHYpPT50eXBlb2YgdiA9PSAnZnVuY3Rpb24nO1xuY29uc3QgbWVyZ2VPYmplY3RzID0gKGEsIGIpPT4oe1xuICAgICAgICAuLi5hLFxuICAgICAgICAuLi5iXG4gICAgfSk7XG5jb25zdCBpc1Byb21pc2VMaWtlID0gKHgpPT5pc0Z1bmN0aW9uKHgudGhlbik7XG5cbmNvbnN0IEVNUFRZX0NBQ0hFID0ge307XG5jb25zdCBJTklUSUFMX0NBQ0hFID0ge307XG5jb25zdCBTVFJfVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCc7XG4vLyBOT1RFOiBVc2UgdGhlIGZ1bmN0aW9uIHRvIGd1YXJhbnRlZSBpdCdzIHJlLWV2YWx1YXRlZCBiZXR3ZWVuIGpzZG9tIGFuZCBub2RlIHJ1bnRpbWUgZm9yIHRlc3RzLlxuY29uc3QgaXNXaW5kb3dEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyAhPSBTVFJfVU5ERUZJTkVEO1xuY29uc3QgaXNEb2N1bWVudERlZmluZWQgPSB0eXBlb2YgZG9jdW1lbnQgIT0gU1RSX1VOREVGSU5FRDtcbmNvbnN0IGlzTGVnYWN5RGVubyA9IGlzV2luZG93RGVmaW5lZCAmJiAnRGVubycgaW4gd2luZG93O1xuY29uc3QgaGFzUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKCk9PmlzV2luZG93RGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSAhPSBTVFJfVU5ERUZJTkVEO1xuY29uc3QgY3JlYXRlQ2FjaGVIZWxwZXIgPSAoY2FjaGUsIGtleSk9PntcbiAgICBjb25zdCBzdGF0ZSA9IFNXUkdsb2JhbFN0YXRlLmdldChjYWNoZSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgLy8gR2V0dGVyXG4gICAgICAgICgpPT4haXNVbmRlZmluZWQoa2V5KSAmJiBjYWNoZS5nZXQoa2V5KSB8fCBFTVBUWV9DQUNIRSxcbiAgICAgICAgLy8gU2V0dGVyXG4gICAgICAgIChpbmZvKT0+e1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IGNhY2hlLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIC8vIEJlZm9yZSB3cml0aW5nIHRvIHRoZSBzdG9yZSwgd2Uga2VlcCB0aGUgdmFsdWUgaW4gdGhlIGluaXRpYWwgY2FjaGVcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCdzIG5vdCB0aGVyZSB5ZXQuXG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIElOSVRJQUxfQ0FDSEUpKSB7XG4gICAgICAgICAgICAgICAgICAgIElOSVRJQUxfQ0FDSEVba2V5XSA9IHByZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXRlWzVdKGtleSwgbWVyZ2VPYmplY3RzKHByZXYsIGluZm8pLCBwcmV2IHx8IEVNUFRZX0NBQ0hFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gU3Vic2NyaWJlclxuICAgICAgICBzdGF0ZVs2XSxcbiAgICAgICAgLy8gR2V0IHNlcnZlciBjYWNoZSBzbmFwc2hvdFxuICAgICAgICAoKT0+e1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChrZXkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNhY2hlIHdhcyB1cGRhdGVkIG9uIHRoZSBjbGllbnQsIHdlIHJldHVybiB0aGUgc3RvcmVkIGluaXRpYWwgdmFsdWUuXG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiBJTklUSUFMX0NBQ0hFKSByZXR1cm4gSU5JVElBTF9DQUNIRVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCBkb25lIGFueSBjbGllbnQtc2lkZSB1cGRhdGVzLCB3ZSByZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAgICByZXR1cm4gIWlzVW5kZWZpbmVkKGtleSkgJiYgY2FjaGUuZ2V0KGtleSkgfHwgRU1QVFlfQ0FDSEU7XG4gICAgICAgIH1cbiAgICBdO1xufSAvLyBleHBvcnQgeyBVTkRFRklORUQsIE9CSkVDVCwgaXNVbmRlZmluZWQsIGlzRnVuY3Rpb24sIG1lcmdlT2JqZWN0cywgaXNQcm9taXNlTGlrZSB9XG47XG5cbi8qKlxuICogRHVlIHRvIHRoZSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Njc4MDc1LFxuICogaXQncyBub3QgcmVsaWFibGUgdG8gZGV0ZWN0IGlmIHRoZSBicm93c2VyIGlzIGN1cnJlbnRseSBvbmxpbmUgb3Igb2ZmbGluZVxuICogYmFzZWQgb24gYG5hdmlnYXRvci5vbkxpbmVgLlxuICogQXMgYSB3b3JrYXJvdW5kLCB3ZSBhbHdheXMgYXNzdW1lIGl0J3Mgb25saW5lIG9uIHRoZSBmaXJzdCBsb2FkLCBhbmQgY2hhbmdlXG4gKiB0aGUgc3RhdHVzIHVwb24gYG9ubGluZWAgb3IgYG9mZmxpbmVgIGV2ZW50cy5cbiAqLyBsZXQgb25saW5lID0gdHJ1ZTtcbmNvbnN0IGlzT25saW5lID0gKCk9Pm9ubGluZTtcbi8vIEZvciBub2RlIGFuZCBSZWFjdCBOYXRpdmUsIGBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lcmAgZG9lc24ndCBleGlzdCBvbiB3aW5kb3cuXG5jb25zdCBbb25XaW5kb3dFdmVudCwgb2ZmV2luZG93RXZlbnRdID0gaXNXaW5kb3dEZWZpbmVkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID8gW1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyLmJpbmQod2luZG93KSxcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHdpbmRvdylcbl0gOiBbXG4gICAgbm9vcCxcbiAgICBub29wXG5dO1xuY29uc3QgaXNWaXNpYmxlID0gKCk9PntcbiAgICBjb25zdCB2aXNpYmlsaXR5U3RhdGUgPSBpc0RvY3VtZW50RGVmaW5lZCAmJiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGU7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKHZpc2liaWxpdHlTdGF0ZSkgfHwgdmlzaWJpbGl0eVN0YXRlICE9PSAnaGlkZGVuJztcbn07XG5jb25zdCBpbml0Rm9jdXMgPSAoY2FsbGJhY2spPT57XG4gICAgLy8gZm9jdXMgcmV2YWxpZGF0ZVxuICAgIGlmIChpc0RvY3VtZW50RGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvbldpbmRvd0V2ZW50KCdmb2N1cycsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCk9PntcbiAgICAgICAgaWYgKGlzRG9jdW1lbnREZWZpbmVkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIG9mZldpbmRvd0V2ZW50KCdmb2N1cycsIGNhbGxiYWNrKTtcbiAgICB9O1xufTtcbmNvbnN0IGluaXRSZWNvbm5lY3QgPSAoY2FsbGJhY2spPT57XG4gICAgLy8gcmV2YWxpZGF0ZSBvbiByZWNvbm5lY3RlZFxuICAgIGNvbnN0IG9uT25saW5lID0gKCk9PntcbiAgICAgICAgb25saW5lID0gdHJ1ZTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuICAgIC8vIG5vdGhpbmcgdG8gcmV2YWxpZGF0ZSwganVzdCB1cGRhdGUgdGhlIHN0YXR1c1xuICAgIGNvbnN0IG9uT2ZmbGluZSA9ICgpPT57XG4gICAgICAgIG9ubGluZSA9IGZhbHNlO1xuICAgIH07XG4gICAgb25XaW5kb3dFdmVudCgnb25saW5lJywgb25PbmxpbmUpO1xuICAgIG9uV2luZG93RXZlbnQoJ29mZmxpbmUnLCBvbk9mZmxpbmUpO1xuICAgIHJldHVybiAoKT0+e1xuICAgICAgICBvZmZXaW5kb3dFdmVudCgnb25saW5lJywgb25PbmxpbmUpO1xuICAgICAgICBvZmZXaW5kb3dFdmVudCgnb2ZmbGluZScsIG9uT2ZmbGluZSk7XG4gICAgfTtcbn07XG5jb25zdCBwcmVzZXQgPSB7XG4gICAgaXNPbmxpbmUsXG4gICAgaXNWaXNpYmxlXG59O1xuY29uc3QgZGVmYXVsdENvbmZpZ09wdGlvbnMgPSB7XG4gICAgaW5pdEZvY3VzLFxuICAgIGluaXRSZWNvbm5lY3Rcbn07XG5cbmNvbnN0IElTX1JFQUNUX0xFR0FDWSA9ICFSZWFjdC51c2VJZDtcbmNvbnN0IElTX1NFUlZFUiA9ICFpc1dpbmRvd0RlZmluZWQgfHwgaXNMZWdhY3lEZW5vO1xuLy8gUG9seWZpbGwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5jb25zdCByQUYgPSAoZik9Pmhhc1JlcXVlc3RBbmltYXRpb25GcmFtZSgpID8gd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXShmKSA6IHNldFRpbWVvdXQoZiwgMSk7XG4vLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci5cbmNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBJU19TRVJWRVIgPyB1c2VFZmZlY3QgOiB1c2VMYXlvdXRFZmZlY3Q7XG4vLyBUaGlzIGFzc2lnbm1lbnQgaXMgdG8gZXh0ZW5kIHRoZSBOYXZpZ2F0b3IgdHlwZSB0byB1c2UgZWZmZWN0aXZlVHlwZS5cbmNvbnN0IG5hdmlnYXRvckNvbm5lY3Rpb24gPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IuY29ubmVjdGlvbjtcbi8vIEFkanVzdCB0aGUgY29uZmlnIGJhc2VkIG9uIHNsb3cgY29ubmVjdGlvbiBzdGF0dXMgKDw9IDcwS2JwcykuXG5jb25zdCBzbG93Q29ubmVjdGlvbiA9ICFJU19TRVJWRVIgJiYgbmF2aWdhdG9yQ29ubmVjdGlvbiAmJiAoW1xuICAgICdzbG93LTJnJyxcbiAgICAnMmcnXG5dLmluY2x1ZGVzKG5hdmlnYXRvckNvbm5lY3Rpb24uZWZmZWN0aXZlVHlwZSkgfHwgbmF2aWdhdG9yQ29ubmVjdGlvbi5zYXZlRGF0YSk7XG5cbi8vIHVzZSBXZWFrTWFwIHRvIHN0b3JlIHRoZSBvYmplY3QtPmtleSBtYXBwaW5nXG4vLyBzbyB0aGUgb2JqZWN0cyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4vLyBXZWFrTWFwIHVzZXMgYSBoYXNodGFibGUgdW5kZXIgdGhlIGhvb2QsIHNvIHRoZSBsb29rdXBcbi8vIGNvbXBsZXhpdHkgaXMgYWxtb3N0IE8oMSkuXG5jb25zdCB0YWJsZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBpc09iamVjdFR5cGUgPSAodmFsdWUsIHR5cGUpPT5PQkpFQ1QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBgW29iamVjdCAke3R5cGV9XWA7XG4vLyBjb3VudGVyIG9mIHRoZSBrZXlcbmxldCBjb3VudGVyID0gMDtcbi8vIEEgc3RhYmxlIGhhc2ggaW1wbGVtZW50YXRpb24gdGhhdCBzdXBwb3J0czpcbi8vIC0gRmFzdCBhbmQgZW5zdXJlcyB1bmlxdWUgaGFzaCBwcm9wZXJ0aWVzXG4vLyAtIEhhbmRsZXMgdW5zZXJpYWxpemFibGUgdmFsdWVzXG4vLyAtIEhhbmRsZXMgb2JqZWN0IGtleSBvcmRlcmluZ1xuLy8gLSBHZW5lcmF0ZXMgc2hvcnQgcmVzdWx0c1xuLy9cbi8vIFRoaXMgaXMgbm90IGEgc2VyaWFsaXphdGlvbiBmdW5jdGlvbiwgYW5kIHRoZSByZXN1bHQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmVcbi8vIHBhcnNhYmxlLlxuY29uc3Qgc3RhYmxlSGFzaCA9IChhcmcpPT57XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBhcmc7XG4gICAgY29uc3QgaXNEYXRlID0gaXNPYmplY3RUeXBlKGFyZywgJ0RhdGUnKTtcbiAgICBjb25zdCBpc1JlZ2V4ID0gaXNPYmplY3RUeXBlKGFyZywgJ1JlZ0V4cCcpO1xuICAgIGNvbnN0IGlzUGxhaW5PYmplY3QgPSBpc09iamVjdFR5cGUoYXJnLCAnT2JqZWN0Jyk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgaW5kZXg7XG4gICAgaWYgKE9CSkVDVChhcmcpID09PSBhcmcgJiYgIWlzRGF0ZSAmJiAhaXNSZWdleCkge1xuICAgICAgICAvLyBPYmplY3QvZnVuY3Rpb24sIG5vdCBudWxsL2RhdGUvcmVnZXhwLiBVc2UgV2Vha01hcCB0byBzdG9yZSB0aGUgaWQgZmlyc3QuXG4gICAgICAgIC8vIElmIGl0J3MgYWxyZWFkeSBoYXNoZWQsIGRpcmVjdGx5IHJldHVybiB0aGUgcmVzdWx0LlxuICAgICAgICByZXN1bHQgPSB0YWJsZS5nZXQoYXJnKTtcbiAgICAgICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGhhc2ggZmlyc3QgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3Rpb24gYmVmb3JlIGVudGVyaW5nIHRoZVxuICAgICAgICAvLyByZWN1cnNpdmUgYHN0YWJsZUhhc2hgIGNhbGxzLlxuICAgICAgICAvLyBGb3Igb3RoZXIgb2JqZWN0cyBsaWtlIHNldCBhbmQgbWFwLCB3ZSB1c2UgdGhpcyBpZCBkaXJlY3RseSBhcyB0aGUgaGFzaC5cbiAgICAgICAgcmVzdWx0ID0gKytjb3VudGVyICsgJ34nO1xuICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICAvLyBBcnJheS5cbiAgICAgICAgICAgIHJlc3VsdCA9ICdAJztcbiAgICAgICAgICAgIGZvcihpbmRleCA9IDA7IGluZGV4IDwgYXJnLmxlbmd0aDsgaW5kZXgrKyl7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHN0YWJsZUhhc2goYXJnW2luZGV4XSkgKyAnLCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBPYmplY3QsIHNvcnQga2V5cy5cbiAgICAgICAgICAgIHJlc3VsdCA9ICcjJztcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPQkpFQ1Qua2V5cyhhcmcpLnNvcnQoKTtcbiAgICAgICAgICAgIHdoaWxlKCFpc1VuZGVmaW5lZChpbmRleCA9IGtleXMucG9wKCkpKXtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGFyZ1tpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBpbmRleCArICc6JyArIHN0YWJsZUhhc2goYXJnW2luZGV4XSkgKyAnLCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUuc2V0KGFyZywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGlzRGF0ZSA/IGFyZy50b0pTT04oKSA6IHR5cGUgPT0gJ3N5bWJvbCcgPyBhcmcudG9TdHJpbmcoKSA6IHR5cGUgPT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShhcmcpIDogJycgKyBhcmc7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBzZXJpYWxpemUgPSAoa2V5KT0+e1xuICAgIGlmIChpc0Z1bmN0aW9uKGtleSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGtleSA9IGtleSgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIGRlcGVuZGVuY2llcyBub3QgcmVhZHlcbiAgICAgICAgICAgIGtleSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFVzZSB0aGUgb3JpZ2luYWwga2V5IGFzIHRoZSBhcmd1bWVudCBvZiBmZXRjaGVyLiBUaGlzIGNhbiBiZSBhIHN0cmluZyBvciBhblxuICAgIC8vIGFycmF5IG9mIHZhbHVlcy5cbiAgICBjb25zdCBhcmdzID0ga2V5O1xuICAgIC8vIElmIGtleSBpcyBub3QgZmFsc3ksIG9yIG5vdCBhbiBlbXB0eSBhcnJheSwgaGFzaCBpdC5cbiAgICBrZXkgPSB0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogKEFycmF5LmlzQXJyYXkoa2V5KSA/IGtleS5sZW5ndGggOiBrZXkpID8gc3RhYmxlSGFzaChrZXkpIDogJyc7XG4gICAgcmV0dXJuIFtcbiAgICAgICAga2V5LFxuICAgICAgICBhcmdzXG4gICAgXTtcbn07XG5cbi8vIEdsb2JhbCB0aW1lc3RhbXAuXG5sZXQgX190aW1lc3RhbXAgPSAwO1xuY29uc3QgZ2V0VGltZXN0YW1wID0gKCk9PisrX190aW1lc3RhbXA7XG5cbmFzeW5jIGZ1bmN0aW9uIGludGVybmFsTXV0YXRlKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbY2FjaGUsIF9rZXksIF9kYXRhLCBfb3B0c10gPSBhcmdzO1xuICAgIC8vIFdoZW4gcGFzc2luZyBhcyBhIGJvb2xlYW4sIGl0J3MgZXhwbGljaXRseSB1c2VkIHRvIGRpc2FibGUvZW5hYmxlXG4gICAgLy8gcmV2YWxpZGF0aW9uLlxuICAgIGNvbnN0IG9wdGlvbnMgPSBtZXJnZU9iamVjdHMoe1xuICAgICAgICBwb3B1bGF0ZUNhY2hlOiB0cnVlLFxuICAgICAgICB0aHJvd09uRXJyb3I6IHRydWVcbiAgICB9LCB0eXBlb2YgX29wdHMgPT09ICdib29sZWFuJyA/IHtcbiAgICAgICAgcmV2YWxpZGF0ZTogX29wdHNcbiAgICB9IDogX29wdHMgfHwge30pO1xuICAgIGxldCBwb3B1bGF0ZUNhY2hlID0gb3B0aW9ucy5wb3B1bGF0ZUNhY2hlO1xuICAgIGNvbnN0IHJvbGxiYWNrT25FcnJvck9wdGlvbiA9IG9wdGlvbnMucm9sbGJhY2tPbkVycm9yO1xuICAgIGxldCBvcHRpbWlzdGljRGF0YSA9IG9wdGlvbnMub3B0aW1pc3RpY0RhdGE7XG4gICAgY29uc3Qgcm9sbGJhY2tPbkVycm9yID0gKGVycm9yKT0+e1xuICAgICAgICByZXR1cm4gdHlwZW9mIHJvbGxiYWNrT25FcnJvck9wdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHJvbGxiYWNrT25FcnJvck9wdGlvbihlcnJvcikgOiByb2xsYmFja09uRXJyb3JPcHRpb24gIT09IGZhbHNlO1xuICAgIH07XG4gICAgY29uc3QgdGhyb3dPbkVycm9yID0gb3B0aW9ucy50aHJvd09uRXJyb3I7XG4gICAgLy8gSWYgdGhlIHNlY29uZCBhcmd1bWVudCBpcyBhIGtleSBmaWx0ZXIsIHJldHVybiB0aGUgbXV0YXRpb24gcmVzdWx0cyBmb3IgYWxsXG4gICAgLy8gZmlsdGVyZWQga2V5cy5cbiAgICBpZiAoaXNGdW5jdGlvbihfa2V5KSkge1xuICAgICAgICBjb25zdCBrZXlGaWx0ZXIgPSBfa2V5O1xuICAgICAgICBjb25zdCBtYXRjaGVkS2V5cyA9IFtdO1xuICAgICAgICBjb25zdCBpdCA9IGNhY2hlLmtleXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgaXQpe1xuICAgICAgICAgICAgaWYgKC8vIFNraXAgdGhlIHNwZWNpYWwgdXNlU1dSSW5maW5pdGUgYW5kIHVzZVNXUlN1YnNjcmlwdGlvbiBrZXlzLlxuICAgICAgICAgICAgIS9eXFwkKGluZnxzdWIpXFwkLy50ZXN0KGtleSkgJiYga2V5RmlsdGVyKGNhY2hlLmdldChrZXkpLl9rKSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwobWF0Y2hlZEtleXMubWFwKG11dGF0ZUJ5S2V5KSk7XG4gICAgfVxuICAgIHJldHVybiBtdXRhdGVCeUtleShfa2V5KTtcbiAgICBhc3luYyBmdW5jdGlvbiBtdXRhdGVCeUtleShfaykge1xuICAgICAgICAvLyBTZXJpYWxpemUga2V5XG4gICAgICAgIGNvbnN0IFtrZXldID0gc2VyaWFsaXplKF9rKTtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybjtcbiAgICAgICAgY29uc3QgW2dldCwgc2V0XSA9IGNyZWF0ZUNhY2hlSGVscGVyKGNhY2hlLCBrZXkpO1xuICAgICAgICBjb25zdCBbRVZFTlRfUkVWQUxJREFUT1JTLCBNVVRBVElPTiwgRkVUQ0gsIFBSRUxPQURdID0gU1dSR2xvYmFsU3RhdGUuZ2V0KGNhY2hlKTtcbiAgICAgICAgY29uc3Qgc3RhcnRSZXZhbGlkYXRlID0gKCk9PntcbiAgICAgICAgICAgIGNvbnN0IHJldmFsaWRhdG9ycyA9IEVWRU5UX1JFVkFMSURBVE9SU1trZXldO1xuICAgICAgICAgICAgY29uc3QgcmV2YWxpZGF0ZSA9IGlzRnVuY3Rpb24ob3B0aW9ucy5yZXZhbGlkYXRlKSA/IG9wdGlvbnMucmV2YWxpZGF0ZShnZXQoKS5kYXRhLCBfaykgOiBvcHRpb25zLnJldmFsaWRhdGUgIT09IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJbnZhbGlkYXRlIHRoZSBrZXkgYnkgZGVsZXRpbmcgdGhlIGNvbmN1cnJlbnQgcmVxdWVzdCBtYXJrZXJzIHNvIG5ld1xuICAgICAgICAgICAgICAgIC8vIHJlcXVlc3RzIHdpbGwgbm90IGJlIGRlZHVwZWQuXG4gICAgICAgICAgICAgICAgZGVsZXRlIEZFVENIW2tleV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIFBSRUxPQURba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAocmV2YWxpZGF0b3JzICYmIHJldmFsaWRhdG9yc1swXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2YWxpZGF0b3JzWzBdKHJldmFsaWRhdGVFdmVudHMuTVVUQVRFX0VWRU5UKS50aGVuKCgpPT5nZXQoKS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0KCkuZGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbmV3IGRhdGEgcHJvdmlkZWQsIHJldmFsaWRhdGUgdGhlIGtleSB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgYW5kIGJyb2FkY2FzdCBzdGF0ZS5cbiAgICAgICAgICAgIHJldHVybiBzdGFydFJldmFsaWRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IF9kYXRhO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIC8vIFVwZGF0ZSBnbG9iYWwgdGltZXN0YW1wcy5cbiAgICAgICAgY29uc3QgYmVmb3JlTXV0YXRpb25UcyA9IGdldFRpbWVzdGFtcCgpO1xuICAgICAgICBNVVRBVElPTltrZXldID0gW1xuICAgICAgICAgICAgYmVmb3JlTXV0YXRpb25UcyxcbiAgICAgICAgICAgIDBcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW1pc3RpY0RhdGEgPSAhaXNVbmRlZmluZWQob3B0aW1pc3RpY0RhdGEpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldCgpO1xuICAgICAgICAvLyBgZGlzcGxheWVkRGF0YWAgaXMgdGhlIGN1cnJlbnQgdmFsdWUgb24gc2NyZWVuLiBJdCBjb3VsZCBiZSB0aGUgb3B0aW1pc3RpYyB2YWx1ZVxuICAgICAgICAvLyB0aGF0IGlzIGdvaW5nIHRvIGJlIG92ZXJyaWRkZW4gYnkgYSBgY29tbWl0dGVkRGF0YWAsIG9yIGdldCByZXZlcnRlZCBiYWNrLlxuICAgICAgICAvLyBgY29tbWl0dGVkRGF0YWAgaXMgdGhlIHZhbGlkYXRlZCB2YWx1ZSB0aGF0IGNvbWVzIGZyb20gYSBmZXRjaCBvciBtdXRhdGlvbi5cbiAgICAgICAgY29uc3QgZGlzcGxheWVkRGF0YSA9IHN0YXRlLmRhdGE7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gc3RhdGUuX2M7XG4gICAgICAgIGNvbnN0IGNvbW1pdHRlZERhdGEgPSBpc1VuZGVmaW5lZChjdXJyZW50RGF0YSkgPyBkaXNwbGF5ZWREYXRhIDogY3VycmVudERhdGE7XG4gICAgICAgIC8vIERvIG9wdGltaXN0aWMgZGF0YSB1cGRhdGUuXG4gICAgICAgIGlmIChoYXNPcHRpbWlzdGljRGF0YSkge1xuICAgICAgICAgICAgb3B0aW1pc3RpY0RhdGEgPSBpc0Z1bmN0aW9uKG9wdGltaXN0aWNEYXRhKSA/IG9wdGltaXN0aWNEYXRhKGNvbW1pdHRlZERhdGEsIGRpc3BsYXllZERhdGEpIDogb3B0aW1pc3RpY0RhdGE7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIHNldCBvcHRpbWlzdGljIGRhdGEsIGJhY2t1cCB0aGUgY3VycmVudCBjb21taXR0ZWREYXRhIGRhdGEgaW4gYF9jYC5cbiAgICAgICAgICAgIHNldCh7XG4gICAgICAgICAgICAgICAgZGF0YTogb3B0aW1pc3RpY0RhdGEsXG4gICAgICAgICAgICAgICAgX2M6IGNvbW1pdHRlZERhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGRhdGEpKSB7XG4gICAgICAgICAgICAvLyBgZGF0YWAgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCBwYXNzaW5nIGN1cnJlbnQgY2FjaGUgdmFsdWUuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhKGNvbW1pdHRlZERhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgdGhyb3dzIGFuIGVycm9yIHN5bmNocm9ub3VzbHksIHdlIHNob3VsZG4ndCB1cGRhdGUgdGhlIGNhY2hlLlxuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGBkYXRhYCBpcyBhIHByb21pc2UvdGhlbmFibGUsIHJlc29sdmUgdGhlIGZpbmFsIGRhdGEgZmlyc3QuXG4gICAgICAgIGlmIChkYXRhICYmIGlzUHJvbWlzZUxpa2UoZGF0YSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB0aGUgbXV0YXRpb24gaXMgYXN5bmMsIHdlIG5lZWQgdG8gY2hlY2sgdGltZXN0YW1wcyB0b1xuICAgICAgICAgICAgLy8gYXZvaWQgcmFjZSBjb25kaXRpb25zLlxuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IGRhdGEuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgb3RoZXIgbXV0YXRpb25zIGhhdmUgb2NjdXJyZWQgc2luY2Ugd2UndmUgc3RhcnRlZCB0aGlzIG11dGF0aW9uLlxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJhY2Ugd2UgZG9uJ3QgdXBkYXRlIGNhY2hlIG9yIGJyb2FkY2FzdCB0aGUgY2hhbmdlLFxuICAgICAgICAgICAgLy8ganVzdCByZXR1cm4gdGhlIGRhdGEuXG4gICAgICAgICAgICBpZiAoYmVmb3JlTXV0YXRpb25UcyAhPT0gTVVUQVRJT05ba2V5XVswXSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yICYmIGhhc09wdGltaXN0aWNEYXRhICYmIHJvbGxiYWNrT25FcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAvLyBSb2xsYmFjay4gQWx3YXlzIHBvcHVsYXRlIHRoZSBjYWNoZSBpbiB0aGlzIGNhc2UgYnV0IHdpdGhvdXRcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm1pbmcgdGhlIGRhdGEuXG4gICAgICAgICAgICAgICAgcG9wdWxhdGVDYWNoZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSB0byBiZSB0aGUgbGF0ZXN0IGNvbW1pdHRlZCBkYXRhLCBhbmQgY2xlYXIgdGhlIGBfY2AgdmFsdWUuXG4gICAgICAgICAgICAgICAgc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY29tbWl0dGVkRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgX2M6IFVOREVGSU5FRFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIHNob3VsZCB3cml0ZSBiYWNrIHRoZSBjYWNoZSBhZnRlciByZXF1ZXN0LlxuICAgICAgICBpZiAocG9wdWxhdGVDYWNoZSkge1xuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSB0aGUgcmVzdWx0IGludG8gZGF0YS5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihwb3B1bGF0ZUNhY2hlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1bGF0ZUNhY2hlZERhdGEgPSBwb3B1bGF0ZUNhY2hlKGRhdGEsIGNvbW1pdHRlZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcG9wdWxhdGVDYWNoZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFVOREVGSU5FRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jOiBVTkRFRklORURcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgY2FjaGVkIGRhdGEgYW5kIHJlc2V0IHRoZSBlcnJvciBpZiB0aGVyZSdzIG5vIGVycm9yLiBEYXRhIGNhbiBiZSBgdW5kZWZpbmVkYCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICBzZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBVTkRFRklORUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBfYzogVU5ERUZJTkVEXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB0aGUgdGltZXN0YW1wIHRvIG1hcmsgdGhlIG11dGF0aW9uIGhhcyBlbmRlZC5cbiAgICAgICAgTVVUQVRJT05ba2V5XVsxXSA9IGdldFRpbWVzdGFtcCgpO1xuICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgU1dSIEhvb2tzJyBpbnRlcm5hbCBzdGF0ZXM6XG4gICAgICAgIFByb21pc2UucmVzb2x2ZShzdGFydFJldmFsaWRhdGUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgLy8gVGhlIG11dGF0aW9uIGFuZCByZXZhbGlkYXRpb24gYXJlIGVuZGVkLCB3ZSBjYW4gY2xlYXIgaXQgc2luY2UgdGhlIGRhdGEgaXNcbiAgICAgICAgICAgIC8vIG5vdCBhbiBvcHRpbWlzdGljIHZhbHVlIGFueW1vcmUuXG4gICAgICAgICAgICBzZXQoe1xuICAgICAgICAgICAgICAgIF9jOiBVTkRFRklORURcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhyb3cgZXJyb3Igb3IgcmV0dXJuIGRhdGFcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodGhyb3dPbkVycm9yKSB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbmNvbnN0IHJldmFsaWRhdGVBbGxLZXlzID0gKHJldmFsaWRhdG9ycywgdHlwZSk9PntcbiAgICBmb3IoY29uc3Qga2V5IGluIHJldmFsaWRhdG9ycyl7XG4gICAgICAgIGlmIChyZXZhbGlkYXRvcnNba2V5XVswXSkgcmV2YWxpZGF0b3JzW2tleV1bMF0odHlwZSk7XG4gICAgfVxufTtcbmNvbnN0IGluaXRDYWNoZSA9IChwcm92aWRlciwgb3B0aW9ucyk9PntcbiAgICAvLyBUaGUgZ2xvYmFsIHN0YXRlIGZvciBhIHNwZWNpZmljIHByb3ZpZGVyIHdpbGwgYmUgdXNlZCB0byBkZWR1cGxpY2F0ZVxuICAgIC8vIHJlcXVlc3RzIGFuZCBzdG9yZSBsaXN0ZW5lcnMuIEFzIHdlbGwgYXMgYSBtdXRhdGUgZnVuY3Rpb24gdGhhdCBpcyBib3VuZCB0b1xuICAgIC8vIHRoZSBjYWNoZS5cbiAgICAvLyBUaGUgcHJvdmlkZXIncyBnbG9iYWwgc3RhdGUgbWlnaHQgYmUgYWxyZWFkeSBpbml0aWFsaXplZC4gTGV0J3MgdHJ5IHRvIGdldCB0aGVcbiAgICAvLyBnbG9iYWwgc3RhdGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcm92aWRlciBmaXJzdC5cbiAgICBpZiAoIVNXUkdsb2JhbFN0YXRlLmhhcyhwcm92aWRlcikpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IG1lcmdlT2JqZWN0cyhkZWZhdWx0Q29uZmlnT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZ2xvYmFsIHN0YXRlIGJvdW5kIHRvIHRoZSBwcm92aWRlciwgY3JlYXRlIGEgbmV3IG9uZSB3aXRoIHRoZVxuICAgICAgICAvLyBuZXcgbXV0YXRlIGZ1bmN0aW9uLlxuICAgICAgICBjb25zdCBFVkVOVF9SRVZBTElEQVRPUlMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBjb25zdCBtdXRhdGUgPSBpbnRlcm5hbE11dGF0ZS5iaW5kKFVOREVGSU5FRCwgcHJvdmlkZXIpO1xuICAgICAgICBsZXQgdW5tb3VudCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBjb25zdCBzdWJzY3JpYmUgPSAoa2V5LCBjYWxsYmFjayk9PntcbiAgICAgICAgICAgIGNvbnN0IHN1YnMgPSBzdWJzY3JpcHRpb25zW2tleV0gfHwgW107XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zW2tleV0gPSBzdWJzO1xuICAgICAgICAgICAgc3Vicy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKT0+c3Vicy5zcGxpY2Uoc3Vicy5pbmRleE9mKGNhbGxiYWNrKSwgMSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNldHRlciA9IChrZXksIHZhbHVlLCBwcmV2KT0+e1xuICAgICAgICAgICAgcHJvdmlkZXIuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgY29uc3Qgc3VicyA9IHN1YnNjcmlwdGlvbnNba2V5XTtcbiAgICAgICAgICAgIGlmIChzdWJzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmbiBvZiBzdWJzKXtcbiAgICAgICAgICAgICAgICAgICAgZm4odmFsdWUsIHByZXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaW5pdFByb3ZpZGVyID0gKCk9PntcbiAgICAgICAgICAgIGlmICghU1dSR2xvYmFsU3RhdGUuaGFzKHByb3ZpZGVyKSkge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgaWYgaXQncyBuZXcsIG9yIGlmIHRoZSBwcm92aWRlciBoYXMgYmVlbiBleHRlbmRlZC5cbiAgICAgICAgICAgICAgICBTV1JHbG9iYWxTdGF0ZS5zZXQocHJvdmlkZXIsIFtcbiAgICAgICAgICAgICAgICAgICAgRVZFTlRfUkVWQUxJREFUT1JTLFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBtdXRhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNldHRlcixcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFJU19TRVJWRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBsaXN0ZW5pbmcgdG8gdGhlIG5hdGl2ZSBldmVudHMgZm9yIGF1dG8gcmV2YWxpZGF0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaW50ZW50aW9uYWxseSBwdXQgYSBkZWxheSAoc2V0VGltZW91dCkgaGVyZSB0byBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlyZWQgYWZ0ZXIgaW1tZWRpYXRlIEphdmFTY3JpcHQgZXhlY3V0aW9ucywgd2hpY2ggY2FuIGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlYWN0J3Mgc3RhdGUgdXBkYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBhdm9pZHMgc29tZSB1bm5lY2Vzc2FyeSByZXZhbGlkYXRpb25zIHN1Y2ggYXNcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvaXNzdWVzLzE2ODAuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGVhc2VGb2N1cyA9IG9wdHMuaW5pdEZvY3VzKHNldFRpbWVvdXQuYmluZChVTkRFRklORUQsIHJldmFsaWRhdGVBbGxLZXlzLmJpbmQoVU5ERUZJTkVELCBFVkVOVF9SRVZBTElEQVRPUlMsIHJldmFsaWRhdGVFdmVudHMuRk9DVVNfRVZFTlQpKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGVhc2VSZWNvbm5lY3QgPSBvcHRzLmluaXRSZWNvbm5lY3Qoc2V0VGltZW91dC5iaW5kKFVOREVGSU5FRCwgcmV2YWxpZGF0ZUFsbEtleXMuYmluZChVTkRFRklORUQsIEVWRU5UX1JFVkFMSURBVE9SUywgcmV2YWxpZGF0ZUV2ZW50cy5SRUNPTk5FQ1RfRVZFTlQpKSk7XG4gICAgICAgICAgICAgICAgICAgIHVubW91bnQgPSAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZUZvY3VzICYmIHJlbGVhc2VGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZVJlY29ubmVjdCAmJiByZWxlYXNlUmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHVuLW1vdW50aW5nLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgY2FjaGUgcHJvdmlkZXIgZnJvbSB0aGUgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JhZ2UgdG9vIGJlY2F1c2UgaXQncyBhIHNpZGUtZWZmZWN0LiBPdGhlcndpc2UsIHdoZW4gcmUtbW91bnRpbmcgd2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbGwgbm90IHJlLXJlZ2lzdGVyIHRob3NlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNXUkdsb2JhbFN0YXRlLmRlbGV0ZShwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpbml0UHJvdmlkZXIoKTtcbiAgICAgICAgLy8gVGhpcyBpcyBhIG5ldyBwcm92aWRlciwgd2UgbmVlZCB0byBpbml0aWFsaXplIGl0IGFuZCBzZXR1cCBET00gZXZlbnRzXG4gICAgICAgIC8vIGxpc3RlbmVycyBmb3IgYGZvY3VzYCBhbmQgYHJlY29ubmVjdGAgYWN0aW9ucy5cbiAgICAgICAgLy8gV2UgbWlnaHQgd2FudCB0byBpbmplY3QgYW4gZXh0cmEgbGF5ZXIgb24gdG9wIG9mIGBwcm92aWRlcmAgaW4gdGhlIGZ1dHVyZSxcbiAgICAgICAgLy8gc3VjaCBhcyBrZXkgc2VyaWFsaXphdGlvbiwgYXV0byBHQywgZXRjLlxuICAgICAgICAvLyBGb3Igbm93LCBpdCdzIGp1c3QgYSBgTWFwYCBpbnRlcmZhY2Ugd2l0aG91dCBhbnkgbW9kaWZpY2F0aW9ucy5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHByb3ZpZGVyLFxuICAgICAgICAgICAgbXV0YXRlLFxuICAgICAgICAgICAgaW5pdFByb3ZpZGVyLFxuICAgICAgICAgICAgdW5tb3VudFxuICAgICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgU1dSR2xvYmFsU3RhdGUuZ2V0KHByb3ZpZGVyKVs0XVxuICAgIF07XG59O1xuXG4vLyBlcnJvciByZXRyeVxuY29uc3Qgb25FcnJvclJldHJ5ID0gKF8sIF9fLCBjb25maWcsIHJldmFsaWRhdGUsIG9wdHMpPT57XG4gICAgY29uc3QgbWF4UmV0cnlDb3VudCA9IGNvbmZpZy5lcnJvclJldHJ5Q291bnQ7XG4gICAgY29uc3QgY3VycmVudFJldHJ5Q291bnQgPSBvcHRzLnJldHJ5Q291bnQ7XG4gICAgLy8gRXhwb25lbnRpYWwgYmFja29mZlxuICAgIGNvbnN0IHRpbWVvdXQgPSB+figoTWF0aC5yYW5kb20oKSArIDAuNSkgKiAoMSA8PCAoY3VycmVudFJldHJ5Q291bnQgPCA4ID8gY3VycmVudFJldHJ5Q291bnQgOiA4KSkpICogY29uZmlnLmVycm9yUmV0cnlJbnRlcnZhbDtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG1heFJldHJ5Q291bnQpICYmIGN1cnJlbnRSZXRyeUNvdW50ID4gbWF4UmV0cnlDb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQocmV2YWxpZGF0ZSwgdGltZW91dCwgb3B0cyk7XG59O1xuY29uc3QgY29tcGFyZSA9IGRlcXVhbDtcbi8vIERlZmF1bHQgY2FjaGUgcHJvdmlkZXJcbmNvbnN0IFtjYWNoZSwgbXV0YXRlXSA9IGluaXRDYWNoZShuZXcgTWFwKCkpO1xuLy8gRGVmYXVsdCBjb25maWdcbmNvbnN0IGRlZmF1bHRDb25maWcgPSBtZXJnZU9iamVjdHMoe1xuICAgIC8vIGV2ZW50c1xuICAgIG9uTG9hZGluZ1Nsb3c6IG5vb3AsXG4gICAgb25TdWNjZXNzOiBub29wLFxuICAgIG9uRXJyb3I6IG5vb3AsXG4gICAgb25FcnJvclJldHJ5LFxuICAgIG9uRGlzY2FyZGVkOiBub29wLFxuICAgIC8vIHN3aXRjaGVzXG4gICAgcmV2YWxpZGF0ZU9uRm9jdXM6IHRydWUsXG4gICAgcmV2YWxpZGF0ZU9uUmVjb25uZWN0OiB0cnVlLFxuICAgIHJldmFsaWRhdGVJZlN0YWxlOiB0cnVlLFxuICAgIHNob3VsZFJldHJ5T25FcnJvcjogdHJ1ZSxcbiAgICAvLyB0aW1lb3V0c1xuICAgIGVycm9yUmV0cnlJbnRlcnZhbDogc2xvd0Nvbm5lY3Rpb24gPyAxMDAwMCA6IDUwMDAsXG4gICAgZm9jdXNUaHJvdHRsZUludGVydmFsOiA1ICogMTAwMCxcbiAgICBkZWR1cGluZ0ludGVydmFsOiAyICogMTAwMCxcbiAgICBsb2FkaW5nVGltZW91dDogc2xvd0Nvbm5lY3Rpb24gPyA1MDAwIDogMzAwMCxcbiAgICAvLyBwcm92aWRlcnNcbiAgICBjb21wYXJlLFxuICAgIGlzUGF1c2VkOiAoKT0+ZmFsc2UsXG4gICAgY2FjaGUsXG4gICAgbXV0YXRlLFxuICAgIGZhbGxiYWNrOiB7fVxufSwgLy8gdXNlIHdlYiBwcmVzZXQgYnkgZGVmYXVsdFxucHJlc2V0KTtcblxuY29uc3QgbWVyZ2VDb25maWdzID0gKGEsIGIpPT57XG4gICAgLy8gTmVlZCB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IHRvIGF2b2lkIG11dGF0aW5nIHRoZSBvcmlnaW5hbCBoZXJlLlxuICAgIGNvbnN0IHYgPSBtZXJnZU9iamVjdHMoYSwgYik7XG4gICAgLy8gSWYgdHdvIGNvbmZpZ3MgYXJlIHByb3ZpZGVkLCBtZXJnZSB0aGVpciBgdXNlYCBhbmQgYGZhbGxiYWNrYCBvcHRpb25zLlxuICAgIGlmIChiKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlOiB1MSwgZmFsbGJhY2s6IGYxIH0gPSBhO1xuICAgICAgICBjb25zdCB7IHVzZTogdTIsIGZhbGxiYWNrOiBmMiB9ID0gYjtcbiAgICAgICAgaWYgKHUxICYmIHUyKSB7XG4gICAgICAgICAgICB2LnVzZSA9IHUxLmNvbmNhdCh1Mik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGYxICYmIGYyKSB7XG4gICAgICAgICAgICB2LmZhbGxiYWNrID0gbWVyZ2VPYmplY3RzKGYxLCBmMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG59O1xuXG5jb25zdCBTV1JDb25maWdDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5jb25zdCBTV1JDb25maWcgPSAocHJvcHMpPT57XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgcGFyZW50Q29uZmlnID0gdXNlQ29udGV4dChTV1JDb25maWdDb250ZXh0KTtcbiAgICBjb25zdCBpc0Z1bmN0aW9uYWxDb25maWcgPSBpc0Z1bmN0aW9uKHZhbHVlKTtcbiAgICBjb25zdCBjb25maWcgPSB1c2VNZW1vKCgpPT5pc0Z1bmN0aW9uYWxDb25maWcgPyB2YWx1ZShwYXJlbnRDb25maWcpIDogdmFsdWUsIFtcbiAgICAgICAgaXNGdW5jdGlvbmFsQ29uZmlnLFxuICAgICAgICBwYXJlbnRDb25maWcsXG4gICAgICAgIHZhbHVlXG4gICAgXSk7XG4gICAgLy8gRXh0ZW5kIHBhcmVudCBjb250ZXh0IHZhbHVlcyBhbmQgbWlkZGxld2FyZS5cbiAgICBjb25zdCBleHRlbmRlZENvbmZpZyA9IHVzZU1lbW8oKCk9PmlzRnVuY3Rpb25hbENvbmZpZyA/IGNvbmZpZyA6IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZyksIFtcbiAgICAgICAgaXNGdW5jdGlvbmFsQ29uZmlnLFxuICAgICAgICBwYXJlbnRDb25maWcsXG4gICAgICAgIGNvbmZpZ1xuICAgIF0pO1xuICAgIC8vIFNob3VsZCBub3QgdXNlIHRoZSBpbmhlcml0ZWQgcHJvdmlkZXIuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBjb25maWcgJiYgY29uZmlnLnByb3ZpZGVyO1xuICAgIC8vIGluaXRpYWxpemUgdGhlIGNhY2hlIG9ubHkgb24gZmlyc3QgYWNjZXNzLlxuICAgIGNvbnN0IGNhY2hlQ29udGV4dFJlZiA9IHVzZVJlZihVTkRFRklORUQpO1xuICAgIGlmIChwcm92aWRlciAmJiAhY2FjaGVDb250ZXh0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2FjaGVDb250ZXh0UmVmLmN1cnJlbnQgPSBpbml0Q2FjaGUocHJvdmlkZXIoZXh0ZW5kZWRDb25maWcuY2FjaGUgfHwgY2FjaGUpLCBjb25maWcpO1xuICAgIH1cbiAgICBjb25zdCBjYWNoZUNvbnRleHQgPSBjYWNoZUNvbnRleHRSZWYuY3VycmVudDtcbiAgICAvLyBPdmVycmlkZSB0aGUgY2FjaGUgaWYgYSBuZXcgcHJvdmlkZXIgaXMgZ2l2ZW4uXG4gICAgaWYgKGNhY2hlQ29udGV4dCkge1xuICAgICAgICBleHRlbmRlZENvbmZpZy5jYWNoZSA9IGNhY2hlQ29udGV4dFswXTtcbiAgICAgICAgZXh0ZW5kZWRDb25maWcubXV0YXRlID0gY2FjaGVDb250ZXh0WzFdO1xuICAgIH1cbiAgICAvLyBVbnN1YnNjcmliZSBldmVudHMuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoY2FjaGVDb250ZXh0KSB7XG4gICAgICAgICAgICBjYWNoZUNvbnRleHRbMl0gJiYgY2FjaGVDb250ZXh0WzJdKCk7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVDb250ZXh0WzNdO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFNXUkNvbmZpZ0NvbnRleHQuUHJvdmlkZXIsIG1lcmdlT2JqZWN0cyhwcm9wcywge1xuICAgICAgICB2YWx1ZTogZXh0ZW5kZWRDb25maWdcbiAgICB9KSk7XG59O1xuXG5leHBvcnQgeyBub29wIGFzIEEsIGlzUHJvbWlzZUxpa2UgYXMgQiwgSVNfUkVBQ1RfTEVHQUNZIGFzIEksIE9CSkVDVCBhcyBPLCBTV1JDb25maWdDb250ZXh0IGFzIFMsIFVOREVGSU5FRCBhcyBVLCBpc0Z1bmN0aW9uIGFzIGEsIFNXUkdsb2JhbFN0YXRlIGFzIGIsIGNhY2hlIGFzIGMsIGRlZmF1bHRDb25maWcgYXMgZCwgaXNVbmRlZmluZWQgYXMgZSwgbWVyZ2VDb25maWdzIGFzIGYsIFNXUkNvbmZpZyBhcyBnLCBpbml0Q2FjaGUgYXMgaCwgaXNXaW5kb3dEZWZpbmVkIGFzIGksIG11dGF0ZSBhcyBqLCBjb21wYXJlIGFzIGssIHN0YWJsZUhhc2ggYXMgbCwgbWVyZ2VPYmplY3RzIGFzIG0sIGludGVybmFsTXV0YXRlIGFzIG4sIGdldFRpbWVzdGFtcCBhcyBvLCBwcmVzZXQgYXMgcCwgZGVmYXVsdENvbmZpZ09wdGlvbnMgYXMgcSwgSVNfU0VSVkVSIGFzIHIsIHNlcmlhbGl6ZSBhcyBzLCByQUYgYXMgdCwgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBhcyB1LCBzbG93Q29ubmVjdGlvbiBhcyB2LCBpc0RvY3VtZW50RGVmaW5lZCBhcyB3LCBpc0xlZ2FjeURlbm8gYXMgeCwgaGFzUmVxdWVzdEFuaW1hdGlvbkZyYW1lIGFzIHksIGNyZWF0ZUNhY2hlSGVscGVyIGFzIHogfTtcbiIsImNvbnN0IElORklOSVRFX1BSRUZJWCA9ICckaW5mJCc7XG5cbmV4cG9ydCB7IElORklOSVRFX1BSRUZJWCB9O1xuIiwiY29uc3QgRk9DVVNfRVZFTlQgPSAwO1xuY29uc3QgUkVDT05ORUNUX0VWRU5UID0gMTtcbmNvbnN0IE1VVEFURV9FVkVOVCA9IDI7XG5jb25zdCBFUlJPUl9SRVZBTElEQVRFX0VWRU5UID0gMztcblxuZXhwb3J0IHsgRVJST1JfUkVWQUxJREFURV9FVkVOVCwgRk9DVVNfRVZFTlQsIE1VVEFURV9FVkVOVCwgUkVDT05ORUNUX0VWRU5UIH07XG4iLCJpbXBvcnQgeyBpIGFzIGlzV2luZG93RGVmaW5lZCwgYSBhcyBpc0Z1bmN0aW9uLCBtIGFzIG1lcmdlT2JqZWN0cywgUyBhcyBTV1JDb25maWdDb250ZXh0LCBkIGFzIGRlZmF1bHRDb25maWcsIHMgYXMgc2VyaWFsaXplLCBiIGFzIFNXUkdsb2JhbFN0YXRlLCBjIGFzIGNhY2hlLCBlIGFzIGlzVW5kZWZpbmVkLCBmIGFzIG1lcmdlQ29uZmlncyB9IGZyb20gJy4vY29uZmlnLWNvbnRleHQtY2xpZW50LXY3Vk9GbzY2Lm1qcyc7XG5leHBvcnQgeyBJIGFzIElTX1JFQUNUX0xFR0FDWSwgciBhcyBJU19TRVJWRVIsIE8gYXMgT0JKRUNULCBnIGFzIFNXUkNvbmZpZywgVSBhcyBVTkRFRklORUQsIGsgYXMgY29tcGFyZSwgeiBhcyBjcmVhdGVDYWNoZUhlbHBlciwgcSBhcyBkZWZhdWx0Q29uZmlnT3B0aW9ucywgbyBhcyBnZXRUaW1lc3RhbXAsIHkgYXMgaGFzUmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBoIGFzIGluaXRDYWNoZSwgbiBhcyBpbnRlcm5hbE11dGF0ZSwgdyBhcyBpc0RvY3VtZW50RGVmaW5lZCwgeCBhcyBpc0xlZ2FjeURlbm8sIEIgYXMgaXNQcm9taXNlTGlrZSwgaiBhcyBtdXRhdGUsIEEgYXMgbm9vcCwgcCBhcyBwcmVzZXQsIHQgYXMgckFGLCB2IGFzIHNsb3dDb25uZWN0aW9uLCBsIGFzIHN0YWJsZUhhc2gsIHUgYXMgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4vY29uZmlnLWNvbnRleHQtY2xpZW50LXY3Vk9GbzY2Lm1qcyc7XG5pbXBvcnQgKiBhcyByZXZhbGlkYXRlRXZlbnRzIGZyb20gJy4vZXZlbnRzLm1qcyc7XG5leHBvcnQgeyByZXZhbGlkYXRlRXZlbnRzIH07XG5pbXBvcnQgeyBJTkZJTklURV9QUkVGSVggfSBmcm9tICcuL2NvbnN0YW50cy5tanMnO1xuZXhwb3J0IHsgSU5GSU5JVEVfUFJFRklYIH0gZnJvbSAnLi9jb25zdGFudHMubWpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy5tanMnO1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yXG5jb25zdCBlbmFibGVEZXZ0b29scyA9IGlzV2luZG93RGVmaW5lZCAmJiB3aW5kb3cuX19TV1JfREVWVE9PTFNfVVNFX187XG5jb25zdCB1c2UgPSBlbmFibGVEZXZ0b29scyA/IHdpbmRvdy5fX1NXUl9ERVZUT09MU19VU0VfXyA6IFtdO1xuY29uc3Qgc2V0dXBEZXZUb29scyA9ICgpPT57XG4gICAgaWYgKGVuYWJsZURldnRvb2xzKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgd2luZG93Ll9fU1dSX0RFVlRPT0xTX1JFQUNUX18gPSBSZWFjdDtcbiAgICB9XG59O1xuXG5jb25zdCBub3JtYWxpemUgPSAoYXJncyk9PntcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmdzWzFdKSA/IFtcbiAgICAgICAgYXJnc1swXSxcbiAgICAgICAgYXJnc1sxXSxcbiAgICAgICAgYXJnc1syXSB8fCB7fVxuICAgIF0gOiBbXG4gICAgICAgIGFyZ3NbMF0sXG4gICAgICAgIG51bGwsXG4gICAgICAgIChhcmdzWzFdID09PSBudWxsID8gYXJnc1syXSA6IGFyZ3NbMV0pIHx8IHt9XG4gICAgXTtcbn07XG5cbmNvbnN0IHVzZVNXUkNvbmZpZyA9ICgpPT57XG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhkZWZhdWx0Q29uZmlnLCB1c2VDb250ZXh0KFNXUkNvbmZpZ0NvbnRleHQpKTtcbn07XG5cbmNvbnN0IHByZWxvYWQgPSAoa2V5XywgZmV0Y2hlcik9PntcbiAgICBjb25zdCBba2V5LCBmbkFyZ10gPSBzZXJpYWxpemUoa2V5Xyk7XG4gICAgY29uc3QgWywgLCAsIFBSRUxPQURdID0gU1dSR2xvYmFsU3RhdGUuZ2V0KGNhY2hlKTtcbiAgICAvLyBQcmV2ZW50IHByZWxvYWQgdG8gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGJlZm9yZSB1c2VkLlxuICAgIGlmIChQUkVMT0FEW2tleV0pIHJldHVybiBQUkVMT0FEW2tleV07XG4gICAgY29uc3QgcmVxID0gZmV0Y2hlcihmbkFyZyk7XG4gICAgUFJFTE9BRFtrZXldID0gcmVxO1xuICAgIHJldHVybiByZXE7XG59O1xuY29uc3QgbWlkZGxld2FyZSA9ICh1c2VTV1JOZXh0KT0+KGtleV8sIGZldGNoZXJfLCBjb25maWcpPT57XG4gICAgICAgIC8vIGZldGNoZXIgbWlnaHQgYmUgYSBzeW5jIGZ1bmN0aW9uLCBzbyB0aGlzIHNob3VsZCBub3QgYmUgYW4gYXN5bmMgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgZmV0Y2hlciA9IGZldGNoZXJfICYmICgoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IFtrZXldID0gc2VyaWFsaXplKGtleV8pO1xuICAgICAgICAgICAgY29uc3QgWywgLCAsIFBSRUxPQURdID0gU1dSR2xvYmFsU3RhdGUuZ2V0KGNhY2hlKTtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChJTkZJTklURV9QUkVGSVgpKSB7XG4gICAgICAgICAgICAgICAgLy8gd2Ugd2FudCB0aGUgaW5maW5pdGUgZmV0Y2hlciB0byBiZSBjYWxsZWQuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxpbmcgb2YgdGhlIFBSRUxPQUQgY2FjaGUgaGFwcGVucyB0aGVyZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hlcl8oLi4uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXEgPSBQUkVMT0FEW2tleV07XG4gICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQocmVxKSkgcmV0dXJuIGZldGNoZXJfKC4uLmFyZ3MpO1xuICAgICAgICAgICAgZGVsZXRlIFBSRUxPQURba2V5XTtcbiAgICAgICAgICAgIHJldHVybiByZXE7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXNlU1dSTmV4dChrZXlfLCBmZXRjaGVyLCBjb25maWcpO1xuICAgIH07XG5cbmNvbnN0IEJVSUxUX0lOX01JRERMRVdBUkUgPSB1c2UuY29uY2F0KG1pZGRsZXdhcmUpO1xuXG4vLyBJdCdzIHRyaWNreSB0byBwYXNzIGdlbmVyaWMgdHlwZXMgYXMgcGFyYW1ldGVycywgc28gd2UganVzdCBkaXJlY3RseSBvdmVycmlkZVxuLy8gdGhlIHR5cGVzIGhlcmUuXG5jb25zdCB3aXRoQXJncyA9IChob29rKT0+e1xuICAgIHJldHVybiBmdW5jdGlvbiB1c2VTV1JBcmdzKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBkZWZhdWx0IGFuZCBpbmhlcml0ZWQgY29uZmlndXJhdGlvbi5cbiAgICAgICAgY29uc3QgZmFsbGJhY2tDb25maWcgPSB1c2VTV1JDb25maWcoKTtcbiAgICAgICAgLy8gTm9ybWFsaXplIGFyZ3VtZW50cy5cbiAgICAgICAgY29uc3QgW2tleSwgZm4sIF9jb25maWddID0gbm9ybWFsaXplKGFyZ3MpO1xuICAgICAgICAvLyBNZXJnZSBjb25maWd1cmF0aW9ucy5cbiAgICAgICAgY29uc3QgY29uZmlnID0gbWVyZ2VDb25maWdzKGZhbGxiYWNrQ29uZmlnLCBfY29uZmlnKTtcbiAgICAgICAgLy8gQXBwbHkgbWlkZGxld2FyZVxuICAgICAgICBsZXQgbmV4dCA9IGhvb2s7XG4gICAgICAgIGNvbnN0IHsgdXNlIH0gPSBjb25maWc7XG4gICAgICAgIGNvbnN0IG1pZGRsZXdhcmUgPSAodXNlIHx8IFtdKS5jb25jYXQoQlVJTFRfSU5fTUlERExFV0FSRSk7XG4gICAgICAgIGZvcihsZXQgaSA9IG1pZGRsZXdhcmUubGVuZ3RoOyBpLS07KXtcbiAgICAgICAgICAgIG5leHQgPSBtaWRkbGV3YXJlW2ldKG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0KGtleSwgZm4gfHwgY29uZmlnLmZldGNoZXIgfHwgbnVsbCwgY29uZmlnKTtcbiAgICB9O1xufTtcblxuLy8gQWRkIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYSBsaXN0IG9mIGtleWVkIGNhbGxiYWNrIGZ1bmN0aW9ucyBhbmQgcmV0dXJuXG4vLyB0aGUgdW5zdWJzY3JpYmUgZnVuY3Rpb24uXG5jb25zdCBzdWJzY3JpYmVDYWxsYmFjayA9IChrZXksIGNhbGxiYWNrcywgY2FsbGJhY2spPT57XG4gICAgY29uc3Qga2V5ZWRSZXZhbGlkYXRvcnMgPSBjYWxsYmFja3Nba2V5XSB8fCAoY2FsbGJhY2tzW2tleV0gPSBbXSk7XG4gICAga2V5ZWRSZXZhbGlkYXRvcnMucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuICgpPT57XG4gICAgICAgIGNvbnN0IGluZGV4ID0ga2V5ZWRSZXZhbGlkYXRvcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBPKDEpOiBmYXN0ZXIgdGhhbiBzcGxpY2VcbiAgICAgICAgICAgIGtleWVkUmV2YWxpZGF0b3JzW2luZGV4XSA9IGtleWVkUmV2YWxpZGF0b3JzW2tleWVkUmV2YWxpZGF0b3JzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAga2V5ZWRSZXZhbGlkYXRvcnMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLy8gQ3JlYXRlIGEgY3VzdG9tIGhvb2sgd2l0aCBhIG1pZGRsZXdhcmVcbmNvbnN0IHdpdGhNaWRkbGV3YXJlID0gKHVzZVNXUiwgbWlkZGxld2FyZSk9PntcbiAgICByZXR1cm4gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IFtrZXksIGZuLCBjb25maWddID0gbm9ybWFsaXplKGFyZ3MpO1xuICAgICAgICBjb25zdCB1c2VzID0gKGNvbmZpZy51c2UgfHwgW10pLmNvbmNhdChtaWRkbGV3YXJlKTtcbiAgICAgICAgcmV0dXJuIHVzZVNXUihrZXksIGZuLCB7XG4gICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICB1c2U6IHVzZXNcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cbnNldHVwRGV2VG9vbHMoKTtcblxuZXhwb3J0IHsgU1dSR2xvYmFsU3RhdGUsIGNhY2hlLCBkZWZhdWx0Q29uZmlnLCBpc0Z1bmN0aW9uLCBpc1VuZGVmaW5lZCwgaXNXaW5kb3dEZWZpbmVkLCBtZXJnZUNvbmZpZ3MsIG1lcmdlT2JqZWN0cywgbm9ybWFsaXplLCBwcmVsb2FkLCBzZXJpYWxpemUsIHN1YnNjcmliZUNhbGxiYWNrLCB1c2VTV1JDb25maWcsIHdpdGhBcmdzLCB3aXRoTWlkZGxld2FyZSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIHVzZURlYnVnVmFsdWUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB9IGZyb20gJ3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vaW5kZXguanMnO1xuaW1wb3J0IHsgT0JKRUNUIGFzIE9CSkVDVCQxLCBTV1JDb25maWcgYXMgU1dSQ29uZmlnJDEsIGRlZmF1bHRDb25maWcsIHdpdGhBcmdzLCBTV1JHbG9iYWxTdGF0ZSwgc2VyaWFsaXplIGFzIHNlcmlhbGl6ZSQxLCBjcmVhdGVDYWNoZUhlbHBlciwgaXNVbmRlZmluZWQgYXMgaXNVbmRlZmluZWQkMSwgVU5ERUZJTkVEIGFzIFVOREVGSU5FRCQxLCBpc1Byb21pc2VMaWtlLCBnZXRUaW1lc3RhbXAsIGlzRnVuY3Rpb24gYXMgaXNGdW5jdGlvbiQxLCByZXZhbGlkYXRlRXZlbnRzLCBpbnRlcm5hbE11dGF0ZSwgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCwgc3Vic2NyaWJlQ2FsbGJhY2ssIElTX1NFUlZFUiwgckFGLCBJU19SRUFDVF9MRUdBQ1ksIG1lcmdlT2JqZWN0cyB9IGZyb20gJy4uL19pbnRlcm5hbC9pbmRleC5tanMnO1xuZXhwb3J0IHsgbXV0YXRlLCBwcmVsb2FkLCB1c2VTV1JDb25maWcgfSBmcm9tICcuLi9faW50ZXJuYWwvaW5kZXgubWpzJztcblxuLy8gU2hhcmVkIHN0YXRlIGJldHdlZW4gc2VydmVyIGNvbXBvbmVudHMgYW5kIGNsaWVudCBjb21wb25lbnRzXG5jb25zdCBub29wID0gKCk9Pnt9O1xuLy8gVXNpbmcgbm9vcCgpIGFzIHRoZSB1bmRlZmluZWQgdmFsdWUgYXMgdW5kZWZpbmVkIGNhbiBiZSByZXBsYWNlZFxuLy8gYnkgc29tZXRoaW5nIGVsc2UuIFByZXR0aWVyIGlnbm9yZSBhbmQgZXh0cmEgcGFyZW50aGVzZXMgYXJlIG5lY2Vzc2FyeSBoZXJlXG4vLyB0byBlbnN1cmUgdGhhdCB0c2MgZG9lc24ndCByZW1vdmUgdGhlIF9fTk9JTkxJTkVfXyBjb21tZW50LlxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBVTkRFRklORUQgPSAvKiNfX05PSU5MSU5FX18qLyBub29wKCk7XG5jb25zdCBPQkpFQ1QgPSBPYmplY3Q7XG5jb25zdCBpc1VuZGVmaW5lZCA9ICh2KT0+diA9PT0gVU5ERUZJTkVEO1xuY29uc3QgaXNGdW5jdGlvbiA9ICh2KT0+dHlwZW9mIHYgPT0gJ2Z1bmN0aW9uJztcblxuLy8gdXNlIFdlYWtNYXAgdG8gc3RvcmUgdGhlIG9iamVjdC0+a2V5IG1hcHBpbmdcbi8vIHNvIHRoZSBvYmplY3RzIGNhbiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbi8vIFdlYWtNYXAgdXNlcyBhIGhhc2h0YWJsZSB1bmRlciB0aGUgaG9vZCwgc28gdGhlIGxvb2t1cFxuLy8gY29tcGxleGl0eSBpcyBhbG1vc3QgTygxKS5cbmNvbnN0IHRhYmxlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGlzT2JqZWN0VHlwZSA9ICh2YWx1ZSwgdHlwZSk9Pk9CSkVDVC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IGBbb2JqZWN0ICR7dHlwZX1dYDtcbi8vIGNvdW50ZXIgb2YgdGhlIGtleVxubGV0IGNvdW50ZXIgPSAwO1xuLy8gQSBzdGFibGUgaGFzaCBpbXBsZW1lbnRhdGlvbiB0aGF0IHN1cHBvcnRzOlxuLy8gLSBGYXN0IGFuZCBlbnN1cmVzIHVuaXF1ZSBoYXNoIHByb3BlcnRpZXNcbi8vIC0gSGFuZGxlcyB1bnNlcmlhbGl6YWJsZSB2YWx1ZXNcbi8vIC0gSGFuZGxlcyBvYmplY3Qga2V5IG9yZGVyaW5nXG4vLyAtIEdlbmVyYXRlcyBzaG9ydCByZXN1bHRzXG4vL1xuLy8gVGhpcyBpcyBub3QgYSBzZXJpYWxpemF0aW9uIGZ1bmN0aW9uLCBhbmQgdGhlIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVlZCB0byBiZVxuLy8gcGFyc2FibGUuXG5jb25zdCBzdGFibGVIYXNoID0gKGFyZyk9PntcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIGFyZztcbiAgICBjb25zdCBpc0RhdGUgPSBpc09iamVjdFR5cGUoYXJnLCAnRGF0ZScpO1xuICAgIGNvbnN0IGlzUmVnZXggPSBpc09iamVjdFR5cGUoYXJnLCAnUmVnRXhwJyk7XG4gICAgY29uc3QgaXNQbGFpbk9iamVjdCA9IGlzT2JqZWN0VHlwZShhcmcsICdPYmplY3QnKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBpbmRleDtcbiAgICBpZiAoT0JKRUNUKGFyZykgPT09IGFyZyAmJiAhaXNEYXRlICYmICFpc1JlZ2V4KSB7XG4gICAgICAgIC8vIE9iamVjdC9mdW5jdGlvbiwgbm90IG51bGwvZGF0ZS9yZWdleHAuIFVzZSBXZWFrTWFwIHRvIHN0b3JlIHRoZSBpZCBmaXJzdC5cbiAgICAgICAgLy8gSWYgaXQncyBhbHJlYWR5IGhhc2hlZCwgZGlyZWN0bHkgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAgICAgIHJlc3VsdCA9IHRhYmxlLmdldChhcmcpO1xuICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgICAvLyBTdG9yZSB0aGUgaGFzaCBmaXJzdCBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGlvbiBiZWZvcmUgZW50ZXJpbmcgdGhlXG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBgc3RhYmxlSGFzaGAgY2FsbHMuXG4gICAgICAgIC8vIEZvciBvdGhlciBvYmplY3RzIGxpa2Ugc2V0IGFuZCBtYXAsIHdlIHVzZSB0aGlzIGlkIGRpcmVjdGx5IGFzIHRoZSBoYXNoLlxuICAgICAgICByZXN1bHQgPSArK2NvdW50ZXIgKyAnfic7XG4gICAgICAgIHRhYmxlLnNldChhcmcsIHJlc3VsdCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIC8vIEFycmF5LlxuICAgICAgICAgICAgcmVzdWx0ID0gJ0AnO1xuICAgICAgICAgICAgZm9yKGluZGV4ID0gMDsgaW5kZXggPCBhcmcubGVuZ3RoOyBpbmRleCsrKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gc3RhYmxlSGFzaChhcmdbaW5kZXhdKSArICcsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlLnNldChhcmcsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QpIHtcbiAgICAgICAgICAgIC8vIE9iamVjdCwgc29ydCBrZXlzLlxuICAgICAgICAgICAgcmVzdWx0ID0gJyMnO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9CSkVDVC5rZXlzKGFyZykuc29ydCgpO1xuICAgICAgICAgICAgd2hpbGUoIWlzVW5kZWZpbmVkKGluZGV4ID0ga2V5cy5wb3AoKSkpe1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGluZGV4ICsgJzonICsgc3RhYmxlSGFzaChhcmdbaW5kZXhdKSArICcsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gaXNEYXRlID8gYXJnLnRvSlNPTigpIDogdHlwZSA9PSAnc3ltYm9sJyA/IGFyZy50b1N0cmluZygpIDogdHlwZSA9PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGFyZykgOiAnJyArIGFyZztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZSA9IChrZXkpPT57XG4gICAgaWYgKGlzRnVuY3Rpb24oa2V5KSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAga2V5ID0ga2V5KCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZGVwZW5kZW5jaWVzIG5vdCByZWFkeVxuICAgICAgICAgICAga2V5ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVXNlIHRoZSBvcmlnaW5hbCBrZXkgYXMgdGhlIGFyZ3VtZW50IG9mIGZldGNoZXIuIFRoaXMgY2FuIGJlIGEgc3RyaW5nIG9yIGFuXG4gICAgLy8gYXJyYXkgb2YgdmFsdWVzLlxuICAgIGNvbnN0IGFyZ3MgPSBrZXk7XG4gICAgLy8gSWYga2V5IGlzIG5vdCBmYWxzeSwgb3Igbm90IGFuIGVtcHR5IGFycmF5LCBoYXNoIGl0LlxuICAgIGtleSA9IHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAoQXJyYXkuaXNBcnJheShrZXkpID8ga2V5Lmxlbmd0aCA6IGtleSkgPyBzdGFibGVIYXNoKGtleSkgOiAnJztcbiAgICByZXR1cm4gW1xuICAgICAgICBrZXksXG4gICAgICAgIGFyZ3NcbiAgICBdO1xufTtcblxuY29uc3QgdW5zdGFibGVfc2VyaWFsaXplID0gKGtleSk9PnNlcmlhbGl6ZShrZXkpWzBdO1xuXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInJlYWN0L2V4cGVyaW1lbnRhbFwiIC8+XG5jb25zdCB1c2UgPSBSZWFjdC51c2UgfHwgLy8gVGhpcyBleHRyYSBnZW5lcmljIGlzIHRvIGF2b2lkIFR5cGVTY3JpcHQgbWl4aW5nIHVwIHRoZSBnZW5lcmljIGFuZCBKU1ggc3l0YXhcbi8vIGFuZCBlbWl0dGluZyBhbiBlcnJvci5cbi8vIFdlIGFzc3VtZSB0aGF0IHRoaXMgaXMgb25seSBmb3IgdGhlIGB1c2UodGhlbmFibGUpYCBjYXNlLCBub3QgYHVzZShjb250ZXh0KWAuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9hZWQwMGRhY2ZiNzlkMTdjNTMyMTg0MDRjNTJiMWM3YWE1OWM0YTg5L3BhY2thZ2VzL3JlYWN0LXNlcnZlci9zcmMvUmVhY3RGaXp6VGhlbmFibGUuanMjTDQ1XG4oKHRoZW5hYmxlKT0+e1xuICAgIHN3aXRjaCh0aGVuYWJsZS5zdGF0dXMpe1xuICAgICAgICBjYXNlICdwZW5kaW5nJzpcbiAgICAgICAgICAgIHRocm93IHRoZW5hYmxlO1xuICAgICAgICBjYXNlICdmdWxmaWxsZWQnOlxuICAgICAgICAgICAgcmV0dXJuIHRoZW5hYmxlLnZhbHVlO1xuICAgICAgICBjYXNlICdyZWplY3RlZCc6XG4gICAgICAgICAgICB0aHJvdyB0aGVuYWJsZS5yZWFzb247XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGVuYWJsZS5zdGF0dXMgPSAncGVuZGluZyc7XG4gICAgICAgICAgICB0aGVuYWJsZS50aGVuKCh2KT0+e1xuICAgICAgICAgICAgICAgIHRoZW5hYmxlLnN0YXR1cyA9ICdmdWxmaWxsZWQnO1xuICAgICAgICAgICAgICAgIHRoZW5hYmxlLnZhbHVlID0gdjtcbiAgICAgICAgICAgIH0sIChlKT0+e1xuICAgICAgICAgICAgICAgIHRoZW5hYmxlLnN0YXR1cyA9ICdyZWplY3RlZCc7XG4gICAgICAgICAgICAgICAgdGhlbmFibGUucmVhc29uID0gZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgdGhlbmFibGU7XG4gICAgfVxufSk7XG5jb25zdCBXSVRIX0RFRFVQRSA9IHtcbiAgICBkZWR1cGU6IHRydWVcbn07XG5jb25zdCB1c2VTV1JIYW5kbGVyID0gKF9rZXksIGZldGNoZXIsIGNvbmZpZyk9PntcbiAgICBjb25zdCB7IGNhY2hlLCBjb21wYXJlLCBzdXNwZW5zZSwgZmFsbGJhY2tEYXRhLCByZXZhbGlkYXRlT25Nb3VudCwgcmV2YWxpZGF0ZUlmU3RhbGUsIHJlZnJlc2hJbnRlcnZhbCwgcmVmcmVzaFdoZW5IaWRkZW4sIHJlZnJlc2hXaGVuT2ZmbGluZSwga2VlcFByZXZpb3VzRGF0YSB9ID0gY29uZmlnO1xuICAgIGNvbnN0IFtFVkVOVF9SRVZBTElEQVRPUlMsIE1VVEFUSU9OLCBGRVRDSCwgUFJFTE9BRF0gPSBTV1JHbG9iYWxTdGF0ZS5nZXQoY2FjaGUpO1xuICAgIC8vIGBrZXlgIGlzIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBTV1IgaW50ZXJuYWwgc3RhdGUsXG4gICAgLy8gYGZuQXJnYCBpcyB0aGUgYXJndW1lbnQvYXJndW1lbnRzIHBhcnNlZCBmcm9tIHRoZSBrZXksIHdoaWNoIHdpbGwgYmUgcGFzc2VkXG4gICAgLy8gdG8gdGhlIGZldGNoZXIuXG4gICAgLy8gQWxsIG9mIHRoZW0gYXJlIGRlcml2ZWQgZnJvbSBgX2tleWAuXG4gICAgY29uc3QgW2tleSwgZm5BcmddID0gc2VyaWFsaXplJDEoX2tleSk7XG4gICAgLy8gSWYgaXQncyB0aGUgaW5pdGlhbCByZW5kZXIgb2YgdGhpcyBob29rLlxuICAgIGNvbnN0IGluaXRpYWxNb3VudGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICAvLyBJZiB0aGUgaG9vayBpcyB1bm1vdW50ZWQgYWxyZWFkeS4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gcHJldmVudCBzb21lIGVmZmVjdHNcbiAgICAvLyB0byBiZSBjYWxsZWQgYWZ0ZXIgdW5tb3VudGluZy5cbiAgICBjb25zdCB1bm1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIFJlZnMgdG8ga2VlcCB0aGUga2V5IGFuZCBjb25maWcuXG4gICAgY29uc3Qga2V5UmVmID0gdXNlUmVmKGtleSk7XG4gICAgY29uc3QgZmV0Y2hlclJlZiA9IHVzZVJlZihmZXRjaGVyKTtcbiAgICBjb25zdCBjb25maWdSZWYgPSB1c2VSZWYoY29uZmlnKTtcbiAgICBjb25zdCBnZXRDb25maWcgPSAoKT0+Y29uZmlnUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaXNBY3RpdmUgPSAoKT0+Z2V0Q29uZmlnKCkuaXNWaXNpYmxlKCkgJiYgZ2V0Q29uZmlnKCkuaXNPbmxpbmUoKTtcbiAgICBjb25zdCBbZ2V0Q2FjaGUsIHNldENhY2hlLCBzdWJzY3JpYmVDYWNoZSwgZ2V0SW5pdGlhbENhY2hlXSA9IGNyZWF0ZUNhY2hlSGVscGVyKGNhY2hlLCBrZXkpO1xuICAgIGNvbnN0IHN0YXRlRGVwZW5kZW5jaWVzID0gdXNlUmVmKHt9KS5jdXJyZW50O1xuICAgIC8vIFJlc29sdmUgdGhlIGZhbGxiYWNrIGRhdGEgZnJvbSBlaXRoZXIgdGhlIGlubGluZSBvcHRpb24sIG9yIHRoZSBnbG9iYWwgcHJvdmlkZXIuXG4gICAgLy8gSWYgaXQncyBhIHByb21pc2UsIHdlIHNpbXBseSBsZXQgUmVhY3Qgc3VzcGVuZCBhbmQgcmVzb2x2ZSBpdCBmb3IgdXMuXG4gICAgY29uc3QgZmFsbGJhY2sgPSBpc1VuZGVmaW5lZCQxKGZhbGxiYWNrRGF0YSkgPyBpc1VuZGVmaW5lZCQxKGNvbmZpZy5mYWxsYmFjaykgPyBVTkRFRklORUQkMSA6IGNvbmZpZy5mYWxsYmFja1trZXldIDogZmFsbGJhY2tEYXRhO1xuICAgIGNvbnN0IGlzRXF1YWwgPSAocHJldiwgY3VycmVudCk9PntcbiAgICAgICAgZm9yKGNvbnN0IF8gaW4gc3RhdGVEZXBlbmRlbmNpZXMpe1xuICAgICAgICAgICAgY29uc3QgdCA9IF87XG4gICAgICAgICAgICBpZiAodCA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlKHByZXZbdF0sIGN1cnJlbnRbdF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQkMShwcmV2W3RdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcGFyZShyZXR1cm5lZERhdGEsIGN1cnJlbnRbdF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50W3RdICE9PSBwcmV2W3RdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBjb25zdCBnZXRTbmFwc2hvdCA9IHVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkU3RhcnRSZXF1ZXN0ID0gKCgpPT57XG4gICAgICAgICAgICBpZiAoIWtleSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFmZXRjaGVyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyBJZiBgcmV2YWxpZGF0ZU9uTW91bnRgIGlzIHNldCwgd2UgdGFrZSB0aGUgdmFsdWUgZGlyZWN0bHkuXG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkJDEocmV2YWxpZGF0ZU9uTW91bnQpKSByZXR1cm4gcmV2YWxpZGF0ZU9uTW91bnQ7XG4gICAgICAgICAgICAvLyBJZiBpdCdzIHBhdXNlZCwgd2Ugc2tpcCByZXZhbGlkYXRpb24uXG4gICAgICAgICAgICBpZiAoZ2V0Q29uZmlnKCkuaXNQYXVzZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN1c3BlbnNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcmV2YWxpZGF0ZUlmU3RhbGUgIT09IGZhbHNlO1xuICAgICAgICB9KSgpO1xuICAgICAgICAvLyBHZXQgdGhlIGNhY2hlIGFuZCBtZXJnZSBpdCB3aXRoIGV4cGVjdGVkIHN0YXRlcy5cbiAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWRDYWNoZSA9IChzdGF0ZSk9PntcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgc2VsZWN0IHRoZSBuZWVkZWQgZmllbGRzIGZyb20gdGhlIHN0YXRlLlxuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBtZXJnZU9iamVjdHMoc3RhdGUpO1xuICAgICAgICAgICAgZGVsZXRlIHNuYXBzaG90Ll9rO1xuICAgICAgICAgICAgaWYgKCFzaG91bGRTdGFydFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc25hcHNob3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgLi4uc25hcHNob3RcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNhY2hlZERhdGEgPSBnZXRDYWNoZSgpO1xuICAgICAgICBjb25zdCBpbml0aWFsRGF0YSA9IGdldEluaXRpYWxDYWNoZSgpO1xuICAgICAgICBjb25zdCBjbGllbnRTbmFwc2hvdCA9IGdldFNlbGVjdGVkQ2FjaGUoY2FjaGVkRGF0YSk7XG4gICAgICAgIGNvbnN0IHNlcnZlclNuYXBzaG90ID0gY2FjaGVkRGF0YSA9PT0gaW5pdGlhbERhdGEgPyBjbGllbnRTbmFwc2hvdCA6IGdldFNlbGVjdGVkQ2FjaGUoaW5pdGlhbERhdGEpO1xuICAgICAgICAvLyBUbyBtYWtlIHN1cmUgdGhhdCB3ZSBhcmUgcmV0dXJuaW5nIHRoZSBzYW1lIG9iamVjdCByZWZlcmVuY2UgdG8gYXZvaWRcbiAgICAgICAgLy8gdW5uZWNlc3NhcnkgcmUtcmVuZGVycywgd2Uga2VlcCB0aGUgcHJldmlvdXMgc25hcHNob3QgYW5kIHVzZSBkZWVwXG4gICAgICAgIC8vIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgd2UgbmVlZCB0byByZXR1cm4gYSBuZXcgb25lLlxuICAgICAgICBsZXQgbWVtb3JpemVkU25hcHNob3QgPSBjbGllbnRTbmFwc2hvdDtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U25hcHNob3QgPSBnZXRTZWxlY3RlZENhY2hlKGdldENhY2hlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVSZXN1bHQgPSBpc0VxdWFsKG5ld1NuYXBzaG90LCBtZW1vcml6ZWRTbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVudGFsbHksIHdlIHNob3VsZCBhbHdheXMgcmV0dXJuIHRoZSBgbWVtb3JpemVkU25hcHNob3RgIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgdGhlcmUncyBubyBjaGFuZ2UgYmV0d2VlbiB0aGUgbmV3IGFuZCBvbGQgc25hcHNob3RzLlxuICAgICAgICAgICAgICAgICAgICAvLyBIb3dldmVyLCBzaW5jZSB0aGUgYGlzRXF1YWxgIGZ1bmN0aW9uIG9ubHkgY29tcGFyZXMgc2VsZWN0ZWQgZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdmFsdWVzIG9mIHRoZSB1bnNlbGVjdGVkIGZpZWxkcyBtaWdodCBiZSBjaGFuZ2VkLiBUaGF0J3NcbiAgICAgICAgICAgICAgICAgICAgLy8gc2ltcGx5IGJlY2F1c2Ugd2UgZGlkbid0IHRyYWNrIHRoZW0uXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvIHN1cHBvcnQgdGhlIGNhc2UgaW4gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvcHVsbC8yNTc2LFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGVzZSBmaWVsZHMgaW4gdGhlIGBtZW1vcml6ZWRTbmFwc2hvdGAgdG9vXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpdGggZGlyZWN0IG11dGF0aW9ucyB0byBlbnN1cmUgdGhlIHNuYXBzaG90IGlzIGFsd2F5cyB1cC10by1kYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGV2ZW4gZm9yIHRoZSB1bnNlbGVjdGVkIGZpZWxkcywgYnV0IG9ubHkgdHJpZ2dlciByZS1yZW5kZXJzIHdoZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNlbGVjdGVkIGZpZWxkcyBhcmUgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICAgICAgbWVtb3JpemVkU25hcHNob3QuZGF0YSA9IG5ld1NuYXBzaG90LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9yaXplZFNuYXBzaG90LmlzTG9hZGluZyA9IG5ld1NuYXBzaG90LmlzTG9hZGluZztcbiAgICAgICAgICAgICAgICAgICAgbWVtb3JpemVkU25hcHNob3QuaXNWYWxpZGF0aW5nID0gbmV3U25hcHNob3QuaXNWYWxpZGF0aW5nO1xuICAgICAgICAgICAgICAgICAgICBtZW1vcml6ZWRTbmFwc2hvdC5lcnJvciA9IG5ld1NuYXBzaG90LmVycm9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtb3JpemVkU25hcHNob3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb3JpemVkU25hcHNob3QgPSBuZXdTbmFwc2hvdDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1NuYXBzaG90O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKT0+c2VydmVyU25hcHNob3RcbiAgICAgICAgXTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW1xuICAgICAgICBjYWNoZSxcbiAgICAgICAga2V5XG4gICAgXSk7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0YXRlIHRoYXQgU1dSIHNob3VsZCByZXR1cm4uXG4gICAgY29uc3QgY2FjaGVkID0gdXNlU3luY0V4dGVybmFsU3RvcmUodXNlQ2FsbGJhY2soKGNhbGxiYWNrKT0+c3Vic2NyaWJlQ2FjaGUoa2V5LCAoY3VycmVudCwgcHJldik9PntcbiAgICAgICAgICAgIGlmICghaXNFcXVhbChwcmV2LCBjdXJyZW50KSkgY2FsbGJhY2soKTtcbiAgICAgICAgfSksIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBrZXlcbiAgICBdKSwgZ2V0U25hcHNob3RbMF0sIGdldFNuYXBzaG90WzFdKTtcbiAgICBjb25zdCBpc0luaXRpYWxNb3VudCA9ICFpbml0aWFsTW91bnRlZFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGhhc1JldmFsaWRhdG9yID0gRVZFTlRfUkVWQUxJREFUT1JTW2tleV0gJiYgRVZFTlRfUkVWQUxJREFUT1JTW2tleV0ubGVuZ3RoID4gMDtcbiAgICBjb25zdCBjYWNoZWREYXRhID0gY2FjaGVkLmRhdGE7XG4gICAgY29uc3QgZGF0YSA9IGlzVW5kZWZpbmVkJDEoY2FjaGVkRGF0YSkgPyBmYWxsYmFjayAmJiBpc1Byb21pc2VMaWtlKGZhbGxiYWNrKSA/IHVzZShmYWxsYmFjaykgOiBmYWxsYmFjayA6IGNhY2hlZERhdGE7XG4gICAgY29uc3QgZXJyb3IgPSBjYWNoZWQuZXJyb3I7XG4gICAgLy8gVXNlIGEgcmVmIHRvIHN0b3JlIHByZXZpb3VzbHkgcmV0dXJuZWQgZGF0YS4gVXNlIHRoZSBpbml0aWFsIGRhdGEgYXMgaXRzIGluaXRpYWwgdmFsdWUuXG4gICAgY29uc3QgbGFnZ3lEYXRhUmVmID0gdXNlUmVmKGRhdGEpO1xuICAgIGNvbnN0IHJldHVybmVkRGF0YSA9IGtlZXBQcmV2aW91c0RhdGEgPyBpc1VuZGVmaW5lZCQxKGNhY2hlZERhdGEpID8gaXNVbmRlZmluZWQkMShsYWdneURhdGFSZWYuY3VycmVudCkgPyBkYXRhIDogbGFnZ3lEYXRhUmVmLmN1cnJlbnQgOiBjYWNoZWREYXRhIDogZGF0YTtcbiAgICAvLyAtIFN1c3BlbnNlIG1vZGUgYW5kIHRoZXJlJ3Mgc3RhbGUgZGF0YSBmb3IgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgIC8vIC0gTm90IHN1c3BlbnNlIG1vZGUgYW5kIHRoZXJlIGlzIG5vIGZhbGxiYWNrIGRhdGEgYW5kIGByZXZhbGlkYXRlSWZTdGFsZWAgaXMgZW5hYmxlZC5cbiAgICAvLyAtIGByZXZhbGlkYXRlSWZTdGFsZWAgaXMgZW5hYmxlZCBidXQgYGRhdGFgIGlzIG5vdCBkZWZpbmVkLlxuICAgIGNvbnN0IHNob3VsZERvSW5pdGlhbFJldmFsaWRhdGlvbiA9ICgoKT0+e1xuICAgICAgICAvLyBpZiBhIGtleSBhbHJlYWR5IGhhcyByZXZhbGlkYXRvcnMgYW5kIGFsc28gaGFzIGVycm9yLCB3ZSBzaG91bGQgbm90IHRyaWdnZXIgcmV2YWxpZGF0aW9uXG4gICAgICAgIGlmIChoYXNSZXZhbGlkYXRvciAmJiAhaXNVbmRlZmluZWQkMShlcnJvcikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gSWYgYHJldmFsaWRhdGVPbk1vdW50YCBpcyBzZXQsIHdlIHRha2UgdGhlIHZhbHVlIGRpcmVjdGx5LlxuICAgICAgICBpZiAoaXNJbml0aWFsTW91bnQgJiYgIWlzVW5kZWZpbmVkJDEocmV2YWxpZGF0ZU9uTW91bnQpKSByZXR1cm4gcmV2YWxpZGF0ZU9uTW91bnQ7XG4gICAgICAgIC8vIElmIGl0J3MgcGF1c2VkLCB3ZSBza2lwIHJldmFsaWRhdGlvbi5cbiAgICAgICAgaWYgKGdldENvbmZpZygpLmlzUGF1c2VkKCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gVW5kZXIgc3VzcGVuc2UgbW9kZSwgaXQgd2lsbCBhbHdheXMgZmV0Y2ggb24gcmVuZGVyIGlmIHRoZXJlIGlzIG5vXG4gICAgICAgIC8vIHN0YWxlIGRhdGEgc28gbm8gbmVlZCB0byByZXZhbGlkYXRlIGltbWVkaWF0ZWx5IG1vdW50IGl0IGFnYWluLlxuICAgICAgICAvLyBJZiBkYXRhIGV4aXN0cywgb25seSByZXZhbGlkYXRlIGlmIGByZXZhbGlkYXRlSWZTdGFsZWAgaXMgdHJ1ZS5cbiAgICAgICAgaWYgKHN1c3BlbnNlKSByZXR1cm4gaXNVbmRlZmluZWQkMShkYXRhKSA/IGZhbHNlIDogcmV2YWxpZGF0ZUlmU3RhbGU7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHN0YWxlIGRhdGEsIHdlIG5lZWQgdG8gcmV2YWxpZGF0ZSB3aGVuIG1vdW50O1xuICAgICAgICAvLyBJZiBgcmV2YWxpZGF0ZUlmU3RhbGVgIGlzIHNldCB0byB0cnVlLCB3ZSB3aWxsIGFsd2F5cyByZXZhbGlkYXRlLlxuICAgICAgICByZXR1cm4gaXNVbmRlZmluZWQkMShkYXRhKSB8fCByZXZhbGlkYXRlSWZTdGFsZTtcbiAgICB9KSgpO1xuICAgIC8vIFJlc29sdmUgdGhlIGRlZmF1bHQgdmFsaWRhdGluZyBzdGF0ZTpcbiAgICAvLyBJZiBpdCdzIGFibGUgdG8gdmFsaWRhdGUsIGFuZCBpdCBzaG91bGQgcmV2YWxpZGF0ZSB3aGVuIG1vdW50LCB0aGlzIHdpbGwgYmUgdHJ1ZS5cbiAgICBjb25zdCBkZWZhdWx0VmFsaWRhdGluZ1N0YXRlID0gISEoa2V5ICYmIGZldGNoZXIgJiYgaXNJbml0aWFsTW91bnQgJiYgc2hvdWxkRG9Jbml0aWFsUmV2YWxpZGF0aW9uKTtcbiAgICBjb25zdCBpc1ZhbGlkYXRpbmcgPSBpc1VuZGVmaW5lZCQxKGNhY2hlZC5pc1ZhbGlkYXRpbmcpID8gZGVmYXVsdFZhbGlkYXRpbmdTdGF0ZSA6IGNhY2hlZC5pc1ZhbGlkYXRpbmc7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gaXNVbmRlZmluZWQkMShjYWNoZWQuaXNMb2FkaW5nKSA/IGRlZmF1bHRWYWxpZGF0aW5nU3RhdGUgOiBjYWNoZWQuaXNMb2FkaW5nO1xuICAgIC8vIFRoZSByZXZhbGlkYXRpb24gZnVuY3Rpb24gaXMgYSBjYXJlZnVsbHkgY3JhZnRlZCB3cmFwcGVyIG9mIHRoZSBvcmlnaW5hbFxuICAgIC8vIGBmZXRjaGVyYCwgdG8gY29ycmVjdGx5IGhhbmRsZSB0aGUgbWFueSBlZGdlIGNhc2VzLlxuICAgIGNvbnN0IHJldmFsaWRhdGUgPSB1c2VDYWxsYmFjayhhc3luYyAocmV2YWxpZGF0ZU9wdHMpPT57XG4gICAgICAgIGNvbnN0IGN1cnJlbnRGZXRjaGVyID0gZmV0Y2hlclJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWtleSB8fCAhY3VycmVudEZldGNoZXIgfHwgdW5tb3VudGVkUmVmLmN1cnJlbnQgfHwgZ2V0Q29uZmlnKCkuaXNQYXVzZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdEYXRhO1xuICAgICAgICBsZXQgc3RhcnRBdDtcbiAgICAgICAgbGV0IGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBvcHRzID0gcmV2YWxpZGF0ZU9wdHMgfHwge307XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG9uZ29pbmcgY29uY3VycmVudCByZXF1ZXN0LCBvciBgZGVkdXBlYCBpcyBub3Qgc2V0LCBhXG4gICAgICAgIC8vIG5ldyByZXF1ZXN0IHNob3VsZCBiZSBpbml0aWF0ZWQuXG4gICAgICAgIGNvbnN0IHNob3VsZFN0YXJ0TmV3UmVxdWVzdCA9ICFGRVRDSFtrZXldIHx8ICFvcHRzLmRlZHVwZTtcbiAgICAgICAgLypcbiAgICAgICAgIEZvciBSZWFjdCAxN1xuICAgICAgICAgRG8gdW5tb3VudCBjaGVjayBmb3IgY2FsbHM6XG4gICAgICAgICBJZiBrZXkgaGFzIGNoYW5nZWQgZHVyaW5nIHRoZSByZXZhbGlkYXRpb24sIG9yIHRoZSBjb21wb25lbnQgaGFzIGJlZW5cbiAgICAgICAgIHVubW91bnRlZCwgb2xkIGRpc3BhdGNoIGFuZCBvbGQgZXZlbnQgY2FsbGJhY2tzIHNob3VsZCBub3QgdGFrZSBhbnlcbiAgICAgICAgIGVmZmVjdFxuXG4gICAgICAgIEZvciBSZWFjdCAxOFxuICAgICAgICBvbmx5IGNoZWNrIGlmIGtleSBoYXMgY2hhbmdlZFxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vcmVhY3R3Zy9yZWFjdC0xOC9kaXNjdXNzaW9ucy84MlxuICAgICAgKi8gY29uc3QgY2FsbGJhY2tTYWZlZ3VhcmQgPSAoKT0+e1xuICAgICAgICAgICAgaWYgKElTX1JFQUNUX0xFR0FDWSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdW5tb3VudGVkUmVmLmN1cnJlbnQgJiYga2V5ID09PSBrZXlSZWYuY3VycmVudCAmJiBpbml0aWFsTW91bnRlZFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0ga2V5UmVmLmN1cnJlbnQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRoZSBmaW5hbCBzdGF0ZSBvYmplY3Qgd2hlbiB0aGUgcmVxdWVzdCBmaW5pc2hlcy5cbiAgICAgICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZpbmlzaFJlcXVlc3RBbmRVcGRhdGVTdGF0ZSA9ICgpPT57XG4gICAgICAgICAgICBzZXRDYWNoZShmaW5hbFN0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2xlYW51cFN0YXRlID0gKCk9PntcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3Mgc3RpbGwgdGhlIHNhbWUgcmVxdWVzdCBiZWZvcmUgZGVsZXRpbmcgaXQuXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SW5mbyA9IEZFVENIW2tleV07XG4gICAgICAgICAgICBpZiAocmVxdWVzdEluZm8gJiYgcmVxdWVzdEluZm9bMV0gPT09IHN0YXJ0QXQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgRkVUQ0hba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gU3RhcnQgZmV0Y2hpbmcuIENoYW5nZSB0aGUgYGlzVmFsaWRhdGluZ2Agc3RhdGUsIHVwZGF0ZSB0aGUgY2FjaGUuXG4gICAgICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICAvLyBJdCBpcyBpbiB0aGUgYGlzTG9hZGluZ2Agc3RhdGUsIGlmIGFuZCBvbmx5IGlmIHRoZXJlIGlzIG5vIGNhY2hlZCBkYXRhLlxuICAgICAgICAvLyBUaGlzIGJ5cGFzc2VzIGZhbGxiYWNrIGRhdGEgYW5kIGxhZ2d5IGRhdGEuXG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCQxKGdldENhY2hlKCkuZGF0YSkpIHtcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgc2V0Q2FjaGUoaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBubyBjYWNoZSBpcyBiZWluZyByZW5kZXJlZCBjdXJyZW50bHkgKGl0IHNob3dzIGEgYmxhbmsgcGFnZSksXG4gICAgICAgICAgICAgICAgLy8gd2UgdHJpZ2dlciB0aGUgbG9hZGluZyBzbG93IGV2ZW50LlxuICAgICAgICAgICAgICAgIGlmIChjb25maWcubG9hZGluZ1RpbWVvdXQgJiYgaXNVbmRlZmluZWQkMShnZXRDYWNoZSgpLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nICYmIGNhbGxiYWNrU2FmZWd1YXJkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDb25maWcoKS5vbkxvYWRpbmdTbG93KGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgY29uZmlnLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHJlcXVlc3QgYW5kIHNhdmUgdGhlIHRpbWVzdGFtcC5cbiAgICAgICAgICAgICAgICAvLyBLZXkgbXVzdCBiZSB0cnV0aHkgaWYgZW50ZXJpbmcgaGVyZS5cbiAgICAgICAgICAgICAgICBGRVRDSFtrZXldID0gW1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmV0Y2hlcihmbkFyZyksXG4gICAgICAgICAgICAgICAgICAgIGdldFRpbWVzdGFtcCgpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdhaXQgdW50aWwgdGhlIG9uZ29pbmcgcmVxdWVzdCBpcyBkb25lLiBEZWR1cGxpY2F0aW9uIGlzIGFsc29cbiAgICAgICAgICAgIC8vIGNvbnNpZGVyZWQgaGVyZS5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIFtuZXdEYXRhLCBzdGFydEF0XSA9IEZFVENIW2tleV07XG4gICAgICAgICAgICBuZXdEYXRhID0gYXdhaXQgbmV3RGF0YTtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydE5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBpc24ndCBpbnRlcnJ1cHRlZCwgY2xlYW4gaXQgdXAgYWZ0ZXIgdGhlXG4gICAgICAgICAgICAgICAgLy8gZGVkdXBsaWNhdGlvbiBpbnRlcnZhbC5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNsZWFudXBTdGF0ZSwgY29uZmlnLmRlZHVwaW5nSW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncmUgb3RoZXIgb25nb2luZyByZXF1ZXN0KHMpLCBzdGFydGVkIGFmdGVyIHRoZSBjdXJyZW50IG9uZSxcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBjdXJyZW50IG9uZSB0byBhdm9pZCBwb3NzaWJsZSByYWNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgICAvLyAgIHJlcTEtLS0tLS0tLS0tLS0tLS0tLS0+cmVzMSAgICAgICAgKGN1cnJlbnQgb25lKVxuICAgICAgICAgICAgLy8gICAgICAgIHJlcTItLS0tLS0tLS0tLS0tLS0tPnJlczJcbiAgICAgICAgICAgIC8vIHRoZSByZXF1ZXN0IHRoYXQgZmlyZWQgbGF0ZXIgd2lsbCBhbHdheXMgYmUga2VwdC5cbiAgICAgICAgICAgIC8vIFRoZSB0aW1lc3RhbXAgbWF5YmUgYmUgYHVuZGVmaW5lZGAgb3IgYSBudW1iZXJcbiAgICAgICAgICAgIGlmICghRkVUQ0hba2V5XSB8fCBGRVRDSFtrZXldWzFdICE9PSBzdGFydEF0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tTYWZlZ3VhcmQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29uZmlnKCkub25EaXNjYXJkZWQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhciBlcnJvci5cbiAgICAgICAgICAgIGZpbmFsU3RhdGUuZXJyb3IgPSBVTkRFRklORUQkMTtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3JlIG90aGVyIG11dGF0aW9ucyhzKSwgdGhhdCBvdmVybGFwcGVkIHdpdGggdGhlIGN1cnJlbnQgcmV2YWxpZGF0aW9uOlxuICAgICAgICAgICAgLy8gY2FzZSAxOlxuICAgICAgICAgICAgLy8gICByZXEtLS0tLS0tLS0tLS0tLS0tLS0+cmVzXG4gICAgICAgICAgICAvLyAgICAgICBtdXRhdGUtLS0tLS0+ZW5kXG4gICAgICAgICAgICAvLyBjYXNlIDI6XG4gICAgICAgICAgICAvLyAgICAgICAgIHJlcS0tLS0tLS0tLS0tLT5yZXNcbiAgICAgICAgICAgIC8vICAgbXV0YXRlLS0tLS0tPmVuZFxuICAgICAgICAgICAgLy8gY2FzZSAzOlxuICAgICAgICAgICAgLy8gICByZXEtLS0tLS0tLS0tLS0tLS0tLS0+cmVzXG4gICAgICAgICAgICAvLyAgICAgICBtdXRhdGUtLS0tLS0tLi4uLS0tLS0tLS0tLT5cbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gaWdub3JlIHRoZSByZXZhbGlkYXRpb24gcmVzdWx0IChyZXMpIGJlY2F1c2UgaXQncyBubyBsb25nZXIgZnJlc2guXG4gICAgICAgICAgICAvLyBtZWFud2hpbGUsIGEgbmV3IHJldmFsaWRhdGlvbiBzaG91bGQgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG11dGF0aW9uIGVuZHMuXG4gICAgICAgICAgICBjb25zdCBtdXRhdGlvbkluZm8gPSBNVVRBVElPTltrZXldO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCQxKG11dGF0aW9uSW5mbykgJiYgLy8gY2FzZSAxXG4gICAgICAgICAgICAoc3RhcnRBdCA8PSBtdXRhdGlvbkluZm9bMF0gfHwgLy8gY2FzZSAyXG4gICAgICAgICAgICBzdGFydEF0IDw9IG11dGF0aW9uSW5mb1sxXSB8fCAvLyBjYXNlIDNcbiAgICAgICAgICAgIG11dGF0aW9uSW5mb1sxXSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hSZXF1ZXN0QW5kVXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja1NhZmVndWFyZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDb25maWcoKS5vbkRpc2NhcmRlZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlZXAgY29tcGFyZSB3aXRoIHRoZSBsYXRlc3Qgc3RhdGUgdG8gYXZvaWQgZXh0cmEgcmUtcmVuZGVycy5cbiAgICAgICAgICAgIC8vIEZvciBsb2NhbCBzdGF0ZSwgY29tcGFyZSBhbmQgYXNzaWduLlxuICAgICAgICAgICAgY29uc3QgY2FjaGVEYXRhID0gZ2V0Q2FjaGUoKS5kYXRhO1xuICAgICAgICAgICAgLy8gU2luY2UgdGhlIGNvbXBhcmUgZm4gY291bGQgYmUgY3VzdG9tIGZuXG4gICAgICAgICAgICAvLyBjYWNoZURhdGEgbWlnaHQgYmUgZGlmZmVyZW50IGZyb20gbmV3RGF0YSBldmVuIHdoZW4gY29tcGFyZSBmbiByZXR1cm5zIFRydWVcbiAgICAgICAgICAgIGZpbmFsU3RhdGUuZGF0YSA9IGNvbXBhcmUoY2FjaGVEYXRhLCBuZXdEYXRhKSA/IGNhY2hlRGF0YSA6IG5ld0RhdGE7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBzdWNjZXNzZnVsIGNhbGxiYWNrIGlmIGl0J3MgdGhlIG9yaWdpbmFsIHJlcXVlc3QuXG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrU2FmZWd1YXJkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q29uZmlnKCkub25TdWNjZXNzKG5ld0RhdGEsIGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2xlYW51cFN0YXRlKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gZ2V0Q29uZmlnKCk7XG4gICAgICAgICAgICBjb25zdCB7IHNob3VsZFJldHJ5T25FcnJvciB9ID0gY3VycmVudENvbmZpZztcbiAgICAgICAgICAgIC8vIE5vdCBwYXVzZWQsIHdlIGNvbnRpbnVlIGhhbmRsaW5nIHRoZSBlcnJvci4gT3RoZXJ3aXNlLCBkaXNjYXJkIGl0LlxuICAgICAgICAgICAgaWYgKCFjdXJyZW50Q29uZmlnLmlzUGF1c2VkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgYSBuZXcgZXJyb3IsIGRvbid0IHVzZSBkZWVwIGNvbXBhcmlzb24gZm9yIGVycm9ycy5cbiAgICAgICAgICAgICAgICBmaW5hbFN0YXRlLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgIC8vIEVycm9yIGV2ZW50IGFuZCByZXRyeSBsb2dpYy4gT25seSBmb3IgdGhlIGFjdHVhbCByZXF1ZXN0LCBub3RcbiAgICAgICAgICAgICAgICAvLyBkZWR1cGVkIG9uZXMuXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCAmJiBjYWxsYmFja1NhZmVndWFyZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb25maWcub25FcnJvcihlcnIsIGtleSwgY3VycmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZXRyeU9uRXJyb3IgPT09IHRydWUgfHwgaXNGdW5jdGlvbiQxKHNob3VsZFJldHJ5T25FcnJvcikgJiYgc2hvdWxkUmV0cnlPbkVycm9yKGVycikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2V0Q29uZmlnKCkucmV2YWxpZGF0ZU9uRm9jdXMgfHwgIWdldENvbmZpZygpLnJldmFsaWRhdGVPblJlY29ubmVjdCB8fCBpc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBpbmFjdGl2ZSwgc3RvcC4gSXQgd2lsbCBhdXRvLXJldmFsaWRhdGUgd2hlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZm9jdXNpbmcgb3IgcmVjb25uZWN0aW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gcmV0cnlpbmcsIGRlZHVwbGljYXRpb24gaXMgYWx3YXlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbmZpZy5vbkVycm9yUmV0cnkoZXJyLCBrZXksIGN1cnJlbnRDb25maWcsIChfb3B0cyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2YWxpZGF0b3JzID0gRVZFTlRfUkVWQUxJREFUT1JTW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXZhbGlkYXRvcnMgJiYgcmV2YWxpZGF0b3JzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZhbGlkYXRvcnNbMF0ocmV2YWxpZGF0ZUV2ZW50cy5FUlJPUl9SRVZBTElEQVRFX0VWRU5ULCBfb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5Q291bnQ6IChvcHRzLnJldHJ5Q291bnQgfHwgMCkgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWR1cGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNYXJrIGxvYWRpbmcgYXMgc3RvcHBlZC5cbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgaG9vaydzIHN0YXRlLlxuICAgICAgICBmaW5pc2hSZXF1ZXN0QW5kVXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgLy8gYHNldFN0YXRlYCBpcyBpbW11dGFibGUsIGFuZCBgZXZlbnRzQ2FsbGJhY2tgLCBgZm5BcmdgLCBhbmRcbiAgICAvLyBga2V5VmFsaWRhdGluZ2AgYXJlIGRlcGVuZGluZyBvbiBga2V5YCwgc28gd2UgY2FuIGV4Y2x1ZGUgdGhlbSBmcm9tXG4gICAgLy8gdGhlIGRlcHMgYXJyYXkuXG4gICAgLy9cbiAgICAvLyBGSVhNRTpcbiAgICAvLyBgZm5gIGFuZCBgY29uZmlnYCBtaWdodCBiZSBjaGFuZ2VkIGR1cmluZyB0aGUgbGlmZWN5Y2xlLFxuICAgIC8vIGJ1dCB0aGV5IG1pZ2h0IGJlIGNoYW5nZWQgZXZlcnkgcmVuZGVyIGxpa2UgdGhpcy5cbiAgICAvLyBgdXNlU1dSKCdrZXknLCAoKSA9PiBmZXRjaCgnL2FwaS8nKSwgeyBzdXNwZW5zZTogdHJ1ZSB9KWBcbiAgICAvLyBTbyB3ZSBvbWl0IHRoZSB2YWx1ZXMgZnJvbSB0aGUgZGVwcyBhcnJheVxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0IG1pZ2h0IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3JzLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbXG4gICAgICAgIGtleSxcbiAgICAgICAgY2FjaGVcbiAgICBdKTtcbiAgICAvLyBTaW1pbGFyIHRvIHRoZSBnbG9iYWwgbXV0YXRlIGJ1dCBib3VuZCB0byB0aGUgY3VycmVudCBjYWNoZSBhbmQga2V5LlxuICAgIC8vIGBjYWNoZWAgaXNuJ3QgYWxsb3dlZCB0byBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZlY3ljbGUuXG4gICAgY29uc3QgYm91bmRNdXRhdGUgPSB1c2VDYWxsYmFjaygvLyBVc2UgY2FsbGJhY2sgdG8gbWFrZSBzdXJlIGBrZXlSZWYuY3VycmVudGAgcmV0dXJucyBsYXRlc3QgcmVzdWx0IGV2ZXJ5IHRpbWVcbiAgICAoLi4uYXJncyk9PntcbiAgICAgICAgcmV0dXJuIGludGVybmFsTXV0YXRlKGNhY2hlLCBrZXlSZWYuY3VycmVudCwgLi4uYXJncyk7XG4gICAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtdKTtcbiAgICAvLyBUaGUgbG9naWMgZm9yIHVwZGF0aW5nIHJlZnMuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKT0+e1xuICAgICAgICBmZXRjaGVyUmVmLmN1cnJlbnQgPSBmZXRjaGVyO1xuICAgICAgICBjb25maWdSZWYuY3VycmVudCA9IGNvbmZpZztcbiAgICAgICAgLy8gSGFuZGxlIGxhZ2d5IGRhdGEgdXBkYXRlcy4gSWYgdGhlcmUncyBjYWNoZWQgZGF0YSBvZiB0aGUgY3VycmVudCBrZXksXG4gICAgICAgIC8vIGl0J2xsIGJlIHRoZSBjb3JyZWN0IHJlZmVyZW5jZS5cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCQxKGNhY2hlZERhdGEpKSB7XG4gICAgICAgICAgICBsYWdneURhdGFSZWYuY3VycmVudCA9IGNhY2hlZERhdGE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBBZnRlciBtb3VudGVkIG9yIGtleSBjaGFuZ2VkLlxuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc29mdFJldmFsaWRhdGUgPSByZXZhbGlkYXRlLmJpbmQoVU5ERUZJTkVEJDEsIFdJVEhfREVEVVBFKTtcbiAgICAgICAgbGV0IG5leHRGb2N1c1JldmFsaWRhdGVkQXQgPSAwO1xuICAgICAgICBpZiAoZ2V0Q29uZmlnKCkucmV2YWxpZGF0ZU9uRm9jdXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGluaXROb3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgbmV4dEZvY3VzUmV2YWxpZGF0ZWRBdCA9IGluaXROb3cgKyBnZXRDb25maWcoKS5mb2N1c1Rocm90dGxlSW50ZXJ2YWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXhwb3NlIHJldmFsaWRhdG9ycyB0byBnbG9iYWwgZXZlbnQgbGlzdGVuZXJzLiBTbyB3ZSBjYW4gdHJpZ2dlclxuICAgICAgICAvLyByZXZhbGlkYXRpb24gZnJvbSB0aGUgb3V0c2lkZS5cbiAgICAgICAgY29uc3Qgb25SZXZhbGlkYXRlID0gKHR5cGUsIG9wdHMgPSB7fSk9PntcbiAgICAgICAgICAgIGlmICh0eXBlID09IHJldmFsaWRhdGVFdmVudHMuRk9DVVNfRVZFTlQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRDb25maWcoKS5yZXZhbGlkYXRlT25Gb2N1cyAmJiBub3cgPiBuZXh0Rm9jdXNSZXZhbGlkYXRlZEF0ICYmIGlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEZvY3VzUmV2YWxpZGF0ZWRBdCA9IG5vdyArIGdldENvbmZpZygpLmZvY3VzVGhyb3R0bGVJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgc29mdFJldmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gcmV2YWxpZGF0ZUV2ZW50cy5SRUNPTk5FQ1RfRVZFTlQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q29uZmlnKCkucmV2YWxpZGF0ZU9uUmVjb25uZWN0ICYmIGlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc29mdFJldmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gcmV2YWxpZGF0ZUV2ZW50cy5NVVRBVEVfRVZFTlQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IHJldmFsaWRhdGVFdmVudHMuRVJST1JfUkVWQUxJREFURV9FVkVOVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXZhbGlkYXRlKG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1bnN1YkV2ZW50cyA9IHN1YnNjcmliZUNhbGxiYWNrKGtleSwgRVZFTlRfUkVWQUxJREFUT1JTLCBvblJldmFsaWRhdGUpO1xuICAgICAgICAvLyBNYXJrIHRoZSBjb21wb25lbnQgYXMgbW91bnRlZCBhbmQgdXBkYXRlIGNvcnJlc3BvbmRpbmcgcmVmcy5cbiAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAga2V5UmVmLmN1cnJlbnQgPSBrZXk7XG4gICAgICAgIGluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAvLyBLZWVwIHRoZSBvcmlnaW5hbCBrZXkgaW4gdGhlIGNhY2hlLlxuICAgICAgICBzZXRDYWNoZSh7XG4gICAgICAgICAgICBfazogZm5BcmdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRyaWdnZXIgYSByZXZhbGlkYXRpb25cbiAgICAgICAgaWYgKHNob3VsZERvSW5pdGlhbFJldmFsaWRhdGlvbikge1xuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkJDEoZGF0YSkgfHwgSVNfU0VSVkVSKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV2YWxpZGF0ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEZWxheSB0aGUgcmV2YWxpZGF0ZSBpZiB3ZSBoYXZlIGRhdGEgdG8gcmV0dXJuIHNvIHdlIHdvbid0IGJsb2NrXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyaW5nLlxuICAgICAgICAgICAgICAgIHJBRihzb2Z0UmV2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgICAgICAvLyBNYXJrIGl0IGFzIHVubW91bnRlZC5cbiAgICAgICAgICAgIHVubW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHVuc3ViRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICBrZXlcbiAgICBdKTtcbiAgICAvLyBQb2xsaW5nXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKT0+e1xuICAgICAgICBsZXQgdGltZXI7XG4gICAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHBhc3NlZCBpbnRlcnZhbFxuICAgICAgICAgICAgLy8gLi4ub3IgaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSB1cGRhdGVkIGRhdGEgdG8gZ2V0IHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBpc0Z1bmN0aW9uJDEocmVmcmVzaEludGVydmFsKSA/IHJlZnJlc2hJbnRlcnZhbChnZXRDYWNoZSgpLmRhdGEpIDogcmVmcmVzaEludGVydmFsO1xuICAgICAgICAgICAgLy8gV2Ugb25seSBzdGFydCB0aGUgbmV4dCBpbnRlcnZhbCBpZiBgcmVmcmVzaEludGVydmFsYCBpcyBub3QgMCwgYW5kOlxuICAgICAgICAgICAgLy8gLSBgZm9yY2VgIGlzIHRydWUsIHdoaWNoIGlzIHRoZSBzdGFydCBvZiBwb2xsaW5nXG4gICAgICAgICAgICAvLyAtIG9yIGB0aW1lcmAgaXMgbm90IDAsIHdoaWNoIG1lYW5zIHRoZSBlZmZlY3Qgd2Fzbid0IGNhbmNlbGVkXG4gICAgICAgICAgICBpZiAoaW50ZXJ2YWwgJiYgdGltZXIgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGV4ZWN1dGUsIGludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBPSyB0byBleGVjdXRlOlxuICAgICAgICAgICAgLy8gT25seSByZXZhbGlkYXRlIHdoZW4gdGhlIHBhZ2UgaXMgdmlzaWJsZSwgb25saW5lLCBhbmQgbm90IGVycm9yZWQuXG4gICAgICAgICAgICBpZiAoIWdldENhY2hlKCkuZXJyb3IgJiYgKHJlZnJlc2hXaGVuSGlkZGVuIHx8IGdldENvbmZpZygpLmlzVmlzaWJsZSgpKSAmJiAocmVmcmVzaFdoZW5PZmZsaW5lIHx8IGdldENvbmZpZygpLmlzT25saW5lKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZShXSVRIX0RFRFVQRSkudGhlbihuZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2NoZWR1bGUgdGhlIG5leHQgaW50ZXJ2YWwgdG8gY2hlY2sgYWdhaW4uXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5leHQoKTtcbiAgICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgIHRpbWVyID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByZWZyZXNoSW50ZXJ2YWwsXG4gICAgICAgIHJlZnJlc2hXaGVuSGlkZGVuLFxuICAgICAgICByZWZyZXNoV2hlbk9mZmxpbmUsXG4gICAgICAgIGtleVxuICAgIF0pO1xuICAgIC8vIERpc3BsYXkgZGVidWcgaW5mbyBpbiBSZWFjdCBEZXZUb29scy5cbiAgICB1c2VEZWJ1Z1ZhbHVlKHJldHVybmVkRGF0YSk7XG4gICAgLy8gSW4gU3VzcGVuc2UgbW9kZSwgd2UgY2FuJ3QgcmV0dXJuIHRoZSBlbXB0eSBgZGF0YWAgc3RhdGUuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gYGVycm9yYCwgdGhlIGBlcnJvcmAgbmVlZHMgdG8gYmUgdGhyb3duIHRvIHRoZSBlcnJvciBib3VuZGFyeS5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBgZXJyb3JgLCB0aGUgYHJldmFsaWRhdGlvbmAgcHJvbWlzZSBuZWVkcyB0byBiZSB0aHJvd24gdG9cbiAgICAvLyB0aGUgc3VzcGVuc2UgYm91bmRhcnkuXG4gICAgaWYgKHN1c3BlbnNlICYmIGlzVW5kZWZpbmVkJDEoZGF0YSkgJiYga2V5KSB7XG4gICAgICAgIC8vIFNXUiBzaG91bGQgdGhyb3cgd2hlbiB0cnlpbmcgdG8gdXNlIFN1c3BlbnNlIG9uIHRoZSBzZXJ2ZXIgd2l0aCBSZWFjdCAxOCxcbiAgICAgICAgLy8gd2l0aG91dCBwcm92aWRpbmcgYW55IGZhbGxiYWNrIGRhdGEuIFRoaXMgY2F1c2VzIGh5ZHJhdGlvbiBlcnJvcnMuIFNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvaXNzdWVzLzE4MzJcbiAgICAgICAgaWYgKCFJU19SRUFDVF9MRUdBQ1kgJiYgSVNfU0VSVkVSKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhbGxiYWNrIGRhdGEgaXMgcmVxdWlyZWQgd2hlbiB1c2luZyBTdXNwZW5zZSBpbiBTU1IuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWx3YXlzIHVwZGF0ZSBmZXRjaGVyIGFuZCBjb25maWcgcmVmcyBldmVuIHdpdGggdGhlIFN1c3BlbnNlIG1vZGUuXG4gICAgICAgIGZldGNoZXJSZWYuY3VycmVudCA9IGZldGNoZXI7XG4gICAgICAgIGNvbmZpZ1JlZi5jdXJyZW50ID0gY29uZmlnO1xuICAgICAgICB1bm1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBjb25zdCByZXEgPSBQUkVMT0FEW2tleV07XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQkMShyZXEpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gYm91bmRNdXRhdGUocmVxKTtcbiAgICAgICAgICAgIHVzZShwcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNVbmRlZmluZWQkMShlcnJvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSByZXZhbGlkYXRlKFdJVEhfREVEVVBFKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQkMShyZXR1cm5lZERhdGEpKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5zdGF0dXMgPSAnZnVsZmlsbGVkJztcbiAgICAgICAgICAgICAgICBwcm9taXNlLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZShwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHN3clJlc3BvbnNlID0ge1xuICAgICAgICBtdXRhdGU6IGJvdW5kTXV0YXRlLFxuICAgICAgICBnZXQgZGF0YSAoKSB7XG4gICAgICAgICAgICBzdGF0ZURlcGVuZGVuY2llcy5kYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5lZERhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBlcnJvciAoKSB7XG4gICAgICAgICAgICBzdGF0ZURlcGVuZGVuY2llcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBpc1ZhbGlkYXRpbmcgKCkge1xuICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuaXNWYWxpZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkYXRpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBpc0xvYWRpbmcgKCkge1xuICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBzd3JSZXNwb25zZTtcbn07XG5jb25zdCBTV1JDb25maWcgPSBPQkpFQ1QkMS5kZWZpbmVQcm9wZXJ0eShTV1JDb25maWckMSwgJ2RlZmF1bHRWYWx1ZScsIHtcbiAgICB2YWx1ZTogZGVmYXVsdENvbmZpZ1xufSk7XG4vKipcbiAqIEEgaG9vayB0byBmZXRjaCBkYXRhLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vc3dyLnZlcmNlbC5hcHBcbiAqIEBleGFtcGxlXG4gKiBgYGBqc3hcbiAqIGltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuICogZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAqICAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoJy9hcGkvdXNlcicsIGZldGNoZXIpXG4gKiAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAqICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICogICByZXR1cm4gPGRpdj5oZWxsbyB7ZGF0YS5uYW1lfSE8L2Rpdj5cbiAqIH1cbiAqIGBgYFxuICovIGNvbnN0IHVzZVNXUiA9IHdpdGhBcmdzKHVzZVNXUkhhbmRsZXIpO1xuXG4vLyB1c2VTV1JcblxuZXhwb3J0IHsgU1dSQ29uZmlnLCB1c2VTV1IgYXMgZGVmYXVsdCwgdW5zdGFibGVfc2VyaWFsaXplIH07XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBNZXRhIFBsYXRmb3JtcywgSW5jLiBhbmQgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJlxuICAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAgIHJldHVybiAoeCA9PT0geSAmJiAoMCAhPT0geCB8fCAxIC8geCA9PT0gMSAvIHkpKSB8fCAoeCAhPT0geCAmJiB5ICE9PSB5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMihzdWJzY3JpYmUsIGdldFNuYXBzaG90KSB7XG4gICAgICBkaWRXYXJuT2xkMThBbHBoYSB8fFxuICAgICAgICB2b2lkIDAgPT09IFJlYWN0LnN0YXJ0VHJhbnNpdGlvbiB8fFxuICAgICAgICAoKGRpZFdhcm5PbGQxOEFscGhhID0gITApLFxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiWW91IGFyZSB1c2luZyBhbiBvdXRkYXRlZCwgcHJlLXJlbGVhc2UgYWxwaGEgb2YgUmVhY3QgMTggdGhhdCBkb2VzIG5vdCBzdXBwb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlLiBUaGUgdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUgc2hpbSB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseS4gVXBncmFkZSB0byBhIG5ld2VyIHByZS1yZWxlYXNlLlwiXG4gICAgICAgICkpO1xuICAgICAgdmFyIHZhbHVlID0gZ2V0U25hcHNob3QoKTtcbiAgICAgIGlmICghZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QpIHtcbiAgICAgICAgdmFyIGNhY2hlZFZhbHVlID0gZ2V0U25hcHNob3QoKTtcbiAgICAgICAgb2JqZWN0SXModmFsdWUsIGNhY2hlZFZhbHVlKSB8fFxuICAgICAgICAgIChjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICAoZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSAhMCkpO1xuICAgICAgfVxuICAgICAgY2FjaGVkVmFsdWUgPSB1c2VTdGF0ZSh7XG4gICAgICAgIGluc3Q6IHsgdmFsdWU6IHZhbHVlLCBnZXRTbmFwc2hvdDogZ2V0U25hcHNob3QgfVxuICAgICAgfSk7XG4gICAgICB2YXIgaW5zdCA9IGNhY2hlZFZhbHVlWzBdLmluc3QsXG4gICAgICAgIGZvcmNlVXBkYXRlID0gY2FjaGVkVmFsdWVbMV07XG4gICAgICB1c2VMYXlvdXRFZmZlY3QoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgaW5zdC5nZXRTbmFwc2hvdCA9IGdldFNuYXBzaG90O1xuICAgICAgICAgIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkgJiYgZm9yY2VVcGRhdGUoeyBpbnN0OiBpbnN0IH0pO1xuICAgICAgICB9LFxuICAgICAgICBbc3Vic2NyaWJlLCB2YWx1ZSwgZ2V0U25hcHNob3RdXG4gICAgICApO1xuICAgICAgdXNlRWZmZWN0KFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSAmJiBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpICYmIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgW3N1YnNjcmliZV1cbiAgICAgICk7XG4gICAgICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSB7XG4gICAgICB2YXIgbGF0ZXN0R2V0U25hcHNob3QgPSBpbnN0LmdldFNuYXBzaG90O1xuICAgICAgaW5zdCA9IGluc3QudmFsdWU7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gbGF0ZXN0R2V0U25hcHNob3QoKTtcbiAgICAgICAgcmV0dXJuICFvYmplY3RJcyhpbnN0LCBuZXh0VmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICEwO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxKHN1YnNjcmliZSwgZ2V0U25hcHNob3QpIHtcbiAgICAgIHJldHVybiBnZXRTbmFwc2hvdCgpO1xuICAgIH1cbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICYmXG4gICAgICBcImZ1bmN0aW9uXCIgPT09XG4gICAgICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KEVycm9yKCkpO1xuICAgIHZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKSxcbiAgICAgIG9iamVjdElzID0gXCJmdW5jdGlvblwiID09PSB0eXBlb2YgT2JqZWN0LmlzID8gT2JqZWN0LmlzIDogaXMsXG4gICAgICB1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlLFxuICAgICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgICAgdXNlTGF5b3V0RWZmZWN0ID0gUmVhY3QudXNlTGF5b3V0RWZmZWN0LFxuICAgICAgdXNlRGVidWdWYWx1ZSA9IFJlYWN0LnVzZURlYnVnVmFsdWUsXG4gICAgICBkaWRXYXJuT2xkMThBbHBoYSA9ICExLFxuICAgICAgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSAhMSxcbiAgICAgIHNoaW0gPVxuICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygd2luZG93IHx8XG4gICAgICAgIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgfHxcbiAgICAgICAgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4gICAgICAgICAgPyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxXG4gICAgICAgICAgOiB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyO1xuICAgIGV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPVxuICAgICAgdm9pZCAwICE9PSBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZSA/IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlIDogc2hpbTtcbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICYmXG4gICAgICBcImZ1bmN0aW9uXCIgPT09XG4gICAgICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgJiZcbiAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChFcnJvcigpKTtcbiAgfSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYsIHVzZVN5bmNFeHRlcm5hbFN0b3JlLCB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QsIHVzZURlYnVnVmFsdWUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0NoYW5nZWQsIGNyZWF0ZVByb3h5LCBhZmZlY3RlZFRvUGF0aExpc3QgfSBmcm9tICdwcm94eS1jb21wYXJlJztcbmltcG9ydCB7IHN1YnNjcmliZSwgc25hcHNob3QgfSBmcm9tICd2YWx0aW8vdmFuaWxsYSc7XG5cbmNvbnN0IHVzZUFmZmVjdGVkRGVidWdWYWx1ZSA9IChzdGF0ZSwgYWZmZWN0ZWQpID0+IHtcbiAgY29uc3QgcGF0aExpc3QgPSB1c2VSZWYodm9pZCAwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwYXRoTGlzdC5jdXJyZW50ID0gYWZmZWN0ZWRUb1BhdGhMaXN0KHN0YXRlLCBhZmZlY3RlZCwgdHJ1ZSk7XG4gIH0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHBhdGhMaXN0LmN1cnJlbnQpO1xufTtcbmNvbnN0IGNvbmRVc2VBZmZlY3RlZERlYnVnVmFsdWUgPSB1c2VBZmZlY3RlZERlYnVnVmFsdWU7XG5jb25zdCB0YXJnZXRDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gdXNlU25hcHNob3QocHJveHlPYmplY3QsIG9wdGlvbnMpIHtcbiAgY29uc3Qgbm90aWZ5SW5TeW5jID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zeW5jO1xuICBjb25zdCBhZmZlY3RlZCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gcHJveHlPYmplY3QgJiYgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksXG4gICAgW3Byb3h5T2JqZWN0XVxuICApO1xuICBjb25zdCBsYXN0U25hcHNob3QgPSB1c2VSZWYodm9pZCAwKTtcbiAgbGV0IGluUmVuZGVyID0gdHJ1ZTtcbiAgY29uc3QgY3VyclNuYXBzaG90ID0gdXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgdXNlQ2FsbGJhY2soXG4gICAgICAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWIgPSBzdWJzY3JpYmUocHJveHlPYmplY3QsIGNhbGxiYWNrLCBub3RpZnlJblN5bmMpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gdW5zdWI7XG4gICAgICB9LFxuICAgICAgW3Byb3h5T2JqZWN0LCBub3RpZnlJblN5bmNdXG4gICAgKSxcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0U25hcHNob3QgPSBzbmFwc2hvdChwcm94eU9iamVjdCk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWluUmVuZGVyICYmIGxhc3RTbmFwc2hvdC5jdXJyZW50ICYmICFpc0NoYW5nZWQoXG4gICAgICAgICAgbGFzdFNuYXBzaG90LmN1cnJlbnQsXG4gICAgICAgICAgbmV4dFNuYXBzaG90LFxuICAgICAgICAgIGFmZmVjdGVkLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpXG4gICAgICAgICkpIHtcbiAgICAgICAgICByZXR1cm4gbGFzdFNuYXBzaG90LmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0U25hcHNob3Q7XG4gICAgfSxcbiAgICAoKSA9PiBzbmFwc2hvdChwcm94eU9iamVjdClcbiAgKTtcbiAgaW5SZW5kZXIgPSBmYWxzZTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBsYXN0U25hcHNob3QuY3VycmVudCA9IGN1cnJTbmFwc2hvdDtcbiAgfSk7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbmRVc2VBZmZlY3RlZERlYnVnVmFsdWUoY3VyclNuYXBzaG90LCBhZmZlY3RlZCk7XG4gIH1cbiAgY29uc3QgcHJveHlDYWNoZSA9IHVzZU1lbW8oKCkgPT4gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksIFtdKTtcbiAgcmV0dXJuIGNyZWF0ZVByb3h5KGN1cnJTbmFwc2hvdCwgYWZmZWN0ZWQsIHByb3h5Q2FjaGUsIHRhcmdldENhY2hlKTtcbn1cblxuZXhwb3J0IHsgdXNlU25hcHNob3QgfTtcbiIsImltcG9ydCB7IG1hcmtUb1RyYWNrLCBnZXRVbnRyYWNrZWQgfSBmcm9tICdwcm94eS1jb21wYXJlJztcblxuY29uc3QgaXNPYmplY3QgPSAoeCkgPT4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgeCAhPT0gbnVsbDtcbmNvbnN0IGNhblByb3h5RGVmYXVsdCA9ICh4KSA9PiBpc09iamVjdCh4KSAmJiAhcmVmU2V0Lmhhcyh4KSAmJiAoQXJyYXkuaXNBcnJheSh4KSB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiB4KSkgJiYgISh4IGluc3RhbmNlb2YgV2Vha01hcCkgJiYgISh4IGluc3RhbmNlb2YgV2Vha1NldCkgJiYgISh4IGluc3RhbmNlb2YgRXJyb3IpICYmICEoeCBpbnN0YW5jZW9mIE51bWJlcikgJiYgISh4IGluc3RhbmNlb2YgRGF0ZSkgJiYgISh4IGluc3RhbmNlb2YgU3RyaW5nKSAmJiAhKHggaW5zdGFuY2VvZiBSZWdFeHApICYmICEoeCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSAmJiAhKHggaW5zdGFuY2VvZiBQcm9taXNlKTtcbmNvbnN0IGNyZWF0ZVNuYXBzaG90RGVmYXVsdCA9ICh0YXJnZXQsIHZlcnNpb24pID0+IHtcbiAgY29uc3QgY2FjaGUgPSBzbmFwQ2FjaGUuZ2V0KHRhcmdldCk7XG4gIGlmICgoY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlWzBdKSA9PT0gdmVyc2lvbikge1xuICAgIHJldHVybiBjYWNoZVsxXTtcbiAgfVxuICBjb25zdCBzbmFwID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKTtcbiAgbWFya1RvVHJhY2soc25hcCwgdHJ1ZSk7XG4gIHNuYXBDYWNoZS5zZXQodGFyZ2V0LCBbdmVyc2lvbiwgc25hcF0pO1xuICBSZWZsZWN0Lm93bktleXModGFyZ2V0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzbmFwLCBrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHsgZW51bWVyYWJsZSB9ID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICB0YXJnZXQsXG4gICAgICBrZXlcbiAgICApO1xuICAgIGNvbnN0IGRlc2MgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGUsXG4gICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsIHRvIGF2b2lkIGNvcHlpbmcgd2l0aCBwcm94eS1jb21wYXJlLlxuICAgICAgLy8gSXQncyBzdGlsbCBub24td3JpdGFibGUsIHNvIGl0IGF2b2lkcyBhc3NpZ25pbmcgYSB2YWx1ZS5cbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHJlZlNldC5oYXModmFsdWUpKSB7XG4gICAgICBtYXJrVG9UcmFjayh2YWx1ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAocHJveHlTdGF0ZU1hcC5oYXModmFsdWUpKSB7XG4gICAgICBjb25zdCBbdGFyZ2V0MiwgZW5zdXJlVmVyc2lvbl0gPSBwcm94eVN0YXRlTWFwLmdldChcbiAgICAgICAgdmFsdWVcbiAgICAgICk7XG4gICAgICBkZXNjLnZhbHVlID0gY3JlYXRlU25hcHNob3REZWZhdWx0KHRhcmdldDIsIGVuc3VyZVZlcnNpb24oKSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzbmFwLCBrZXksIGRlc2MpO1xuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhzbmFwKTtcbn07XG5jb25zdCBjcmVhdGVIYW5kbGVyRGVmYXVsdCA9IChpc0luaXRpYWxpemluZywgYWRkUHJvcExpc3RlbmVyLCByZW1vdmVQcm9wTGlzdGVuZXIsIG5vdGlmeVVwZGF0ZSkgPT4gKHtcbiAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wKSB7XG4gICAgY29uc3QgcHJldlZhbHVlID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wKTtcbiAgICByZW1vdmVQcm9wTGlzdGVuZXIocHJvcCk7XG4gICAgY29uc3QgZGVsZXRlZCA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgbm90aWZ5VXBkYXRlKFtcImRlbGV0ZVwiLCBbcHJvcF0sIHByZXZWYWx1ZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfSxcbiAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgY29uc3QgaGFzUHJldlZhbHVlID0gIWlzSW5pdGlhbGl6aW5nKCkgJiYgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcbiAgICBjb25zdCBwcmV2VmFsdWUgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICBpZiAoaGFzUHJldlZhbHVlICYmIChvYmplY3RJcyhwcmV2VmFsdWUsIHZhbHVlKSB8fCBwcm94eUNhY2hlLmhhcyh2YWx1ZSkgJiYgb2JqZWN0SXMocHJldlZhbHVlLCBwcm94eUNhY2hlLmdldCh2YWx1ZSkpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlbW92ZVByb3BMaXN0ZW5lcihwcm9wKTtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IGdldFVudHJhY2tlZCh2YWx1ZSkgfHwgdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IG5leHRWYWx1ZSA9ICFwcm94eVN0YXRlTWFwLmhhcyh2YWx1ZSkgJiYgY2FuUHJveHkodmFsdWUpID8gcHJveHkodmFsdWUpIDogdmFsdWU7XG4gICAgYWRkUHJvcExpc3RlbmVyKHByb3AsIG5leHRWYWx1ZSk7XG4gICAgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wLCBuZXh0VmFsdWUsIHJlY2VpdmVyKTtcbiAgICBub3RpZnlVcGRhdGUoW1wic2V0XCIsIFtwcm9wXSwgdmFsdWUsIHByZXZWYWx1ZV0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcbmNvbnN0IHByb3h5U3RhdGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZlNldCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuY29uc3Qgc25hcENhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCB2ZXJzaW9uSG9sZGVyID0gWzEsIDFdO1xuY29uc3QgcHJveHlDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xubGV0IG9iamVjdElzID0gT2JqZWN0LmlzO1xubGV0IG5ld1Byb3h5ID0gKHRhcmdldCwgaGFuZGxlcikgPT4gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlcik7XG5sZXQgY2FuUHJveHkgPSBjYW5Qcm94eURlZmF1bHQ7XG5sZXQgY3JlYXRlU25hcHNob3QgPSBjcmVhdGVTbmFwc2hvdERlZmF1bHQ7XG5sZXQgY3JlYXRlSGFuZGxlciA9IGNyZWF0ZUhhbmRsZXJEZWZhdWx0O1xuZnVuY3Rpb24gcHJveHkoYmFzZU9iamVjdCA9IHt9KSB7XG4gIGlmICghaXNPYmplY3QoYmFzZU9iamVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJvYmplY3QgcmVxdWlyZWRcIik7XG4gIH1cbiAgY29uc3QgZm91bmQgPSBwcm94eUNhY2hlLmdldChiYXNlT2JqZWN0KTtcbiAgaWYgKGZvdW5kKSB7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIGxldCB2ZXJzaW9uID0gdmVyc2lvbkhvbGRlclswXTtcbiAgY29uc3QgbGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3Qgbm90aWZ5VXBkYXRlID0gKG9wLCBuZXh0VmVyc2lvbiA9ICsrdmVyc2lvbkhvbGRlclswXSkgPT4ge1xuICAgIGlmICh2ZXJzaW9uICE9PSBuZXh0VmVyc2lvbikge1xuICAgICAgdmVyc2lvbiA9IG5leHRWZXJzaW9uO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihvcCwgbmV4dFZlcnNpb24pKTtcbiAgICB9XG4gIH07XG4gIGxldCBjaGVja1ZlcnNpb24gPSB2ZXJzaW9uSG9sZGVyWzFdO1xuICBjb25zdCBlbnN1cmVWZXJzaW9uID0gKG5leHRDaGVja1ZlcnNpb24gPSArK3ZlcnNpb25Ib2xkZXJbMV0pID0+IHtcbiAgICBpZiAoY2hlY2tWZXJzaW9uICE9PSBuZXh0Q2hlY2tWZXJzaW9uICYmICFsaXN0ZW5lcnMuc2l6ZSkge1xuICAgICAgY2hlY2tWZXJzaW9uID0gbmV4dENoZWNrVmVyc2lvbjtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGVdKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BWZXJzaW9uID0gcHJvcFByb3h5U3RhdGVbMV0obmV4dENoZWNrVmVyc2lvbik7XG4gICAgICAgIGlmIChwcm9wVmVyc2lvbiA+IHZlcnNpb24pIHtcbiAgICAgICAgICB2ZXJzaW9uID0gcHJvcFZlcnNpb247XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfTtcbiAgY29uc3QgY3JlYXRlUHJvcExpc3RlbmVyID0gKHByb3ApID0+IChvcCwgbmV4dFZlcnNpb24pID0+IHtcbiAgICBjb25zdCBuZXdPcCA9IFsuLi5vcF07XG4gICAgbmV3T3BbMV0gPSBbcHJvcCwgLi4ubmV3T3BbMV1dO1xuICAgIG5vdGlmeVVwZGF0ZShuZXdPcCwgbmV4dFZlcnNpb24pO1xuICB9O1xuICBjb25zdCBwcm9wUHJveHlTdGF0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBjb25zdCBhZGRQcm9wTGlzdGVuZXIgPSAocHJvcCwgcHJvcFZhbHVlKSA9PiB7XG4gICAgY29uc3QgcHJvcFByb3h5U3RhdGUgPSAhcmVmU2V0Lmhhcyhwcm9wVmFsdWUpICYmIHByb3h5U3RhdGVNYXAuZ2V0KHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BQcm94eVN0YXRlKSB7XG4gICAgICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvcFByb3h5U3RhdGVzLmhhcyhwcm9wKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcm9wIGxpc3RlbmVyIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGxpc3RlbmVycy5zaXplKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IHByb3BQcm94eVN0YXRlWzJdKGNyZWF0ZVByb3BMaXN0ZW5lcihwcm9wKSk7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVQcm9wTGlzdGVuZXIgPSAocHJvcCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBlbnRyeSA9IHByb3BQcm94eVN0YXRlcy5nZXQocHJvcCk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuZGVsZXRlKHByb3ApO1xuICAgICAgKF9hID0gZW50cnlbMV0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKGVudHJ5KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZExpc3RlbmVyID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgaWYgKGxpc3RlbmVycy5zaXplID09PSAxKSB7XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuZm9yRWFjaCgoW3Byb3BQcm94eVN0YXRlLCBwcmV2UmVtb3ZlXSwgcHJvcCkgPT4ge1xuICAgICAgICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJldlJlbW92ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlbW92ZSBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1vdmUgPSBwcm9wUHJveHlTdGF0ZVsyXShjcmVhdGVQcm9wTGlzdGVuZXIocHJvcCkpO1xuICAgICAgICBwcm9wUHJveHlTdGF0ZXMuc2V0KHByb3AsIFtwcm9wUHJveHlTdGF0ZSwgcmVtb3ZlXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBwcm9wUHJveHlTdGF0ZXMuZm9yRWFjaCgoW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICBwcm9wUHJveHlTdGF0ZXMuc2V0KHByb3AsIFtwcm9wUHJveHlTdGF0ZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gcmVtb3ZlTGlzdGVuZXI7XG4gIH07XG4gIGxldCBpbml0aWFsaXppbmcgPSB0cnVlO1xuICBjb25zdCBoYW5kbGVyID0gY3JlYXRlSGFuZGxlcihcbiAgICAoKSA9PiBpbml0aWFsaXppbmcsXG4gICAgYWRkUHJvcExpc3RlbmVyLFxuICAgIHJlbW92ZVByb3BMaXN0ZW5lcixcbiAgICBub3RpZnlVcGRhdGVcbiAgKTtcbiAgY29uc3QgcHJveHlPYmplY3QgPSBuZXdQcm94eShiYXNlT2JqZWN0LCBoYW5kbGVyKTtcbiAgcHJveHlDYWNoZS5zZXQoYmFzZU9iamVjdCwgcHJveHlPYmplY3QpO1xuICBjb25zdCBwcm94eVN0YXRlID0gW2Jhc2VPYmplY3QsIGVuc3VyZVZlcnNpb24sIGFkZExpc3RlbmVyXTtcbiAgcHJveHlTdGF0ZU1hcC5zZXQocHJveHlPYmplY3QsIHByb3h5U3RhdGUpO1xuICBSZWZsZWN0Lm93bktleXMoYmFzZU9iamVjdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICBiYXNlT2JqZWN0LFxuICAgICAga2V5XG4gICAgKTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MgJiYgZGVzYy53cml0YWJsZSkge1xuICAgICAgcHJveHlPYmplY3Rba2V5XSA9IGJhc2VPYmplY3Rba2V5XTtcbiAgICB9XG4gIH0pO1xuICBpbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgcmV0dXJuIHByb3h5T2JqZWN0O1xufVxuZnVuY3Rpb24gZ2V0VmVyc2lvbihwcm94eU9iamVjdCkge1xuICBjb25zdCBwcm94eVN0YXRlID0gcHJveHlTdGF0ZU1hcC5nZXQocHJveHlPYmplY3QpO1xuICByZXR1cm4gcHJveHlTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogcHJveHlTdGF0ZVsxXSgpO1xufVxuZnVuY3Rpb24gc3Vic2NyaWJlKHByb3h5T2JqZWN0LCBjYWxsYmFjaywgbm90aWZ5SW5TeW5jKSB7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBwcm94eVN0YXRlTWFwLmdldChwcm94eU9iamVjdCk7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhcHJveHlTdGF0ZSkge1xuICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSB1c2UgcHJveHkgb2JqZWN0XCIpO1xuICB9XG4gIGxldCBwcm9taXNlO1xuICBjb25zdCBvcHMgPSBbXTtcbiAgY29uc3QgYWRkTGlzdGVuZXIgPSBwcm94eVN0YXRlWzJdO1xuICBsZXQgaXNMaXN0ZW5lckFjdGl2ZSA9IGZhbHNlO1xuICBjb25zdCBsaXN0ZW5lciA9IChvcCkgPT4ge1xuICAgIG9wcy5wdXNoKG9wKTtcbiAgICBpZiAobm90aWZ5SW5TeW5jKSB7XG4gICAgICBjYWxsYmFjayhvcHMuc3BsaWNlKDApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHByb21pc2UgPSB2b2lkIDA7XG4gICAgICAgIGlmIChpc0xpc3RlbmVyQWN0aXZlKSB7XG4gICAgICAgICAgY2FsbGJhY2sob3BzLnNwbGljZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlTGlzdGVuZXIgPSBhZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIGlzTGlzdGVuZXJBY3RpdmUgPSB0cnVlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlzTGlzdGVuZXJBY3RpdmUgPSBmYWxzZTtcbiAgICByZW1vdmVMaXN0ZW5lcigpO1xuICB9O1xufVxuZnVuY3Rpb24gc25hcHNob3QocHJveHlPYmplY3QpIHtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IHByb3h5U3RhdGVNYXAuZ2V0KHByb3h5T2JqZWN0KTtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmICFwcm94eVN0YXRlKSB7XG4gICAgY29uc29sZS53YXJuKFwiUGxlYXNlIHVzZSBwcm94eSBvYmplY3RcIik7XG4gIH1cbiAgY29uc3QgW3RhcmdldCwgZW5zdXJlVmVyc2lvbl0gPSBwcm94eVN0YXRlO1xuICByZXR1cm4gY3JlYXRlU25hcHNob3QodGFyZ2V0LCBlbnN1cmVWZXJzaW9uKCkpO1xufVxuZnVuY3Rpb24gcmVmKG9iaikge1xuICByZWZTZXQuYWRkKG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiB1bnN0YWJsZV9nZXRJbnRlcm5hbFN0YXRlcygpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm94eVN0YXRlTWFwLFxuICAgIHJlZlNldCxcbiAgICBzbmFwQ2FjaGUsXG4gICAgdmVyc2lvbkhvbGRlcixcbiAgICBwcm94eUNhY2hlXG4gIH07XG59XG5mdW5jdGlvbiB1bnN0YWJsZV9yZXBsYWNlSW50ZXJuYWxGdW5jdGlvbihuYW1lLCBmbikge1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlIFwib2JqZWN0SXNcIjpcbiAgICAgIG9iamVjdElzID0gZm4ob2JqZWN0SXMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm5ld1Byb3h5XCI6XG4gICAgICBuZXdQcm94eSA9IGZuKG5ld1Byb3h5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjYW5Qcm94eVwiOlxuICAgICAgY2FuUHJveHkgPSBmbihjYW5Qcm94eSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY3JlYXRlU25hcHNob3RcIjpcbiAgICAgIGNyZWF0ZVNuYXBzaG90ID0gZm4oY3JlYXRlU25hcHNob3QpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNyZWF0ZUhhbmRsZXJcIjpcbiAgICAgIGNyZWF0ZUhhbmRsZXIgPSBmbihjcmVhdGVIYW5kbGVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFZlcnNpb24sIHByb3h5LCByZWYsIHNuYXBzaG90LCBzdWJzY3JpYmUsIHVuc3RhYmxlX2dldEludGVybmFsU3RhdGVzLCB1bnN0YWJsZV9yZXBsYWNlSW50ZXJuYWxGdW5jdGlvbiB9O1xuIiwiaW1wb3J0IHsgc3Vic2NyaWJlLCBzbmFwc2hvdCwgdW5zdGFibGVfZ2V0SW50ZXJuYWxTdGF0ZXMsIHByb3h5IH0gZnJvbSAndmFsdGlvL3ZhbmlsbGEnO1xuXG5mdW5jdGlvbiBzdWJzY3JpYmVLZXkocHJveHlPYmplY3QsIGtleSwgY2FsbGJhY2ssIG5vdGlmeUluU3luYykge1xuICBsZXQgcHJldlZhbHVlID0gcHJveHlPYmplY3Rba2V5XTtcbiAgcmV0dXJuIHN1YnNjcmliZShcbiAgICBwcm94eU9iamVjdCxcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSBwcm94eU9iamVjdFtrZXldO1xuICAgICAgaWYgKCFPYmplY3QuaXMocHJldlZhbHVlLCBuZXh0VmFsdWUpKSB7XG4gICAgICAgIGNhbGxiYWNrKHByZXZWYWx1ZSA9IG5leHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBub3RpZnlJblN5bmNcbiAgKTtcbn1cblxubGV0IGN1cnJlbnRDbGVhbnVwcztcbmZ1bmN0aW9uIHdhdGNoKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGxldCBhbGl2ZSA9IHRydWU7XG4gIGNvbnN0IGNsZWFudXBzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgaWYgKGFsaXZlKSB7XG4gICAgICBhbGl2ZSA9IGZhbHNlO1xuICAgICAgY2xlYW51cHMuZm9yRWFjaCgoY2xlYW4pID0+IGNsZWFuKCkpO1xuICAgICAgY2xlYW51cHMuY2xlYXIoKTtcbiAgICAgIHN1YnNjcmlwdGlvbnMuZm9yRWFjaCgodW5zdWJzY3JpYmUpID0+IHVuc3Vic2NyaWJlKCkpO1xuICAgICAgc3Vic2NyaXB0aW9ucy5jbGVhcigpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmV2YWxpZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWFsaXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFudXBzLmZvckVhY2goKGNsZWFuKSA9PiBjbGVhbigpKTtcbiAgICBjbGVhbnVwcy5jbGVhcigpO1xuICAgIGNvbnN0IHByb3hpZXNUb1N1YnNjcmliZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudENsZWFudXBzO1xuICAgIGN1cnJlbnRDbGVhbnVwcyA9IGNsZWFudXBzO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9taXNlT3JQb3NzaWJsZUNsZWFudXAgPSBjYWxsYmFjaygocHJveHlPYmplY3QpID0+IHtcbiAgICAgICAgcHJveGllc1RvU3Vic2NyaWJlLmFkZChwcm94eU9iamVjdCk7XG4gICAgICAgIGlmIChhbGl2ZSAmJiAhc3Vic2NyaXB0aW9ucy5oYXMocHJveHlPYmplY3QpKSB7XG4gICAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUocHJveHlPYmplY3QsIHJldmFsaWRhdGUsIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuc3luYyk7XG4gICAgICAgICAgc3Vic2NyaXB0aW9ucy5zZXQocHJveHlPYmplY3QsIHVuc3Vic2NyaWJlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJveHlPYmplY3Q7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvdWxkQmVDbGVhbnVwID0gcHJvbWlzZU9yUG9zc2libGVDbGVhbnVwICYmIHByb21pc2VPclBvc3NpYmxlQ2xlYW51cCBpbnN0YW5jZW9mIFByb21pc2UgPyBhd2FpdCBwcm9taXNlT3JQb3NzaWJsZUNsZWFudXAgOiBwcm9taXNlT3JQb3NzaWJsZUNsZWFudXA7XG4gICAgICBpZiAoY291bGRCZUNsZWFudXApIHtcbiAgICAgICAgaWYgKGFsaXZlKSB7XG4gICAgICAgICAgY2xlYW51cHMuYWRkKGNvdWxkQmVDbGVhbnVwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgY3VycmVudENsZWFudXBzID0gcGFyZW50O1xuICAgIH1cbiAgICBzdWJzY3JpcHRpb25zLmZvckVhY2goKHVuc3Vic2NyaWJlLCBwcm94eU9iamVjdCkgPT4ge1xuICAgICAgaWYgKCFwcm94aWVzVG9TdWJzY3JpYmUuaGFzKHByb3h5T2JqZWN0KSkge1xuICAgICAgICBzdWJzY3JpcHRpb25zLmRlbGV0ZShwcm94eU9iamVjdCk7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGlmIChjdXJyZW50Q2xlYW51cHMpIHtcbiAgICBjdXJyZW50Q2xlYW51cHMuYWRkKGNsZWFudXApO1xuICB9XG4gIHJldmFsaWRhdGUoKTtcbiAgcmV0dXJuIGNsZWFudXA7XG59XG5cbmNvbnN0IERFVlRPT0xTID0gU3ltYm9sKCk7XG5mdW5jdGlvbiBkZXZ0b29scyhwcm94eU9iamVjdCwgb3B0aW9ucykge1xuICBjb25zdCB7IGVuYWJsZWQsIG5hbWUgPSBcIlwiLCAuLi5yZXN0IH0gPSBvcHRpb25zIHx8IHt9O1xuICBsZXQgZXh0ZW5zaW9uO1xuICB0cnkge1xuICAgIGV4dGVuc2lvbiA9IChlbmFibGVkICE9IG51bGwgPyBlbmFibGVkIDogKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgaWYgKCFleHRlbnNpb24pIHtcbiAgICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZW5hYmxlZCkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1dhcm5pbmddIFBsZWFzZSBpbnN0YWxsL2VuYWJsZSBSZWR1eCBkZXZ0b29scyBleHRlbnNpb25cIik7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBsZXQgaXNUaW1lVHJhdmVsaW5nID0gZmFsc2U7XG4gIGNvbnN0IGRldnRvb2xzMiA9IGV4dGVuc2lvbi5jb25uZWN0KHsgbmFtZSwgLi4ucmVzdCB9KTtcbiAgY29uc3QgdW5zdWIxID0gc3Vic2NyaWJlKHByb3h5T2JqZWN0LCAob3BzKSA9PiB7XG4gICAgY29uc3QgYWN0aW9uID0gb3BzLmZpbHRlcigoW18sIHBhdGhdKSA9PiBwYXRoWzBdICE9PSBERVZUT09MUykubWFwKChbb3AsIHBhdGhdKSA9PiBgJHtvcH06JHtwYXRoLm1hcChTdHJpbmcpLmpvaW4oXCIuXCIpfWApLmpvaW4oXCIsIFwiKTtcbiAgICBpZiAoIWFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNUaW1lVHJhdmVsaW5nKSB7XG4gICAgICBpc1RpbWVUcmF2ZWxpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc25hcFdpdGhvdXREZXZ0b29scyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBzaG90KHByb3h5T2JqZWN0KSk7XG4gICAgICBkZWxldGUgc25hcFdpdGhvdXREZXZ0b29sc1tERVZUT09MU107XG4gICAgICBkZXZ0b29sczIuc2VuZChcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IGFjdGlvbixcbiAgICAgICAgICB1cGRhdGVkQXQ6ICgvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICB9LFxuICAgICAgICBzbmFwV2l0aG91dERldnRvb2xzXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHVuc3ViMiA9IGRldnRvb2xzMi5zdWJzY3JpYmUoKG1lc3NhZ2UpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcIkFDVElPTlwiICYmIG1lc3NhZ2UucGF5bG9hZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwcm94eU9iamVjdCwgSlNPTi5wYXJzZShtZXNzYWdlLnBheWxvYWQpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcInBsZWFzZSBkaXNwYXRjaCBhIHNlcmlhbGl6YWJsZSB2YWx1ZSB0aGF0IEpTT04ucGFyc2UoKSBhbmQgcHJveHkoKSBzdXBwb3J0XFxuXCIsXG4gICAgICAgICAgZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcIkRJU1BBVENIXCIgJiYgbWVzc2FnZS5zdGF0ZSkge1xuICAgICAgaWYgKCgoX2EgPSBtZXNzYWdlLnBheWxvYWQpID09IG51bGwgPyB2b2lkIDAgOiBfYS50eXBlKSA9PT0gXCJKVU1QX1RPX0FDVElPTlwiIHx8ICgoX2IgPSBtZXNzYWdlLnBheWxvYWQpID09IG51bGwgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gXCJKVU1QX1RPX1NUQVRFXCIpIHtcbiAgICAgICAgaXNUaW1lVHJhdmVsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBKU09OLnBhcnNlKG1lc3NhZ2Uuc3RhdGUpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHByb3h5T2JqZWN0LCBzdGF0ZSk7XG4gICAgICB9XG4gICAgICBwcm94eU9iamVjdFtERVZUT09MU10gPSBtZXNzYWdlO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSBcIkRJU1BBVENIXCIgJiYgKChfYyA9IG1lc3NhZ2UucGF5bG9hZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnR5cGUpID09PSBcIkNPTU1JVFwiKSB7XG4gICAgICBkZXZ0b29sczIuaW5pdChzbmFwc2hvdChwcm94eU9iamVjdCkpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSBcIkRJU1BBVENIXCIgJiYgKChfZCA9IG1lc3NhZ2UucGF5bG9hZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9kLnR5cGUpID09PSBcIklNUE9SVF9TVEFURVwiKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gKF9lID0gbWVzc2FnZS5wYXlsb2FkLm5leHRMaWZ0ZWRTdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lLmFjdGlvbnNCeUlkO1xuICAgICAgY29uc3QgY29tcHV0ZWRTdGF0ZXMgPSAoKF9mID0gbWVzc2FnZS5wYXlsb2FkLm5leHRMaWZ0ZWRTdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9mLmNvbXB1dGVkU3RhdGVzKSB8fCBbXTtcbiAgICAgIGlzVGltZVRyYXZlbGluZyA9IHRydWU7XG4gICAgICBjb21wdXRlZFN0YXRlcy5mb3JFYWNoKCh7IHN0YXRlIH0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnNbaW5kZXhdIHx8IFwiTm8gYWN0aW9uIGZvdW5kXCI7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocHJveHlPYmplY3QsIHN0YXRlKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZGV2dG9vbHMyLmluaXQoc25hcHNob3QocHJveHlPYmplY3QpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXZ0b29sczIuc2VuZChhY3Rpb24sIHNuYXBzaG90KHByb3h5T2JqZWN0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGRldnRvb2xzMi5pbml0KHNuYXBzaG90KHByb3h5T2JqZWN0KSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgdW5zdWIxKCk7XG4gICAgdW5zdWIyID09IG51bGwgPyB2b2lkIDAgOiB1bnN1YjIoKTtcbiAgfTtcbn1cblxuY29uc3QgeyBwcm94eVN0YXRlTWFwOiBwcm94eVN0YXRlTWFwJDEsIHNuYXBDYWNoZTogc25hcENhY2hlJDEgfSA9IHVuc3RhYmxlX2dldEludGVybmFsU3RhdGVzKCk7XG5jb25zdCBpc1Byb3h5JDEgPSAoeCkgPT4gcHJveHlTdGF0ZU1hcCQxLmhhcyh4KTtcbmNvbnN0IGlzUHJveHlNYXAgPSAob2JqKSA9PiB7XG4gIHJldHVybiBTeW1ib2wudG9TdHJpbmdUYWcgaW4gb2JqICYmIG9ialtTeW1ib2wudG9TdHJpbmdUYWddID09PSBcIk1hcFwiICYmIHByb3h5U3RhdGVNYXAkMS5oYXMob2JqKTtcbn07XG5mdW5jdGlvbiBwcm94eU1hcChlbnRyaWVzKSB7XG4gIGNvbnN0IGluaXRpYWxEYXRhID0gW107XG4gIGxldCBpbml0aWFsSW5kZXggPSAwO1xuICBjb25zdCBpbmRleE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGNvbnN0IHNuYXBNYXBDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuICBjb25zdCByZWdpc3RlclNuYXBNYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FjaGUgPSBzbmFwQ2FjaGUkMS5nZXQodk9iamVjdCk7XG4gICAgY29uc3QgbGF0ZXN0U25hcCA9IGNhY2hlID09IG51bGwgPyB2b2lkIDAgOiBjYWNoZVsxXTtcbiAgICBpZiAobGF0ZXN0U25hcCAmJiAhc25hcE1hcENhY2hlLmhhcyhsYXRlc3RTbmFwKSkge1xuICAgICAgY29uc3QgY2xvbmVkTWFwID0gbmV3IE1hcChpbmRleE1hcCk7XG4gICAgICBzbmFwTWFwQ2FjaGUuc2V0KGxhdGVzdFNuYXAsIGNsb25lZE1hcCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRNYXBGb3JUaGlzID0gKHgpID0+IHNuYXBNYXBDYWNoZS5nZXQoeCkgfHwgaW5kZXhNYXA7XG4gIGlmIChlbnRyaWVzKSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyaWVzW1N5bWJvbC5pdGVyYXRvcl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgXCJwcm94eU1hcDpcXG5cdGluaXRpYWwgc3RhdGUgbXVzdCBiZSBpdGVyYWJsZVxcblx0XHR0aXA6IHN0cnVjdHVyZSBzaG91bGQgYmUgW1trZXksIHZhbHVlXV1cIlxuICAgICAgKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZW50cmllcykge1xuICAgICAgaW5kZXhNYXAuc2V0KGtleSwgaW5pdGlhbEluZGV4KTtcbiAgICAgIGluaXRpYWxEYXRhW2luaXRpYWxJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBjb25zdCB2T2JqZWN0ID0ge1xuICAgIGRhdGE6IGluaXRpYWxEYXRhLFxuICAgIGluZGV4OiBpbml0aWFsSW5kZXgsXG4gICAgZXBvY2g6IDAsXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICBpZiAoIWlzUHJveHkkMSh0aGlzKSkge1xuICAgICAgICByZWdpc3RlclNuYXBNYXAoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICByZXR1cm4gbWFwLnNpemU7XG4gICAgfSxcbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCBtYXAgPSBnZXRNYXBGb3JUaGlzKHRoaXMpO1xuICAgICAgY29uc3QgaW5kZXggPSBtYXAuZ2V0KGtleSk7XG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLmVwb2NoO1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpbmRleF07XG4gICAgfSxcbiAgICBoYXMoa2V5KSB7XG4gICAgICBjb25zdCBtYXAgPSBnZXRNYXBGb3JUaGlzKHRoaXMpO1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIHJldHVybiBtYXAuaGFzKGtleSk7XG4gICAgfSxcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKCFpc1Byb3h5JDEodGhpcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBlcmZvcm0gbXV0YXRpb25zIG9uIGEgc25hcHNob3RcIik7XG4gICAgICB9XG4gICAgICBjb25zdCBpbmRleCA9IGluZGV4TWFwLmdldChrZXkpO1xuICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5kZXhNYXAuc2V0KGtleSwgdGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuZGF0YVt0aGlzLmluZGV4KytdID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFbaW5kZXhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLmVwb2NoKys7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgIGlmICghaXNQcm94eSQxKHRoaXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwZXJmb3JtIG11dGF0aW9ucyBvbiBhIHNuYXBzaG90XCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5kZXggPSBpbmRleE1hcC5nZXQoa2V5KTtcbiAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbaW5kZXhdO1xuICAgICAgaW5kZXhNYXAuZGVsZXRlKGtleSk7XG4gICAgICB0aGlzLmVwb2NoKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgaWYgKCFpc1Byb3h5JDEodGhpcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBlcmZvcm0gbXV0YXRpb25zIG9uIGEgc25hcHNob3RcIik7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGEubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgdGhpcy5lcG9jaCsrO1xuICAgICAgaW5kZXhNYXAuY2xlYXIoKTtcbiAgICB9LFxuICAgIGZvckVhY2goY2IpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICBjb25zdCBtYXAgPSBnZXRNYXBGb3JUaGlzKHRoaXMpO1xuICAgICAgbWFwLmZvckVhY2goKGluZGV4LCBrZXkpID0+IHtcbiAgICAgICAgY2IodGhpcy5kYXRhW2luZGV4XSwga2V5LCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgKmVudHJpZXMoKSB7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgY29uc3QgbWFwID0gZ2V0TWFwRm9yVGhpcyh0aGlzKTtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgaW5kZXhdIG9mIG1hcCkge1xuICAgICAgICB5aWVsZCBba2V5LCB0aGlzLmRhdGFbaW5kZXhdXTtcbiAgICAgIH1cbiAgICB9LFxuICAgICprZXlzKCkge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBtYXAua2V5cygpKSB7XG4gICAgICAgIHlpZWxkIGtleTtcbiAgICAgIH1cbiAgICB9LFxuICAgICp2YWx1ZXMoKSB7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgY29uc3QgbWFwID0gZ2V0TWFwRm9yVGhpcyh0aGlzKTtcbiAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgbWFwLnZhbHVlcygpKSB7XG4gICAgICAgIHlpZWxkIHRoaXMuZGF0YVtpbmRleF07XG4gICAgICB9XG4gICAgfSxcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgICB9LFxuICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgIHJldHVybiBcIk1hcFwiO1xuICAgIH0sXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIG5ldyBNYXAodGhpcy5lbnRyaWVzKCkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJveGllZE9iamVjdCA9IHByb3h5KHZPYmplY3QpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhwcm94aWVkT2JqZWN0LCB7XG4gICAgc2l6ZTogeyBlbnVtZXJhYmxlOiBmYWxzZSB9LFxuICAgIGluZGV4OiB7IGVudW1lcmFibGU6IGZhbHNlIH0sXG4gICAgZXBvY2g6IHsgZW51bWVyYWJsZTogZmFsc2UgfSxcbiAgICBkYXRhOiB7IGVudW1lcmFibGU6IGZhbHNlIH0sXG4gICAgdG9KU09OOiB7IGVudW1lcmFibGU6IGZhbHNlIH1cbiAgfSk7XG4gIE9iamVjdC5zZWFsKHByb3hpZWRPYmplY3QpO1xuICByZXR1cm4gcHJveGllZE9iamVjdDtcbn1cblxuY29uc3QgeyBwcm94eVN0YXRlTWFwLCBzbmFwQ2FjaGUgfSA9IHVuc3RhYmxlX2dldEludGVybmFsU3RhdGVzKCk7XG5jb25zdCBtYXliZVByb3hpZnkgPSAoeCkgPT4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgPyBwcm94eSh7IHggfSkueCA6IHg7XG5jb25zdCBpc1Byb3h5ID0gKHgpID0+IHByb3h5U3RhdGVNYXAuaGFzKHgpO1xuY29uc3QgaXNQcm94eVNldCA9IChvYmopID0+IHtcbiAgcmV0dXJuIFN5bWJvbC50b1N0cmluZ1RhZyBpbiBvYmogJiYgb2JqW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09IFwiU2V0XCIgJiYgcHJveHlTdGF0ZU1hcC5oYXMob2JqKTtcbn07XG5mdW5jdGlvbiBwcm94eVNldChpbml0aWFsVmFsdWVzKSB7XG4gIGNvbnN0IGluaXRpYWxEYXRhID0gW107XG4gIGNvbnN0IGluZGV4TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgbGV0IGluaXRpYWxJbmRleCA9IDA7XG4gIGNvbnN0IHNuYXBNYXBDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuICBjb25zdCByZWdpc3RlclNuYXBNYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FjaGUgPSBzbmFwQ2FjaGUuZ2V0KHZPYmplY3QpO1xuICAgIGNvbnN0IGxhdGVzdFNuYXAgPSBjYWNoZSA9PSBudWxsID8gdm9pZCAwIDogY2FjaGVbMV07XG4gICAgaWYgKGxhdGVzdFNuYXAgJiYgIXNuYXBNYXBDYWNoZS5oYXMobGF0ZXN0U25hcCkpIHtcbiAgICAgIGNvbnN0IGNsb25lZE1hcCA9IG5ldyBNYXAoaW5kZXhNYXApO1xuICAgICAgc25hcE1hcENhY2hlLnNldChsYXRlc3RTbmFwLCBjbG9uZWRNYXApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0TWFwRm9yVGhpcyA9ICh4KSA9PiBzbmFwTWFwQ2FjaGUuZ2V0KHgpIHx8IGluZGV4TWFwO1xuICBpZiAoaW5pdGlhbFZhbHVlcykge1xuICAgIGlmICh0eXBlb2YgaW5pdGlhbFZhbHVlc1tTeW1ib2wuaXRlcmF0b3JdICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgaXRlcmFibGVcIik7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgaW5pdGlhbFZhbHVlcykge1xuICAgICAgaWYgKCFpbmRleE1hcC5oYXModmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHYgPSBtYXliZVByb3hpZnkodmFsdWUpO1xuICAgICAgICBpbmRleE1hcC5zZXQodiwgaW5pdGlhbEluZGV4KTtcbiAgICAgICAgaW5pdGlhbERhdGFbaW5pdGlhbEluZGV4KytdID0gdjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3Qgdk9iamVjdCA9IHtcbiAgICBkYXRhOiBpbml0aWFsRGF0YSxcbiAgICBpbmRleDogaW5pdGlhbEluZGV4LFxuICAgIGVwb2NoOiAwLFxuICAgIGdldCBzaXplKCkge1xuICAgICAgaWYgKCFpc1Byb3h5KHRoaXMpKSB7XG4gICAgICAgIHJlZ2lzdGVyU25hcE1hcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4TWFwLnNpemU7XG4gICAgfSxcbiAgICBoYXModmFsdWUpIHtcbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICBjb25zdCB2ID0gbWF5YmVQcm94aWZ5KHZhbHVlKTtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICByZXR1cm4gbWFwLmhhcyh2KTtcbiAgICB9LFxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgaWYgKCFpc1Byb3h5KHRoaXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwZXJmb3JtIG11dGF0aW9ucyBvbiBhIHNuYXBzaG90XCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgdiA9IG1heWJlUHJveGlmeSh2YWx1ZSk7XG4gICAgICBpZiAoIWluZGV4TWFwLmhhcyh2KSkge1xuICAgICAgICBpbmRleE1hcC5zZXQodiwgdGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuZGF0YVt0aGlzLmluZGV4KytdID0gdjtcbiAgICAgICAgdGhpcy5lcG9jaCsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgIGlmICghaXNQcm94eSh0aGlzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGVyZm9ybSBtdXRhdGlvbnMgb24gYSBzbmFwc2hvdFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHYgPSBtYXliZVByb3hpZnkodmFsdWUpO1xuICAgICAgY29uc3QgaW5kZXggPSBpbmRleE1hcC5nZXQodik7XG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5kYXRhW2luZGV4XTtcbiAgICAgIGluZGV4TWFwLmRlbGV0ZSh2KTtcbiAgICAgIHRoaXMuZXBvY2grKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICBpZiAoIWlzUHJveHkodGhpcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBlcmZvcm0gbXV0YXRpb25zIG9uIGEgc25hcHNob3RcIik7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGEubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgdGhpcy5lcG9jaCsrO1xuICAgICAgaW5kZXhNYXAuY2xlYXIoKTtcbiAgICB9LFxuICAgIGZvckVhY2goY2IpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICBjb25zdCBtYXAgPSBnZXRNYXBGb3JUaGlzKHRoaXMpO1xuICAgICAgbWFwLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgIGNiKHRoaXMuZGF0YVtpbmRleF0sIHRoaXMuZGF0YVtpbmRleF0sIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAqdmFsdWVzKCkge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIG1hcC52YWx1ZXMoKSkge1xuICAgICAgICB5aWVsZCB0aGlzLmRhdGFbaW5kZXhdO1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5cygpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9LFxuICAgICplbnRyaWVzKCkge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIG1hcC52YWx1ZXMoKSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YVtpbmRleF07XG4gICAgICAgIHlpZWxkIFt2YWx1ZSwgdmFsdWVdO1xuICAgICAgfVxuICAgIH0sXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy52YWx1ZXMoKSk7XG4gICAgfSxcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH0sXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgcmV0dXJuIFwiU2V0XCI7XG4gICAgfSxcbiAgICBpbnRlcnNlY3Rpb24ob3RoZXIpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICBjb25zdCBvdGhlclNldCA9IHByb3h5U2V0KG90aGVyKTtcbiAgICAgIGNvbnN0IHJlc3VsdFNldCA9IHByb3h5U2V0KCk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMudmFsdWVzKCkpIHtcbiAgICAgICAgaWYgKG90aGVyU2V0Lmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHRTZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3h5U2V0KHJlc3VsdFNldCk7XG4gICAgfSxcbiAgICB1bmlvbihvdGhlcikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IHJlc3VsdFNldCA9IHByb3h5U2V0KCk7XG4gICAgICBjb25zdCBvdGhlclNldCA9IHByb3h5U2V0KG90aGVyKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy52YWx1ZXMoKSkge1xuICAgICAgICByZXN1bHRTZXQuYWRkKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2Ygb3RoZXJTZXQpIHtcbiAgICAgICAgcmVzdWx0U2V0LmFkZCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJveHlTZXQocmVzdWx0U2V0KTtcbiAgICB9LFxuICAgIGRpZmZlcmVuY2Uob3RoZXIpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICBjb25zdCByZXN1bHRTZXQgPSBwcm94eVNldCgpO1xuICAgICAgY29uc3Qgb3RoZXJTZXQgPSBwcm94eVNldChvdGhlcik7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMudmFsdWVzKCkpIHtcbiAgICAgICAgaWYgKCFvdGhlclNldC5oYXModmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0U2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm94eVNldChyZXN1bHRTZXQpO1xuICAgIH0sXG4gICAgc3ltbWV0cmljRGlmZmVyZW5jZShvdGhlcikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IHJlc3VsdFNldCA9IHByb3h5U2V0KCk7XG4gICAgICBjb25zdCBvdGhlclNldCA9IHByb3h5U2V0KG90aGVyKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy52YWx1ZXMoKSkge1xuICAgICAgICBpZiAoIW90aGVyU2V0Lmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHRTZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBvdGhlclNldC52YWx1ZXMoKSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdFNldC5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJveHlTZXQocmVzdWx0U2V0KTtcbiAgICB9LFxuICAgIGlzU3Vic2V0T2Yob3RoZXIpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICBjb25zdCBvdGhlclNldCA9IHByb3h5U2V0KG90aGVyKTtcbiAgICAgIHJldHVybiB0aGlzLnNpemUgPD0gb3RoZXIuc2l6ZSAmJiBbLi4udGhpcy52YWx1ZXMoKV0uZXZlcnkoKHZhbHVlKSA9PiBvdGhlclNldC5oYXModmFsdWUpKTtcbiAgICB9LFxuICAgIGlzU3VwZXJzZXRPZihvdGhlcikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG90aGVyU2V0ID0gcHJveHlTZXQob3RoZXIpO1xuICAgICAgcmV0dXJuIHRoaXMuc2l6ZSA+PSBvdGhlci5zaXplICYmIFsuLi5vdGhlclNldF0uZXZlcnkoKHZhbHVlKSA9PiB0aGlzLmhhcyh2YWx1ZSkpO1xuICAgIH0sXG4gICAgaXNEaXNqb2ludEZyb20ob3RoZXIpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICBjb25zdCBvdGhlclNldCA9IHByb3h5U2V0KG90aGVyKTtcbiAgICAgIHJldHVybiBbLi4udGhpcy52YWx1ZXMoKV0uZXZlcnkoKHZhbHVlKSA9PiAhb3RoZXJTZXQuaGFzKHZhbHVlKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwcm94aWVkT2JqZWN0ID0gcHJveHkodk9iamVjdCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHByb3hpZWRPYmplY3QsIHtcbiAgICBzaXplOiB7IGVudW1lcmFibGU6IGZhbHNlIH0sXG4gICAgZGF0YTogeyBlbnVtZXJhYmxlOiBmYWxzZSB9LFxuICAgIGluZGV4OiB7IGVudW1lcmFibGU6IGZhbHNlIH0sXG4gICAgZXBvY2g6IHsgZW51bWVyYWJsZTogZmFsc2UgfSxcbiAgICB0b0pTT046IHsgZW51bWVyYWJsZTogZmFsc2UgfVxuICB9KTtcbiAgT2JqZWN0LnNlYWwocHJveGllZE9iamVjdCk7XG4gIHJldHVybiBwcm94aWVkT2JqZWN0O1xufVxuXG5jb25zdCBpc09iamVjdCA9ICh4KSA9PiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4ICE9PSBudWxsO1xubGV0IGRlZmF1bHRSZWZTZXQ7XG5jb25zdCBnZXREZWZhdWx0UmVmU2V0ID0gKCkgPT4ge1xuICBpZiAoIWRlZmF1bHRSZWZTZXQpIHtcbiAgICBkZWZhdWx0UmVmU2V0ID0gdW5zdGFibGVfZ2V0SW50ZXJuYWxTdGF0ZXMoKS5yZWZTZXQ7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRSZWZTZXQ7XG59O1xuZnVuY3Rpb24gZGVlcENsb25lKG9iaiwgZ2V0UmVmU2V0ID0gZ2V0RGVmYXVsdFJlZlNldCkge1xuICBpZiAoIWlzT2JqZWN0KG9iaikgfHwgZ2V0UmVmU2V0KCkuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGlmIChpc1Byb3h5U2V0KG9iaikpIHtcbiAgICByZXR1cm4gcHJveHlTZXQoWy4uLm9ial0pO1xuICB9XG4gIGlmIChpc1Byb3h5TWFwKG9iaikpIHtcbiAgICByZXR1cm4gcHJveHlNYXAoW1xuICAgICAgLi4ub2JqLmVudHJpZXMoKVxuICAgIF0pO1xuICB9XG4gIGNvbnN0IGJhc2VPYmplY3QgPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpO1xuICBSZWZsZWN0Lm93bktleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBiYXNlT2JqZWN0W2tleV0gPSBkZWVwQ2xvbmUob2JqW2tleV0sIGdldFJlZlNldCk7XG4gIH0pO1xuICByZXR1cm4gYmFzZU9iamVjdDtcbn1cblxuZXhwb3J0IHsgZGVlcENsb25lLCBkZXZ0b29scywgcHJveHlNYXAsIHByb3h5U2V0LCBzdWJzY3JpYmVLZXksIHdhdGNoIH07XG4iLCJpbXBvcnQgQ2VudHJlTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvQ2VudHJlTGlzdCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJ0AvY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IE1hcCBmcm9tICdAL2NvbXBvbmVudHMvTWFwJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG4vKipcbiAqIFF1b3RlIGZvcm0gcmVhY3QgY29tcG9uZW50XG4gKlxuICogQHJldHVybnMge0pTWC5FbGVtZW50fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBTZW5kcyBkYXRhIHRvIGEgc3BlY2lmaWVkIFVSTCB1c2luZyBhIFBPU1QgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgVVJMIHRvIHNlbmQgdGhlIGRhdGEgdG8uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBheWxvYWQgLSBUaGUgcGF5bG9hZCBvYmplY3QgY29udGFpbmluZyB0aGUgZGF0YSB0byBiZSBzZW50LlxuICAgICAqIEBwYXJhbSB7YW55fSBwYXlsb2FkLmFyZyAtIFRoZSBhcmd1bWVudCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcGF5bG9hZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIEpTT04gcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtV1AtTk9OQ0UnOiBnbG9iYWxWYXJpYWJsZXMubm9uY2UgLy8gSW5jbHVkZSB0aGUgbm9uY2UgaW4gdGhlIHJlcXVlc3QgaGVhZGVyc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVybCA9ICcnO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IodXJsLCBnZXREYXRhKTtcblxuICAgIGlmICghZGF0YT8uc3VjY2Vzcykge1xuICAgICAgICAvLyBzdGF0ZS5mb3JtRGF0YSA9IGNsb25lRGVlcChkYXRhPy5kYXRhKTtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGdtZnM1LndwZW5naW5lcG93ZXJlZC5jb20vd3AtanNvbi93cC92Mi9jZW50cmUvP3Blcl9wYWdlPTEwMCZfZmllbGRzPWlkLHRpdGxlLGFjZlxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJncmlkIGdhcC04IG1kOmdhcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXIgLz5cbiAgICAgICAgICAgICAgICA8Q2VudHJlTGlzdCAvPlxuICAgICAgICAgICAgICAgIDxNYXAgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXJhZGl1czIgYmctY29sb3IxNSBncmlkIG1pbi1oLVszMHJlbV0gcGxhY2UtaXRlbXMtY2VudGVyIG1kOm1pbi1oLVs0MHJlbV1cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIkxvYWRpbmdcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiBjbGFzc05hbWU9XCJcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9zcGlubmVyLWRhcmsuc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImNvbnN0IENlbnRyZUxpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+Q2VudHJlTGlzdDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbnRyZUxpc3Q7XG4iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHsgdXNlU25hcHNob3QgfSBmcm9tICd2YWx0aW8nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmFuZ2VTbGlkZXIgZnJvbSAncmVhY3QtcmFuZ2Utc2xpZGVyLWlucHV0JztcbmltcG9ydCAncmVhY3QtcmFuZ2Utc2xpZGVyLWlucHV0L2Rpc3Qvc3R5bGUuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEZpbHRlck9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc25hcCA9IHVzZVNuYXBzaG90KHN0YXRlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZCBnYXAtNiAke3N0eWxlcy5zdHlsZXN9YH0+XG4gICAgICAgICAgICB7LyogUmFuZ2UgU2xpZGVyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5EaXN0YW5jZTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxSYW5nZVNsaWRlclxuICAgICAgICAgICAgICAgICAgICBtaW49e3NuYXAuZm9ybURhdGEuZGlzdGFuY2UubWlufVxuICAgICAgICAgICAgICAgICAgICBtYXg9e3NuYXAuZm9ybURhdGEuZGlzdGFuY2UubWF4fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c25hcC5mb3JtRGF0YS5kaXN0YW5jZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dmFsdWUgPT4gKHN0YXRlLmZvcm1EYXRhLmRpc3RhbmNlLnZhbHVlID0gdmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlck9wdGlvbnM7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy40X3dlYnBhY2tANS45OC4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDMuMy40X3dlYnBhY2tANS45OC4wL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMy4zLjRfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDYuMTEuMF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bvc3Rjc3MtbG9hZGVyQDcuMy40X3Bvc3Rjc3NAOC41LjNfdHlwZXNjcmlwdEA1LjguMl93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zYXNzLWxvYWRlckAxMy4zLjNfc2Fzc0AxLjg2LjBfd2VicGFja0A1Ljk4LjAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL0lucHV0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANi4xMS4wX3dlYnBhY2tANS45OC4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcG9zdGNzcy1sb2FkZXJANy4zLjRfcG9zdGNzc0A4LjUuM190eXBlc2NyaXB0QDUuOC4yX3dlYnBhY2tANS45OC4wL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Nhc3MtbG9hZGVyQDEzLjMuM19zYXNzQDEuODYuMF93ZWJwYWNrQDUuOTguMC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vSW5wdXQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgRmlsdGVyT3B0aW9ucyBmcm9tICcuL0ZpbHRlck9wdGlvbnMnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IHVzZVNuYXBzaG90IH0gZnJvbSAndmFsdGlvJztcblxuY29uc3QgRmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNuYXAgPSB1c2VTbmFwc2hvdChzdGF0ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzbmFwLmZvcm1EYXRhPy5zZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IChzdGF0ZS5mb3JtRGF0YS5zZWFyY2ggPSBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiFwci0xMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLXNlYXJjaC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTEvMiB6LVszXSAtdHJhbnNsYXRlLXktMS8yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgRmlsdGVyICovfVxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBwYi00XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgdmFyKC0tR3JheS04MCknIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBnYXAtNCB0ZXh0LWxnIGZvbnQtNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHN0YXRlLm1vZGFsT3BlbiA9ICFzbmFwLm1vZGFsT3Blbil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLWZpbHRlci5zdmdcIiBhbHQ9XCJcIiB3aWR0aD17MjR9IGhlaWdodD17MjR9IC8+XG4gICAgICAgICAgICAgICAgICAgIEZpbHRlcnMgKDkpXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtNzAwIHVuZGVybGluZSBkZWNvcmF0aW9uLWdyYXktODAgZGVjb3JhdGlvbi0yIHVuZGVybGluZS1vZmZzZXQtWzVweF1cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzbmFwLmhhbmRsZVJlc2V0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTW9kYWwgKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udGFpbmVyIGZpeGVkIGxlZnQtMCB0b3AtMCB6LTIwIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIGJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCAke3NuYXAubW9kYWxPcGVuID8gJ3BvaW50ZXItZXZlbnRzLWF1dG8gdHJhbnNsYXRlLXktMCBvcGFjaXR5LTEwMCcgOiAncG9pbnRlci1ldmVudHMtbm9uZSB0cmFuc2xhdGUteS1mdWxsIG9wYWNpdHktMCd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTYgcGItMjQgcHQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IChzdGF0ZS5tb2RhbE9wZW4gPSBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1jcm9zcy5zdmdcIiBhbHQ9XCJcIiB3aWR0aD17MjR9IGhlaWdodD17MjR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LTcwMFwiPkZpbHRlcnM8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC03MDAgdW5kZXJsaW5lIGRlY29yYXRpb24tZ3JheS04MCBkZWNvcmF0aW9uLTIgdW5kZXJsaW5lLW9mZnNldC1bMTBweF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NuYXAuaGFuZGxlUmVzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogRmlsdGVyIE9wdGlvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJPcHRpb25zIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsImNvbnN0IE1hcCA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdj5NYXA8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iLCJpbXBvcnQgeyBwcm94eSB9IGZyb20gJ3ZhbHRpbyc7XG5pbXBvcnQgeyBkZXZ0b29scyB9IGZyb20gJ3ZhbHRpby91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2VudHJlRGF0YSB7XG4gICAgY2VudHJlVHlwZTogc3RyaW5nO1xuICAgIHByb2dyYW1tZVR5cGU6IHN0cmluZ1tdO1xuICAgIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgaXNDZXJ0aWZpZWQ6IGJvb2xlYW47XG4gICAgbW90aGVyVG9uZ3VlOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZW50cmVTZWFyY2hQcm9wcyB7XG4gICAgY2VudHJlVHlwZTogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgfT47XG4gICAgcHJvZ3JhbW1lVHlwZTogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgfT47XG4gICAgZGlzdGFuY2U6IHtcbiAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgIG1heDogbnVtYmVyO1xuICAgICAgICB2YWx1ZTogW251bWJlciwgbnVtYmVyXTtcbiAgICB9O1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gICAgaXNDZXJ0aWZpZWQ6IGJvb2xlYW47XG4gICAgbW90aGVyVG9uZ3VlOiBBcnJheTx7XG4gICAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgICAgIGFjdGl2ZTogYm9vbGVhbjtcbiAgICB9PjtcbiAgICBzZWFyY2g6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN0b3JlSW50ZXJmYWNlIHtcbiAgICBmb3JtRGF0YTogQ2VudHJlU2VhcmNoUHJvcHM7XG4gICAgY2VudHJlczogQ2VudHJlRGF0YVtdO1xuICAgIGZvcm1TdWJtaXR0ZWQ6IGJvb2xlYW47XG4gICAgbW9kYWxPcGVuOiBib29sZWFuO1xuICAgIGlzTXV0YXRpbmc6IGJvb2xlYW47XG4gICAgZm9ybUVycm9yOiBzdHJpbmc7XG4gICAgaGFuZGxlRm9ybVN1Ym1pdDogKCkgPT4gdm9pZDtcbiAgICBoYW5kbGVSZXNldDogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgZGVmYXVsdEZvcm1EYXRhOiBDZW50cmVTZWFyY2hQcm9wcyA9IHtcbiAgICBjZW50cmVUeXBlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQWxsJyxcbiAgICAgICAgICAgIHZhbHVlOiAnYWxsJyxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0Vhcmx5IFllYXJzIENlbnRyZScsXG4gICAgICAgICAgICB2YWx1ZTogJ2Vhcmx5LXllYXJzLWNlbnRyZScsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGFyZ2UgQ2hpbGRjYXJlIENlbnRyZScsXG4gICAgICAgICAgICB2YWx1ZTogJ2xhcmdlLWNoaWxkY2FyZS1jZW50cmUnLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9XG4gICAgXSxcbiAgICBwcm9ncmFtbWVUeXBlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnSW5mYW50IENhcmUnLFxuICAgICAgICAgICAgdmFsdWU6ICdpbmZhbnQtY2FyZScsXG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdQbGF5Z3JvdXAnLFxuICAgICAgICAgICAgdmFsdWU6ICdwbGF5Z3JvdXAnLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ051cnNlcnkgMScsXG4gICAgICAgICAgICB2YWx1ZTogJ251cnNlcnktMScsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTnVyc2VyeSAyJyxcbiAgICAgICAgICAgIHZhbHVlOiAnbnVyc2VyeS0yJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdLaW5kZXJnYXJ0ZW4gMScsXG4gICAgICAgICAgICB2YWx1ZTogJ2tpbmRlcmdhcnRlbi0xJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdLaW5kZXJnYXJ0ZW4gMicsXG4gICAgICAgICAgICB2YWx1ZTogJ2tpbmRlcmdhcnRlbi0yJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIF0sXG4gICAgZGlzdGFuY2U6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDIwLFxuICAgICAgICB2YWx1ZTogWzUsIDE1XVxuICAgIH0sXG4gICAgbW90aGVyVG9uZ3VlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQWxsJyxcbiAgICAgICAgICAgIHZhbHVlOiAnYWxsJyxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ01hbGF5JyxcbiAgICAgICAgICAgIHZhbHVlOiAnbWFsYXknLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0NoaW5lc2UnLFxuICAgICAgICAgICAgdmFsdWU6ICdjaGluZXNlJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdUYW1pbCcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RhbWlsJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIF0sXG4gICAgaXNDZXJ0aWZpZWQ6IGZhbHNlLFxuICAgIHNlYXJjaDogJycsXG4gICAgbGF0aXR1ZGU6IDAsXG4gICAgbG9uZ2l0dWRlOiAwXG59O1xuXG5leHBvcnQgY29uc3Qgc3RhdGU6IFN0b3JlSW50ZXJmYWNlID0gcHJveHk8U3RvcmVJbnRlcmZhY2U+KHtcbiAgICBmb3JtRGF0YTogeyAuLi5kZWZhdWx0Rm9ybURhdGEgfSxcbiAgICBtb2RhbE9wZW46IHRydWUsXG4gICAgaGFuZGxlUmVzZXQ6ICgpID0+IHtcbiAgICAgICAgc3RhdGUuZm9ybURhdGEgPSB7IC4uLmRlZmF1bHRGb3JtRGF0YSB9O1xuICAgIH1cbn0gYXMgU3RvcmVJbnRlcmZhY2UpO1xuXG5kZXZ0b29scyhzdGF0ZSwgeyBuYW1lOiAnQ2VudHJlIFNlYXJjaCcsIGVuYWJsZWQ6IHRydWUgfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlbnRyZS1zZWFyY2gnKTtcblxuaWYgKGVsZW1lbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgcm9vdC5yZW5kZXIoXG4gICAgICAgIDxTdHJpY3RNb2RlPlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L1N0cmljdE1vZGU+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDZW50cmVMaXN0IiwiRmlsdGVyIiwiTWFwIiwidXNlU1dSIiwiQXBwIiwiZ2V0RGF0YSIsInVybCIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsImdsb2JhbFZhcmlhYmxlcyIsIm5vbmNlIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJzdGF0ZSIsInVzZVNuYXBzaG90IiwiUmFuZ2VTbGlkZXIiLCJzdHlsZXMiLCJGaWx0ZXJPcHRpb25zIiwic25hcCIsIm1pbiIsImZvcm1EYXRhIiwiZGlzdGFuY2UiLCJtYXgiLCJ2YWx1ZSIsIm9uSW5wdXQiLCJ0eXBlIiwic2VhcmNoIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJib3JkZXJCb3R0b20iLCJvbkNsaWNrIiwibW9kYWxPcGVuIiwiaGFuZGxlUmVzZXQiLCJwcm94eSIsImRldnRvb2xzIiwiZGVmYXVsdEZvcm1EYXRhIiwiY2VudHJlVHlwZSIsImxhYmVsIiwiYWN0aXZlIiwicHJvZ3JhbW1lVHlwZSIsIm1vdGhlclRvbmd1ZSIsImlzQ2VydGlmaWVkIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJuYW1lIiwiZW5hYmxlZCIsIlN0cmljdE1vZGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJSZWFjdERPTSIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9
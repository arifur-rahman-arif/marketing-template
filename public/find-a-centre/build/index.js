/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/react.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/react.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSnapshot: () => (/* binding */ useSnapshot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var proxy_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proxy-compare */ "./node_modules/.pnpm/proxy-compare@3.0.1/node_modules/proxy-compare/dist/index.js");
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! valtio/vanilla */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/vanilla.mjs");




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

/***/ "./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/vanilla.mjs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/vanilla.mjs ***!
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

/***/ "./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs ***!
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
/* harmony import */ var valtio_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! valtio/vanilla */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/vanilla.mjs");


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

/***/ "./src/components/Filter/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Filter/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store.ts");
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! valtio */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/react.mjs");


const Filter = () => {
  const snap = (0,valtio__WEBPACK_IMPORTED_MODULE_1__.useSnapshot)(_store__WEBPACK_IMPORTED_MODULE_0__.state);
  return /*#__PURE__*/React.createElement("div", {
    className: "grid gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-input relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: snap.formData?.search,
    onChange: e => _store__WEBPACK_IMPORTED_MODULE_0__.state.formData.search = e.target.value,
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
    onClick: () => _store__WEBPACK_IMPORTED_MODULE_0__.state.modalOpen = !snap.modalOpen
  }, /*#__PURE__*/React.createElement("img", {
    src: "/public/assets/images/icons/icon-filter.svg",
    alt: "",
    width: 24,
    height: 24
  }), "Filters (9)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "text-sm font-700 underline decoration-gray-80 decoration-2 underline-offset-[5px]",
    onClick: snap.handleReset
  }, "Reset")));
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
/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! valtio */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/vanilla.mjs");
/* harmony import */ var valtio_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! valtio/utils */ "./node_modules/.pnpm/valtio@2.1.4_@types+react@19.0.12_react@19.0.0/node_modules/valtio/esm/vanilla/utils.mjs");


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
    max: 20
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
  modalOpen: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFlBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsd0NBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDRDQUFTLEdBQUcsa0RBQWU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixLQUFLO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsTUFBTSxhQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFEQUE2QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFLO0FBQzdCO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0IsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxtQkFBbUI7QUFDaEMsWUFBWSxtQkFBbUI7QUFDL0IsY0FBYztBQUNkLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwyQkFBMkIsRUFBRSwwRUFBMEI7QUFDL0Qsb0RBQW9ELHFEQUFLLEdBQUcsR0FBRztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QVEsR0FBRztNQUFFLEdBQUdZO0lBQWdCLENBQUM7RUFDM0M7QUFDSixDQUFtQixDQUFDO0FBRXBCRCxzREFBUSxDQUFDaEIsS0FBSyxFQUFFO0VBQUU2QixJQUFJLEVBQUUsZUFBZTtFQUFFQyxPQUFPLEVBQUU7QUFBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUMxSXpEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDWDtBQUV4QixNQUFNRSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUV4RCxJQUFJRixPQUFPLEVBQUU7RUFDVDtFQUNBO0VBQ0EsTUFBTUcsSUFBSSxHQUFHQyxRQUFRLENBQUNDLFVBQVUsQ0FBQ0wsT0FBc0IsQ0FBQztFQUV4REcsSUFBSSxDQUFDRyxNQUFNLGNBQ1A3QyxLQUFBLENBQUFDLGFBQUEsQ0FBQ3FDLDZDQUFVLHFCQUNQdEMsS0FBQSxDQUFBQyxhQUFBLENBQUNaLDRDQUFHLE1BQUUsQ0FDRSxDQUNoQixDQUFDO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9kZXF1YWxAMi4wLjMvbm9kZV9tb2R1bGVzL2RlcXVhbC9saXRlL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vcHJveHktY29tcGFyZUAzLjAuMS9ub2RlX21vZHVsZXMvcHJveHktY29tcGFyZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9zd3JAMi4zLjNfcmVhY3RAMTkuMC4wL25vZGVfbW9kdWxlcy9zd3IvZGlzdC9faW50ZXJuYWwvY29uZmlnLWNvbnRleHQtY2xpZW50LXY3Vk9GbzY2Lm1qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vc3dyQDIuMy4zX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvc3dyL2Rpc3QvX2ludGVybmFsL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N3ckAyLjMuM19yZWFjdEAxOS4wLjAvbm9kZV9tb2R1bGVzL3N3ci9kaXN0L19pbnRlcm5hbC9ldmVudHMubWpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9zd3JAMi4zLjNfcmVhY3RAMTkuMC4wL25vZGVfbW9kdWxlcy9zd3IvZGlzdC9faW50ZXJuYWwvaW5kZXgubWpzIiwid2VicGFjazovL2RhdGUtdGltZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9zd3JAMi4zLjNfcmVhY3RAMTkuMC4wL25vZGVfbW9kdWxlcy9zd3IvZGlzdC9pbmRleC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlQDEuNC4wX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlQDEuNC4wX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9ub2RlX21vZHVsZXMvLnBucG0vdmFsdGlvQDIuMS40X0B0eXBlcytyZWFjdEAxOS4wLjEyX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvdmFsdGlvL2VzbS9yZWFjdC5tanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ZhbHRpb0AyLjEuNF9AdHlwZXMrcmVhY3RAMTkuMC4xMl9yZWFjdEAxOS4wLjAvbm9kZV9tb2R1bGVzL3ZhbHRpby9lc20vdmFuaWxsYS5tanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ZhbHRpb0AyLjEuNF9AdHlwZXMrcmVhY3RAMTkuMC4xMl9yZWFjdEAxOS4wLjAvbm9kZV9tb2R1bGVzL3ZhbHRpby9lc20vdmFuaWxsYS91dGlscy5tanMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vc3JjL2NvbXBvbmVudHMvQ2VudHJlTGlzdC50c3giLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvLi9zcmMvY29tcG9uZW50cy9NYXAudHN4Iiwid2VicGFjazovL2RhdGUtdGltZS8uL3NyYy9zdG9yZS50cyIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvZXh0ZXJuYWwgdmFyIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9kYXRlLXRpbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RhdGUtdGltZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGF0ZS10aW1lLy4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcXVhbChmb28sIGJhcikge1xuXHR2YXIgY3RvciwgbGVuO1xuXHRpZiAoZm9vID09PSBiYXIpIHJldHVybiB0cnVlO1xuXG5cdGlmIChmb28gJiYgYmFyICYmIChjdG9yPWZvby5jb25zdHJ1Y3RvcikgPT09IGJhci5jb25zdHJ1Y3Rvcikge1xuXHRcdGlmIChjdG9yID09PSBEYXRlKSByZXR1cm4gZm9vLmdldFRpbWUoKSA9PT0gYmFyLmdldFRpbWUoKTtcblx0XHRpZiAoY3RvciA9PT0gUmVnRXhwKSByZXR1cm4gZm9vLnRvU3RyaW5nKCkgPT09IGJhci50b1N0cmluZygpO1xuXG5cdFx0aWYgKGN0b3IgPT09IEFycmF5KSB7XG5cdFx0XHRpZiAoKGxlbj1mb28ubGVuZ3RoKSA9PT0gYmFyLmxlbmd0aCkge1xuXHRcdFx0XHR3aGlsZSAobGVuLS0gJiYgZGVxdWFsKGZvb1tsZW5dLCBiYXJbbGVuXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxlbiA9PT0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKCFjdG9yIHx8IHR5cGVvZiBmb28gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRsZW4gPSAwO1xuXHRcdFx0Zm9yIChjdG9yIGluIGZvbykge1xuXHRcdFx0XHRpZiAoaGFzLmNhbGwoZm9vLCBjdG9yKSAmJiArK2xlbiAmJiAhaGFzLmNhbGwoYmFyLCBjdG9yKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZiAoIShjdG9yIGluIGJhcikgfHwgIWRlcXVhbChmb29bY3Rvcl0sIGJhcltjdG9yXSkpIHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhiYXIpLmxlbmd0aCA9PT0gbGVuO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmb28gIT09IGZvbyAmJiBiYXIgIT09IGJhcjtcbn1cbiIsIi8qIGVzbGludCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55OiBvZmYgKi9cbi8vIHN5bWJvbHNcbmNvbnN0IFRSQUNLX01FTU9fU1lNQk9MID0gU3ltYm9sKCk7XG5jb25zdCBHRVRfT1JJR0lOQUxfU1lNQk9MID0gU3ltYm9sKCk7XG4vLyBwcm9wZXJ0aWVzXG5jb25zdCBBRkZFQ1RFRF9QUk9QRVJUWSA9ICdhJztcbmNvbnN0IElTX1RBUkdFVF9DT1BJRURfUFJPUEVSVFkgPSAnZic7XG5jb25zdCBQUk9YWV9QUk9QRVJUWSA9ICdwJztcbmNvbnN0IFBST1hZX0NBQ0hFX1BST1BFUlRZID0gJ2MnO1xuY29uc3QgVEFSR0VUX0NBQ0hFX1BST1BFUlRZID0gJ3QnO1xuY29uc3QgSEFTX0tFWV9QUk9QRVJUWSA9ICdoJztcbmNvbnN0IEFMTF9PV05fS0VZU19QUk9QRVJUWSA9ICd3JztcbmNvbnN0IEhBU19PV05fS0VZX1BST1BFUlRZID0gJ28nO1xuY29uc3QgS0VZU19QUk9QRVJUWSA9ICdrJztcbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBiYXJlIHByb3h5XG5sZXQgbmV3UHJveHkgPSAodGFyZ2V0LCBoYW5kbGVyKSA9PiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbi8vIGdldCBvYmplY3QgcHJvdG90eXBlXG5jb25zdCBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbmNvbnN0IG9iamVjdHNUb1RyYWNrID0gbmV3IFdlYWtNYXAoKTtcbi8vIGNoZWNrIGlmIG9iaiBpcyBhIHBsYWluIG9iamVjdCBvciBhbiBhcnJheVxuY29uc3QgaXNPYmplY3RUb1RyYWNrID0gKG9iaikgPT4gb2JqICYmXG4gICAgKG9iamVjdHNUb1RyYWNrLmhhcyhvYmopXG4gICAgICAgID8gb2JqZWN0c1RvVHJhY2suZ2V0KG9iailcbiAgICAgICAgOiBnZXRQcm90byhvYmopID09PSBPYmplY3QucHJvdG90eXBlIHx8IGdldFByb3RvKG9iaikgPT09IEFycmF5LnByb3RvdHlwZSk7XG4vLyBjaGVjayBpZiBpdCBpcyBvYmplY3RcbmNvbnN0IGlzT2JqZWN0ID0gKHgpID0+IHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuLy8gUHJvcGVydGllcyB0aGF0IGFyZSBib3RoIG5vbi1jb25maWd1cmFibGUgYW5kIG5vbi13cml0YWJsZSB3aWxsIGJyZWFrXG4vLyB0aGUgcHJveHkgZ2V0IHRyYXAgd2hlbiB3ZSB0cnkgdG8gcmV0dXJuIGEgcmVjdXJzaXZlL2NoaWxkIGNvbXBhcmUgcHJveHlcbi8vIGZyb20gdGhlbS4gV2UgY2FuIGF2b2lkIHRoaXMgYnkgbWFraW5nIGEgY29weSBvZiB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoXG4vLyBhbGwgZGVzY3JpcHRvcnMgbWFya2VkIGFzIGNvbmZpZ3VyYWJsZSwgc2VlIGBjb3B5VGFyZ2V0T2JqZWN0YC5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhaS1zaGkvcHJveHktY29tcGFyZS9wdWxsLzhcbmNvbnN0IG5lZWRzVG9Db3B5VGFyZ2V0T2JqZWN0ID0gKG9iaikgPT4gT2JqZWN0LnZhbHVlcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopKS5zb21lKChkZXNjcmlwdG9yKSA9PiAhZGVzY3JpcHRvci5jb25maWd1cmFibGUgJiYgIWRlc2NyaXB0b3Iud3JpdGFibGUpO1xuLy8gTWFrZSBhIGNvcHkgd2l0aCBhbGwgZGVzY3JpcHRvcnMgbWFya2VkIGFzIGNvbmZpZ3VyYWJsZS5cbmNvbnN0IGNvcHlUYXJnZXRPYmplY3QgPSAob2JqKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAvLyBBcnJheXMgbmVlZCBhIHNwZWNpYWwgd2F5IHRvIGNvcHlcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqKTtcbiAgICB9XG4gICAgLy8gRm9yIG5vbi1hcnJheSBvYmplY3RzLCB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IGtlZXBpbmcgdGhlIHByb3RvdHlwZVxuICAgIC8vIHdpdGggY2hhbmdpbmcgYWxsIGNvbmZpZ3VyYWJsZSBvcHRpb25zIChvdGhlcndpc2UsIHByb3hpZXMgd2lsbCBjb21wbGFpbilcbiAgICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaik7XG4gICAgT2JqZWN0LnZhbHVlcyhkZXNjcmlwdG9ycykuZm9yRWFjaCgoZGVzYykgPT4ge1xuICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoZ2V0UHJvdG8ob2JqKSwgZGVzY3JpcHRvcnMpO1xufTtcbmNvbnN0IGNyZWF0ZVByb3h5SGFuZGxlciA9IChvcmlnT2JqLCBpc1RhcmdldENvcGllZCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBbSVNfVEFSR0VUX0NPUElFRF9QUk9QRVJUWV06IGlzVGFyZ2V0Q29waWVkLFxuICAgIH07XG4gICAgbGV0IHRyYWNrT2JqZWN0ID0gZmFsc2U7IC8vIGZvciB0cmFja01lbW9cbiAgICBjb25zdCByZWNvcmRVc2FnZSA9ICh0eXBlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKCF0cmFja09iamVjdCkge1xuICAgICAgICAgICAgbGV0IHVzZWQgPSBzdGF0ZVtBRkZFQ1RFRF9QUk9QRVJUWV0uZ2V0KG9yaWdPYmopO1xuICAgICAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdXNlZCA9IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlW0FGRkVDVEVEX1BST1BFUlRZXS5zZXQob3JpZ09iaiwgdXNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gQUxMX09XTl9LRVlTX1BST1BFUlRZKSB7XG4gICAgICAgICAgICAgICAgdXNlZFtBTExfT1dOX0tFWVNfUFJPUEVSVFldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXQgPSB1c2VkW3R5cGVdO1xuICAgICAgICAgICAgICAgIGlmICghc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlZFt0eXBlXSA9IHNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCByZWNvcmRPYmplY3RBc1VzZWQgPSAoKSA9PiB7XG4gICAgICAgIHRyYWNrT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgc3RhdGVbQUZGRUNURURfUFJPUEVSVFldLmRlbGV0ZShvcmlnT2JqKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZXIgPSB7XG4gICAgICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gR0VUX09SSUdJTkFMX1NZTUJPTCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnT2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjb3JkVXNhZ2UoS0VZU19QUk9QRVJUWSwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm94eShSZWZsZWN0LmdldCh0YXJnZXQsIGtleSksIHN0YXRlW0FGRkVDVEVEX1BST1BFUlRZXSwgc3RhdGVbUFJPWFlfQ0FDSEVfUFJPUEVSVFldLCBzdGF0ZVtUQVJHRVRfQ0FDSEVfUFJPUEVSVFldKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzKHRhcmdldCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBUUkFDS19NRU1PX1NZTUJPTCkge1xuICAgICAgICAgICAgICAgIHJlY29yZE9iamVjdEFzVXNlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjb3JkVXNhZ2UoSEFTX0tFWV9QUk9QRVJUWSwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIGtleSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkge1xuICAgICAgICAgICAgcmVjb3JkVXNhZ2UoSEFTX09XTl9LRVlfUFJPUEVSVFksIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgICB9LFxuICAgICAgICBvd25LZXlzKHRhcmdldCkge1xuICAgICAgICAgICAgcmVjb3JkVXNhZ2UoQUxMX09XTl9LRVlTX1BST1BFUlRZKTtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChpc1RhcmdldENvcGllZCkge1xuICAgICAgICBoYW5kbGVyLnNldCA9IGhhbmRsZXIuZGVsZXRlUHJvcGVydHkgPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIFtoYW5kbGVyLCBzdGF0ZV07XG59O1xuY29uc3QgZ2V0T3JpZ2luYWxPYmplY3QgPSAob2JqKSA9PiBcbi8vIHVud3JhcCBwcm94eVxub2JqW0dFVF9PUklHSU5BTF9TWU1CT0xdIHx8XG4gICAgLy8gb3RoZXJ3aXNlXG4gICAgb2JqO1xuLyoqXG4gKiBDcmVhdGUgYSBwcm94eS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIGEgcHJveHkgYXQgdG9wIGxldmVsIGFuZCBwcm94eSBuZXN0ZWQgb2JqZWN0cyBhcyB5b3UgYWNjZXNzIHRoZW0sXG4gKiBpbiBvcmRlciB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIHByb3BlcnRpZXMgd2VyZSBhY2Nlc3NlZCB2aWEgZ2V0L2hhcyBwcm94eSBoYW5kbGVyczpcbiAqXG4gKiBOT1RFOiBQcmludGluZyBvZiBXZWFrTWFwIGlzIGhhcmQgdG8gaW5zcGVjdCBhbmQgbm90IHZlcnkgcmVhZGFibGVcbiAqIGZvciB0aGlzIHB1cnBvc2UgeW91IGNhbiB1c2UgdGhlIGBhZmZlY3RlZFRvUGF0aExpc3RgIGhlbHBlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gT2JqZWN0IHRoYXQgd2lsbCBiZSB3cmFwcGVkIG9uIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7V2Vha01hcDxvYmplY3QsIHVua25vd24+fSBhZmZlY3RlZCAtXG4gKiBXZWFrTWFwIHRoYXQgd2lsbCBob2xkIHRoZSB0cmFja2luZyBvZiB3aGljaCBwcm9wZXJ0aWVzIGluIHRoZSBwcm94aWVkIG9iamVjdCB3ZXJlIGFjY2Vzc2VkLlxuICogQHBhcmFtIHtXZWFrTWFwPG9iamVjdCwgdW5rbm93bj59IFtwcm94eUNhY2hlXSAtXG4gKiBXZWFrTWFwIHRoYXQgd2lsbCBoZWxwIGtlZXAgcmVmZXJlbnRpYWwgaWRlbnRpdHkgZm9yIHByb3hpZXMuXG4gKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn0gLSBPYmplY3Qgd3JhcHBlZCBpbiBhIHByb3h5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjcmVhdGVQcm94eSB9IGZyb20gJ3Byb3h5LWNvbXBhcmUnO1xuICpcbiAqIGNvbnN0IG9yaWdpbmFsID0geyBhOiBcIjFcIiwgYzogXCIyXCIsIGQ6IHsgZTogXCIzXCIgfSB9O1xuICogY29uc3QgYWZmZWN0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICogY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShvcmlnaW5hbCwgYWZmZWN0ZWQpO1xuICpcbiAqIHByb3h5LmEgLy8gV2lsbCBtYXJrIGFzIHVzZWQgYW5kIHRyYWNrIGl0cyB2YWx1ZS5cbiAqIC8vIFRoaXMgd2lsbCB1cGRhdGUgdGhlIGFmZmVjdGVkIFdlYWtNYXAgd2l0aCBvcmlnaW5hbCBhcyBrZXlcbiAqIC8vIGFuZCBhIFNldCB3aXRoIFwiYVwiXG4gKlxuICogcHJveHkuZCAvLyBXaWxsIG1hcmsgXCJkXCIgYXMgYWNjZXNzZWQgdG8gdHJhY2sgYW5kIHByb3h5IGl0c2VsZiAoeyBlOiBcIjNcIiB9KS5cbiAqIC8vIFRoaXMgd2lsbCB1cGRhdGUgdGhlIGFmZmVjdGVkIFdlYWtNYXAgd2l0aCBvcmlnaW5hbCBhcyBrZXlcbiAqIC8vIGFuZCBhIFNldCB3aXRoIFwiZFwiXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm94eSA9IChvYmosIGFmZmVjdGVkLCBwcm94eUNhY2hlLCB0YXJnZXRDYWNoZSkgPT4ge1xuICAgIGlmICghaXNPYmplY3RUb1RyYWNrKG9iaikpXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgbGV0IHRhcmdldEFuZENvcGllZCA9IHRhcmdldENhY2hlICYmIHRhcmdldENhY2hlLmdldChvYmopO1xuICAgIGlmICghdGFyZ2V0QW5kQ29waWVkKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldE9yaWdpbmFsT2JqZWN0KG9iaik7XG4gICAgICAgIGlmIChuZWVkc1RvQ29weVRhcmdldE9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXRBbmRDb3BpZWQgPSBbdGFyZ2V0LCBjb3B5VGFyZ2V0T2JqZWN0KHRhcmdldCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0QW5kQ29waWVkID0gW3RhcmdldF07XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0Q2FjaGUgPT09IG51bGwgfHwgdGFyZ2V0Q2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldENhY2hlLnNldChvYmosIHRhcmdldEFuZENvcGllZCk7XG4gICAgfVxuICAgIGNvbnN0IFt0YXJnZXQsIGNvcGllZFRhcmdldF0gPSB0YXJnZXRBbmRDb3BpZWQ7XG4gICAgbGV0IGhhbmRsZXJBbmRTdGF0ZSA9IHByb3h5Q2FjaGUgJiYgcHJveHlDYWNoZS5nZXQodGFyZ2V0KTtcbiAgICBpZiAoIWhhbmRsZXJBbmRTdGF0ZSB8fFxuICAgICAgICBoYW5kbGVyQW5kU3RhdGVbMV1bSVNfVEFSR0VUX0NPUElFRF9QUk9QRVJUWV0gIT09ICEhY29waWVkVGFyZ2V0KSB7XG4gICAgICAgIGhhbmRsZXJBbmRTdGF0ZSA9IGNyZWF0ZVByb3h5SGFuZGxlcih0YXJnZXQsICEhY29waWVkVGFyZ2V0KTtcbiAgICAgICAgaGFuZGxlckFuZFN0YXRlWzFdW1BST1hZX1BST1BFUlRZXSA9IG5ld1Byb3h5KGNvcGllZFRhcmdldCB8fCB0YXJnZXQsIGhhbmRsZXJBbmRTdGF0ZVswXSk7XG4gICAgICAgIGlmIChwcm94eUNhY2hlKSB7XG4gICAgICAgICAgICBwcm94eUNhY2hlLnNldCh0YXJnZXQsIGhhbmRsZXJBbmRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlckFuZFN0YXRlWzFdW0FGRkVDVEVEX1BST1BFUlRZXSA9IGFmZmVjdGVkO1xuICAgIGhhbmRsZXJBbmRTdGF0ZVsxXVtQUk9YWV9DQUNIRV9QUk9QRVJUWV0gPSBwcm94eUNhY2hlO1xuICAgIGhhbmRsZXJBbmRTdGF0ZVsxXVtUQVJHRVRfQ0FDSEVfUFJPUEVSVFldID0gdGFyZ2V0Q2FjaGU7XG4gICAgcmV0dXJuIGhhbmRsZXJBbmRTdGF0ZVsxXVtQUk9YWV9QUk9QRVJUWV07XG59O1xuY29uc3QgaXNBbGxPd25LZXlzQ2hhbmdlZCA9IChwcmV2T2JqLCBuZXh0T2JqKSA9PiB7XG4gICAgY29uc3QgcHJldktleXMgPSBSZWZsZWN0Lm93bktleXMocHJldk9iaik7XG4gICAgY29uc3QgbmV4dEtleXMgPSBSZWZsZWN0Lm93bktleXMobmV4dE9iaik7XG4gICAgcmV0dXJuIChwcmV2S2V5cy5sZW5ndGggIT09IG5leHRLZXlzLmxlbmd0aCB8fFxuICAgICAgICBwcmV2S2V5cy5zb21lKChrLCBpKSA9PiBrICE9PSBuZXh0S2V5c1tpXSkpO1xufTtcbi8qKlxuICogQ29tcGFyZSBjaGFuZ2VzIG9uIG9iamVjdHMuXG4gKlxuICogVGhpcyB3aWxsIGNvbXBhcmUgdGhlIGFmZmVjdGVkIHByb3BlcnRpZXMgb24gdHJhY2tlZCBvYmplY3RzIGluc2lkZSB0aGUgcHJveHlcbiAqIHRvIGNoZWNrIGlmIHRoZXJlIHdlcmUgYW55IGNoYW5nZXMgbWFkZSB0byBpdCxcbiAqIGJ5IGRlZmF1bHQgaWYgbm8gcHJvcGVydHkgd2FzIGFjY2Vzc2VkIG9uIHRoZSBwcm94eSBpdCB3aWxsIGF0dGVtcHQgdG8gZG8gYVxuICogcmVmZXJlbmNlIGVxdWFsaXR5IGNoZWNrIGZvciB0aGUgb2JqZWN0cyBwcm92aWRlZCAoT2JqZWN0LmlzKGEsIGIpKS4gSWYgeW91IGFjY2VzcyBhIHByb3BlcnR5XG4gKiBvbiB0aGUgcHJveHksIHRoZW4gaXNDaGFuZ2VkIHdpbGwgb25seSBjb21wYXJlIHRoZSBhZmZlY3RlZCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2T2JqIC0gVGhlIHByZXZpb3VzIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHRPYmogLSBPYmplY3QgdG8gY29tcGFyZSB3aXRoIHRoZSBwcmV2aW91cyBvbmUuXG4gKiBAcGFyYW0ge1dlYWtNYXA8b2JqZWN0LCB1bmtub3duPn0gYWZmZWN0ZWQgLVxuICogV2Vha01hcCB0aGF0IGhvbGRzIHRoZSB0cmFja2luZyBvZiB3aGljaCBwcm9wZXJ0aWVzIGluIHRoZSBwcm94aWVkIG9iamVjdCB3ZXJlIGFjY2Vzc2VkLlxuICogQHBhcmFtIHtXZWFrTWFwPG9iamVjdCwgdW5rbm93bj59IFtjYWNoZV0gLVxuICogV2Vha01hcCB0aGF0IGhvbGRzIGEgY2FjaGUgb2YgdGhlIGNvbXBhcmlzb25zIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2Ugd2l0aCByZXBldGl0aXZlIGNvbXBhcmlzb25zLFxuICogYW5kIHRvIGF2b2lkIGluZmluaXRlIGxvb3Agd2l0aCBjaXJjdWxhciBzdHJ1Y3R1cmVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBhZmZlY3RlZCBwcm9wZXJ0eSBvbiB0aGUgb2JqZWN0IGhhcyBjaGFuZ2VkLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjcmVhdGVQcm94eSwgaXNDaGFuZ2VkIH0gZnJvbSAncHJveHktY29tcGFyZSc7XG4gKlxuICogY29uc3Qgb2JqID0geyBhOiBcIjFcIiwgYzogXCIyXCIsIGQ6IHsgZTogXCIzXCIgfSB9O1xuICogY29uc3QgYWZmZWN0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICpcbiAqIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkob2JqLCBhZmZlY3RlZCk7XG4gKlxuICogcHJveHkuYVxuICpcbiAqIGlzQ2hhbmdlZChvYmosIHsgYTogXCIxXCIgfSwgYWZmZWN0ZWQpIC8vIGZhbHNlXG4gKlxuICogcHJveHkuYSA9IFwiMlwiXG4gKlxuICogaXNDaGFuZ2VkKG9iaiwgeyBhOiBcIjFcIiB9LCBhZmZlY3RlZCkgLy8gdHJ1ZVxuICovXG5leHBvcnQgY29uc3QgaXNDaGFuZ2VkID0gKHByZXZPYmosIG5leHRPYmosIGFmZmVjdGVkLCBjYWNoZSwgLy8gZm9yIG9iamVjdCB3aXRoIGN5Y2xlc1xuaXNFcXVhbCA9IE9iamVjdC5pcykgPT4ge1xuICAgIGlmIChpc0VxdWFsKHByZXZPYmosIG5leHRPYmopKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFpc09iamVjdChwcmV2T2JqKSB8fCAhaXNPYmplY3QobmV4dE9iaikpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHVzZWQgPSBhZmZlY3RlZC5nZXQoZ2V0T3JpZ2luYWxPYmplY3QocHJldk9iaikpO1xuICAgIGlmICghdXNlZClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGNhY2hlLmdldChwcmV2T2JqKTtcbiAgICAgICAgaWYgKGhpdCA9PT0gbmV4dE9iaikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvciBvYmplY3Qgd2l0aCBjeWNsZXNcbiAgICAgICAgY2FjaGUuc2V0KHByZXZPYmosIG5leHRPYmopO1xuICAgIH1cbiAgICBsZXQgY2hhbmdlZCA9IG51bGw7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdXNlZFtIQVNfS0VZX1BST1BFUlRZXSB8fCBbXSkge1xuICAgICAgICBjaGFuZ2VkID0gUmVmbGVjdC5oYXMocHJldk9iaiwga2V5KSAhPT0gUmVmbGVjdC5oYXMobmV4dE9iaiwga2V5KTtcbiAgICAgICAgaWYgKGNoYW5nZWQpXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG4gICAgaWYgKHVzZWRbQUxMX09XTl9LRVlTX1BST1BFUlRZXSA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGFuZ2VkID0gaXNBbGxPd25LZXlzQ2hhbmdlZChwcmV2T2JqLCBuZXh0T2JqKTtcbiAgICAgICAgaWYgKGNoYW5nZWQpXG4gICAgICAgICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHVzZWRbSEFTX09XTl9LRVlfUFJPUEVSVFldIHx8IFtdKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNQcmV2ID0gISFSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcmV2T2JqLCBrZXkpO1xuICAgICAgICAgICAgY29uc3QgaGFzTmV4dCA9ICEhUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dE9iaiwga2V5KTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSBoYXNQcmV2ICE9PSBoYXNOZXh0O1xuICAgICAgICAgICAgaWYgKGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdXNlZFtLRVlTX1BST1BFUlRZXSB8fCBbXSkge1xuICAgICAgICBjaGFuZ2VkID0gaXNDaGFuZ2VkKHByZXZPYmpba2V5XSwgbmV4dE9ialtrZXldLCBhZmZlY3RlZCwgY2FjaGUsIGlzRXF1YWwpO1xuICAgICAgICBpZiAoY2hhbmdlZClcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZCA9PT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHVzZWQnKTtcbiAgICByZXR1cm4gY2hhbmdlZDtcbn07XG4vLyBleHBsaWNpdGx5IHRyYWNrIG9iamVjdCB3aXRoIG1lbW9cbmV4cG9ydCBjb25zdCB0cmFja01lbW8gPSAob2JqKSA9PiB7XG4gICAgaWYgKGlzT2JqZWN0VG9UcmFjayhvYmopKSB7XG4gICAgICAgIHJldHVybiBUUkFDS19NRU1PX1NZTUJPTCBpbiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG4vKipcbiAqIFVud3JhcCBwcm94eSB0byBnZXQgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBVc2VkIHRvIHJldHJpZXZlIHRoZSBvcmlnaW5hbCBvYmplY3QgdXNlZCB0byBjcmVhdGUgdGhlIHByb3h5IGluc3RhbmNlIHdpdGggYGNyZWF0ZVByb3h5YC5cbiAqXG4gKiBAcGFyYW0ge1Byb3h5PG9iamVjdD59IG9iaiAtICBUaGUgcHJveHkgd3JhcHBlciBvZiB0aGUgb3JpZ2luaWFsIG9iamVjdC5cbiAqIEByZXR1cm5zIHtvYmplY3QgfCBudWxsfSAtIFJldHVybiBlaXRoZXIgdGhlIHVud3JhcHBlZCBvYmplY3QgaWYgZXhpc3RzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjcmVhdGVQcm94eSwgZ2V0VW50cmFja2VkIH0gZnJvbSAncHJveHktY29tcGFyZSc7XG4gKlxuICogY29uc3Qgb3JpZ2luYWwgPSB7IGE6IFwiMVwiLCBjOiBcIjJcIiwgZDogeyBlOiBcIjNcIiB9IH07XG4gKiBjb25zdCBhZmZlY3RlZCA9IG5ldyBXZWFrTWFwKCk7XG4gKlxuICogY29uc3QgcHJveHkgPSBjcmVhdGVQcm94eShvcmlnaW5hbCwgYWZmZWN0ZWQpO1xuICogY29uc3Qgb3JpZ2luYWxGcm9tUHJveHkgPSBnZXRVbnRyYWNrZWQocHJveHkpXG4gKlxuICogT2JqZWN0LmlzKG9yaWdpbmFsLCBvcmlnaW5hbEZyb21Qcm94eSkgLy8gdHJ1ZVxuICogaXNDaGFuZ2VkKG9yaWdpbmFsLCBvcmlnaW5hbEZyb21Qcm94eSwgYWZmZWN0ZWQpIC8vIGZhbHNlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVbnRyYWNrZWQgPSAob2JqKSA9PiB7XG4gICAgaWYgKGlzT2JqZWN0VG9UcmFjayhvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmpbR0VUX09SSUdJTkFMX1NZTUJPTF0gfHwgbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuLyoqXG4gKiBNYXJrIG9iamVjdCB0byBiZSB0cmFja2VkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbWFya3MgYW4gb2JqZWN0IHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byBgY3JlYXRlUHJveHlgXG4gKiBhcyBtYXJrZWQgdG8gdHJhY2sgb3Igbm90LiBCeSBkZWZhdWx0IG9ubHkgQXJyYXkgYW5kIE9iamVjdCBhcmUgbWFya2VkIHRvIHRyYWNrLFxuICogc28gdGhpcyBpcyB1c2VmdWwgZm9yIGV4YW1wbGUgdG8gbWFyayBhIGNsYXNzIGluc3RhbmNlIHRvIHRyYWNrIG9yIHRvIG1hcmsgYSBvYmplY3RcbiAqIHRvIGJlIHVudHJhY2tlZCB3aGVuIGNyZWF0aW5nIHlvdXIgcHJveHkuXG4gKlxuICogQHBhcmFtIG9iaiAtIE9iamVjdCB0byBtYXJrIGFzIHRyYWNrZWQgb3Igbm90LlxuICogQHBhcmFtIG1hcmsgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB5b3Ugd2FudCB0byB0cmFjayB0aGlzIG9iamVjdCBvciBub3QuXG4gKiBAcmV0dXJucyAtIE5vIHJldHVybi5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY3JlYXRlUHJveHksIG1hcmtUb1RyYWNrLCBpc0NoYW5nZWQgfSBmcm9tICdwcm94eS1jb21wYXJlJztcbiAqXG4gKiBjb25zdCBuZXN0ZWQgPSB7IGU6IFwiM1wiIH1cbiAqXG4gKiBtYXJrVG9UcmFjayhuZXN0ZWQsIGZhbHNlKVxuICpcbiAqIGNvbnN0IG9yaWdpbmFsID0geyBhOiBcIjFcIiwgYzogXCIyXCIsIGQ6IG5lc3RlZCB9O1xuICogY29uc3QgYWZmZWN0ZWQgPSBuZXcgV2Vha01hcCgpO1xuICpcbiAqIGNvbnN0IHByb3h5ID0gY3JlYXRlUHJveHkob3JpZ2luYWwsIGFmZmVjdGVkKTtcbiAqXG4gKiBwcm94eS5kLmVcbiAqXG4gKiBpc0NoYW5nZWQob3JpZ2luYWwsIHsgZDogeyBlOiBcIjNcIiB9IH0sIGFmZmVjdGVkKSAvLyB0cnVlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXJrVG9UcmFjayA9IChvYmosIG1hcmsgPSB0cnVlKSA9PiB7XG4gICAgb2JqZWN0c1RvVHJhY2suc2V0KG9iaiwgbWFyayk7XG59O1xuLyoqXG4gKiBDb252ZXJ0IGBhZmZlY3RlZGAgdG8gcGF0aCBsaXN0XG4gKlxuICogYGFmZmVjdGVkYCBpcyBhIHdlYWsgbWFwIHdoaWNoIGlzIG5vdCBwcmludGFibGUuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbiBjb252ZXJ0IGl0IHRvIHByaW50YWJsZSBwYXRoIGxpc3QuXG4gKiBJdCdzIGZvciBkZWJ1Z2dpbmcgcHVycG9zZS5cbiAqXG4gKiBAcGFyYW0gb2JqIC0gQW4gb2JqZWN0IHRoYXQgaXMgdXNlZCB3aXRoIGBjcmVhdGVQcm94eWAuXG4gKiBAcGFyYW0gYWZmZWN0ZWQgLSBBIHdlYWsgbWFwIHRoYXQgaXMgdXNlZCB3aXRoIGBjcmVhdGVQcm94eWAuXG4gKiBAcGFyYW0gb25seVdpdGhWYWx1ZXMgLSBBbiBvcHRpb25hbCBib29sZWFuIHRvIGV4Y2x1ZGUgb2JqZWN0IGdldHRlcnMuXG4gKiBAcmV0dXJucyAtIEFuIGFycmF5IG9mIHBhdGhzLlxuICovXG5leHBvcnQgY29uc3QgYWZmZWN0ZWRUb1BhdGhMaXN0ID0gKG9iaiwgYWZmZWN0ZWQsIG9ubHlXaXRoVmFsdWVzKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgV2Vha1NldCgpO1xuICAgIGNvbnN0IHdhbGsgPSAoeCwgcGF0aCkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgaWYgKHNlZW4uaGFzKHgpKSB7XG4gICAgICAgICAgICAvLyBmb3Igb2JqZWN0IHdpdGggY3ljbGVzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JqZWN0KHgpKSB7XG4gICAgICAgICAgICBzZWVuLmFkZCh4KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1c2VkID0gaXNPYmplY3QoeCkgJiYgYWZmZWN0ZWQuZ2V0KGdldE9yaWdpbmFsT2JqZWN0KHgpKTtcbiAgICAgICAgaWYgKHVzZWQpIHtcbiAgICAgICAgICAgIChfYSA9IHVzZWRbSEFTX0tFWV9QUk9QRVJUWV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gYDpoYXMoJHtTdHJpbmcoa2V5KX0pYDtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocGF0aCA/IFsuLi5wYXRoLCBzZWdtZW50XSA6IFtzZWdtZW50XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh1c2VkW0FMTF9PV05fS0VZU19QUk9QRVJUWV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gJzpvd25LZXlzJztcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocGF0aCA/IFsuLi5wYXRoLCBzZWdtZW50XSA6IFtzZWdtZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoX2IgPSB1c2VkW0hBU19PV05fS0VZX1BST1BFUlRZXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gYDpoYXNPd24oJHtTdHJpbmcoa2V5KX0pYDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHBhdGggPyBbLi4ucGF0aCwgc2VnbWVudF0gOiBbc2VnbWVudF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9jID0gdXNlZFtLRVlTX1BST1BFUlRZXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghb25seVdpdGhWYWx1ZXMgfHxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJyBpbiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih4LCBrZXkpIHx8IHt9KSkge1xuICAgICAgICAgICAgICAgICAgICB3YWxrKHhba2V5XSwgcGF0aCA/IFsuLi5wYXRoLCBrZXldIDogW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIGxpc3QucHVzaChwYXRoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2FsayhvYmopO1xuICAgIHJldHVybiBsaXN0O1xufTtcbi8qKlxuICogcmVwbGFjZSBuZXdQcm94eSBmdW5jdGlvbi5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGlmIHlvdSB3YW50IHRvIHVzZSBwcm94eS1wb2x5ZmlsbC5cbiAqIE5vdGUgdGhhdCBwcm94eS1wb2x5ZmlsbCBjYW4ndCBwb2x5ZmlsbCBldmVyeXRoaW5nLlxuICogVXNlIGl0IGF0IHlvdXIgb3duIHJpc2suXG4gKi9cbmV4cG9ydCBjb25zdCByZXBsYWNlTmV3UHJveHkgPSAoZm4pID0+IHtcbiAgICBuZXdQcm94eSA9IGZuO1xufTtcbiIsIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlUmVmLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgcmV2YWxpZGF0ZUV2ZW50cyBmcm9tICcuL2V2ZW50cy5tanMnO1xuaW1wb3J0IHsgZGVxdWFsIH0gZnJvbSAnZGVxdWFsL2xpdGUnO1xuXG4vLyBHbG9iYWwgc3RhdGUgdXNlZCB0byBkZWR1cGxpY2F0ZSByZXF1ZXN0cyBhbmQgc3RvcmUgbGlzdGVuZXJzXG5jb25zdCBTV1JHbG9iYWxTdGF0ZSA9IG5ldyBXZWFrTWFwKCk7XG5cbi8vIFNoYXJlZCBzdGF0ZSBiZXR3ZWVuIHNlcnZlciBjb21wb25lbnRzIGFuZCBjbGllbnQgY29tcG9uZW50c1xuY29uc3Qgbm9vcCA9ICgpPT57fTtcbi8vIFVzaW5nIG5vb3AoKSBhcyB0aGUgdW5kZWZpbmVkIHZhbHVlIGFzIHVuZGVmaW5lZCBjYW4gYmUgcmVwbGFjZWRcbi8vIGJ5IHNvbWV0aGluZyBlbHNlLiBQcmV0dGllciBpZ25vcmUgYW5kIGV4dHJhIHBhcmVudGhlc2VzIGFyZSBuZWNlc3NhcnkgaGVyZVxuLy8gdG8gZW5zdXJlIHRoYXQgdHNjIGRvZXNuJ3QgcmVtb3ZlIHRoZSBfX05PSU5MSU5FX18gY29tbWVudC5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgVU5ERUZJTkVEID0gLyojX19OT0lOTElORV9fKi8gbm9vcCgpO1xuY29uc3QgT0JKRUNUID0gT2JqZWN0O1xuY29uc3QgaXNVbmRlZmluZWQgPSAodik9PnYgPT09IFVOREVGSU5FRDtcbmNvbnN0IGlzRnVuY3Rpb24gPSAodik9PnR5cGVvZiB2ID09ICdmdW5jdGlvbic7XG5jb25zdCBtZXJnZU9iamVjdHMgPSAoYSwgYik9Pih7XG4gICAgICAgIC4uLmEsXG4gICAgICAgIC4uLmJcbiAgICB9KTtcbmNvbnN0IGlzUHJvbWlzZUxpa2UgPSAoeCk9PmlzRnVuY3Rpb24oeC50aGVuKTtcblxuY29uc3QgRU1QVFlfQ0FDSEUgPSB7fTtcbmNvbnN0IElOSVRJQUxfQ0FDSEUgPSB7fTtcbmNvbnN0IFNUUl9VTkRFRklORUQgPSAndW5kZWZpbmVkJztcbi8vIE5PVEU6IFVzZSB0aGUgZnVuY3Rpb24gdG8gZ3VhcmFudGVlIGl0J3MgcmUtZXZhbHVhdGVkIGJldHdlZW4ganNkb20gYW5kIG5vZGUgcnVudGltZSBmb3IgdGVzdHMuXG5jb25zdCBpc1dpbmRvd0RlZmluZWQgPSB0eXBlb2Ygd2luZG93ICE9IFNUUl9VTkRFRklORUQ7XG5jb25zdCBpc0RvY3VtZW50RGVmaW5lZCA9IHR5cGVvZiBkb2N1bWVudCAhPSBTVFJfVU5ERUZJTkVEO1xuY29uc3QgaXNMZWdhY3lEZW5vID0gaXNXaW5kb3dEZWZpbmVkICYmICdEZW5vJyBpbiB3aW5kb3c7XG5jb25zdCBoYXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKT0+aXNXaW5kb3dEZWZpbmVkICYmIHR5cGVvZiB3aW5kb3dbJ3JlcXVlc3RBbmltYXRpb25GcmFtZSddICE9IFNUUl9VTkRFRklORUQ7XG5jb25zdCBjcmVhdGVDYWNoZUhlbHBlciA9IChjYWNoZSwga2V5KT0+e1xuICAgIGNvbnN0IHN0YXRlID0gU1dSR2xvYmFsU3RhdGUuZ2V0KGNhY2hlKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAvLyBHZXR0ZXJcbiAgICAgICAgKCk9PiFpc1VuZGVmaW5lZChrZXkpICYmIGNhY2hlLmdldChrZXkpIHx8IEVNUFRZX0NBQ0hFLFxuICAgICAgICAvLyBTZXR0ZXJcbiAgICAgICAgKGluZm8pPT57XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2ID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgLy8gQmVmb3JlIHdyaXRpbmcgdG8gdGhlIHN0b3JlLCB3ZSBrZWVwIHRoZSB2YWx1ZSBpbiB0aGUgaW5pdGlhbCBjYWNoZVxuICAgICAgICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IHRoZXJlIHlldC5cbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gSU5JVElBTF9DQUNIRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgSU5JVElBTF9DQUNIRVtrZXldID0gcHJldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhdGVbNV0oa2V5LCBtZXJnZU9iamVjdHMocHJldiwgaW5mbyksIHByZXYgfHwgRU1QVFlfQ0FDSEUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBTdWJzY3JpYmVyXG4gICAgICAgIHN0YXRlWzZdLFxuICAgICAgICAvLyBHZXQgc2VydmVyIGNhY2hlIHNuYXBzaG90XG4gICAgICAgICgpPT57XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2FjaGUgd2FzIHVwZGF0ZWQgb24gdGhlIGNsaWVudCwgd2UgcmV0dXJuIHRoZSBzdG9yZWQgaW5pdGlhbCB2YWx1ZS5cbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIElOSVRJQUxfQ0FDSEUpIHJldHVybiBJTklUSUFMX0NBQ0hFW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlbid0IGRvbmUgYW55IGNsaWVudC1zaWRlIHVwZGF0ZXMsIHdlIHJldHVybiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgICAgIHJldHVybiAhaXNVbmRlZmluZWQoa2V5KSAmJiBjYWNoZS5nZXQoa2V5KSB8fCBFTVBUWV9DQUNIRTtcbiAgICAgICAgfVxuICAgIF07XG59IC8vIGV4cG9ydCB7IFVOREVGSU5FRCwgT0JKRUNULCBpc1VuZGVmaW5lZCwgaXNGdW5jdGlvbiwgbWVyZ2VPYmplY3RzLCBpc1Byb21pc2VMaWtlIH1cbjtcblxuLyoqXG4gKiBEdWUgdG8gdGhlIGJ1ZyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02NzgwNzUsXG4gKiBpdCdzIG5vdCByZWxpYWJsZSB0byBkZXRlY3QgaWYgdGhlIGJyb3dzZXIgaXMgY3VycmVudGx5IG9ubGluZSBvciBvZmZsaW5lXG4gKiBiYXNlZCBvbiBgbmF2aWdhdG9yLm9uTGluZWAuXG4gKiBBcyBhIHdvcmthcm91bmQsIHdlIGFsd2F5cyBhc3N1bWUgaXQncyBvbmxpbmUgb24gdGhlIGZpcnN0IGxvYWQsIGFuZCBjaGFuZ2VcbiAqIHRoZSBzdGF0dXMgdXBvbiBgb25saW5lYCBvciBgb2ZmbGluZWAgZXZlbnRzLlxuICovIGxldCBvbmxpbmUgPSB0cnVlO1xuY29uc3QgaXNPbmxpbmUgPSAoKT0+b25saW5lO1xuLy8gRm9yIG5vZGUgYW5kIFJlYWN0IE5hdGl2ZSwgYGFkZC9yZW1vdmVFdmVudExpc3RlbmVyYCBkb2Vzbid0IGV4aXN0IG9uIHdpbmRvdy5cbmNvbnN0IFtvbldpbmRvd0V2ZW50LCBvZmZXaW5kb3dFdmVudF0gPSBpc1dpbmRvd0RlZmluZWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgPyBbXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpLFxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyLmJpbmQod2luZG93KVxuXSA6IFtcbiAgICBub29wLFxuICAgIG5vb3Bcbl07XG5jb25zdCBpc1Zpc2libGUgPSAoKT0+e1xuICAgIGNvbnN0IHZpc2liaWxpdHlTdGF0ZSA9IGlzRG9jdW1lbnREZWZpbmVkICYmIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZTtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQodmlzaWJpbGl0eVN0YXRlKSB8fCB2aXNpYmlsaXR5U3RhdGUgIT09ICdoaWRkZW4nO1xufTtcbmNvbnN0IGluaXRGb2N1cyA9IChjYWxsYmFjayk9PntcbiAgICAvLyBmb2N1cyByZXZhbGlkYXRlXG4gICAgaWYgKGlzRG9jdW1lbnREZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIG9uV2luZG93RXZlbnQoJ2ZvY3VzJywgY2FsbGJhY2spO1xuICAgIHJldHVybiAoKT0+e1xuICAgICAgICBpZiAoaXNEb2N1bWVudERlZmluZWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgb2ZmV2luZG93RXZlbnQoJ2ZvY3VzJywgY2FsbGJhY2spO1xuICAgIH07XG59O1xuY29uc3QgaW5pdFJlY29ubmVjdCA9IChjYWxsYmFjayk9PntcbiAgICAvLyByZXZhbGlkYXRlIG9uIHJlY29ubmVjdGVkXG4gICAgY29uc3Qgb25PbmxpbmUgPSAoKT0+e1xuICAgICAgICBvbmxpbmUgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH07XG4gICAgLy8gbm90aGluZyB0byByZXZhbGlkYXRlLCBqdXN0IHVwZGF0ZSB0aGUgc3RhdHVzXG4gICAgY29uc3Qgb25PZmZsaW5lID0gKCk9PntcbiAgICAgICAgb25saW5lID0gZmFsc2U7XG4gICAgfTtcbiAgICBvbldpbmRvd0V2ZW50KCdvbmxpbmUnLCBvbk9ubGluZSk7XG4gICAgb25XaW5kb3dFdmVudCgnb2ZmbGluZScsIG9uT2ZmbGluZSk7XG4gICAgcmV0dXJuICgpPT57XG4gICAgICAgIG9mZldpbmRvd0V2ZW50KCdvbmxpbmUnLCBvbk9ubGluZSk7XG4gICAgICAgIG9mZldpbmRvd0V2ZW50KCdvZmZsaW5lJywgb25PZmZsaW5lKTtcbiAgICB9O1xufTtcbmNvbnN0IHByZXNldCA9IHtcbiAgICBpc09ubGluZSxcbiAgICBpc1Zpc2libGVcbn07XG5jb25zdCBkZWZhdWx0Q29uZmlnT3B0aW9ucyA9IHtcbiAgICBpbml0Rm9jdXMsXG4gICAgaW5pdFJlY29ubmVjdFxufTtcblxuY29uc3QgSVNfUkVBQ1RfTEVHQUNZID0gIVJlYWN0LnVzZUlkO1xuY29uc3QgSVNfU0VSVkVSID0gIWlzV2luZG93RGVmaW5lZCB8fCBpc0xlZ2FjeURlbm87XG4vLyBQb2x5ZmlsbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbmNvbnN0IHJBRiA9IChmKT0+aGFzUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgPyB3aW5kb3dbJ3JlcXVlc3RBbmltYXRpb25GcmFtZSddKGYpIDogc2V0VGltZW91dChmLCAxKTtcbi8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLlxuY29uc3QgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IElTX1NFUlZFUiA/IHVzZUVmZmVjdCA6IHVzZUxheW91dEVmZmVjdDtcbi8vIFRoaXMgYXNzaWdubWVudCBpcyB0byBleHRlbmQgdGhlIE5hdmlnYXRvciB0eXBlIHRvIHVzZSBlZmZlY3RpdmVUeXBlLlxuY29uc3QgbmF2aWdhdG9yQ29ubmVjdGlvbiA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5jb25uZWN0aW9uO1xuLy8gQWRqdXN0IHRoZSBjb25maWcgYmFzZWQgb24gc2xvdyBjb25uZWN0aW9uIHN0YXR1cyAoPD0gNzBLYnBzKS5cbmNvbnN0IHNsb3dDb25uZWN0aW9uID0gIUlTX1NFUlZFUiAmJiBuYXZpZ2F0b3JDb25uZWN0aW9uICYmIChbXG4gICAgJ3Nsb3ctMmcnLFxuICAgICcyZydcbl0uaW5jbHVkZXMobmF2aWdhdG9yQ29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlKSB8fCBuYXZpZ2F0b3JDb25uZWN0aW9uLnNhdmVEYXRhKTtcblxuLy8gdXNlIFdlYWtNYXAgdG8gc3RvcmUgdGhlIG9iamVjdC0+a2V5IG1hcHBpbmdcbi8vIHNvIHRoZSBvYmplY3RzIGNhbiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbi8vIFdlYWtNYXAgdXNlcyBhIGhhc2h0YWJsZSB1bmRlciB0aGUgaG9vZCwgc28gdGhlIGxvb2t1cFxuLy8gY29tcGxleGl0eSBpcyBhbG1vc3QgTygxKS5cbmNvbnN0IHRhYmxlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGlzT2JqZWN0VHlwZSA9ICh2YWx1ZSwgdHlwZSk9Pk9CSkVDVC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IGBbb2JqZWN0ICR7dHlwZX1dYDtcbi8vIGNvdW50ZXIgb2YgdGhlIGtleVxubGV0IGNvdW50ZXIgPSAwO1xuLy8gQSBzdGFibGUgaGFzaCBpbXBsZW1lbnRhdGlvbiB0aGF0IHN1cHBvcnRzOlxuLy8gLSBGYXN0IGFuZCBlbnN1cmVzIHVuaXF1ZSBoYXNoIHByb3BlcnRpZXNcbi8vIC0gSGFuZGxlcyB1bnNlcmlhbGl6YWJsZSB2YWx1ZXNcbi8vIC0gSGFuZGxlcyBvYmplY3Qga2V5IG9yZGVyaW5nXG4vLyAtIEdlbmVyYXRlcyBzaG9ydCByZXN1bHRzXG4vL1xuLy8gVGhpcyBpcyBub3QgYSBzZXJpYWxpemF0aW9uIGZ1bmN0aW9uLCBhbmQgdGhlIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVlZCB0byBiZVxuLy8gcGFyc2FibGUuXG5jb25zdCBzdGFibGVIYXNoID0gKGFyZyk9PntcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIGFyZztcbiAgICBjb25zdCBpc0RhdGUgPSBpc09iamVjdFR5cGUoYXJnLCAnRGF0ZScpO1xuICAgIGNvbnN0IGlzUmVnZXggPSBpc09iamVjdFR5cGUoYXJnLCAnUmVnRXhwJyk7XG4gICAgY29uc3QgaXNQbGFpbk9iamVjdCA9IGlzT2JqZWN0VHlwZShhcmcsICdPYmplY3QnKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBpbmRleDtcbiAgICBpZiAoT0JKRUNUKGFyZykgPT09IGFyZyAmJiAhaXNEYXRlICYmICFpc1JlZ2V4KSB7XG4gICAgICAgIC8vIE9iamVjdC9mdW5jdGlvbiwgbm90IG51bGwvZGF0ZS9yZWdleHAuIFVzZSBXZWFrTWFwIHRvIHN0b3JlIHRoZSBpZCBmaXJzdC5cbiAgICAgICAgLy8gSWYgaXQncyBhbHJlYWR5IGhhc2hlZCwgZGlyZWN0bHkgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAgICAgIHJlc3VsdCA9IHRhYmxlLmdldChhcmcpO1xuICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgICAvLyBTdG9yZSB0aGUgaGFzaCBmaXJzdCBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGlvbiBiZWZvcmUgZW50ZXJpbmcgdGhlXG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBgc3RhYmxlSGFzaGAgY2FsbHMuXG4gICAgICAgIC8vIEZvciBvdGhlciBvYmplY3RzIGxpa2Ugc2V0IGFuZCBtYXAsIHdlIHVzZSB0aGlzIGlkIGRpcmVjdGx5IGFzIHRoZSBoYXNoLlxuICAgICAgICByZXN1bHQgPSArK2NvdW50ZXIgKyAnfic7XG4gICAgICAgIHRhYmxlLnNldChhcmcsIHJlc3VsdCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIC8vIEFycmF5LlxuICAgICAgICAgICAgcmVzdWx0ID0gJ0AnO1xuICAgICAgICAgICAgZm9yKGluZGV4ID0gMDsgaW5kZXggPCBhcmcubGVuZ3RoOyBpbmRleCsrKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gc3RhYmxlSGFzaChhcmdbaW5kZXhdKSArICcsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlLnNldChhcmcsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QpIHtcbiAgICAgICAgICAgIC8vIE9iamVjdCwgc29ydCBrZXlzLlxuICAgICAgICAgICAgcmVzdWx0ID0gJyMnO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9CSkVDVC5rZXlzKGFyZykuc29ydCgpO1xuICAgICAgICAgICAgd2hpbGUoIWlzVW5kZWZpbmVkKGluZGV4ID0ga2V5cy5wb3AoKSkpe1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGluZGV4ICsgJzonICsgc3RhYmxlSGFzaChhcmdbaW5kZXhdKSArICcsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gaXNEYXRlID8gYXJnLnRvSlNPTigpIDogdHlwZSA9PSAnc3ltYm9sJyA/IGFyZy50b1N0cmluZygpIDogdHlwZSA9PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGFyZykgOiAnJyArIGFyZztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZSA9IChrZXkpPT57XG4gICAgaWYgKGlzRnVuY3Rpb24oa2V5KSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAga2V5ID0ga2V5KCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZGVwZW5kZW5jaWVzIG5vdCByZWFkeVxuICAgICAgICAgICAga2V5ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVXNlIHRoZSBvcmlnaW5hbCBrZXkgYXMgdGhlIGFyZ3VtZW50IG9mIGZldGNoZXIuIFRoaXMgY2FuIGJlIGEgc3RyaW5nIG9yIGFuXG4gICAgLy8gYXJyYXkgb2YgdmFsdWVzLlxuICAgIGNvbnN0IGFyZ3MgPSBrZXk7XG4gICAgLy8gSWYga2V5IGlzIG5vdCBmYWxzeSwgb3Igbm90IGFuIGVtcHR5IGFycmF5LCBoYXNoIGl0LlxuICAgIGtleSA9IHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAoQXJyYXkuaXNBcnJheShrZXkpID8ga2V5Lmxlbmd0aCA6IGtleSkgPyBzdGFibGVIYXNoKGtleSkgOiAnJztcbiAgICByZXR1cm4gW1xuICAgICAgICBrZXksXG4gICAgICAgIGFyZ3NcbiAgICBdO1xufTtcblxuLy8gR2xvYmFsIHRpbWVzdGFtcC5cbmxldCBfX3RpbWVzdGFtcCA9IDA7XG5jb25zdCBnZXRUaW1lc3RhbXAgPSAoKT0+KytfX3RpbWVzdGFtcDtcblxuYXN5bmMgZnVuY3Rpb24gaW50ZXJuYWxNdXRhdGUoLi4uYXJncykge1xuICAgIGNvbnN0IFtjYWNoZSwgX2tleSwgX2RhdGEsIF9vcHRzXSA9IGFyZ3M7XG4gICAgLy8gV2hlbiBwYXNzaW5nIGFzIGEgYm9vbGVhbiwgaXQncyBleHBsaWNpdGx5IHVzZWQgdG8gZGlzYWJsZS9lbmFibGVcbiAgICAvLyByZXZhbGlkYXRpb24uXG4gICAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlT2JqZWN0cyh7XG4gICAgICAgIHBvcHVsYXRlQ2FjaGU6IHRydWUsXG4gICAgICAgIHRocm93T25FcnJvcjogdHJ1ZVxuICAgIH0sIHR5cGVvZiBfb3B0cyA9PT0gJ2Jvb2xlYW4nID8ge1xuICAgICAgICByZXZhbGlkYXRlOiBfb3B0c1xuICAgIH0gOiBfb3B0cyB8fCB7fSk7XG4gICAgbGV0IHBvcHVsYXRlQ2FjaGUgPSBvcHRpb25zLnBvcHVsYXRlQ2FjaGU7XG4gICAgY29uc3Qgcm9sbGJhY2tPbkVycm9yT3B0aW9uID0gb3B0aW9ucy5yb2xsYmFja09uRXJyb3I7XG4gICAgbGV0IG9wdGltaXN0aWNEYXRhID0gb3B0aW9ucy5vcHRpbWlzdGljRGF0YTtcbiAgICBjb25zdCByb2xsYmFja09uRXJyb3IgPSAoZXJyb3IpPT57XG4gICAgICAgIHJldHVybiB0eXBlb2Ygcm9sbGJhY2tPbkVycm9yT3B0aW9uID09PSAnZnVuY3Rpb24nID8gcm9sbGJhY2tPbkVycm9yT3B0aW9uKGVycm9yKSA6IHJvbGxiYWNrT25FcnJvck9wdGlvbiAhPT0gZmFsc2U7XG4gICAgfTtcbiAgICBjb25zdCB0aHJvd09uRXJyb3IgPSBvcHRpb25zLnRocm93T25FcnJvcjtcbiAgICAvLyBJZiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEga2V5IGZpbHRlciwgcmV0dXJuIHRoZSBtdXRhdGlvbiByZXN1bHRzIGZvciBhbGxcbiAgICAvLyBmaWx0ZXJlZCBrZXlzLlxuICAgIGlmIChpc0Z1bmN0aW9uKF9rZXkpKSB7XG4gICAgICAgIGNvbnN0IGtleUZpbHRlciA9IF9rZXk7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRLZXlzID0gW107XG4gICAgICAgIGNvbnN0IGl0ID0gY2FjaGUua2V5cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBpdCl7XG4gICAgICAgICAgICBpZiAoLy8gU2tpcCB0aGUgc3BlY2lhbCB1c2VTV1JJbmZpbml0ZSBhbmQgdXNlU1dSU3Vic2NyaXB0aW9uIGtleXMuXG4gICAgICAgICAgICAhL15cXCQoaW5mfHN1YilcXCQvLnRlc3Qoa2V5KSAmJiBrZXlGaWx0ZXIoY2FjaGUuZ2V0KGtleSkuX2spKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChtYXRjaGVkS2V5cy5tYXAobXV0YXRlQnlLZXkpKTtcbiAgICB9XG4gICAgcmV0dXJuIG11dGF0ZUJ5S2V5KF9rZXkpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIG11dGF0ZUJ5S2V5KF9rKSB7XG4gICAgICAgIC8vIFNlcmlhbGl6ZSBrZXlcbiAgICAgICAgY29uc3QgW2tleV0gPSBzZXJpYWxpemUoX2spO1xuICAgICAgICBpZiAoIWtleSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBbZ2V0LCBzZXRdID0gY3JlYXRlQ2FjaGVIZWxwZXIoY2FjaGUsIGtleSk7XG4gICAgICAgIGNvbnN0IFtFVkVOVF9SRVZBTElEQVRPUlMsIE1VVEFUSU9OLCBGRVRDSCwgUFJFTE9BRF0gPSBTV1JHbG9iYWxTdGF0ZS5nZXQoY2FjaGUpO1xuICAgICAgICBjb25zdCBzdGFydFJldmFsaWRhdGUgPSAoKT0+e1xuICAgICAgICAgICAgY29uc3QgcmV2YWxpZGF0b3JzID0gRVZFTlRfUkVWQUxJREFUT1JTW2tleV07XG4gICAgICAgICAgICBjb25zdCByZXZhbGlkYXRlID0gaXNGdW5jdGlvbihvcHRpb25zLnJldmFsaWRhdGUpID8gb3B0aW9ucy5yZXZhbGlkYXRlKGdldCgpLmRhdGEsIF9rKSA6IG9wdGlvbnMucmV2YWxpZGF0ZSAhPT0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGtleSBieSBkZWxldGluZyB0aGUgY29uY3VycmVudCByZXF1ZXN0IG1hcmtlcnMgc28gbmV3XG4gICAgICAgICAgICAgICAgLy8gcmVxdWVzdHMgd2lsbCBub3QgYmUgZGVkdXBlZC5cbiAgICAgICAgICAgICAgICBkZWxldGUgRkVUQ0hba2V5XTtcbiAgICAgICAgICAgICAgICBkZWxldGUgUFJFTE9BRFtrZXldO1xuICAgICAgICAgICAgICAgIGlmIChyZXZhbGlkYXRvcnMgJiYgcmV2YWxpZGF0b3JzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXZhbGlkYXRvcnNbMF0ocmV2YWxpZGF0ZUV2ZW50cy5NVVRBVEVfRVZFTlQpLnRoZW4oKCk9PmdldCgpLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXQoKS5kYXRhO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBuZXcgZGF0YSBwcm92aWRlZCwgcmV2YWxpZGF0ZSB0aGUga2V5IHdpdGggY3VycmVudCBzdGF0ZS5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgLy8gUmV2YWxpZGF0ZSBhbmQgYnJvYWRjYXN0IHN0YXRlLlxuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0UmV2YWxpZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkYXRhID0gX2RhdGE7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgLy8gVXBkYXRlIGdsb2JhbCB0aW1lc3RhbXBzLlxuICAgICAgICBjb25zdCBiZWZvcmVNdXRhdGlvblRzID0gZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgIE1VVEFUSU9OW2tleV0gPSBbXG4gICAgICAgICAgICBiZWZvcmVNdXRhdGlvblRzLFxuICAgICAgICAgICAgMFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBoYXNPcHRpbWlzdGljRGF0YSA9ICFpc1VuZGVmaW5lZChvcHRpbWlzdGljRGF0YSk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0KCk7XG4gICAgICAgIC8vIGBkaXNwbGF5ZWREYXRhYCBpcyB0aGUgY3VycmVudCB2YWx1ZSBvbiBzY3JlZW4uIEl0IGNvdWxkIGJlIHRoZSBvcHRpbWlzdGljIHZhbHVlXG4gICAgICAgIC8vIHRoYXQgaXMgZ29pbmcgdG8gYmUgb3ZlcnJpZGRlbiBieSBhIGBjb21taXR0ZWREYXRhYCwgb3IgZ2V0IHJldmVydGVkIGJhY2suXG4gICAgICAgIC8vIGBjb21taXR0ZWREYXRhYCBpcyB0aGUgdmFsaWRhdGVkIHZhbHVlIHRoYXQgY29tZXMgZnJvbSBhIGZldGNoIG9yIG11dGF0aW9uLlxuICAgICAgICBjb25zdCBkaXNwbGF5ZWREYXRhID0gc3RhdGUuZGF0YTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBzdGF0ZS5fYztcbiAgICAgICAgY29uc3QgY29tbWl0dGVkRGF0YSA9IGlzVW5kZWZpbmVkKGN1cnJlbnREYXRhKSA/IGRpc3BsYXllZERhdGEgOiBjdXJyZW50RGF0YTtcbiAgICAgICAgLy8gRG8gb3B0aW1pc3RpYyBkYXRhIHVwZGF0ZS5cbiAgICAgICAgaWYgKGhhc09wdGltaXN0aWNEYXRhKSB7XG4gICAgICAgICAgICBvcHRpbWlzdGljRGF0YSA9IGlzRnVuY3Rpb24ob3B0aW1pc3RpY0RhdGEpID8gb3B0aW1pc3RpY0RhdGEoY29tbWl0dGVkRGF0YSwgZGlzcGxheWVkRGF0YSkgOiBvcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgIC8vIFdoZW4gd2Ugc2V0IG9wdGltaXN0aWMgZGF0YSwgYmFja3VwIHRoZSBjdXJyZW50IGNvbW1pdHRlZERhdGEgZGF0YSBpbiBgX2NgLlxuICAgICAgICAgICAgc2V0KHtcbiAgICAgICAgICAgICAgICBkYXRhOiBvcHRpbWlzdGljRGF0YSxcbiAgICAgICAgICAgICAgICBfYzogY29tbWl0dGVkRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oZGF0YSkpIHtcbiAgICAgICAgICAgIC8vIGBkYXRhYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0IHBhc3NpbmcgY3VycmVudCBjYWNoZSB2YWx1ZS5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEoY29tbWl0dGVkRGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCB0aHJvd3MgYW4gZXJyb3Igc3luY2hyb25vdXNseSwgd2Ugc2hvdWxkbid0IHVwZGF0ZSB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYGRhdGFgIGlzIGEgcHJvbWlzZS90aGVuYWJsZSwgcmVzb2x2ZSB0aGUgZmluYWwgZGF0YSBmaXJzdC5cbiAgICAgICAgaWYgKGRhdGEgJiYgaXNQcm9taXNlTGlrZShkYXRhKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSBtdXRhdGlvbiBpcyBhc3luYywgd2UgbmVlZCB0byBjaGVjayB0aW1lc3RhbXBzIHRvXG4gICAgICAgICAgICAvLyBhdm9pZCByYWNlIGNvbmRpdGlvbnMuXG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZGF0YS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBvdGhlciBtdXRhdGlvbnMgaGF2ZSBvY2N1cnJlZCBzaW5jZSB3ZSd2ZSBzdGFydGVkIHRoaXMgbXV0YXRpb24uXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmFjZSB3ZSBkb24ndCB1cGRhdGUgY2FjaGUgb3IgYnJvYWRjYXN0IHRoZSBjaGFuZ2UsXG4gICAgICAgICAgICAvLyBqdXN0IHJldHVybiB0aGUgZGF0YS5cbiAgICAgICAgICAgIGlmIChiZWZvcmVNdXRhdGlvblRzICE9PSBNVVRBVElPTltrZXldWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IgJiYgaGFzT3B0aW1pc3RpY0RhdGEgJiYgcm9sbGJhY2tPbkVycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgICAgIC8vIFJvbGxiYWNrLiBBbHdheXMgcG9wdWxhdGUgdGhlIGNhY2hlIGluIHRoaXMgY2FzZSBidXQgd2l0aG91dFxuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybWluZyB0aGUgZGF0YS5cbiAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhY2hlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBkYXRhIHRvIGJlIHRoZSBsYXRlc3QgY29tbWl0dGVkIGRhdGEsIGFuZCBjbGVhciB0aGUgYF9jYCB2YWx1ZS5cbiAgICAgICAgICAgICAgICBzZXQoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjb21taXR0ZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICBfYzogVU5ERUZJTkVEXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2Ugc2hvdWxkIHdyaXRlIGJhY2sgdGhlIGNhY2hlIGFmdGVyIHJlcXVlc3QuXG4gICAgICAgIGlmIChwb3B1bGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIHRoZSByZXN1bHQgaW50byBkYXRhLlxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHBvcHVsYXRlQ2FjaGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVsYXRlQ2FjaGVkRGF0YSA9IHBvcHVsYXRlQ2FjaGUoZGF0YSwgY29tbWl0dGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwb3B1bGF0ZUNhY2hlZERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogVU5ERUZJTkVELFxuICAgICAgICAgICAgICAgICAgICAgICAgX2M6IFVOREVGSU5FRFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBjYWNoZWQgZGF0YSBhbmQgcmVzZXQgdGhlIGVycm9yIGlmIHRoZXJlJ3Mgbm8gZXJyb3IuIERhdGEgY2FuIGJlIGB1bmRlZmluZWRgIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIHNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFVOREVGSU5FRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jOiBVTkRFRklORURcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lc3RhbXAgdG8gbWFyayB0aGUgbXV0YXRpb24gaGFzIGVuZGVkLlxuICAgICAgICBNVVRBVElPTltrZXldWzFdID0gZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBTV1IgSG9va3MnIGludGVybmFsIHN0YXRlczpcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHN0YXJ0UmV2YWxpZGF0ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAvLyBUaGUgbXV0YXRpb24gYW5kIHJldmFsaWRhdGlvbiBhcmUgZW5kZWQsIHdlIGNhbiBjbGVhciBpdCBzaW5jZSB0aGUgZGF0YSBpc1xuICAgICAgICAgICAgLy8gbm90IGFuIG9wdGltaXN0aWMgdmFsdWUgYW55bW9yZS5cbiAgICAgICAgICAgIHNldCh7XG4gICAgICAgICAgICAgICAgX2M6IFVOREVGSU5FRFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaHJvdyBlcnJvciBvciByZXR1cm4gZGF0YVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0aHJvd09uRXJyb3IpIHRocm93IGVycm9yO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cblxuY29uc3QgcmV2YWxpZGF0ZUFsbEtleXMgPSAocmV2YWxpZGF0b3JzLCB0eXBlKT0+e1xuICAgIGZvcihjb25zdCBrZXkgaW4gcmV2YWxpZGF0b3JzKXtcbiAgICAgICAgaWYgKHJldmFsaWRhdG9yc1trZXldWzBdKSByZXZhbGlkYXRvcnNba2V5XVswXSh0eXBlKTtcbiAgICB9XG59O1xuY29uc3QgaW5pdENhY2hlID0gKHByb3ZpZGVyLCBvcHRpb25zKT0+e1xuICAgIC8vIFRoZSBnbG9iYWwgc3RhdGUgZm9yIGEgc3BlY2lmaWMgcHJvdmlkZXIgd2lsbCBiZSB1c2VkIHRvIGRlZHVwbGljYXRlXG4gICAgLy8gcmVxdWVzdHMgYW5kIHN0b3JlIGxpc3RlbmVycy4gQXMgd2VsbCBhcyBhIG11dGF0ZSBmdW5jdGlvbiB0aGF0IGlzIGJvdW5kIHRvXG4gICAgLy8gdGhlIGNhY2hlLlxuICAgIC8vIFRoZSBwcm92aWRlcidzIGdsb2JhbCBzdGF0ZSBtaWdodCBiZSBhbHJlYWR5IGluaXRpYWxpemVkLiBMZXQncyB0cnkgdG8gZ2V0IHRoZVxuICAgIC8vIGdsb2JhbCBzdGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHByb3ZpZGVyIGZpcnN0LlxuICAgIGlmICghU1dSR2xvYmFsU3RhdGUuaGFzKHByb3ZpZGVyKSkge1xuICAgICAgICBjb25zdCBvcHRzID0gbWVyZ2VPYmplY3RzKGRlZmF1bHRDb25maWdPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBnbG9iYWwgc3RhdGUgYm91bmQgdG8gdGhlIHByb3ZpZGVyLCBjcmVhdGUgYSBuZXcgb25lIHdpdGggdGhlXG4gICAgICAgIC8vIG5ldyBtdXRhdGUgZnVuY3Rpb24uXG4gICAgICAgIGNvbnN0IEVWRU5UX1JFVkFMSURBVE9SUyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IG11dGF0ZSA9IGludGVybmFsTXV0YXRlLmJpbmQoVU5ERUZJTkVELCBwcm92aWRlcik7XG4gICAgICAgIGxldCB1bm1vdW50ID0gbm9vcDtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZSA9IChrZXksIGNhbGxiYWNrKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3VicyA9IHN1YnNjcmlwdGlvbnNba2V5XSB8fCBbXTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnNba2V5XSA9IHN1YnM7XG4gICAgICAgICAgICBzdWJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpPT5zdWJzLnNwbGljZShzdWJzLmluZGV4T2YoY2FsbGJhY2spLCAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2V0dGVyID0gKGtleSwgdmFsdWUsIHByZXYpPT57XG4gICAgICAgICAgICBwcm92aWRlci5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBzdWJzID0gc3Vic2NyaXB0aW9uc1trZXldO1xuICAgICAgICAgICAgaWYgKHN1YnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZuIG9mIHN1YnMpe1xuICAgICAgICAgICAgICAgICAgICBmbih2YWx1ZSwgcHJldik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpbml0UHJvdmlkZXIgPSAoKT0+e1xuICAgICAgICAgICAgaWYgKCFTV1JHbG9iYWxTdGF0ZS5oYXMocHJvdmlkZXIpKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSBpZiBpdCdzIG5ldywgb3IgaWYgdGhlIHByb3ZpZGVyIGhhcyBiZWVuIGV4dGVuZGVkLlxuICAgICAgICAgICAgICAgIFNXUkdsb2JhbFN0YXRlLnNldChwcm92aWRlciwgW1xuICAgICAgICAgICAgICAgICAgICBFVkVOVF9SRVZBTElEQVRPUlMsXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgICAgICAgICAgICAgIG11dGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGVyLFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlTX1NFUlZFUikge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGxpc3RlbmluZyB0byB0aGUgbmF0aXZlIGV2ZW50cyBmb3IgYXV0byByZXZhbGlkYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBpbnRlbnRpb25hbGx5IHB1dCBhIGRlbGF5IChzZXRUaW1lb3V0KSBoZXJlIHRvIG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICAgICAgICAgICAgICAvLyBmaXJlZCBhZnRlciBpbW1lZGlhdGUgSmF2YVNjcmlwdCBleGVjdXRpb25zLCB3aGljaCBjYW4gYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVhY3QncyBzdGF0ZSB1cGRhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGF2b2lkcyBzb21lIHVubmVjZXNzYXJ5IHJldmFsaWRhdGlvbnMgc3VjaCBhc1xuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL3N3ci9pc3N1ZXMvMTY4MC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsZWFzZUZvY3VzID0gb3B0cy5pbml0Rm9jdXMoc2V0VGltZW91dC5iaW5kKFVOREVGSU5FRCwgcmV2YWxpZGF0ZUFsbEtleXMuYmluZChVTkRFRklORUQsIEVWRU5UX1JFVkFMSURBVE9SUywgcmV2YWxpZGF0ZUV2ZW50cy5GT0NVU19FVkVOVCkpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsZWFzZVJlY29ubmVjdCA9IG9wdHMuaW5pdFJlY29ubmVjdChzZXRUaW1lb3V0LmJpbmQoVU5ERUZJTkVELCByZXZhbGlkYXRlQWxsS2V5cy5iaW5kKFVOREVGSU5FRCwgRVZFTlRfUkVWQUxJREFUT1JTLCByZXZhbGlkYXRlRXZlbnRzLlJFQ09OTkVDVF9FVkVOVCkpKTtcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudCA9ICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlRm9jdXMgJiYgcmVsZWFzZUZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlUmVjb25uZWN0ICYmIHJlbGVhc2VSZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdW4tbW91bnRpbmcsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBjYWNoZSBwcm92aWRlciBmcm9tIHRoZSBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmFnZSB0b28gYmVjYXVzZSBpdCdzIGEgc2lkZS1lZmZlY3QuIE90aGVyd2lzZSwgd2hlbiByZS1tb3VudGluZyB3ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lsbCBub3QgcmUtcmVnaXN0ZXIgdGhvc2UgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgU1dSR2xvYmFsU3RhdGUuZGVsZXRlKHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGluaXRQcm92aWRlcigpO1xuICAgICAgICAvLyBUaGlzIGlzIGEgbmV3IHByb3ZpZGVyLCB3ZSBuZWVkIHRvIGluaXRpYWxpemUgaXQgYW5kIHNldHVwIERPTSBldmVudHNcbiAgICAgICAgLy8gbGlzdGVuZXJzIGZvciBgZm9jdXNgIGFuZCBgcmVjb25uZWN0YCBhY3Rpb25zLlxuICAgICAgICAvLyBXZSBtaWdodCB3YW50IHRvIGluamVjdCBhbiBleHRyYSBsYXllciBvbiB0b3Agb2YgYHByb3ZpZGVyYCBpbiB0aGUgZnV0dXJlLFxuICAgICAgICAvLyBzdWNoIGFzIGtleSBzZXJpYWxpemF0aW9uLCBhdXRvIEdDLCBldGMuXG4gICAgICAgIC8vIEZvciBub3csIGl0J3MganVzdCBhIGBNYXBgIGludGVyZmFjZSB3aXRob3V0IGFueSBtb2RpZmljYXRpb25zLlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgICAgICBtdXRhdGUsXG4gICAgICAgICAgICBpbml0UHJvdmlkZXIsXG4gICAgICAgICAgICB1bm1vdW50XG4gICAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBTV1JHbG9iYWxTdGF0ZS5nZXQocHJvdmlkZXIpWzRdXG4gICAgXTtcbn07XG5cbi8vIGVycm9yIHJldHJ5XG5jb25zdCBvbkVycm9yUmV0cnkgPSAoXywgX18sIGNvbmZpZywgcmV2YWxpZGF0ZSwgb3B0cyk9PntcbiAgICBjb25zdCBtYXhSZXRyeUNvdW50ID0gY29uZmlnLmVycm9yUmV0cnlDb3VudDtcbiAgICBjb25zdCBjdXJyZW50UmV0cnlDb3VudCA9IG9wdHMucmV0cnlDb3VudDtcbiAgICAvLyBFeHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgY29uc3QgdGltZW91dCA9IH5+KChNYXRoLnJhbmRvbSgpICsgMC41KSAqICgxIDw8IChjdXJyZW50UmV0cnlDb3VudCA8IDggPyBjdXJyZW50UmV0cnlDb3VudCA6IDgpKSkgKiBjb25maWcuZXJyb3JSZXRyeUludGVydmFsO1xuICAgIGlmICghaXNVbmRlZmluZWQobWF4UmV0cnlDb3VudCkgJiYgY3VycmVudFJldHJ5Q291bnQgPiBtYXhSZXRyeUNvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VGltZW91dChyZXZhbGlkYXRlLCB0aW1lb3V0LCBvcHRzKTtcbn07XG5jb25zdCBjb21wYXJlID0gZGVxdWFsO1xuLy8gRGVmYXVsdCBjYWNoZSBwcm92aWRlclxuY29uc3QgW2NhY2hlLCBtdXRhdGVdID0gaW5pdENhY2hlKG5ldyBNYXAoKSk7XG4vLyBEZWZhdWx0IGNvbmZpZ1xuY29uc3QgZGVmYXVsdENvbmZpZyA9IG1lcmdlT2JqZWN0cyh7XG4gICAgLy8gZXZlbnRzXG4gICAgb25Mb2FkaW5nU2xvdzogbm9vcCxcbiAgICBvblN1Y2Nlc3M6IG5vb3AsXG4gICAgb25FcnJvcjogbm9vcCxcbiAgICBvbkVycm9yUmV0cnksXG4gICAgb25EaXNjYXJkZWQ6IG5vb3AsXG4gICAgLy8gc3dpdGNoZXNcbiAgICByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSxcbiAgICByZXZhbGlkYXRlT25SZWNvbm5lY3Q6IHRydWUsXG4gICAgcmV2YWxpZGF0ZUlmU3RhbGU6IHRydWUsXG4gICAgc2hvdWxkUmV0cnlPbkVycm9yOiB0cnVlLFxuICAgIC8vIHRpbWVvdXRzXG4gICAgZXJyb3JSZXRyeUludGVydmFsOiBzbG93Q29ubmVjdGlvbiA/IDEwMDAwIDogNTAwMCxcbiAgICBmb2N1c1Rocm90dGxlSW50ZXJ2YWw6IDUgKiAxMDAwLFxuICAgIGRlZHVwaW5nSW50ZXJ2YWw6IDIgKiAxMDAwLFxuICAgIGxvYWRpbmdUaW1lb3V0OiBzbG93Q29ubmVjdGlvbiA/IDUwMDAgOiAzMDAwLFxuICAgIC8vIHByb3ZpZGVyc1xuICAgIGNvbXBhcmUsXG4gICAgaXNQYXVzZWQ6ICgpPT5mYWxzZSxcbiAgICBjYWNoZSxcbiAgICBtdXRhdGUsXG4gICAgZmFsbGJhY2s6IHt9XG59LCAvLyB1c2Ugd2ViIHByZXNldCBieSBkZWZhdWx0XG5wcmVzZXQpO1xuXG5jb25zdCBtZXJnZUNvbmZpZ3MgPSAoYSwgYik9PntcbiAgICAvLyBOZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgdG8gYXZvaWQgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIGhlcmUuXG4gICAgY29uc3QgdiA9IG1lcmdlT2JqZWN0cyhhLCBiKTtcbiAgICAvLyBJZiB0d28gY29uZmlncyBhcmUgcHJvdmlkZWQsIG1lcmdlIHRoZWlyIGB1c2VgIGFuZCBgZmFsbGJhY2tgIG9wdGlvbnMuXG4gICAgaWYgKGIpIHtcbiAgICAgICAgY29uc3QgeyB1c2U6IHUxLCBmYWxsYmFjazogZjEgfSA9IGE7XG4gICAgICAgIGNvbnN0IHsgdXNlOiB1MiwgZmFsbGJhY2s6IGYyIH0gPSBiO1xuICAgICAgICBpZiAodTEgJiYgdTIpIHtcbiAgICAgICAgICAgIHYudXNlID0gdTEuY29uY2F0KHUyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZjEgJiYgZjIpIHtcbiAgICAgICAgICAgIHYuZmFsbGJhY2sgPSBtZXJnZU9iamVjdHMoZjEsIGYyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdjtcbn07XG5cbmNvbnN0IFNXUkNvbmZpZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmNvbnN0IFNXUkNvbmZpZyA9IChwcm9wcyk9PntcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcbiAgICBjb25zdCBwYXJlbnRDb25maWcgPSB1c2VDb250ZXh0KFNXUkNvbmZpZ0NvbnRleHQpO1xuICAgIGNvbnN0IGlzRnVuY3Rpb25hbENvbmZpZyA9IGlzRnVuY3Rpb24odmFsdWUpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHVzZU1lbW8oKCk9PmlzRnVuY3Rpb25hbENvbmZpZyA/IHZhbHVlKHBhcmVudENvbmZpZykgOiB2YWx1ZSwgW1xuICAgICAgICBpc0Z1bmN0aW9uYWxDb25maWcsXG4gICAgICAgIHBhcmVudENvbmZpZyxcbiAgICAgICAgdmFsdWVcbiAgICBdKTtcbiAgICAvLyBFeHRlbmQgcGFyZW50IGNvbnRleHQgdmFsdWVzIGFuZCBtaWRkbGV3YXJlLlxuICAgIGNvbnN0IGV4dGVuZGVkQ29uZmlnID0gdXNlTWVtbygoKT0+aXNGdW5jdGlvbmFsQ29uZmlnID8gY29uZmlnIDogbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSwgW1xuICAgICAgICBpc0Z1bmN0aW9uYWxDb25maWcsXG4gICAgICAgIHBhcmVudENvbmZpZyxcbiAgICAgICAgY29uZmlnXG4gICAgXSk7XG4gICAgLy8gU2hvdWxkIG5vdCB1c2UgdGhlIGluaGVyaXRlZCBwcm92aWRlci5cbiAgICBjb25zdCBwcm92aWRlciA9IGNvbmZpZyAmJiBjb25maWcucHJvdmlkZXI7XG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgY2FjaGUgb25seSBvbiBmaXJzdCBhY2Nlc3MuXG4gICAgY29uc3QgY2FjaGVDb250ZXh0UmVmID0gdXNlUmVmKFVOREVGSU5FRCk7XG4gICAgaWYgKHByb3ZpZGVyICYmICFjYWNoZUNvbnRleHRSZWYuY3VycmVudCkge1xuICAgICAgICBjYWNoZUNvbnRleHRSZWYuY3VycmVudCA9IGluaXRDYWNoZShwcm92aWRlcihleHRlbmRlZENvbmZpZy5jYWNoZSB8fCBjYWNoZSksIGNvbmZpZyk7XG4gICAgfVxuICAgIGNvbnN0IGNhY2hlQ29udGV4dCA9IGNhY2hlQ29udGV4dFJlZi5jdXJyZW50O1xuICAgIC8vIE92ZXJyaWRlIHRoZSBjYWNoZSBpZiBhIG5ldyBwcm92aWRlciBpcyBnaXZlbi5cbiAgICBpZiAoY2FjaGVDb250ZXh0KSB7XG4gICAgICAgIGV4dGVuZGVkQ29uZmlnLmNhY2hlID0gY2FjaGVDb250ZXh0WzBdO1xuICAgICAgICBleHRlbmRlZENvbmZpZy5tdXRhdGUgPSBjYWNoZUNvbnRleHRbMV07XG4gICAgfVxuICAgIC8vIFVuc3Vic2NyaWJlIGV2ZW50cy5cbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChjYWNoZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGNhY2hlQ29udGV4dFsyXSAmJiBjYWNoZUNvbnRleHRbMl0oKTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZUNvbnRleHRbM107XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoU1dSQ29uZmlnQ29udGV4dC5Qcm92aWRlciwgbWVyZ2VPYmplY3RzKHByb3BzLCB7XG4gICAgICAgIHZhbHVlOiBleHRlbmRlZENvbmZpZ1xuICAgIH0pKTtcbn07XG5cbmV4cG9ydCB7IG5vb3AgYXMgQSwgaXNQcm9taXNlTGlrZSBhcyBCLCBJU19SRUFDVF9MRUdBQ1kgYXMgSSwgT0JKRUNUIGFzIE8sIFNXUkNvbmZpZ0NvbnRleHQgYXMgUywgVU5ERUZJTkVEIGFzIFUsIGlzRnVuY3Rpb24gYXMgYSwgU1dSR2xvYmFsU3RhdGUgYXMgYiwgY2FjaGUgYXMgYywgZGVmYXVsdENvbmZpZyBhcyBkLCBpc1VuZGVmaW5lZCBhcyBlLCBtZXJnZUNvbmZpZ3MgYXMgZiwgU1dSQ29uZmlnIGFzIGcsIGluaXRDYWNoZSBhcyBoLCBpc1dpbmRvd0RlZmluZWQgYXMgaSwgbXV0YXRlIGFzIGosIGNvbXBhcmUgYXMgaywgc3RhYmxlSGFzaCBhcyBsLCBtZXJnZU9iamVjdHMgYXMgbSwgaW50ZXJuYWxNdXRhdGUgYXMgbiwgZ2V0VGltZXN0YW1wIGFzIG8sIHByZXNldCBhcyBwLCBkZWZhdWx0Q29uZmlnT3B0aW9ucyBhcyBxLCBJU19TRVJWRVIgYXMgciwgc2VyaWFsaXplIGFzIHMsIHJBRiBhcyB0LCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGFzIHUsIHNsb3dDb25uZWN0aW9uIGFzIHYsIGlzRG9jdW1lbnREZWZpbmVkIGFzIHcsIGlzTGVnYWN5RGVubyBhcyB4LCBoYXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYXMgeSwgY3JlYXRlQ2FjaGVIZWxwZXIgYXMgeiB9O1xuIiwiY29uc3QgSU5GSU5JVEVfUFJFRklYID0gJyRpbmYkJztcblxuZXhwb3J0IHsgSU5GSU5JVEVfUFJFRklYIH07XG4iLCJjb25zdCBGT0NVU19FVkVOVCA9IDA7XG5jb25zdCBSRUNPTk5FQ1RfRVZFTlQgPSAxO1xuY29uc3QgTVVUQVRFX0VWRU5UID0gMjtcbmNvbnN0IEVSUk9SX1JFVkFMSURBVEVfRVZFTlQgPSAzO1xuXG5leHBvcnQgeyBFUlJPUl9SRVZBTElEQVRFX0VWRU5ULCBGT0NVU19FVkVOVCwgTVVUQVRFX0VWRU5ULCBSRUNPTk5FQ1RfRVZFTlQgfTtcbiIsImltcG9ydCB7IGkgYXMgaXNXaW5kb3dEZWZpbmVkLCBhIGFzIGlzRnVuY3Rpb24sIG0gYXMgbWVyZ2VPYmplY3RzLCBTIGFzIFNXUkNvbmZpZ0NvbnRleHQsIGQgYXMgZGVmYXVsdENvbmZpZywgcyBhcyBzZXJpYWxpemUsIGIgYXMgU1dSR2xvYmFsU3RhdGUsIGMgYXMgY2FjaGUsIGUgYXMgaXNVbmRlZmluZWQsIGYgYXMgbWVyZ2VDb25maWdzIH0gZnJvbSAnLi9jb25maWctY29udGV4dC1jbGllbnQtdjdWT0ZvNjYubWpzJztcbmV4cG9ydCB7IEkgYXMgSVNfUkVBQ1RfTEVHQUNZLCByIGFzIElTX1NFUlZFUiwgTyBhcyBPQkpFQ1QsIGcgYXMgU1dSQ29uZmlnLCBVIGFzIFVOREVGSU5FRCwgayBhcyBjb21wYXJlLCB6IGFzIGNyZWF0ZUNhY2hlSGVscGVyLCBxIGFzIGRlZmF1bHRDb25maWdPcHRpb25zLCBvIGFzIGdldFRpbWVzdGFtcCwgeSBhcyBoYXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIGggYXMgaW5pdENhY2hlLCBuIGFzIGludGVybmFsTXV0YXRlLCB3IGFzIGlzRG9jdW1lbnREZWZpbmVkLCB4IGFzIGlzTGVnYWN5RGVubywgQiBhcyBpc1Byb21pc2VMaWtlLCBqIGFzIG11dGF0ZSwgQSBhcyBub29wLCBwIGFzIHByZXNldCwgdCBhcyByQUYsIHYgYXMgc2xvd0Nvbm5lY3Rpb24sIGwgYXMgc3RhYmxlSGFzaCwgdSBhcyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi9jb25maWctY29udGV4dC1jbGllbnQtdjdWT0ZvNjYubWpzJztcbmltcG9ydCAqIGFzIHJldmFsaWRhdGVFdmVudHMgZnJvbSAnLi9ldmVudHMubWpzJztcbmV4cG9ydCB7IHJldmFsaWRhdGVFdmVudHMgfTtcbmltcG9ydCB7IElORklOSVRFX1BSRUZJWCB9IGZyb20gJy4vY29uc3RhbnRzLm1qcyc7XG5leHBvcnQgeyBJTkZJTklURV9QUkVGSVggfSBmcm9tICcuL2NvbnN0YW50cy5tanMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzLm1qcyc7XG5cbi8vIEB0cy1leHBlY3QtZXJyb3JcbmNvbnN0IGVuYWJsZURldnRvb2xzID0gaXNXaW5kb3dEZWZpbmVkICYmIHdpbmRvdy5fX1NXUl9ERVZUT09MU19VU0VfXztcbmNvbnN0IHVzZSA9IGVuYWJsZURldnRvb2xzID8gd2luZG93Ll9fU1dSX0RFVlRPT0xTX1VTRV9fIDogW107XG5jb25zdCBzZXR1cERldlRvb2xzID0gKCk9PntcbiAgICBpZiAoZW5hYmxlRGV2dG9vbHMpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICB3aW5kb3cuX19TV1JfREVWVE9PTFNfUkVBQ1RfXyA9IFJlYWN0O1xuICAgIH1cbn07XG5cbmNvbnN0IG5vcm1hbGl6ZSA9IChhcmdzKT0+e1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGFyZ3NbMV0pID8gW1xuICAgICAgICBhcmdzWzBdLFxuICAgICAgICBhcmdzWzFdLFxuICAgICAgICBhcmdzWzJdIHx8IHt9XG4gICAgXSA6IFtcbiAgICAgICAgYXJnc1swXSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgKGFyZ3NbMV0gPT09IG51bGwgPyBhcmdzWzJdIDogYXJnc1sxXSkgfHwge31cbiAgICBdO1xufTtcblxuY29uc3QgdXNlU1dSQ29uZmlnID0gKCk9PntcbiAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGRlZmF1bHRDb25maWcsIHVzZUNvbnRleHQoU1dSQ29uZmlnQ29udGV4dCkpO1xufTtcblxuY29uc3QgcHJlbG9hZCA9IChrZXlfLCBmZXRjaGVyKT0+e1xuICAgIGNvbnN0IFtrZXksIGZuQXJnXSA9IHNlcmlhbGl6ZShrZXlfKTtcbiAgICBjb25zdCBbLCAsICwgUFJFTE9BRF0gPSBTV1JHbG9iYWxTdGF0ZS5nZXQoY2FjaGUpO1xuICAgIC8vIFByZXZlbnQgcHJlbG9hZCB0byBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMgYmVmb3JlIHVzZWQuXG4gICAgaWYgKFBSRUxPQURba2V5XSkgcmV0dXJuIFBSRUxPQURba2V5XTtcbiAgICBjb25zdCByZXEgPSBmZXRjaGVyKGZuQXJnKTtcbiAgICBQUkVMT0FEW2tleV0gPSByZXE7XG4gICAgcmV0dXJuIHJlcTtcbn07XG5jb25zdCBtaWRkbGV3YXJlID0gKHVzZVNXUk5leHQpPT4oa2V5XywgZmV0Y2hlcl8sIGNvbmZpZyk9PntcbiAgICAgICAgLy8gZmV0Y2hlciBtaWdodCBiZSBhIHN5bmMgZnVuY3Rpb24sIHNvIHRoaXMgc2hvdWxkIG5vdCBiZSBhbiBhc3luYyBmdW5jdGlvblxuICAgICAgICBjb25zdCBmZXRjaGVyID0gZmV0Y2hlcl8gJiYgKCguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgW2tleV0gPSBzZXJpYWxpemUoa2V5Xyk7XG4gICAgICAgICAgICBjb25zdCBbLCAsICwgUFJFTE9BRF0gPSBTV1JHbG9iYWxTdGF0ZS5nZXQoY2FjaGUpO1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKElORklOSVRFX1BSRUZJWCkpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSB3YW50IHRoZSBpbmZpbml0ZSBmZXRjaGVyIHRvIGJlIGNhbGxlZC5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGluZyBvZiB0aGUgUFJFTE9BRCBjYWNoZSBoYXBwZW5zIHRoZXJlLlxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaGVyXyguLi5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IFBSRUxPQURba2V5XTtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChyZXEpKSByZXR1cm4gZmV0Y2hlcl8oLi4uYXJncyk7XG4gICAgICAgICAgICBkZWxldGUgUFJFTE9BRFtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1c2VTV1JOZXh0KGtleV8sIGZldGNoZXIsIGNvbmZpZyk7XG4gICAgfTtcblxuY29uc3QgQlVJTFRfSU5fTUlERExFV0FSRSA9IHVzZS5jb25jYXQobWlkZGxld2FyZSk7XG5cbi8vIEl0J3MgdHJpY2t5IHRvIHBhc3MgZ2VuZXJpYyB0eXBlcyBhcyBwYXJhbWV0ZXJzLCBzbyB3ZSBqdXN0IGRpcmVjdGx5IG92ZXJyaWRlXG4vLyB0aGUgdHlwZXMgaGVyZS5cbmNvbnN0IHdpdGhBcmdzID0gKGhvb2spPT57XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVzZVNXUkFyZ3MoLi4uYXJncykge1xuICAgICAgICAvLyBHZXQgdGhlIGRlZmF1bHQgYW5kIGluaGVyaXRlZCBjb25maWd1cmF0aW9uLlxuICAgICAgICBjb25zdCBmYWxsYmFja0NvbmZpZyA9IHVzZVNXUkNvbmZpZygpO1xuICAgICAgICAvLyBOb3JtYWxpemUgYXJndW1lbnRzLlxuICAgICAgICBjb25zdCBba2V5LCBmbiwgX2NvbmZpZ10gPSBub3JtYWxpemUoYXJncyk7XG4gICAgICAgIC8vIE1lcmdlIGNvbmZpZ3VyYXRpb25zLlxuICAgICAgICBjb25zdCBjb25maWcgPSBtZXJnZUNvbmZpZ3MoZmFsbGJhY2tDb25maWcsIF9jb25maWcpO1xuICAgICAgICAvLyBBcHBseSBtaWRkbGV3YXJlXG4gICAgICAgIGxldCBuZXh0ID0gaG9vaztcbiAgICAgICAgY29uc3QgeyB1c2UgfSA9IGNvbmZpZztcbiAgICAgICAgY29uc3QgbWlkZGxld2FyZSA9ICh1c2UgfHwgW10pLmNvbmNhdChCVUlMVF9JTl9NSURETEVXQVJFKTtcbiAgICAgICAgZm9yKGxldCBpID0gbWlkZGxld2FyZS5sZW5ndGg7IGktLTspe1xuICAgICAgICAgICAgbmV4dCA9IG1pZGRsZXdhcmVbaV0obmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQoa2V5LCBmbiB8fCBjb25maWcuZmV0Y2hlciB8fCBudWxsLCBjb25maWcpO1xuICAgIH07XG59O1xuXG4vLyBBZGQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBhIGxpc3Qgb2Yga2V5ZWQgY2FsbGJhY2sgZnVuY3Rpb25zIGFuZCByZXR1cm5cbi8vIHRoZSB1bnN1YnNjcmliZSBmdW5jdGlvbi5cbmNvbnN0IHN1YnNjcmliZUNhbGxiYWNrID0gKGtleSwgY2FsbGJhY2tzLCBjYWxsYmFjayk9PntcbiAgICBjb25zdCBrZXllZFJldmFsaWRhdG9ycyA9IGNhbGxiYWNrc1trZXldIHx8IChjYWxsYmFja3Nba2V5XSA9IFtdKTtcbiAgICBrZXllZFJldmFsaWRhdG9ycy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCk9PntcbiAgICAgICAgY29uc3QgaW5kZXggPSBrZXllZFJldmFsaWRhdG9ycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIC8vIE8oMSk6IGZhc3RlciB0aGFuIHNwbGljZVxuICAgICAgICAgICAga2V5ZWRSZXZhbGlkYXRvcnNbaW5kZXhdID0ga2V5ZWRSZXZhbGlkYXRvcnNba2V5ZWRSZXZhbGlkYXRvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXllZFJldmFsaWRhdG9ycy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG4vLyBDcmVhdGUgYSBjdXN0b20gaG9vayB3aXRoIGEgbWlkZGxld2FyZVxuY29uc3Qgd2l0aE1pZGRsZXdhcmUgPSAodXNlU1dSLCBtaWRkbGV3YXJlKT0+e1xuICAgIHJldHVybiAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3QgW2tleSwgZm4sIGNvbmZpZ10gPSBub3JtYWxpemUoYXJncyk7XG4gICAgICAgIGNvbnN0IHVzZXMgPSAoY29uZmlnLnVzZSB8fCBbXSkuY29uY2F0KG1pZGRsZXdhcmUpO1xuICAgICAgICByZXR1cm4gdXNlU1dSKGtleSwgZm4sIHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIHVzZTogdXNlc1xuICAgICAgICB9KTtcbiAgICB9O1xufTtcblxuc2V0dXBEZXZUb29scygpO1xuXG5leHBvcnQgeyBTV1JHbG9iYWxTdGF0ZSwgY2FjaGUsIGRlZmF1bHRDb25maWcsIGlzRnVuY3Rpb24sIGlzVW5kZWZpbmVkLCBpc1dpbmRvd0RlZmluZWQsIG1lcmdlQ29uZmlncywgbWVyZ2VPYmplY3RzLCBub3JtYWxpemUsIHByZWxvYWQsIHNlcmlhbGl6ZSwgc3Vic2NyaWJlQ2FsbGJhY2ssIHVzZVNXUkNvbmZpZywgd2l0aEFyZ3MsIHdpdGhNaWRkbGV3YXJlIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlIH0gZnJvbSAndXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcyc7XG5pbXBvcnQgeyBPQkpFQ1QgYXMgT0JKRUNUJDEsIFNXUkNvbmZpZyBhcyBTV1JDb25maWckMSwgZGVmYXVsdENvbmZpZywgd2l0aEFyZ3MsIFNXUkdsb2JhbFN0YXRlLCBzZXJpYWxpemUgYXMgc2VyaWFsaXplJDEsIGNyZWF0ZUNhY2hlSGVscGVyLCBpc1VuZGVmaW5lZCBhcyBpc1VuZGVmaW5lZCQxLCBVTkRFRklORUQgYXMgVU5ERUZJTkVEJDEsIGlzUHJvbWlzZUxpa2UsIGdldFRpbWVzdGFtcCwgaXNGdW5jdGlvbiBhcyBpc0Z1bmN0aW9uJDEsIHJldmFsaWRhdGVFdmVudHMsIGludGVybmFsTXV0YXRlLCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LCBzdWJzY3JpYmVDYWxsYmFjaywgSVNfU0VSVkVSLCByQUYsIElTX1JFQUNUX0xFR0FDWSwgbWVyZ2VPYmplY3RzIH0gZnJvbSAnLi4vX2ludGVybmFsL2luZGV4Lm1qcyc7XG5leHBvcnQgeyBtdXRhdGUsIHByZWxvYWQsIHVzZVNXUkNvbmZpZyB9IGZyb20gJy4uL19pbnRlcm5hbC9pbmRleC5tanMnO1xuXG4vLyBTaGFyZWQgc3RhdGUgYmV0d2VlbiBzZXJ2ZXIgY29tcG9uZW50cyBhbmQgY2xpZW50IGNvbXBvbmVudHNcbmNvbnN0IG5vb3AgPSAoKT0+e307XG4vLyBVc2luZyBub29wKCkgYXMgdGhlIHVuZGVmaW5lZCB2YWx1ZSBhcyB1bmRlZmluZWQgY2FuIGJlIHJlcGxhY2VkXG4vLyBieSBzb21ldGhpbmcgZWxzZS4gUHJldHRpZXIgaWdub3JlIGFuZCBleHRyYSBwYXJlbnRoZXNlcyBhcmUgbmVjZXNzYXJ5IGhlcmVcbi8vIHRvIGVuc3VyZSB0aGF0IHRzYyBkb2Vzbid0IHJlbW92ZSB0aGUgX19OT0lOTElORV9fIGNvbW1lbnQuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFVOREVGSU5FRCA9IC8qI19fTk9JTkxJTkVfXyovIG5vb3AoKTtcbmNvbnN0IE9CSkVDVCA9IE9iamVjdDtcbmNvbnN0IGlzVW5kZWZpbmVkID0gKHYpPT52ID09PSBVTkRFRklORUQ7XG5jb25zdCBpc0Z1bmN0aW9uID0gKHYpPT50eXBlb2YgdiA9PSAnZnVuY3Rpb24nO1xuXG4vLyB1c2UgV2Vha01hcCB0byBzdG9yZSB0aGUgb2JqZWN0LT5rZXkgbWFwcGluZ1xuLy8gc28gdGhlIG9iamVjdHMgY2FuIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuLy8gV2Vha01hcCB1c2VzIGEgaGFzaHRhYmxlIHVuZGVyIHRoZSBob29kLCBzbyB0aGUgbG9va3VwXG4vLyBjb21wbGV4aXR5IGlzIGFsbW9zdCBPKDEpLlxuY29uc3QgdGFibGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgaXNPYmplY3RUeXBlID0gKHZhbHVlLCB0eXBlKT0+T0JKRUNULnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gYFtvYmplY3QgJHt0eXBlfV1gO1xuLy8gY291bnRlciBvZiB0aGUga2V5XG5sZXQgY291bnRlciA9IDA7XG4vLyBBIHN0YWJsZSBoYXNoIGltcGxlbWVudGF0aW9uIHRoYXQgc3VwcG9ydHM6XG4vLyAtIEZhc3QgYW5kIGVuc3VyZXMgdW5pcXVlIGhhc2ggcHJvcGVydGllc1xuLy8gLSBIYW5kbGVzIHVuc2VyaWFsaXphYmxlIHZhbHVlc1xuLy8gLSBIYW5kbGVzIG9iamVjdCBrZXkgb3JkZXJpbmdcbi8vIC0gR2VuZXJhdGVzIHNob3J0IHJlc3VsdHNcbi8vXG4vLyBUaGlzIGlzIG5vdCBhIHNlcmlhbGl6YXRpb24gZnVuY3Rpb24sIGFuZCB0aGUgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlXG4vLyBwYXJzYWJsZS5cbmNvbnN0IHN0YWJsZUhhc2ggPSAoYXJnKT0+e1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgYXJnO1xuICAgIGNvbnN0IGlzRGF0ZSA9IGlzT2JqZWN0VHlwZShhcmcsICdEYXRlJyk7XG4gICAgY29uc3QgaXNSZWdleCA9IGlzT2JqZWN0VHlwZShhcmcsICdSZWdFeHAnKTtcbiAgICBjb25zdCBpc1BsYWluT2JqZWN0ID0gaXNPYmplY3RUeXBlKGFyZywgJ09iamVjdCcpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGluZGV4O1xuICAgIGlmIChPQkpFQ1QoYXJnKSA9PT0gYXJnICYmICFpc0RhdGUgJiYgIWlzUmVnZXgpIHtcbiAgICAgICAgLy8gT2JqZWN0L2Z1bmN0aW9uLCBub3QgbnVsbC9kYXRlL3JlZ2V4cC4gVXNlIFdlYWtNYXAgdG8gc3RvcmUgdGhlIGlkIGZpcnN0LlxuICAgICAgICAvLyBJZiBpdCdzIGFscmVhZHkgaGFzaGVkLCBkaXJlY3RseSByZXR1cm4gdGhlIHJlc3VsdC5cbiAgICAgICAgcmVzdWx0ID0gdGFibGUuZ2V0KGFyZyk7XG4gICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBoYXNoIGZpcnN0IGZvciBjaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0aW9uIGJlZm9yZSBlbnRlcmluZyB0aGVcbiAgICAgICAgLy8gcmVjdXJzaXZlIGBzdGFibGVIYXNoYCBjYWxscy5cbiAgICAgICAgLy8gRm9yIG90aGVyIG9iamVjdHMgbGlrZSBzZXQgYW5kIG1hcCwgd2UgdXNlIHRoaXMgaWQgZGlyZWN0bHkgYXMgdGhlIGhhc2guXG4gICAgICAgIHJlc3VsdCA9ICsrY291bnRlciArICd+JztcbiAgICAgICAgdGFibGUuc2V0KGFyZywgcmVzdWx0KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgLy8gQXJyYXkuXG4gICAgICAgICAgICByZXN1bHQgPSAnQCc7XG4gICAgICAgICAgICBmb3IoaW5kZXggPSAwOyBpbmRleCA8IGFyZy5sZW5ndGg7IGluZGV4Kyspe1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdGFibGVIYXNoKGFyZ1tpbmRleF0pICsgJywnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUuc2V0KGFyZywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdCkge1xuICAgICAgICAgICAgLy8gT2JqZWN0LCBzb3J0IGtleXMuXG4gICAgICAgICAgICByZXN1bHQgPSAnIyc7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT0JKRUNULmtleXMoYXJnKS5zb3J0KCk7XG4gICAgICAgICAgICB3aGlsZSghaXNVbmRlZmluZWQoaW5kZXggPSBrZXlzLnBvcCgpKSl7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChhcmdbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gaW5kZXggKyAnOicgKyBzdGFibGVIYXNoKGFyZ1tpbmRleF0pICsgJywnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlLnNldChhcmcsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBpc0RhdGUgPyBhcmcudG9KU09OKCkgOiB0eXBlID09ICdzeW1ib2wnID8gYXJnLnRvU3RyaW5nKCkgOiB0eXBlID09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoYXJnKSA6ICcnICsgYXJnO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3Qgc2VyaWFsaXplID0gKGtleSk9PntcbiAgICBpZiAoaXNGdW5jdGlvbihrZXkpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBkZXBlbmRlbmNpZXMgbm90IHJlYWR5XG4gICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBVc2UgdGhlIG9yaWdpbmFsIGtleSBhcyB0aGUgYXJndW1lbnQgb2YgZmV0Y2hlci4gVGhpcyBjYW4gYmUgYSBzdHJpbmcgb3IgYW5cbiAgICAvLyBhcnJheSBvZiB2YWx1ZXMuXG4gICAgY29uc3QgYXJncyA9IGtleTtcbiAgICAvLyBJZiBrZXkgaXMgbm90IGZhbHN5LCBvciBub3QgYW4gZW1wdHkgYXJyYXksIGhhc2ggaXQuXG4gICAga2V5ID0gdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6IChBcnJheS5pc0FycmF5KGtleSkgPyBrZXkubGVuZ3RoIDoga2V5KSA/IHN0YWJsZUhhc2goa2V5KSA6ICcnO1xuICAgIHJldHVybiBbXG4gICAgICAgIGtleSxcbiAgICAgICAgYXJnc1xuICAgIF07XG59O1xuXG5jb25zdCB1bnN0YWJsZV9zZXJpYWxpemUgPSAoa2V5KT0+c2VyaWFsaXplKGtleSlbMF07XG5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwicmVhY3QvZXhwZXJpbWVudGFsXCIgLz5cbmNvbnN0IHVzZSA9IFJlYWN0LnVzZSB8fCAvLyBUaGlzIGV4dHJhIGdlbmVyaWMgaXMgdG8gYXZvaWQgVHlwZVNjcmlwdCBtaXhpbmcgdXAgdGhlIGdlbmVyaWMgYW5kIEpTWCBzeXRheFxuLy8gYW5kIGVtaXR0aW5nIGFuIGVycm9yLlxuLy8gV2UgYXNzdW1lIHRoYXQgdGhpcyBpcyBvbmx5IGZvciB0aGUgYHVzZSh0aGVuYWJsZSlgIGNhc2UsIG5vdCBgdXNlKGNvbnRleHQpYC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2FlZDAwZGFjZmI3OWQxN2M1MzIxODQwNGM1MmIxYzdhYTU5YzRhODkvcGFja2FnZXMvcmVhY3Qtc2VydmVyL3NyYy9SZWFjdEZpenpUaGVuYWJsZS5qcyNMNDVcbigodGhlbmFibGUpPT57XG4gICAgc3dpdGNoKHRoZW5hYmxlLnN0YXR1cyl7XG4gICAgICAgIGNhc2UgJ3BlbmRpbmcnOlxuICAgICAgICAgICAgdGhyb3cgdGhlbmFibGU7XG4gICAgICAgIGNhc2UgJ2Z1bGZpbGxlZCc6XG4gICAgICAgICAgICByZXR1cm4gdGhlbmFibGUudmFsdWU7XG4gICAgICAgIGNhc2UgJ3JlamVjdGVkJzpcbiAgICAgICAgICAgIHRocm93IHRoZW5hYmxlLnJlYXNvbjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoZW5hYmxlLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgIHRoZW5hYmxlLnRoZW4oKHYpPT57XG4gICAgICAgICAgICAgICAgdGhlbmFibGUuc3RhdHVzID0gJ2Z1bGZpbGxlZCc7XG4gICAgICAgICAgICAgICAgdGhlbmFibGUudmFsdWUgPSB2O1xuICAgICAgICAgICAgfSwgKGUpPT57XG4gICAgICAgICAgICAgICAgdGhlbmFibGUuc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgICAgICB0aGVuYWJsZS5yZWFzb24gPSBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyB0aGVuYWJsZTtcbiAgICB9XG59KTtcbmNvbnN0IFdJVEhfREVEVVBFID0ge1xuICAgIGRlZHVwZTogdHJ1ZVxufTtcbmNvbnN0IHVzZVNXUkhhbmRsZXIgPSAoX2tleSwgZmV0Y2hlciwgY29uZmlnKT0+e1xuICAgIGNvbnN0IHsgY2FjaGUsIGNvbXBhcmUsIHN1c3BlbnNlLCBmYWxsYmFja0RhdGEsIHJldmFsaWRhdGVPbk1vdW50LCByZXZhbGlkYXRlSWZTdGFsZSwgcmVmcmVzaEludGVydmFsLCByZWZyZXNoV2hlbkhpZGRlbiwgcmVmcmVzaFdoZW5PZmZsaW5lLCBrZWVwUHJldmlvdXNEYXRhIH0gPSBjb25maWc7XG4gICAgY29uc3QgW0VWRU5UX1JFVkFMSURBVE9SUywgTVVUQVRJT04sIEZFVENILCBQUkVMT0FEXSA9IFNXUkdsb2JhbFN0YXRlLmdldChjYWNoZSk7XG4gICAgLy8gYGtleWAgaXMgdGhlIGlkZW50aWZpZXIgb2YgdGhlIFNXUiBpbnRlcm5hbCBzdGF0ZSxcbiAgICAvLyBgZm5BcmdgIGlzIHRoZSBhcmd1bWVudC9hcmd1bWVudHMgcGFyc2VkIGZyb20gdGhlIGtleSwgd2hpY2ggd2lsbCBiZSBwYXNzZWRcbiAgICAvLyB0byB0aGUgZmV0Y2hlci5cbiAgICAvLyBBbGwgb2YgdGhlbSBhcmUgZGVyaXZlZCBmcm9tIGBfa2V5YC5cbiAgICBjb25zdCBba2V5LCBmbkFyZ10gPSBzZXJpYWxpemUkMShfa2V5KTtcbiAgICAvLyBJZiBpdCdzIHRoZSBpbml0aWFsIHJlbmRlciBvZiB0aGlzIGhvb2suXG4gICAgY29uc3QgaW5pdGlhbE1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIElmIHRoZSBob29rIGlzIHVubW91bnRlZCBhbHJlYWR5LiBUaGlzIHdpbGwgYmUgdXNlZCB0byBwcmV2ZW50IHNvbWUgZWZmZWN0c1xuICAgIC8vIHRvIGJlIGNhbGxlZCBhZnRlciB1bm1vdW50aW5nLlxuICAgIGNvbnN0IHVubW91bnRlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgLy8gUmVmcyB0byBrZWVwIHRoZSBrZXkgYW5kIGNvbmZpZy5cbiAgICBjb25zdCBrZXlSZWYgPSB1c2VSZWYoa2V5KTtcbiAgICBjb25zdCBmZXRjaGVyUmVmID0gdXNlUmVmKGZldGNoZXIpO1xuICAgIGNvbnN0IGNvbmZpZ1JlZiA9IHVzZVJlZihjb25maWcpO1xuICAgIGNvbnN0IGdldENvbmZpZyA9ICgpPT5jb25maWdSZWYuY3VycmVudDtcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICgpPT5nZXRDb25maWcoKS5pc1Zpc2libGUoKSAmJiBnZXRDb25maWcoKS5pc09ubGluZSgpO1xuICAgIGNvbnN0IFtnZXRDYWNoZSwgc2V0Q2FjaGUsIHN1YnNjcmliZUNhY2hlLCBnZXRJbml0aWFsQ2FjaGVdID0gY3JlYXRlQ2FjaGVIZWxwZXIoY2FjaGUsIGtleSk7XG4gICAgY29uc3Qgc3RhdGVEZXBlbmRlbmNpZXMgPSB1c2VSZWYoe30pLmN1cnJlbnQ7XG4gICAgLy8gUmVzb2x2ZSB0aGUgZmFsbGJhY2sgZGF0YSBmcm9tIGVpdGhlciB0aGUgaW5saW5lIG9wdGlvbiwgb3IgdGhlIGdsb2JhbCBwcm92aWRlci5cbiAgICAvLyBJZiBpdCdzIGEgcHJvbWlzZSwgd2Ugc2ltcGx5IGxldCBSZWFjdCBzdXNwZW5kIGFuZCByZXNvbHZlIGl0IGZvciB1cy5cbiAgICBjb25zdCBmYWxsYmFjayA9IGlzVW5kZWZpbmVkJDEoZmFsbGJhY2tEYXRhKSA/IGlzVW5kZWZpbmVkJDEoY29uZmlnLmZhbGxiYWNrKSA/IFVOREVGSU5FRCQxIDogY29uZmlnLmZhbGxiYWNrW2tleV0gOiBmYWxsYmFja0RhdGE7XG4gICAgY29uc3QgaXNFcXVhbCA9IChwcmV2LCBjdXJyZW50KT0+e1xuICAgICAgICBmb3IoY29uc3QgXyBpbiBzdGF0ZURlcGVuZGVuY2llcyl7XG4gICAgICAgICAgICBjb25zdCB0ID0gXztcbiAgICAgICAgICAgIGlmICh0ID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBhcmUocHJldlt0XSwgY3VycmVudFt0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCQxKHByZXZbdF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlKHJldHVybmVkRGF0YSwgY3VycmVudFt0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRbdF0gIT09IHByZXZbdF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFNuYXBzaG90ID0gdXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRTdGFydFJlcXVlc3QgPSAoKCk9PntcbiAgICAgICAgICAgIGlmICgha2V5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWZldGNoZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIC8vIElmIGByZXZhbGlkYXRlT25Nb3VudGAgaXMgc2V0LCB3ZSB0YWtlIHRoZSB2YWx1ZSBkaXJlY3RseS5cbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQkMShyZXZhbGlkYXRlT25Nb3VudCkpIHJldHVybiByZXZhbGlkYXRlT25Nb3VudDtcbiAgICAgICAgICAgIC8vIElmIGl0J3MgcGF1c2VkLCB3ZSBza2lwIHJldmFsaWRhdGlvbi5cbiAgICAgICAgICAgIGlmIChnZXRDb25maWcoKS5pc1BhdXNlZCgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc3VzcGVuc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiByZXZhbGlkYXRlSWZTdGFsZSAhPT0gZmFsc2U7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIC8vIEdldCB0aGUgY2FjaGUgYW5kIG1lcmdlIGl0IHdpdGggZXhwZWN0ZWQgc3RhdGVzLlxuICAgICAgICBjb25zdCBnZXRTZWxlY3RlZENhY2hlID0gKHN0YXRlKT0+e1xuICAgICAgICAgICAgLy8gV2Ugb25seSBzZWxlY3QgdGhlIG5lZWRlZCBmaWVsZHMgZnJvbSB0aGUgc3RhdGUuXG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdCA9IG1lcmdlT2JqZWN0cyhzdGF0ZSk7XG4gICAgICAgICAgICBkZWxldGUgc25hcHNob3QuX2s7XG4gICAgICAgICAgICBpZiAoIXNob3VsZFN0YXJ0UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbmFwc2hvdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAuLi5zbmFwc2hvdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2FjaGVkRGF0YSA9IGdldENhY2hlKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gZ2V0SW5pdGlhbENhY2hlKCk7XG4gICAgICAgIGNvbnN0IGNsaWVudFNuYXBzaG90ID0gZ2V0U2VsZWN0ZWRDYWNoZShjYWNoZWREYXRhKTtcbiAgICAgICAgY29uc3Qgc2VydmVyU25hcHNob3QgPSBjYWNoZWREYXRhID09PSBpbml0aWFsRGF0YSA/IGNsaWVudFNuYXBzaG90IDogZ2V0U2VsZWN0ZWRDYWNoZShpbml0aWFsRGF0YSk7XG4gICAgICAgIC8vIFRvIG1ha2Ugc3VyZSB0aGF0IHdlIGFyZSByZXR1cm5pbmcgdGhlIHNhbWUgb2JqZWN0IHJlZmVyZW5jZSB0byBhdm9pZFxuICAgICAgICAvLyB1bm5lY2Vzc2FyeSByZS1yZW5kZXJzLCB3ZSBrZWVwIHRoZSBwcmV2aW91cyBzbmFwc2hvdCBhbmQgdXNlIGRlZXBcbiAgICAgICAgLy8gY29tcGFyaXNvbiB0byBjaGVjayBpZiB3ZSBuZWVkIHRvIHJldHVybiBhIG5ldyBvbmUuXG4gICAgICAgIGxldCBtZW1vcml6ZWRTbmFwc2hvdCA9IGNsaWVudFNuYXBzaG90O1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTbmFwc2hvdCA9IGdldFNlbGVjdGVkQ2FjaGUoZ2V0Q2FjaGUoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGFyZVJlc3VsdCA9IGlzRXF1YWwobmV3U25hcHNob3QsIG1lbW9yaXplZFNuYXBzaG90KTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZW50YWxseSwgd2Ugc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhlIGBtZW1vcml6ZWRTbmFwc2hvdGAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAvLyBhcyB0aGVyZSdzIG5vIGNoYW5nZSBiZXR3ZWVuIHRoZSBuZXcgYW5kIG9sZCBzbmFwc2hvdHMuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhvd2V2ZXIsIHNpbmNlIHRoZSBgaXNFcXVhbGAgZnVuY3Rpb24gb25seSBjb21wYXJlcyBzZWxlY3RlZCBmaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB2YWx1ZXMgb2YgdGhlIHVuc2VsZWN0ZWQgZmllbGRzIG1pZ2h0IGJlIGNoYW5nZWQuIFRoYXQnc1xuICAgICAgICAgICAgICAgICAgICAvLyBzaW1wbHkgYmVjYXVzZSB3ZSBkaWRuJ3QgdHJhY2sgdGhlbS5cbiAgICAgICAgICAgICAgICAgICAgLy8gVG8gc3VwcG9ydCB0aGUgY2FzZSBpbiBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL3N3ci9wdWxsLzI1NzYsXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIHRoZXNlIGZpZWxkcyBpbiB0aGUgYG1lbW9yaXplZFNuYXBzaG90YCB0b29cbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBkaXJlY3QgbXV0YXRpb25zIHRvIGVuc3VyZSB0aGUgc25hcHNob3QgaXMgYWx3YXlzIHVwLXRvLWRhdGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlbiBmb3IgdGhlIHVuc2VsZWN0ZWQgZmllbGRzLCBidXQgb25seSB0cmlnZ2VyIHJlLXJlbmRlcnMgd2hlblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2VsZWN0ZWQgZmllbGRzIGFyZSBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgICAgICBtZW1vcml6ZWRTbmFwc2hvdC5kYXRhID0gbmV3U25hcHNob3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbWVtb3JpemVkU25hcHNob3QuaXNMb2FkaW5nID0gbmV3U25hcHNob3QuaXNMb2FkaW5nO1xuICAgICAgICAgICAgICAgICAgICBtZW1vcml6ZWRTbmFwc2hvdC5pc1ZhbGlkYXRpbmcgPSBuZXdTbmFwc2hvdC5pc1ZhbGlkYXRpbmc7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9yaXplZFNuYXBzaG90LmVycm9yID0gbmV3U25hcHNob3QuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW1vcml6ZWRTbmFwc2hvdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZW1vcml6ZWRTbmFwc2hvdCA9IG5ld1NuYXBzaG90O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3U25hcHNob3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpPT5zZXJ2ZXJTbmFwc2hvdFxuICAgICAgICBdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBrZXlcbiAgICBdKTtcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RhdGUgdGhhdCBTV1Igc2hvdWxkIHJldHVybi5cbiAgICBjb25zdCBjYWNoZWQgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSh1c2VDYWxsYmFjaygoY2FsbGJhY2spPT5zdWJzY3JpYmVDYWNoZShrZXksIChjdXJyZW50LCBwcmV2KT0+e1xuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHByZXYsIGN1cnJlbnQpKSBjYWxsYmFjaygpO1xuICAgICAgICB9KSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtcbiAgICAgICAgY2FjaGUsXG4gICAgICAgIGtleVxuICAgIF0pLCBnZXRTbmFwc2hvdFswXSwgZ2V0U25hcHNob3RbMV0pO1xuICAgIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gIWluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaGFzUmV2YWxpZGF0b3IgPSBFVkVOVF9SRVZBTElEQVRPUlNba2V5XSAmJiBFVkVOVF9SRVZBTElEQVRPUlNba2V5XS5sZW5ndGggPiAwO1xuICAgIGNvbnN0IGNhY2hlZERhdGEgPSBjYWNoZWQuZGF0YTtcbiAgICBjb25zdCBkYXRhID0gaXNVbmRlZmluZWQkMShjYWNoZWREYXRhKSA/IGZhbGxiYWNrICYmIGlzUHJvbWlzZUxpa2UoZmFsbGJhY2spID8gdXNlKGZhbGxiYWNrKSA6IGZhbGxiYWNrIDogY2FjaGVkRGF0YTtcbiAgICBjb25zdCBlcnJvciA9IGNhY2hlZC5lcnJvcjtcbiAgICAvLyBVc2UgYSByZWYgdG8gc3RvcmUgcHJldmlvdXNseSByZXR1cm5lZCBkYXRhLiBVc2UgdGhlIGluaXRpYWwgZGF0YSBhcyBpdHMgaW5pdGlhbCB2YWx1ZS5cbiAgICBjb25zdCBsYWdneURhdGFSZWYgPSB1c2VSZWYoZGF0YSk7XG4gICAgY29uc3QgcmV0dXJuZWREYXRhID0ga2VlcFByZXZpb3VzRGF0YSA/IGlzVW5kZWZpbmVkJDEoY2FjaGVkRGF0YSkgPyBpc1VuZGVmaW5lZCQxKGxhZ2d5RGF0YVJlZi5jdXJyZW50KSA/IGRhdGEgOiBsYWdneURhdGFSZWYuY3VycmVudCA6IGNhY2hlZERhdGEgOiBkYXRhO1xuICAgIC8vIC0gU3VzcGVuc2UgbW9kZSBhbmQgdGhlcmUncyBzdGFsZSBkYXRhIGZvciB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgLy8gLSBOb3Qgc3VzcGVuc2UgbW9kZSBhbmQgdGhlcmUgaXMgbm8gZmFsbGJhY2sgZGF0YSBhbmQgYHJldmFsaWRhdGVJZlN0YWxlYCBpcyBlbmFibGVkLlxuICAgIC8vIC0gYHJldmFsaWRhdGVJZlN0YWxlYCBpcyBlbmFibGVkIGJ1dCBgZGF0YWAgaXMgbm90IGRlZmluZWQuXG4gICAgY29uc3Qgc2hvdWxkRG9Jbml0aWFsUmV2YWxpZGF0aW9uID0gKCgpPT57XG4gICAgICAgIC8vIGlmIGEga2V5IGFscmVhZHkgaGFzIHJldmFsaWRhdG9ycyBhbmQgYWxzbyBoYXMgZXJyb3IsIHdlIHNob3VsZCBub3QgdHJpZ2dlciByZXZhbGlkYXRpb25cbiAgICAgICAgaWYgKGhhc1JldmFsaWRhdG9yICYmICFpc1VuZGVmaW5lZCQxKGVycm9yKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBJZiBgcmV2YWxpZGF0ZU9uTW91bnRgIGlzIHNldCwgd2UgdGFrZSB0aGUgdmFsdWUgZGlyZWN0bHkuXG4gICAgICAgIGlmIChpc0luaXRpYWxNb3VudCAmJiAhaXNVbmRlZmluZWQkMShyZXZhbGlkYXRlT25Nb3VudCkpIHJldHVybiByZXZhbGlkYXRlT25Nb3VudDtcbiAgICAgICAgLy8gSWYgaXQncyBwYXVzZWQsIHdlIHNraXAgcmV2YWxpZGF0aW9uLlxuICAgICAgICBpZiAoZ2V0Q29uZmlnKCkuaXNQYXVzZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBVbmRlciBzdXNwZW5zZSBtb2RlLCBpdCB3aWxsIGFsd2F5cyBmZXRjaCBvbiByZW5kZXIgaWYgdGhlcmUgaXMgbm9cbiAgICAgICAgLy8gc3RhbGUgZGF0YSBzbyBubyBuZWVkIHRvIHJldmFsaWRhdGUgaW1tZWRpYXRlbHkgbW91bnQgaXQgYWdhaW4uXG4gICAgICAgIC8vIElmIGRhdGEgZXhpc3RzLCBvbmx5IHJldmFsaWRhdGUgaWYgYHJldmFsaWRhdGVJZlN0YWxlYCBpcyB0cnVlLlxuICAgICAgICBpZiAoc3VzcGVuc2UpIHJldHVybiBpc1VuZGVmaW5lZCQxKGRhdGEpID8gZmFsc2UgOiByZXZhbGlkYXRlSWZTdGFsZTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gc3RhbGUgZGF0YSwgd2UgbmVlZCB0byByZXZhbGlkYXRlIHdoZW4gbW91bnQ7XG4gICAgICAgIC8vIElmIGByZXZhbGlkYXRlSWZTdGFsZWAgaXMgc2V0IHRvIHRydWUsIHdlIHdpbGwgYWx3YXlzIHJldmFsaWRhdGUuXG4gICAgICAgIHJldHVybiBpc1VuZGVmaW5lZCQxKGRhdGEpIHx8IHJldmFsaWRhdGVJZlN0YWxlO1xuICAgIH0pKCk7XG4gICAgLy8gUmVzb2x2ZSB0aGUgZGVmYXVsdCB2YWxpZGF0aW5nIHN0YXRlOlxuICAgIC8vIElmIGl0J3MgYWJsZSB0byB2YWxpZGF0ZSwgYW5kIGl0IHNob3VsZCByZXZhbGlkYXRlIHdoZW4gbW91bnQsIHRoaXMgd2lsbCBiZSB0cnVlLlxuICAgIGNvbnN0IGRlZmF1bHRWYWxpZGF0aW5nU3RhdGUgPSAhIShrZXkgJiYgZmV0Y2hlciAmJiBpc0luaXRpYWxNb3VudCAmJiBzaG91bGREb0luaXRpYWxSZXZhbGlkYXRpb24pO1xuICAgIGNvbnN0IGlzVmFsaWRhdGluZyA9IGlzVW5kZWZpbmVkJDEoY2FjaGVkLmlzVmFsaWRhdGluZykgPyBkZWZhdWx0VmFsaWRhdGluZ1N0YXRlIDogY2FjaGVkLmlzVmFsaWRhdGluZztcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBpc1VuZGVmaW5lZCQxKGNhY2hlZC5pc0xvYWRpbmcpID8gZGVmYXVsdFZhbGlkYXRpbmdTdGF0ZSA6IGNhY2hlZC5pc0xvYWRpbmc7XG4gICAgLy8gVGhlIHJldmFsaWRhdGlvbiBmdW5jdGlvbiBpcyBhIGNhcmVmdWxseSBjcmFmdGVkIHdyYXBwZXIgb2YgdGhlIG9yaWdpbmFsXG4gICAgLy8gYGZldGNoZXJgLCB0byBjb3JyZWN0bHkgaGFuZGxlIHRoZSBtYW55IGVkZ2UgY2FzZXMuXG4gICAgY29uc3QgcmV2YWxpZGF0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jIChyZXZhbGlkYXRlT3B0cyk9PntcbiAgICAgICAgY29uc3QgY3VycmVudEZldGNoZXIgPSBmZXRjaGVyUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICgha2V5IHx8ICFjdXJyZW50RmV0Y2hlciB8fCB1bm1vdW50ZWRSZWYuY3VycmVudCB8fCBnZXRDb25maWcoKS5pc1BhdXNlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld0RhdGE7XG4gICAgICAgIGxldCBzdGFydEF0O1xuICAgICAgICBsZXQgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9wdHMgPSByZXZhbGlkYXRlT3B0cyB8fCB7fTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gb25nb2luZyBjb25jdXJyZW50IHJlcXVlc3QsIG9yIGBkZWR1cGVgIGlzIG5vdCBzZXQsIGFcbiAgICAgICAgLy8gbmV3IHJlcXVlc3Qgc2hvdWxkIGJlIGluaXRpYXRlZC5cbiAgICAgICAgY29uc3Qgc2hvdWxkU3RhcnROZXdSZXF1ZXN0ID0gIUZFVENIW2tleV0gfHwgIW9wdHMuZGVkdXBlO1xuICAgICAgICAvKlxuICAgICAgICAgRm9yIFJlYWN0IDE3XG4gICAgICAgICBEbyB1bm1vdW50IGNoZWNrIGZvciBjYWxsczpcbiAgICAgICAgIElmIGtleSBoYXMgY2hhbmdlZCBkdXJpbmcgdGhlIHJldmFsaWRhdGlvbiwgb3IgdGhlIGNvbXBvbmVudCBoYXMgYmVlblxuICAgICAgICAgdW5tb3VudGVkLCBvbGQgZGlzcGF0Y2ggYW5kIG9sZCBldmVudCBjYWxsYmFja3Mgc2hvdWxkIG5vdCB0YWtlIGFueVxuICAgICAgICAgZWZmZWN0XG5cbiAgICAgICAgRm9yIFJlYWN0IDE4XG4gICAgICAgIG9ubHkgY2hlY2sgaWYga2V5IGhhcyBjaGFuZ2VkXG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHdnL3JlYWN0LTE4L2Rpc2N1c3Npb25zLzgyXG4gICAgICAqLyBjb25zdCBjYWxsYmFja1NhZmVndWFyZCA9ICgpPT57XG4gICAgICAgICAgICBpZiAoSVNfUkVBQ1RfTEVHQUNZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF1bm1vdW50ZWRSZWYuY3VycmVudCAmJiBrZXkgPT09IGtleVJlZi5jdXJyZW50ICYmIGluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5ID09PSBrZXlSZWYuY3VycmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGhlIGZpbmFsIHN0YXRlIG9iamVjdCB3aGVuIHRoZSByZXF1ZXN0IGZpbmlzaGVzLlxuICAgICAgICBjb25zdCBmaW5hbFN0YXRlID0ge1xuICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmluaXNoUmVxdWVzdEFuZFVwZGF0ZVN0YXRlID0gKCk9PntcbiAgICAgICAgICAgIHNldENhY2hlKGZpbmFsU3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjbGVhbnVwU3RhdGUgPSAoKT0+e1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBzdGlsbCB0aGUgc2FtZSByZXF1ZXN0IGJlZm9yZSBkZWxldGluZyBpdC5cbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gRkVUQ0hba2V5XTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0SW5mbyAmJiByZXF1ZXN0SW5mb1sxXSA9PT0gc3RhcnRBdCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBGRVRDSFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBTdGFydCBmZXRjaGluZy4gQ2hhbmdlIHRoZSBgaXNWYWxpZGF0aW5nYCBzdGF0ZSwgdXBkYXRlIHRoZSBjYWNoZS5cbiAgICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIC8vIEl0IGlzIGluIHRoZSBgaXNMb2FkaW5nYCBzdGF0ZSwgaWYgYW5kIG9ubHkgaWYgdGhlcmUgaXMgbm8gY2FjaGVkIGRhdGEuXG4gICAgICAgIC8vIFRoaXMgYnlwYXNzZXMgZmFsbGJhY2sgZGF0YSBhbmQgbGFnZ3kgZGF0YS5cbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkJDEoZ2V0Q2FjaGUoKS5kYXRhKSkge1xuICAgICAgICAgICAgaW5pdGlhbFN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydE5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBzZXRDYWNoZShpbml0aWFsU3RhdGUpO1xuICAgICAgICAgICAgICAgIC8vIElmIG5vIGNhY2hlIGlzIGJlaW5nIHJlbmRlcmVkIGN1cnJlbnRseSAoaXQgc2hvd3MgYSBibGFuayBwYWdlKSxcbiAgICAgICAgICAgICAgICAvLyB3ZSB0cmlnZ2VyIHRoZSBsb2FkaW5nIHNsb3cgZXZlbnQuXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5sb2FkaW5nVGltZW91dCAmJiBpc1VuZGVmaW5lZCQxKGdldENhY2hlKCkuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRpbmcgJiYgY2FsbGJhY2tTYWZlZ3VhcmQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uTG9hZGluZ1Nsb3coa2V5LCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBjb25maWcubG9hZGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdGFydCB0aGUgcmVxdWVzdCBhbmQgc2F2ZSB0aGUgdGltZXN0YW1wLlxuICAgICAgICAgICAgICAgIC8vIEtleSBtdXN0IGJlIHRydXRoeSBpZiBlbnRlcmluZyBoZXJlLlxuICAgICAgICAgICAgICAgIEZFVENIW2tleV0gPSBbXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGZXRjaGVyKGZuQXJnKSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGltZXN0YW1wKClcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgb25nb2luZyByZXF1ZXN0IGlzIGRvbmUuIERlZHVwbGljYXRpb24gaXMgYWxzb1xuICAgICAgICAgICAgLy8gY29uc2lkZXJlZCBoZXJlLlxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgW25ld0RhdGEsIHN0YXJ0QXRdID0gRkVUQ0hba2V5XTtcbiAgICAgICAgICAgIG5ld0RhdGEgPSBhd2FpdCBuZXdEYXRhO1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IGlzbid0IGludGVycnVwdGVkLCBjbGVhbiBpdCB1cCBhZnRlciB0aGVcbiAgICAgICAgICAgICAgICAvLyBkZWR1cGxpY2F0aW9uIGludGVydmFsLlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2xlYW51cFN0YXRlLCBjb25maWcuZGVkdXBpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdyZSBvdGhlciBvbmdvaW5nIHJlcXVlc3QocyksIHN0YXJ0ZWQgYWZ0ZXIgdGhlIGN1cnJlbnQgb25lLFxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBpZ25vcmUgdGhlIGN1cnJlbnQgb25lIHRvIGF2b2lkIHBvc3NpYmxlIHJhY2UgY29uZGl0aW9uczpcbiAgICAgICAgICAgIC8vICAgcmVxMS0tLS0tLS0tLS0tLS0tLS0tLT5yZXMxICAgICAgICAoY3VycmVudCBvbmUpXG4gICAgICAgICAgICAvLyAgICAgICAgcmVxMi0tLS0tLS0tLS0tLS0tLS0+cmVzMlxuICAgICAgICAgICAgLy8gdGhlIHJlcXVlc3QgdGhhdCBmaXJlZCBsYXRlciB3aWxsIGFsd2F5cyBiZSBrZXB0LlxuICAgICAgICAgICAgLy8gVGhlIHRpbWVzdGFtcCBtYXliZSBiZSBgdW5kZWZpbmVkYCBvciBhIG51bWJlclxuICAgICAgICAgICAgaWYgKCFGRVRDSFtrZXldIHx8IEZFVENIW2tleV1bMV0gIT09IHN0YXJ0QXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja1NhZmVndWFyZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDb25maWcoKS5vbkRpc2NhcmRlZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENsZWFyIGVycm9yLlxuICAgICAgICAgICAgZmluYWxTdGF0ZS5lcnJvciA9IFVOREVGSU5FRCQxO1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUncmUgb3RoZXIgbXV0YXRpb25zKHMpLCB0aGF0IG92ZXJsYXBwZWQgd2l0aCB0aGUgY3VycmVudCByZXZhbGlkYXRpb246XG4gICAgICAgICAgICAvLyBjYXNlIDE6XG4gICAgICAgICAgICAvLyAgIHJlcS0tLS0tLS0tLS0tLS0tLS0tLT5yZXNcbiAgICAgICAgICAgIC8vICAgICAgIG11dGF0ZS0tLS0tLT5lbmRcbiAgICAgICAgICAgIC8vIGNhc2UgMjpcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVxLS0tLS0tLS0tLS0tPnJlc1xuICAgICAgICAgICAgLy8gICBtdXRhdGUtLS0tLS0+ZW5kXG4gICAgICAgICAgICAvLyBjYXNlIDM6XG4gICAgICAgICAgICAvLyAgIHJlcS0tLS0tLS0tLS0tLS0tLS0tLT5yZXNcbiAgICAgICAgICAgIC8vICAgICAgIG11dGF0ZS0tLS0tLS0uLi4tLS0tLS0tLS0tPlxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBpZ25vcmUgdGhlIHJldmFsaWRhdGlvbiByZXN1bHQgKHJlcykgYmVjYXVzZSBpdCdzIG5vIGxvbmdlciBmcmVzaC5cbiAgICAgICAgICAgIC8vIG1lYW53aGlsZSwgYSBuZXcgcmV2YWxpZGF0aW9uIHNob3VsZCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbXV0YXRpb24gZW5kcy5cbiAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uSW5mbyA9IE1VVEFUSU9OW2tleV07XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkJDEobXV0YXRpb25JbmZvKSAmJiAvLyBjYXNlIDFcbiAgICAgICAgICAgIChzdGFydEF0IDw9IG11dGF0aW9uSW5mb1swXSB8fCAvLyBjYXNlIDJcbiAgICAgICAgICAgIHN0YXJ0QXQgPD0gbXV0YXRpb25JbmZvWzFdIHx8IC8vIGNhc2UgM1xuICAgICAgICAgICAgbXV0YXRpb25JbmZvWzFdID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGZpbmlzaFJlcXVlc3RBbmRVcGRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRTdGFydE5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrU2FmZWd1YXJkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uRGlzY2FyZGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVlcCBjb21wYXJlIHdpdGggdGhlIGxhdGVzdCBzdGF0ZSB0byBhdm9pZCBleHRyYSByZS1yZW5kZXJzLlxuICAgICAgICAgICAgLy8gRm9yIGxvY2FsIHN0YXRlLCBjb21wYXJlIGFuZCBhc3NpZ24uXG4gICAgICAgICAgICBjb25zdCBjYWNoZURhdGEgPSBnZXRDYWNoZSgpLmRhdGE7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgY29tcGFyZSBmbiBjb3VsZCBiZSBjdXN0b20gZm5cbiAgICAgICAgICAgIC8vIGNhY2hlRGF0YSBtaWdodCBiZSBkaWZmZXJlbnQgZnJvbSBuZXdEYXRhIGV2ZW4gd2hlbiBjb21wYXJlIGZuIHJldHVybnMgVHJ1ZVxuICAgICAgICAgICAgZmluYWxTdGF0ZS5kYXRhID0gY29tcGFyZShjYWNoZURhdGEsIG5ld0RhdGEpID8gY2FjaGVEYXRhIDogbmV3RGF0YTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHN1Y2Nlc3NmdWwgY2FsbGJhY2sgaWYgaXQncyB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydE5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tTYWZlZ3VhcmQoKSkge1xuICAgICAgICAgICAgICAgICAgICBnZXRDb25maWcoKS5vblN1Y2Nlc3MobmV3RGF0YSwga2V5LCBjb25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjbGVhbnVwU3RhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBnZXRDb25maWcoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hvdWxkUmV0cnlPbkVycm9yIH0gPSBjdXJyZW50Q29uZmlnO1xuICAgICAgICAgICAgLy8gTm90IHBhdXNlZCwgd2UgY29udGludWUgaGFuZGxpbmcgdGhlIGVycm9yLiBPdGhlcndpc2UsIGRpc2NhcmQgaXQuXG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRDb25maWcuaXNQYXVzZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIEdldCBhIG5ldyBlcnJvciwgZG9uJ3QgdXNlIGRlZXAgY29tcGFyaXNvbiBmb3IgZXJyb3JzLlxuICAgICAgICAgICAgICAgIGZpbmFsU3RhdGUuZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgLy8gRXJyb3IgZXZlbnQgYW5kIHJldHJ5IGxvZ2ljLiBPbmx5IGZvciB0aGUgYWN0dWFsIHJlcXVlc3QsIG5vdFxuICAgICAgICAgICAgICAgIC8vIGRlZHVwZWQgb25lcy5cbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0ICYmIGNhbGxiYWNrU2FmZWd1YXJkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbmZpZy5vbkVycm9yKGVyciwga2V5LCBjdXJyZW50Q29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFJldHJ5T25FcnJvciA9PT0gdHJ1ZSB8fCBpc0Z1bmN0aW9uJDEoc2hvdWxkUmV0cnlPbkVycm9yKSAmJiBzaG91bGRSZXRyeU9uRXJyb3IoZXJyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRDb25maWcoKS5yZXZhbGlkYXRlT25Gb2N1cyB8fCAhZ2V0Q29uZmlnKCkucmV2YWxpZGF0ZU9uUmVjb25uZWN0IHx8IGlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGluYWN0aXZlLCBzdG9wLiBJdCB3aWxsIGF1dG8tcmV2YWxpZGF0ZSB3aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVmb2N1c2luZyBvciByZWNvbm5lY3RpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiByZXRyeWluZywgZGVkdXBsaWNhdGlvbiBpcyBhbHdheXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29uZmlnLm9uRXJyb3JSZXRyeShlcnIsIGtleSwgY3VycmVudENvbmZpZywgKF9vcHRzKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZhbGlkYXRvcnMgPSBFVkVOVF9SRVZBTElEQVRPUlNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldmFsaWRhdG9ycyAmJiByZXZhbGlkYXRvcnNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdG9yc1swXShyZXZhbGlkYXRlRXZlbnRzLkVSUk9SX1JFVkFMSURBVEVfRVZFTlQsIF9vcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnlDb3VudDogKG9wdHMucmV0cnlDb3VudCB8fCAwKSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZHVwZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1hcmsgbG9hZGluZyBhcyBzdG9wcGVkLlxuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBob29rJ3Mgc3RhdGUuXG4gICAgICAgIGZpbmlzaFJlcXVlc3RBbmRVcGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAvLyBgc2V0U3RhdGVgIGlzIGltbXV0YWJsZSwgYW5kIGBldmVudHNDYWxsYmFja2AsIGBmbkFyZ2AsIGFuZFxuICAgIC8vIGBrZXlWYWxpZGF0aW5nYCBhcmUgZGVwZW5kaW5nIG9uIGBrZXlgLCBzbyB3ZSBjYW4gZXhjbHVkZSB0aGVtIGZyb21cbiAgICAvLyB0aGUgZGVwcyBhcnJheS5cbiAgICAvL1xuICAgIC8vIEZJWE1FOlxuICAgIC8vIGBmbmAgYW5kIGBjb25maWdgIG1pZ2h0IGJlIGNoYW5nZWQgZHVyaW5nIHRoZSBsaWZlY3ljbGUsXG4gICAgLy8gYnV0IHRoZXkgbWlnaHQgYmUgY2hhbmdlZCBldmVyeSByZW5kZXIgbGlrZSB0aGlzLlxuICAgIC8vIGB1c2VTV1IoJ2tleScsICgpID0+IGZldGNoKCcvYXBpLycpLCB7IHN1c3BlbnNlOiB0cnVlIH0pYFxuICAgIC8vIFNvIHdlIG9taXQgdGhlIHZhbHVlcyBmcm9tIHRoZSBkZXBzIGFycmF5XG4gICAgLy8gZXZlbiB0aG91Z2ggaXQgbWlnaHQgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvcnMuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtcbiAgICAgICAga2V5LFxuICAgICAgICBjYWNoZVxuICAgIF0pO1xuICAgIC8vIFNpbWlsYXIgdG8gdGhlIGdsb2JhbCBtdXRhdGUgYnV0IGJvdW5kIHRvIHRoZSBjdXJyZW50IGNhY2hlIGFuZCBrZXkuXG4gICAgLy8gYGNhY2hlYCBpc24ndCBhbGxvd2VkIHRvIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmVjeWNsZS5cbiAgICBjb25zdCBib3VuZE11dGF0ZSA9IHVzZUNhbGxiYWNrKC8vIFVzZSBjYWxsYmFjayB0byBtYWtlIHN1cmUgYGtleVJlZi5jdXJyZW50YCByZXR1cm5zIGxhdGVzdCByZXN1bHQgZXZlcnkgdGltZVxuICAgICguLi5hcmdzKT0+e1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxNdXRhdGUoY2FjaGUsIGtleVJlZi5jdXJyZW50LCAuLi5hcmdzKTtcbiAgICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW10pO1xuICAgIC8vIFRoZSBsb2dpYyBmb3IgdXBkYXRpbmcgcmVmcy5cbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpPT57XG4gICAgICAgIGZldGNoZXJSZWYuY3VycmVudCA9IGZldGNoZXI7XG4gICAgICAgIGNvbmZpZ1JlZi5jdXJyZW50ID0gY29uZmlnO1xuICAgICAgICAvLyBIYW5kbGUgbGFnZ3kgZGF0YSB1cGRhdGVzLiBJZiB0aGVyZSdzIGNhY2hlZCBkYXRhIG9mIHRoZSBjdXJyZW50IGtleSxcbiAgICAgICAgLy8gaXQnbGwgYmUgdGhlIGNvcnJlY3QgcmVmZXJlbmNlLlxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkJDEoY2FjaGVkRGF0YSkpIHtcbiAgICAgICAgICAgIGxhZ2d5RGF0YVJlZi5jdXJyZW50ID0gY2FjaGVkRGF0YTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEFmdGVyIG1vdW50ZWQgb3Iga2V5IGNoYW5nZWQuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWtleSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzb2Z0UmV2YWxpZGF0ZSA9IHJldmFsaWRhdGUuYmluZChVTkRFRklORUQkMSwgV0lUSF9ERURVUEUpO1xuICAgICAgICBsZXQgbmV4dEZvY3VzUmV2YWxpZGF0ZWRBdCA9IDA7XG4gICAgICAgIGlmIChnZXRDb25maWcoKS5yZXZhbGlkYXRlT25Gb2N1cykge1xuICAgICAgICAgICAgY29uc3QgaW5pdE5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBuZXh0Rm9jdXNSZXZhbGlkYXRlZEF0ID0gaW5pdE5vdyArIGdldENvbmZpZygpLmZvY3VzVGhyb3R0bGVJbnRlcnZhbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeHBvc2UgcmV2YWxpZGF0b3JzIHRvIGdsb2JhbCBldmVudCBsaXN0ZW5lcnMuIFNvIHdlIGNhbiB0cmlnZ2VyXG4gICAgICAgIC8vIHJldmFsaWRhdGlvbiBmcm9tIHRoZSBvdXRzaWRlLlxuICAgICAgICBjb25zdCBvblJldmFsaWRhdGUgPSAodHlwZSwgb3B0cyA9IHt9KT0+e1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gcmV2YWxpZGF0ZUV2ZW50cy5GT0NVU19FVkVOVCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGdldENvbmZpZygpLnJldmFsaWRhdGVPbkZvY3VzICYmIG5vdyA+IG5leHRGb2N1c1JldmFsaWRhdGVkQXQgJiYgaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Rm9jdXNSZXZhbGlkYXRlZEF0ID0gbm93ICsgZ2V0Q29uZmlnKCkuZm9jdXNUaHJvdHRsZUludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSByZXZhbGlkYXRlRXZlbnRzLlJFQ09OTkVDVF9FVkVOVCkge1xuICAgICAgICAgICAgICAgIGlmIChnZXRDb25maWcoKS5yZXZhbGlkYXRlT25SZWNvbm5lY3QgJiYgaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSByZXZhbGlkYXRlRXZlbnRzLk1VVEFURV9FVkVOVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gcmV2YWxpZGF0ZUV2ZW50cy5FUlJPUl9SRVZBTElEQVRFX0VWRU5UKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldmFsaWRhdGUob3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3ViRXZlbnRzID0gc3Vic2NyaWJlQ2FsbGJhY2soa2V5LCBFVkVOVF9SRVZBTElEQVRPUlMsIG9uUmV2YWxpZGF0ZSk7XG4gICAgICAgIC8vIE1hcmsgdGhlIGNvbXBvbmVudCBhcyBtb3VudGVkIGFuZCB1cGRhdGUgY29ycmVzcG9uZGluZyByZWZzLlxuICAgICAgICB1bm1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBrZXlSZWYuY3VycmVudCA9IGtleTtcbiAgICAgICAgaW5pdGlhbE1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIC8vIEtlZXAgdGhlIG9yaWdpbmFsIGtleSBpbiB0aGUgY2FjaGUuXG4gICAgICAgIHNldENhY2hlKHtcbiAgICAgICAgICAgIF9rOiBmbkFyZ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHJpZ2dlciBhIHJldmFsaWRhdGlvblxuICAgICAgICBpZiAoc2hvdWxkRG9Jbml0aWFsUmV2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQkMShkYXRhKSB8fCBJU19TRVJWRVIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXZhbGlkYXRlIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICAgIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERlbGF5IHRoZSByZXZhbGlkYXRlIGlmIHdlIGhhdmUgZGF0YSB0byByZXR1cm4gc28gd2Ugd29uJ3QgYmxvY2tcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJpbmcuXG4gICAgICAgICAgICAgICAgckFGKHNvZnRSZXZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIC8vIE1hcmsgaXQgYXMgdW5tb3VudGVkLlxuICAgICAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgdW5zdWJFdmVudHMoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIGtleVxuICAgIF0pO1xuICAgIC8vIFBvbGxpbmdcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpPT57XG4gICAgICAgIGxldCB0aW1lcjtcbiAgICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcGFzc2VkIGludGVydmFsXG4gICAgICAgICAgICAvLyAuLi5vciBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIHVwZGF0ZWQgZGF0YSB0byBnZXQgdGhlIGludGVydmFsXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IGlzRnVuY3Rpb24kMShyZWZyZXNoSW50ZXJ2YWwpID8gcmVmcmVzaEludGVydmFsKGdldENhY2hlKCkuZGF0YSkgOiByZWZyZXNoSW50ZXJ2YWw7XG4gICAgICAgICAgICAvLyBXZSBvbmx5IHN0YXJ0IHRoZSBuZXh0IGludGVydmFsIGlmIGByZWZyZXNoSW50ZXJ2YWxgIGlzIG5vdCAwLCBhbmQ6XG4gICAgICAgICAgICAvLyAtIGBmb3JjZWAgaXMgdHJ1ZSwgd2hpY2ggaXMgdGhlIHN0YXJ0IG9mIHBvbGxpbmdcbiAgICAgICAgICAgIC8vIC0gb3IgYHRpbWVyYCBpcyBub3QgMCwgd2hpY2ggbWVhbnMgdGhlIGVmZmVjdCB3YXNuJ3QgY2FuY2VsZWRcbiAgICAgICAgICAgIGlmIChpbnRlcnZhbCAmJiB0aW1lciAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZXhlY3V0ZSwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIE9LIHRvIGV4ZWN1dGU6XG4gICAgICAgICAgICAvLyBPbmx5IHJldmFsaWRhdGUgd2hlbiB0aGUgcGFnZSBpcyB2aXNpYmxlLCBvbmxpbmUsIGFuZCBub3QgZXJyb3JlZC5cbiAgICAgICAgICAgIGlmICghZ2V0Q2FjaGUoKS5lcnJvciAmJiAocmVmcmVzaFdoZW5IaWRkZW4gfHwgZ2V0Q29uZmlnKCkuaXNWaXNpYmxlKCkpICYmIChyZWZyZXNoV2hlbk9mZmxpbmUgfHwgZ2V0Q29uZmlnKCkuaXNPbmxpbmUoKSkpIHtcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlKFdJVEhfREVEVVBFKS50aGVuKG5leHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTY2hlZHVsZSB0aGUgbmV4dCBpbnRlcnZhbCB0byBjaGVjayBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCgpO1xuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgdGltZXIgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJlZnJlc2hJbnRlcnZhbCxcbiAgICAgICAgcmVmcmVzaFdoZW5IaWRkZW4sXG4gICAgICAgIHJlZnJlc2hXaGVuT2ZmbGluZSxcbiAgICAgICAga2V5XG4gICAgXSk7XG4gICAgLy8gRGlzcGxheSBkZWJ1ZyBpbmZvIGluIFJlYWN0IERldlRvb2xzLlxuICAgIHVzZURlYnVnVmFsdWUocmV0dXJuZWREYXRhKTtcbiAgICAvLyBJbiBTdXNwZW5zZSBtb2RlLCB3ZSBjYW4ndCByZXR1cm4gdGhlIGVtcHR5IGBkYXRhYCBzdGF0ZS5cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBgZXJyb3JgLCB0aGUgYGVycm9yYCBuZWVkcyB0byBiZSB0aHJvd24gdG8gdGhlIGVycm9yIGJvdW5kYXJ5LlxuICAgIC8vIElmIHRoZXJlIGlzIG5vIGBlcnJvcmAsIHRoZSBgcmV2YWxpZGF0aW9uYCBwcm9taXNlIG5lZWRzIHRvIGJlIHRocm93biB0b1xuICAgIC8vIHRoZSBzdXNwZW5zZSBib3VuZGFyeS5cbiAgICBpZiAoc3VzcGVuc2UgJiYgaXNVbmRlZmluZWQkMShkYXRhKSAmJiBrZXkpIHtcbiAgICAgICAgLy8gU1dSIHNob3VsZCB0aHJvdyB3aGVuIHRyeWluZyB0byB1c2UgU3VzcGVuc2Ugb24gdGhlIHNlcnZlciB3aXRoIFJlYWN0IDE4LFxuICAgICAgICAvLyB3aXRob3V0IHByb3ZpZGluZyBhbnkgZmFsbGJhY2sgZGF0YS4gVGhpcyBjYXVzZXMgaHlkcmF0aW9uIGVycm9ycy4gU2VlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL3N3ci9pc3N1ZXMvMTgzMlxuICAgICAgICBpZiAoIUlTX1JFQUNUX0xFR0FDWSAmJiBJU19TRVJWRVIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFsbGJhY2sgZGF0YSBpcyByZXF1aXJlZCB3aGVuIHVzaW5nIFN1c3BlbnNlIGluIFNTUi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgdXBkYXRlIGZldGNoZXIgYW5kIGNvbmZpZyByZWZzIGV2ZW4gd2l0aCB0aGUgU3VzcGVuc2UgbW9kZS5cbiAgICAgICAgZmV0Y2hlclJlZi5jdXJyZW50ID0gZmV0Y2hlcjtcbiAgICAgICAgY29uZmlnUmVmLmN1cnJlbnQgPSBjb25maWc7XG4gICAgICAgIHVubW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHJlcSA9IFBSRUxPQURba2V5XTtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCQxKHJlcSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBib3VuZE11dGF0ZShyZXEpO1xuICAgICAgICAgICAgdXNlKHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCQxKGVycm9yKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHJldmFsaWRhdGUoV0lUSF9ERURVUEUpO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCQxKHJldHVybmVkRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnN0YXR1cyA9ICdmdWxmaWxsZWQnO1xuICAgICAgICAgICAgICAgIHByb21pc2UudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXNlKHByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3dyUmVzcG9uc2UgPSB7XG4gICAgICAgIG11dGF0ZTogYm91bmRNdXRhdGUsXG4gICAgICAgIGdldCBkYXRhICgpIHtcbiAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmRhdGEgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJldHVybmVkRGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGVycm9yICgpIHtcbiAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzVmFsaWRhdGluZyAoKSB7XG4gICAgICAgICAgICBzdGF0ZURlcGVuZGVuY2llcy5pc1ZhbGlkYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWRhdGluZztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzTG9hZGluZyAoKSB7XG4gICAgICAgICAgICBzdGF0ZURlcGVuZGVuY2llcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHN3clJlc3BvbnNlO1xufTtcbmNvbnN0IFNXUkNvbmZpZyA9IE9CSkVDVCQxLmRlZmluZVByb3BlcnR5KFNXUkNvbmZpZyQxLCAnZGVmYXVsdFZhbHVlJywge1xuICAgIHZhbHVlOiBkZWZhdWx0Q29uZmlnXG59KTtcbi8qKlxuICogQSBob29rIHRvIGZldGNoIGRhdGEuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9zd3IudmVyY2VsLmFwcFxuICogQGV4YW1wbGVcbiAqIGBgYGpzeFxuICogaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG4gKiBmdW5jdGlvbiBQcm9maWxlKCkge1xuICogICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUignL2FwaS91c2VyJywgZmV0Y2hlcilcbiAqICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PlxuICogICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gKiAgIHJldHVybiA8ZGl2PmhlbGxvIHtkYXRhLm5hbWV9ITwvZGl2PlxuICogfVxuICogYGBgXG4gKi8gY29uc3QgdXNlU1dSID0gd2l0aEFyZ3ModXNlU1dSSGFuZGxlcik7XG5cbi8vIHVzZVNXUlxuXG5leHBvcnQgeyBTV1JDb25maWcsIHVzZVNXUiBhcyBkZWZhdWx0LCB1bnN0YWJsZV9zZXJpYWxpemUgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIE1ldGEgUGxhdGZvcm1zLCBJbmMuIGFuZCBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgICAgcmV0dXJuICh4ID09PSB5ICYmICgwICE9PSB4IHx8IDEgLyB4ID09PSAxIC8geSkpIHx8ICh4ICE9PSB4ICYmIHkgIT09IHkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyKHN1YnNjcmliZSwgZ2V0U25hcHNob3QpIHtcbiAgICAgIGRpZFdhcm5PbGQxOEFscGhhIHx8XG4gICAgICAgIHZvaWQgMCA9PT0gUmVhY3Quc3RhcnRUcmFuc2l0aW9uIHx8XG4gICAgICAgICgoZGlkV2Fybk9sZDE4QWxwaGEgPSAhMCksXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJZb3UgYXJlIHVzaW5nIGFuIG91dGRhdGVkLCBwcmUtcmVsZWFzZSBhbHBoYSBvZiBSZWFjdCAxOCB0aGF0IGRvZXMgbm90IHN1cHBvcnQgdXNlU3luY0V4dGVybmFsU3RvcmUuIFRoZSB1c2Utc3luYy1leHRlcm5hbC1zdG9yZSBzaGltIHdpbGwgbm90IHdvcmsgY29ycmVjdGx5LiBVcGdyYWRlIHRvIGEgbmV3ZXIgcHJlLXJlbGVhc2UuXCJcbiAgICAgICAgKSk7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuICAgICAgaWYgKCFkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCkge1xuICAgICAgICB2YXIgY2FjaGVkVmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuICAgICAgICBvYmplY3RJcyh2YWx1ZSwgY2FjaGVkVmFsdWUpIHx8XG4gICAgICAgICAgKGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIlRoZSByZXN1bHQgb2YgZ2V0U25hcHNob3Qgc2hvdWxkIGJlIGNhY2hlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIChkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9ICEwKSk7XG4gICAgICB9XG4gICAgICBjYWNoZWRWYWx1ZSA9IHVzZVN0YXRlKHtcbiAgICAgICAgaW5zdDogeyB2YWx1ZTogdmFsdWUsIGdldFNuYXBzaG90OiBnZXRTbmFwc2hvdCB9XG4gICAgICB9KTtcbiAgICAgIHZhciBpbnN0ID0gY2FjaGVkVmFsdWVbMF0uaW5zdCxcbiAgICAgICAgZm9yY2VVcGRhdGUgPSBjYWNoZWRWYWx1ZVsxXTtcbiAgICAgIHVzZUxheW91dEVmZmVjdChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBpbnN0LmdldFNuYXBzaG90ID0gZ2V0U25hcHNob3Q7XG4gICAgICAgICAgY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSAmJiBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFtzdWJzY3JpYmUsIHZhbHVlLCBnZXRTbmFwc2hvdF1cbiAgICAgICk7XG4gICAgICB1c2VFZmZlY3QoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpICYmIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkgJiYgZm9yY2VVcGRhdGUoeyBpbnN0OiBpbnN0IH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBbc3Vic2NyaWJlXVxuICAgICAgKTtcbiAgICAgIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpIHtcbiAgICAgIHZhciBsYXRlc3RHZXRTbmFwc2hvdCA9IGluc3QuZ2V0U25hcHNob3Q7XG4gICAgICBpbnN0ID0gaW5zdC52YWx1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXh0VmFsdWUgPSBsYXRlc3RHZXRTbmFwc2hvdCgpO1xuICAgICAgICByZXR1cm4gIW9iamVjdElzKGluc3QsIG5leHRWYWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gITA7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCkge1xuICAgICAgcmV0dXJuIGdldFNuYXBzaG90KCk7XG4gICAgfVxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgJiZcbiAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQoRXJyb3IoKSk7XG4gICAgdmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpLFxuICAgICAgb2JqZWN0SXMgPSBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBPYmplY3QuaXMgPyBPYmplY3QuaXMgOiBpcyxcbiAgICAgIHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUsXG4gICAgICB1c2VFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3QsXG4gICAgICB1c2VMYXlvdXRFZmZlY3QgPSBSZWFjdC51c2VMYXlvdXRFZmZlY3QsXG4gICAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZSxcbiAgICAgIGRpZFdhcm5PbGQxOEFscGhhID0gITEsXG4gICAgICBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9ICExLFxuICAgICAgc2hpbSA9XG4gICAgICAgIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB3aW5kb3cgfHxcbiAgICAgICAgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdpbmRvdy5kb2N1bWVudCB8fFxuICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbiAgICAgICAgICA/IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDFcbiAgICAgICAgICA6IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDI7XG4gICAgZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9XG4gICAgICB2b2lkIDAgIT09IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlID8gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmUgOiBzaGltO1xuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKEVycm9yKCkpO1xuICB9KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLnByb2R1Y3Rpb24uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiwgdXNlU3luY0V4dGVybmFsU3RvcmUsIHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQ2hhbmdlZCwgY3JlYXRlUHJveHksIGFmZmVjdGVkVG9QYXRoTGlzdCB9IGZyb20gJ3Byb3h5LWNvbXBhcmUnO1xuaW1wb3J0IHsgc3Vic2NyaWJlLCBzbmFwc2hvdCB9IGZyb20gJ3ZhbHRpby92YW5pbGxhJztcblxuY29uc3QgdXNlQWZmZWN0ZWREZWJ1Z1ZhbHVlID0gKHN0YXRlLCBhZmZlY3RlZCkgPT4ge1xuICBjb25zdCBwYXRoTGlzdCA9IHVzZVJlZih2b2lkIDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBhdGhMaXN0LmN1cnJlbnQgPSBhZmZlY3RlZFRvUGF0aExpc3Qoc3RhdGUsIGFmZmVjdGVkLCB0cnVlKTtcbiAgfSk7XG4gIHVzZURlYnVnVmFsdWUocGF0aExpc3QuY3VycmVudCk7XG59O1xuY29uc3QgY29uZFVzZUFmZmVjdGVkRGVidWdWYWx1ZSA9IHVzZUFmZmVjdGVkRGVidWdWYWx1ZTtcbmNvbnN0IHRhcmdldENhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB1c2VTbmFwc2hvdChwcm94eU9iamVjdCwgb3B0aW9ucykge1xuICBjb25zdCBub3RpZnlJblN5bmMgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnN5bmM7XG4gIGNvbnN0IGFmZmVjdGVkID0gdXNlTWVtbyhcbiAgICAoKSA9PiBwcm94eU9iamVjdCAmJiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICBbcHJveHlPYmplY3RdXG4gICk7XG4gIGNvbnN0IGxhc3RTbmFwc2hvdCA9IHVzZVJlZih2b2lkIDApO1xuICBsZXQgaW5SZW5kZXIgPSB0cnVlO1xuICBjb25zdCBjdXJyU25hcHNob3QgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShcbiAgICB1c2VDYWxsYmFjayhcbiAgICAgIChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCB1bnN1YiA9IHN1YnNjcmliZShwcm94eU9iamVjdCwgY2FsbGJhY2ssIG5vdGlmeUluU3luYyk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiB1bnN1YjtcbiAgICAgIH0sXG4gICAgICBbcHJveHlPYmplY3QsIG5vdGlmeUluU3luY11cbiAgICApLFxuICAgICgpID0+IHtcbiAgICAgIGNvbnN0IG5leHRTbmFwc2hvdCA9IHNuYXBzaG90KHByb3h5T2JqZWN0KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghaW5SZW5kZXIgJiYgbGFzdFNuYXBzaG90LmN1cnJlbnQgJiYgIWlzQ2hhbmdlZChcbiAgICAgICAgICBsYXN0U25hcHNob3QuY3VycmVudCxcbiAgICAgICAgICBuZXh0U25hcHNob3QsXG4gICAgICAgICAgYWZmZWN0ZWQsXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKClcbiAgICAgICAgKSkge1xuICAgICAgICAgIHJldHVybiBsYXN0U25hcHNob3QuY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHRTbmFwc2hvdDtcbiAgICB9LFxuICAgICgpID0+IHNuYXBzaG90KHByb3h5T2JqZWN0KVxuICApO1xuICBpblJlbmRlciA9IGZhbHNlO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGxhc3RTbmFwc2hvdC5jdXJyZW50ID0gY3VyclNuYXBzaG90O1xuICB9KTtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uZFVzZUFmZmVjdGVkRGVidWdWYWx1ZShjdXJyU25hcHNob3QsIGFmZmVjdGVkKTtcbiAgfVxuICBjb25zdCBwcm94eUNhY2hlID0gdXNlTWVtbygoKSA9PiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgW10pO1xuICByZXR1cm4gY3JlYXRlUHJveHkoY3VyclNuYXBzaG90LCBhZmZlY3RlZCwgcHJveHlDYWNoZSwgdGFyZ2V0Q2FjaGUpO1xufVxuXG5leHBvcnQgeyB1c2VTbmFwc2hvdCB9O1xuIiwiaW1wb3J0IHsgbWFya1RvVHJhY2ssIGdldFVudHJhY2tlZCB9IGZyb20gJ3Byb3h5LWNvbXBhcmUnO1xuXG5jb25zdCBpc09iamVjdCA9ICh4KSA9PiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4ICE9PSBudWxsO1xuY29uc3QgY2FuUHJveHlEZWZhdWx0ID0gKHgpID0+IGlzT2JqZWN0KHgpICYmICFyZWZTZXQuaGFzKHgpICYmIChBcnJheS5pc0FycmF5KHgpIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIHgpKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrTWFwKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrU2V0KSAmJiAhKHggaW5zdGFuY2VvZiBFcnJvcikgJiYgISh4IGluc3RhbmNlb2YgTnVtYmVyKSAmJiAhKHggaW5zdGFuY2VvZiBEYXRlKSAmJiAhKHggaW5zdGFuY2VvZiBTdHJpbmcpICYmICEoeCBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgISh4IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpICYmICEoeCBpbnN0YW5jZW9mIFByb21pc2UpO1xuY29uc3QgY3JlYXRlU25hcHNob3REZWZhdWx0ID0gKHRhcmdldCwgdmVyc2lvbikgPT4ge1xuICBjb25zdCBjYWNoZSA9IHNuYXBDYWNoZS5nZXQodGFyZ2V0KTtcbiAgaWYgKChjYWNoZSA9PSBudWxsID8gdm9pZCAwIDogY2FjaGVbMF0pID09PSB2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGNhY2hlWzFdO1xuICB9XG4gIGNvbnN0IHNuYXAgPSBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBbXSA6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCkpO1xuICBtYXJrVG9UcmFjayhzbmFwLCB0cnVlKTtcbiAgc25hcENhY2hlLnNldCh0YXJnZXQsIFt2ZXJzaW9uLCBzbmFwXSk7XG4gIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNuYXAsIGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSk7XG4gICAgY29uc3QgeyBlbnVtZXJhYmxlIH0gPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgIHRhcmdldCxcbiAgICAgIGtleVxuICAgICk7XG4gICAgY29uc3QgZGVzYyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgZW51bWVyYWJsZSxcbiAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWwgdG8gYXZvaWQgY29weWluZyB3aXRoIHByb3h5LWNvbXBhcmUuXG4gICAgICAvLyBJdCdzIHN0aWxsIG5vbi13cml0YWJsZSwgc28gaXQgYXZvaWRzIGFzc2lnbmluZyBhIHZhbHVlLlxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBpZiAocmVmU2V0Lmhhcyh2YWx1ZSkpIHtcbiAgICAgIG1hcmtUb1RyYWNrKHZhbHVlLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChwcm94eVN0YXRlTWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IFt0YXJnZXQyLCBlbnN1cmVWZXJzaW9uXSA9IHByb3h5U3RhdGVNYXAuZ2V0KFxuICAgICAgICB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGRlc2MudmFsdWUgPSBjcmVhdGVTbmFwc2hvdERlZmF1bHQodGFyZ2V0MiwgZW5zdXJlVmVyc2lvbigpKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNuYXAsIGtleSwgZGVzYyk7XG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHNuYXApO1xufTtcbmNvbnN0IGNyZWF0ZUhhbmRsZXJEZWZhdWx0ID0gKGlzSW5pdGlhbGl6aW5nLCBhZGRQcm9wTGlzdGVuZXIsIHJlbW92ZVByb3BMaXN0ZW5lciwgbm90aWZ5VXBkYXRlKSA9PiAoe1xuICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHtcbiAgICBjb25zdCBwcmV2VmFsdWUgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3ApO1xuICAgIHJlbW92ZVByb3BMaXN0ZW5lcihwcm9wKTtcbiAgICBjb25zdCBkZWxldGVkID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICBub3RpZnlVcGRhdGUoW1wiZGVsZXRlXCIsIFtwcm9wXSwgcHJldlZhbHVlXSk7XG4gICAgfVxuICAgIHJldHVybiBkZWxldGVkO1xuICB9LFxuICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICBjb25zdCBoYXNQcmV2VmFsdWUgPSAhaXNJbml0aWFsaXppbmcoKSAmJiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIGNvbnN0IHByZXZWYWx1ZSA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgIGlmIChoYXNQcmV2VmFsdWUgJiYgKG9iamVjdElzKHByZXZWYWx1ZSwgdmFsdWUpIHx8IHByb3h5Q2FjaGUuaGFzKHZhbHVlKSAmJiBvYmplY3RJcyhwcmV2VmFsdWUsIHByb3h5Q2FjaGUuZ2V0KHZhbHVlKSkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVtb3ZlUHJvcExpc3RlbmVyKHByb3ApO1xuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gZ2V0VW50cmFja2VkKHZhbHVlKSB8fCB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgbmV4dFZhbHVlID0gIXByb3h5U3RhdGVNYXAuaGFzKHZhbHVlKSAmJiBjYW5Qcm94eSh2YWx1ZSkgPyBwcm94eSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBhZGRQcm9wTGlzdGVuZXIocHJvcCwgbmV4dFZhbHVlKTtcbiAgICBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3AsIG5leHRWYWx1ZSwgcmVjZWl2ZXIpO1xuICAgIG5vdGlmeVVwZGF0ZShbXCJzZXRcIiwgW3Byb3BdLCB2YWx1ZSwgcHJldlZhbHVlXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuY29uc3QgcHJveHlTdGF0ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmVmU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5jb25zdCBzbmFwQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHZlcnNpb25Ib2xkZXIgPSBbMSwgMV07XG5jb25zdCBwcm94eUNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5sZXQgb2JqZWN0SXMgPSBPYmplY3QuaXM7XG5sZXQgbmV3UHJveHkgPSAodGFyZ2V0LCBoYW5kbGVyKSA9PiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbmxldCBjYW5Qcm94eSA9IGNhblByb3h5RGVmYXVsdDtcbmxldCBjcmVhdGVTbmFwc2hvdCA9IGNyZWF0ZVNuYXBzaG90RGVmYXVsdDtcbmxldCBjcmVhdGVIYW5kbGVyID0gY3JlYXRlSGFuZGxlckRlZmF1bHQ7XG5mdW5jdGlvbiBwcm94eShiYXNlT2JqZWN0ID0ge30pIHtcbiAgaWYgKCFpc09iamVjdChiYXNlT2JqZWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm9iamVjdCByZXF1aXJlZFwiKTtcbiAgfVxuICBjb25zdCBmb3VuZCA9IHByb3h5Q2FjaGUuZ2V0KGJhc2VPYmplY3QpO1xuICBpZiAoZm91bmQpIHtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgbGV0IHZlcnNpb24gPSB2ZXJzaW9uSG9sZGVyWzBdO1xuICBjb25zdCBsaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBub3RpZnlVcGRhdGUgPSAob3AsIG5leHRWZXJzaW9uID0gKyt2ZXJzaW9uSG9sZGVyWzBdKSA9PiB7XG4gICAgaWYgKHZlcnNpb24gIT09IG5leHRWZXJzaW9uKSB7XG4gICAgICB2ZXJzaW9uID0gbmV4dFZlcnNpb247XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKG9wLCBuZXh0VmVyc2lvbikpO1xuICAgIH1cbiAgfTtcbiAgbGV0IGNoZWNrVmVyc2lvbiA9IHZlcnNpb25Ib2xkZXJbMV07XG4gIGNvbnN0IGVuc3VyZVZlcnNpb24gPSAobmV4dENoZWNrVmVyc2lvbiA9ICsrdmVyc2lvbkhvbGRlclsxXSkgPT4ge1xuICAgIGlmIChjaGVja1ZlcnNpb24gIT09IG5leHRDaGVja1ZlcnNpb24gJiYgIWxpc3RlbmVycy5zaXplKSB7XG4gICAgICBjaGVja1ZlcnNpb24gPSBuZXh0Q2hlY2tWZXJzaW9uO1xuICAgICAgcHJvcFByb3h5U3RhdGVzLmZvckVhY2goKFtwcm9wUHJveHlTdGF0ZV0pID0+IHtcbiAgICAgICAgY29uc3QgcHJvcFZlcnNpb24gPSBwcm9wUHJveHlTdGF0ZVsxXShuZXh0Q2hlY2tWZXJzaW9uKTtcbiAgICAgICAgaWYgKHByb3BWZXJzaW9uID4gdmVyc2lvbikge1xuICAgICAgICAgIHZlcnNpb24gPSBwcm9wVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9O1xuICBjb25zdCBjcmVhdGVQcm9wTGlzdGVuZXIgPSAocHJvcCkgPT4gKG9wLCBuZXh0VmVyc2lvbikgPT4ge1xuICAgIGNvbnN0IG5ld09wID0gWy4uLm9wXTtcbiAgICBuZXdPcFsxXSA9IFtwcm9wLCAuLi5uZXdPcFsxXV07XG4gICAgbm90aWZ5VXBkYXRlKG5ld09wLCBuZXh0VmVyc2lvbik7XG4gIH07XG4gIGNvbnN0IHByb3BQcm94eVN0YXRlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGNvbnN0IGFkZFByb3BMaXN0ZW5lciA9IChwcm9wLCBwcm9wVmFsdWUpID0+IHtcbiAgICBjb25zdCBwcm9wUHJveHlTdGF0ZSA9ICFyZWZTZXQuaGFzKHByb3BWYWx1ZSkgJiYgcHJveHlTdGF0ZU1hcC5nZXQocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFByb3h5U3RhdGUpIHtcbiAgICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcm9wUHJveHlTdGF0ZXMuaGFzKHByb3ApKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb3AgbGlzdGVuZXIgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICB9XG4gICAgICBpZiAobGlzdGVuZXJzLnNpemUpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gcHJvcFByb3h5U3RhdGVbMl0oY3JlYXRlUHJvcExpc3RlbmVyKHByb3ApKTtcbiAgICAgICAgcHJvcFByb3h5U3RhdGVzLnNldChwcm9wLCBbcHJvcFByb3h5U3RhdGUsIHJlbW92ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcFByb3h5U3RhdGVzLnNldChwcm9wLCBbcHJvcFByb3h5U3RhdGVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb3BMaXN0ZW5lciA9IChwcm9wKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGVudHJ5ID0gcHJvcFByb3h5U3RhdGVzLmdldChwcm9wKTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5kZWxldGUocHJvcCk7XG4gICAgICAoX2EgPSBlbnRyeVsxXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwoZW50cnkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICBpZiAobGlzdGVuZXJzLnNpemUgPT09IDEpIHtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGUsIHByZXZSZW1vdmVdLCBwcm9wKSA9PiB7XG4gICAgICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcmV2UmVtb3ZlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVtb3ZlIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IHByb3BQcm94eVN0YXRlWzJdKGNyZWF0ZVByb3BMaXN0ZW5lcihwcm9wKSk7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgaWYgKGxpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGUsIHJlbW92ZV0sIHByb3ApID0+IHtcbiAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiByZW1vdmVMaXN0ZW5lcjtcbiAgfTtcbiAgbGV0IGluaXRpYWxpemluZyA9IHRydWU7XG4gIGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVIYW5kbGVyKFxuICAgICgpID0+IGluaXRpYWxpemluZyxcbiAgICBhZGRQcm9wTGlzdGVuZXIsXG4gICAgcmVtb3ZlUHJvcExpc3RlbmVyLFxuICAgIG5vdGlmeVVwZGF0ZVxuICApO1xuICBjb25zdCBwcm94eU9iamVjdCA9IG5ld1Byb3h5KGJhc2VPYmplY3QsIGhhbmRsZXIpO1xuICBwcm94eUNhY2hlLnNldChiYXNlT2JqZWN0LCBwcm94eU9iamVjdCk7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBbYmFzZU9iamVjdCwgZW5zdXJlVmVyc2lvbiwgYWRkTGlzdGVuZXJdO1xuICBwcm94eVN0YXRlTWFwLnNldChwcm94eU9iamVjdCwgcHJveHlTdGF0ZSk7XG4gIFJlZmxlY3Qub3duS2V5cyhiYXNlT2JqZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgIGJhc2VPYmplY3QsXG4gICAgICBrZXlcbiAgICApO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYyAmJiBkZXNjLndyaXRhYmxlKSB7XG4gICAgICBwcm94eU9iamVjdFtrZXldID0gYmFzZU9iamVjdFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIGluaXRpYWxpemluZyA9IGZhbHNlO1xuICByZXR1cm4gcHJveHlPYmplY3Q7XG59XG5mdW5jdGlvbiBnZXRWZXJzaW9uKHByb3h5T2JqZWN0KSB7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBwcm94eVN0YXRlTWFwLmdldChwcm94eU9iamVjdCk7XG4gIHJldHVybiBwcm94eVN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBwcm94eVN0YXRlWzFdKCk7XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUocHJveHlPYmplY3QsIGNhbGxiYWNrLCBub3RpZnlJblN5bmMpIHtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IHByb3h5U3RhdGVNYXAuZ2V0KHByb3h5T2JqZWN0KTtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmICFwcm94eVN0YXRlKSB7XG4gICAgY29uc29sZS53YXJuKFwiUGxlYXNlIHVzZSBwcm94eSBvYmplY3RcIik7XG4gIH1cbiAgbGV0IHByb21pc2U7XG4gIGNvbnN0IG9wcyA9IFtdO1xuICBjb25zdCBhZGRMaXN0ZW5lciA9IHByb3h5U3RhdGVbMl07XG4gIGxldCBpc0xpc3RlbmVyQWN0aXZlID0gZmFsc2U7XG4gIGNvbnN0IGxpc3RlbmVyID0gKG9wKSA9PiB7XG4gICAgb3BzLnB1c2gob3ApO1xuICAgIGlmIChub3RpZnlJblN5bmMpIHtcbiAgICAgIGNhbGxiYWNrKG9wcy5zcGxpY2UoMCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcHJvbWlzZSA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGlzTGlzdGVuZXJBY3RpdmUpIHtcbiAgICAgICAgICBjYWxsYmFjayhvcHMuc3BsaWNlKDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVMaXN0ZW5lciA9IGFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgaXNMaXN0ZW5lckFjdGl2ZSA9IHRydWU7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaXNMaXN0ZW5lckFjdGl2ZSA9IGZhbHNlO1xuICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gIH07XG59XG5mdW5jdGlvbiBzbmFwc2hvdChwcm94eU9iamVjdCkge1xuICBjb25zdCBwcm94eVN0YXRlID0gcHJveHlTdGF0ZU1hcC5nZXQocHJveHlPYmplY3QpO1xuICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIXByb3h5U3RhdGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJQbGVhc2UgdXNlIHByb3h5IG9iamVjdFwiKTtcbiAgfVxuICBjb25zdCBbdGFyZ2V0LCBlbnN1cmVWZXJzaW9uXSA9IHByb3h5U3RhdGU7XG4gIHJldHVybiBjcmVhdGVTbmFwc2hvdCh0YXJnZXQsIGVuc3VyZVZlcnNpb24oKSk7XG59XG5mdW5jdGlvbiByZWYob2JqKSB7XG4gIHJlZlNldC5hZGQob2JqKTtcbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEludGVybmFsU3RhdGVzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3h5U3RhdGVNYXAsXG4gICAgcmVmU2V0LFxuICAgIHNuYXBDYWNoZSxcbiAgICB2ZXJzaW9uSG9sZGVyLFxuICAgIHByb3h5Q2FjaGVcbiAgfTtcbn1cbmZ1bmN0aW9uIHVuc3RhYmxlX3JlcGxhY2VJbnRlcm5hbEZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJvYmplY3RJc1wiOlxuICAgICAgb2JqZWN0SXMgPSBmbihvYmplY3RJcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibmV3UHJveHlcIjpcbiAgICAgIG5ld1Byb3h5ID0gZm4obmV3UHJveHkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhblByb3h5XCI6XG4gICAgICBjYW5Qcm94eSA9IGZuKGNhblByb3h5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjcmVhdGVTbmFwc2hvdFwiOlxuICAgICAgY3JlYXRlU25hcHNob3QgPSBmbihjcmVhdGVTbmFwc2hvdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY3JlYXRlSGFuZGxlclwiOlxuICAgICAgY3JlYXRlSGFuZGxlciA9IGZuKGNyZWF0ZUhhbmRsZXIpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0VmVyc2lvbiwgcHJveHksIHJlZiwgc25hcHNob3QsIHN1YnNjcmliZSwgdW5zdGFibGVfZ2V0SW50ZXJuYWxTdGF0ZXMsIHVuc3RhYmxlX3JlcGxhY2VJbnRlcm5hbEZ1bmN0aW9uIH07XG4iLCJpbXBvcnQgeyBzdWJzY3JpYmUsIHNuYXBzaG90LCB1bnN0YWJsZV9nZXRJbnRlcm5hbFN0YXRlcywgcHJveHkgfSBmcm9tICd2YWx0aW8vdmFuaWxsYSc7XG5cbmZ1bmN0aW9uIHN1YnNjcmliZUtleShwcm94eU9iamVjdCwga2V5LCBjYWxsYmFjaywgbm90aWZ5SW5TeW5jKSB7XG4gIGxldCBwcmV2VmFsdWUgPSBwcm94eU9iamVjdFtrZXldO1xuICByZXR1cm4gc3Vic2NyaWJlKFxuICAgIHByb3h5T2JqZWN0LFxuICAgICgpID0+IHtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHByb3h5T2JqZWN0W2tleV07XG4gICAgICBpZiAoIU9iamVjdC5pcyhwcmV2VmFsdWUsIG5leHRWYWx1ZSkpIHtcbiAgICAgICAgY2FsbGJhY2socHJldlZhbHVlID0gbmV4dFZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG5vdGlmeUluU3luY1xuICApO1xufVxuXG5sZXQgY3VycmVudENsZWFudXBzO1xuZnVuY3Rpb24gd2F0Y2goY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgbGV0IGFsaXZlID0gdHJ1ZTtcbiAgY29uc3QgY2xlYW51cHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBzdWJzY3JpcHRpb25zID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICBpZiAoYWxpdmUpIHtcbiAgICAgIGFsaXZlID0gZmFsc2U7XG4gICAgICBjbGVhbnVwcy5mb3JFYWNoKChjbGVhbikgPT4gY2xlYW4oKSk7XG4gICAgICBjbGVhbnVwcy5jbGVhcigpO1xuICAgICAgc3Vic2NyaXB0aW9ucy5mb3JFYWNoKCh1bnN1YnNjcmliZSkgPT4gdW5zdWJzY3JpYmUoKSk7XG4gICAgICBzdWJzY3JpcHRpb25zLmNsZWFyKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZXZhbGlkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghYWxpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYW51cHMuZm9yRWFjaCgoY2xlYW4pID0+IGNsZWFuKCkpO1xuICAgIGNsZWFudXBzLmNsZWFyKCk7XG4gICAgY29uc3QgcHJveGllc1RvU3Vic2NyaWJlID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50Q2xlYW51cHM7XG4gICAgY3VycmVudENsZWFudXBzID0gY2xlYW51cHM7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb21pc2VPclBvc3NpYmxlQ2xlYW51cCA9IGNhbGxiYWNrKChwcm94eU9iamVjdCkgPT4ge1xuICAgICAgICBwcm94aWVzVG9TdWJzY3JpYmUuYWRkKHByb3h5T2JqZWN0KTtcbiAgICAgICAgaWYgKGFsaXZlICYmICFzdWJzY3JpcHRpb25zLmhhcyhwcm94eU9iamVjdCkpIHtcbiAgICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShwcm94eU9iamVjdCwgcmV2YWxpZGF0ZSwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zeW5jKTtcbiAgICAgICAgICBzdWJzY3JpcHRpb25zLnNldChwcm94eU9iamVjdCwgdW5zdWJzY3JpYmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm94eU9iamVjdDtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY291bGRCZUNsZWFudXAgPSBwcm9taXNlT3JQb3NzaWJsZUNsZWFudXAgJiYgcHJvbWlzZU9yUG9zc2libGVDbGVhbnVwIGluc3RhbmNlb2YgUHJvbWlzZSA/IGF3YWl0IHByb21pc2VPclBvc3NpYmxlQ2xlYW51cCA6IHByb21pc2VPclBvc3NpYmxlQ2xlYW51cDtcbiAgICAgIGlmIChjb3VsZEJlQ2xlYW51cCkge1xuICAgICAgICBpZiAoYWxpdmUpIHtcbiAgICAgICAgICBjbGVhbnVwcy5hZGQoY291bGRCZUNsZWFudXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50Q2xlYW51cHMgPSBwYXJlbnQ7XG4gICAgfVxuICAgIHN1YnNjcmlwdGlvbnMuZm9yRWFjaCgodW5zdWJzY3JpYmUsIHByb3h5T2JqZWN0KSA9PiB7XG4gICAgICBpZiAoIXByb3hpZXNUb1N1YnNjcmliZS5oYXMocHJveHlPYmplY3QpKSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbnMuZGVsZXRlKHByb3h5T2JqZWN0KTtcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgaWYgKGN1cnJlbnRDbGVhbnVwcykge1xuICAgIGN1cnJlbnRDbGVhbnVwcy5hZGQoY2xlYW51cCk7XG4gIH1cbiAgcmV2YWxpZGF0ZSgpO1xuICByZXR1cm4gY2xlYW51cDtcbn1cblxuY29uc3QgREVWVE9PTFMgPSBTeW1ib2woKTtcbmZ1bmN0aW9uIGRldnRvb2xzKHByb3h5T2JqZWN0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZW5hYmxlZCwgbmFtZSA9IFwiXCIsIC4uLnJlc3QgfSA9IG9wdGlvbnMgfHwge307XG4gIGxldCBleHRlbnNpb247XG4gIHRyeSB7XG4gICAgZXh0ZW5zaW9uID0gKGVuYWJsZWQgIT0gbnVsbCA/IGVuYWJsZWQgOiAoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX187XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICBpZiAoIWV4dGVuc2lvbikge1xuICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiBlbmFibGVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbV2FybmluZ10gUGxlYXNlIGluc3RhbGwvZW5hYmxlIFJlZHV4IGRldnRvb2xzIGV4dGVuc2lvblwiKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBpc1RpbWVUcmF2ZWxpbmcgPSBmYWxzZTtcbiAgY29uc3QgZGV2dG9vbHMyID0gZXh0ZW5zaW9uLmNvbm5lY3QoeyBuYW1lLCAuLi5yZXN0IH0pO1xuICBjb25zdCB1bnN1YjEgPSBzdWJzY3JpYmUocHJveHlPYmplY3QsIChvcHMpID0+IHtcbiAgICBjb25zdCBhY3Rpb24gPSBvcHMuZmlsdGVyKChbXywgcGF0aF0pID0+IHBhdGhbMF0gIT09IERFVlRPT0xTKS5tYXAoKFtvcCwgcGF0aF0pID0+IGAke29wfToke3BhdGgubWFwKFN0cmluZykuam9pbihcIi5cIil9YCkuam9pbihcIiwgXCIpO1xuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1RpbWVUcmF2ZWxpbmcpIHtcbiAgICAgIGlzVGltZVRyYXZlbGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzbmFwV2l0aG91dERldnRvb2xzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcHNob3QocHJveHlPYmplY3QpKTtcbiAgICAgIGRlbGV0ZSBzbmFwV2l0aG91dERldnRvb2xzW0RFVlRPT0xTXTtcbiAgICAgIGRldnRvb2xzMi5zZW5kKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogYWN0aW9uLFxuICAgICAgICAgIHVwZGF0ZWRBdDogKC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgIH0sXG4gICAgICAgIHNuYXBXaXRob3V0RGV2dG9vbHNcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgdW5zdWIyID0gZGV2dG9vbHMyLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IFwiQUNUSU9OXCIgJiYgbWVzc2FnZS5wYXlsb2FkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHByb3h5T2JqZWN0LCBKU09OLnBhcnNlKG1lc3NhZ2UucGF5bG9hZCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwicGxlYXNlIGRpc3BhdGNoIGEgc2VyaWFsaXphYmxlIHZhbHVlIHRoYXQgSlNPTi5wYXJzZSgpIGFuZCBwcm94eSgpIHN1cHBvcnRcXG5cIixcbiAgICAgICAgICBlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IFwiRElTUEFUQ0hcIiAmJiBtZXNzYWdlLnN0YXRlKSB7XG4gICAgICBpZiAoKChfYSA9IG1lc3NhZ2UucGF5bG9hZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnR5cGUpID09PSBcIkpVTVBfVE9fQUNUSU9OXCIgfHwgKChfYiA9IG1lc3NhZ2UucGF5bG9hZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLnR5cGUpID09PSBcIkpVTVBfVE9fU1RBVEVcIikge1xuICAgICAgICBpc1RpbWVUcmF2ZWxpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IEpTT04ucGFyc2UobWVzc2FnZS5zdGF0ZSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocHJveHlPYmplY3QsIHN0YXRlKTtcbiAgICAgIH1cbiAgICAgIHByb3h5T2JqZWN0W0RFVlRPT0xTXSA9IG1lc3NhZ2U7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09IFwiRElTUEFUQ0hcIiAmJiAoKF9jID0gbWVzc2FnZS5wYXlsb2FkKSA9PSBudWxsID8gdm9pZCAwIDogX2MudHlwZSkgPT09IFwiQ09NTUlUXCIpIHtcbiAgICAgIGRldnRvb2xzMi5pbml0KHNuYXBzaG90KHByb3h5T2JqZWN0KSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09IFwiRElTUEFUQ0hcIiAmJiAoKF9kID0gbWVzc2FnZS5wYXlsb2FkKSA9PSBudWxsID8gdm9pZCAwIDogX2QudHlwZSkgPT09IFwiSU1QT1JUX1NUQVRFXCIpIHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSAoX2UgPSBtZXNzYWdlLnBheWxvYWQubmV4dExpZnRlZFN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2UuYWN0aW9uc0J5SWQ7XG4gICAgICBjb25zdCBjb21wdXRlZFN0YXRlcyA9ICgoX2YgPSBtZXNzYWdlLnBheWxvYWQubmV4dExpZnRlZFN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2YuY29tcHV0ZWRTdGF0ZXMpIHx8IFtdO1xuICAgICAgaXNUaW1lVHJhdmVsaW5nID0gdHJ1ZTtcbiAgICAgIGNvbXB1dGVkU3RhdGVzLmZvckVhY2goKHsgc3RhdGUgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tpbmRleF0gfHwgXCJObyBhY3Rpb24gZm91bmRcIjtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwcm94eU9iamVjdCwgc3RhdGUpO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkZXZ0b29sczIuaW5pdChzbmFwc2hvdChwcm94eU9iamVjdCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRldnRvb2xzMi5zZW5kKGFjdGlvbiwgc25hcHNob3QocHJveHlPYmplY3QpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgZGV2dG9vbHMyLmluaXQoc25hcHNob3QocHJveHlPYmplY3QpKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICB1bnN1YjEoKTtcbiAgICB1bnN1YjIgPT0gbnVsbCA/IHZvaWQgMCA6IHVuc3ViMigpO1xuICB9O1xufVxuXG5jb25zdCB7IHByb3h5U3RhdGVNYXA6IHByb3h5U3RhdGVNYXAkMSwgc25hcENhY2hlOiBzbmFwQ2FjaGUkMSB9ID0gdW5zdGFibGVfZ2V0SW50ZXJuYWxTdGF0ZXMoKTtcbmNvbnN0IGlzUHJveHkkMSA9ICh4KSA9PiBwcm94eVN0YXRlTWFwJDEuaGFzKHgpO1xuY29uc3QgaXNQcm94eU1hcCA9IChvYmopID0+IHtcbiAgcmV0dXJuIFN5bWJvbC50b1N0cmluZ1RhZyBpbiBvYmogJiYgb2JqW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09IFwiTWFwXCIgJiYgcHJveHlTdGF0ZU1hcCQxLmhhcyhvYmopO1xufTtcbmZ1bmN0aW9uIHByb3h5TWFwKGVudHJpZXMpIHtcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBbXTtcbiAgbGV0IGluaXRpYWxJbmRleCA9IDA7XG4gIGNvbnN0IGluZGV4TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3Qgc25hcE1hcENhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG4gIGNvbnN0IHJlZ2lzdGVyU25hcE1hcCA9ICgpID0+IHtcbiAgICBjb25zdCBjYWNoZSA9IHNuYXBDYWNoZSQxLmdldCh2T2JqZWN0KTtcbiAgICBjb25zdCBsYXRlc3RTbmFwID0gY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlWzFdO1xuICAgIGlmIChsYXRlc3RTbmFwICYmICFzbmFwTWFwQ2FjaGUuaGFzKGxhdGVzdFNuYXApKSB7XG4gICAgICBjb25zdCBjbG9uZWRNYXAgPSBuZXcgTWFwKGluZGV4TWFwKTtcbiAgICAgIHNuYXBNYXBDYWNoZS5zZXQobGF0ZXN0U25hcCwgY2xvbmVkTWFwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldE1hcEZvclRoaXMgPSAoeCkgPT4gc25hcE1hcENhY2hlLmdldCh4KSB8fCBpbmRleE1hcDtcbiAgaWYgKGVudHJpZXMpIHtcbiAgICBpZiAodHlwZW9mIGVudHJpZXNbU3ltYm9sLml0ZXJhdG9yXSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcInByb3h5TWFwOlxcblx0aW5pdGlhbCBzdGF0ZSBtdXN0IGJlIGl0ZXJhYmxlXFxuXHRcdHRpcDogc3RydWN0dXJlIHNob3VsZCBiZSBbW2tleSwgdmFsdWVdXVwiXG4gICAgICApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzKSB7XG4gICAgICBpbmRleE1hcC5zZXQoa2V5LCBpbml0aWFsSW5kZXgpO1xuICAgICAgaW5pdGlhbERhdGFbaW5pdGlhbEluZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIGNvbnN0IHZPYmplY3QgPSB7XG4gICAgZGF0YTogaW5pdGlhbERhdGEsXG4gICAgaW5kZXg6IGluaXRpYWxJbmRleCxcbiAgICBlcG9jaDogMCxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIGlmICghaXNQcm94eSQxKHRoaXMpKSB7XG4gICAgICAgIHJlZ2lzdGVyU25hcE1hcCgpO1xuICAgICAgfVxuICAgICAgY29uc3QgbWFwID0gZ2V0TWFwRm9yVGhpcyh0aGlzKTtcbiAgICAgIHJldHVybiBtYXAuc2l6ZTtcbiAgICB9LFxuICAgIGdldChrZXkpIHtcbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICBjb25zdCBpbmRleCA9IG1hcC5nZXQoa2V5KTtcbiAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHRoaXMuZXBvY2g7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XTtcbiAgICB9LFxuICAgIGhhcyhrZXkpIHtcbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgcmV0dXJuIG1hcC5oYXMoa2V5KTtcbiAgICB9LFxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoIWlzUHJveHkkMSh0aGlzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGVyZm9ybSBtdXRhdGlvbnMgb24gYSBzbmFwc2hvdFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhNYXAuZ2V0KGtleSk7XG4gICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICBpbmRleE1hcC5zZXQoa2V5LCB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMuaW5kZXgrK10gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXBvY2grKztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgaWYgKCFpc1Byb3h5JDEodGhpcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBlcmZvcm0gbXV0YXRpb25zIG9uIGEgc25hcHNob3RcIik7XG4gICAgICB9XG4gICAgICBjb25zdCBpbmRleCA9IGluZGV4TWFwLmdldChrZXkpO1xuICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuZGF0YVtpbmRleF07XG4gICAgICBpbmRleE1hcC5kZWxldGUoa2V5KTtcbiAgICAgIHRoaXMuZXBvY2grKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICBpZiAoIWlzUHJveHkkMSh0aGlzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGVyZm9ybSBtdXRhdGlvbnMgb24gYSBzbmFwc2hvdFwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICB0aGlzLmVwb2NoKys7XG4gICAgICBpbmRleE1hcC5jbGVhcigpO1xuICAgIH0sXG4gICAgZm9yRWFjaChjYikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICBtYXAuZm9yRWFjaCgoaW5kZXgsIGtleSkgPT4ge1xuICAgICAgICBjYih0aGlzLmRhdGFbaW5kZXhdLCBrZXksIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAqZW50cmllcygpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICBjb25zdCBtYXAgPSBnZXRNYXBGb3JUaGlzKHRoaXMpO1xuICAgICAgZm9yIChjb25zdCBba2V5LCBpbmRleF0gb2YgbWFwKSB7XG4gICAgICAgIHlpZWxkIFtrZXksIHRoaXMuZGF0YVtpbmRleF1dO1xuICAgICAgfVxuICAgIH0sXG4gICAgKmtleXMoKSB7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgY29uc3QgbWFwID0gZ2V0TWFwRm9yVGhpcyh0aGlzKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIG1hcC5rZXlzKCkpIHtcbiAgICAgICAgeWllbGQga2V5O1xuICAgICAgfVxuICAgIH0sXG4gICAgKnZhbHVlcygpIHtcbiAgICAgIHRoaXMuZXBvY2g7XG4gICAgICBjb25zdCBtYXAgPSBnZXRNYXBGb3JUaGlzKHRoaXMpO1xuICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBtYXAudmFsdWVzKCkpIHtcbiAgICAgICAgeWllbGQgdGhpcy5kYXRhW2luZGV4XTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH0sXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgcmV0dXJuIFwiTWFwXCI7XG4gICAgfSxcbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcCh0aGlzLmVudHJpZXMoKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwcm94aWVkT2JqZWN0ID0gcHJveHkodk9iamVjdCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHByb3hpZWRPYmplY3QsIHtcbiAgICBzaXplOiB7IGVudW1lcmFibGU6IGZhbHNlIH0sXG4gICAgaW5kZXg6IHsgZW51bWVyYWJsZTogZmFsc2UgfSxcbiAgICBlcG9jaDogeyBlbnVtZXJhYmxlOiBmYWxzZSB9LFxuICAgIGRhdGE6IHsgZW51bWVyYWJsZTogZmFsc2UgfSxcbiAgICB0b0pTT046IHsgZW51bWVyYWJsZTogZmFsc2UgfVxuICB9KTtcbiAgT2JqZWN0LnNlYWwocHJveGllZE9iamVjdCk7XG4gIHJldHVybiBwcm94aWVkT2JqZWN0O1xufVxuXG5jb25zdCB7IHByb3h5U3RhdGVNYXAsIHNuYXBDYWNoZSB9ID0gdW5zdGFibGVfZ2V0SW50ZXJuYWxTdGF0ZXMoKTtcbmNvbnN0IG1heWJlUHJveGlmeSA9ICh4KSA9PiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiA/IHByb3h5KHsgeCB9KS54IDogeDtcbmNvbnN0IGlzUHJveHkgPSAoeCkgPT4gcHJveHlTdGF0ZU1hcC5oYXMoeCk7XG5jb25zdCBpc1Byb3h5U2V0ID0gKG9iaikgPT4ge1xuICByZXR1cm4gU3ltYm9sLnRvU3RyaW5nVGFnIGluIG9iaiAmJiBvYmpbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gXCJTZXRcIiAmJiBwcm94eVN0YXRlTWFwLmhhcyhvYmopO1xufTtcbmZ1bmN0aW9uIHByb3h5U2V0KGluaXRpYWxWYWx1ZXMpIHtcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBbXTtcbiAgY29uc3QgaW5kZXhNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBsZXQgaW5pdGlhbEluZGV4ID0gMDtcbiAgY29uc3Qgc25hcE1hcENhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG4gIGNvbnN0IHJlZ2lzdGVyU25hcE1hcCA9ICgpID0+IHtcbiAgICBjb25zdCBjYWNoZSA9IHNuYXBDYWNoZS5nZXQodk9iamVjdCk7XG4gICAgY29uc3QgbGF0ZXN0U25hcCA9IGNhY2hlID09IG51bGwgPyB2b2lkIDAgOiBjYWNoZVsxXTtcbiAgICBpZiAobGF0ZXN0U25hcCAmJiAhc25hcE1hcENhY2hlLmhhcyhsYXRlc3RTbmFwKSkge1xuICAgICAgY29uc3QgY2xvbmVkTWFwID0gbmV3IE1hcChpbmRleE1hcCk7XG4gICAgICBzbmFwTWFwQ2FjaGUuc2V0KGxhdGVzdFNuYXAsIGNsb25lZE1hcCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRNYXBGb3JUaGlzID0gKHgpID0+IHNuYXBNYXBDYWNoZS5nZXQoeCkgfHwgaW5kZXhNYXA7XG4gIGlmIChpbml0aWFsVmFsdWVzKSB7XG4gICAgaWYgKHR5cGVvZiBpbml0aWFsVmFsdWVzW1N5bWJvbC5pdGVyYXRvcl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBpdGVyYWJsZVwiKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBpbml0aWFsVmFsdWVzKSB7XG4gICAgICBpZiAoIWluZGV4TWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdiA9IG1heWJlUHJveGlmeSh2YWx1ZSk7XG4gICAgICAgIGluZGV4TWFwLnNldCh2LCBpbml0aWFsSW5kZXgpO1xuICAgICAgICBpbml0aWFsRGF0YVtpbml0aWFsSW5kZXgrK10gPSB2O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCB2T2JqZWN0ID0ge1xuICAgIGRhdGE6IGluaXRpYWxEYXRhLFxuICAgIGluZGV4OiBpbml0aWFsSW5kZXgsXG4gICAgZXBvY2g6IDAsXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICBpZiAoIWlzUHJveHkodGhpcykpIHtcbiAgICAgICAgcmVnaXN0ZXJTbmFwTWFwKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhNYXAuc2l6ZTtcbiAgICB9LFxuICAgIGhhcyh2YWx1ZSkge1xuICAgICAgY29uc3QgbWFwID0gZ2V0TWFwRm9yVGhpcyh0aGlzKTtcbiAgICAgIGNvbnN0IHYgPSBtYXliZVByb3hpZnkodmFsdWUpO1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIHJldHVybiBtYXAuaGFzKHYpO1xuICAgIH0sXG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICBpZiAoIWlzUHJveHkodGhpcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBlcmZvcm0gbXV0YXRpb25zIG9uIGEgc25hcHNob3RcIik7XG4gICAgICB9XG4gICAgICBjb25zdCB2ID0gbWF5YmVQcm94aWZ5KHZhbHVlKTtcbiAgICAgIGlmICghaW5kZXhNYXAuaGFzKHYpKSB7XG4gICAgICAgIGluZGV4TWFwLnNldCh2LCB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5kYXRhW3RoaXMuaW5kZXgrK10gPSB2O1xuICAgICAgICB0aGlzLmVwb2NoKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGRlbGV0ZSh2YWx1ZSkge1xuICAgICAgaWYgKCFpc1Byb3h5KHRoaXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwZXJmb3JtIG11dGF0aW9ucyBvbiBhIHNuYXBzaG90XCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgdiA9IG1heWJlUHJveGlmeSh2YWx1ZSk7XG4gICAgICBjb25zdCBpbmRleCA9IGluZGV4TWFwLmdldCh2KTtcbiAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbaW5kZXhdO1xuICAgICAgaW5kZXhNYXAuZGVsZXRlKHYpO1xuICAgICAgdGhpcy5lcG9jaCsrO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgIGlmICghaXNQcm94eSh0aGlzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGVyZm9ybSBtdXRhdGlvbnMgb24gYSBzbmFwc2hvdFwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICB0aGlzLmVwb2NoKys7XG4gICAgICBpbmRleE1hcC5jbGVhcigpO1xuICAgIH0sXG4gICAgZm9yRWFjaChjYikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG1hcCA9IGdldE1hcEZvclRoaXModGhpcyk7XG4gICAgICBtYXAuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgY2IodGhpcy5kYXRhW2luZGV4XSwgdGhpcy5kYXRhW2luZGV4XSwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgICp2YWx1ZXMoKSB7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgY29uc3QgbWFwID0gZ2V0TWFwRm9yVGhpcyh0aGlzKTtcbiAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgbWFwLnZhbHVlcygpKSB7XG4gICAgICAgIHlpZWxkIHRoaXMuZGF0YVtpbmRleF07XG4gICAgICB9XG4gICAgfSxcbiAgICBrZXlzKCkge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH0sXG4gICAgKmVudHJpZXMoKSB7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgY29uc3QgbWFwID0gZ2V0TWFwRm9yVGhpcyh0aGlzKTtcbiAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgbWFwLnZhbHVlcygpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhW2luZGV4XTtcbiAgICAgICAgeWllbGQgW3ZhbHVlLCB2YWx1ZV07XG4gICAgICB9XG4gICAgfSxcbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gbmV3IFNldCh0aGlzLnZhbHVlcygpKTtcbiAgICB9LFxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfSxcbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICByZXR1cm4gXCJTZXRcIjtcbiAgICB9LFxuICAgIGludGVyc2VjdGlvbihvdGhlcikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG90aGVyU2V0ID0gcHJveHlTZXQob3RoZXIpO1xuICAgICAgY29uc3QgcmVzdWx0U2V0ID0gcHJveHlTZXQoKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy52YWx1ZXMoKSkge1xuICAgICAgICBpZiAob3RoZXJTZXQuaGFzKHZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdFNldC5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJveHlTZXQocmVzdWx0U2V0KTtcbiAgICB9LFxuICAgIHVuaW9uKG90aGVyKSB7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgY29uc3QgcmVzdWx0U2V0ID0gcHJveHlTZXQoKTtcbiAgICAgIGNvbnN0IG90aGVyU2V0ID0gcHJveHlTZXQob3RoZXIpO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLnZhbHVlcygpKSB7XG4gICAgICAgIHJlc3VsdFNldC5hZGQodmFsdWUpO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBvdGhlclNldCkge1xuICAgICAgICByZXN1bHRTZXQuYWRkKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm94eVNldChyZXN1bHRTZXQpO1xuICAgIH0sXG4gICAgZGlmZmVyZW5jZShvdGhlcikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IHJlc3VsdFNldCA9IHByb3h5U2V0KCk7XG4gICAgICBjb25zdCBvdGhlclNldCA9IHByb3h5U2V0KG90aGVyKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy52YWx1ZXMoKSkge1xuICAgICAgICBpZiAoIW90aGVyU2V0Lmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHRTZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3h5U2V0KHJlc3VsdFNldCk7XG4gICAgfSxcbiAgICBzeW1tZXRyaWNEaWZmZXJlbmNlKG90aGVyKSB7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgY29uc3QgcmVzdWx0U2V0ID0gcHJveHlTZXQoKTtcbiAgICAgIGNvbnN0IG90aGVyU2V0ID0gcHJveHlTZXQob3RoZXIpO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLnZhbHVlcygpKSB7XG4gICAgICAgIGlmICghb3RoZXJTZXQuaGFzKHZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdFNldC5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIG90aGVyU2V0LnZhbHVlcygpKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0U2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm94eVNldChyZXN1bHRTZXQpO1xuICAgIH0sXG4gICAgaXNTdWJzZXRPZihvdGhlcikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG90aGVyU2V0ID0gcHJveHlTZXQob3RoZXIpO1xuICAgICAgcmV0dXJuIHRoaXMuc2l6ZSA8PSBvdGhlci5zaXplICYmIFsuLi50aGlzLnZhbHVlcygpXS5ldmVyeSgodmFsdWUpID0+IG90aGVyU2V0Lmhhcyh2YWx1ZSkpO1xuICAgIH0sXG4gICAgaXNTdXBlcnNldE9mKG90aGVyKSB7XG4gICAgICB0aGlzLmVwb2NoO1xuICAgICAgY29uc3Qgb3RoZXJTZXQgPSBwcm94eVNldChvdGhlcik7XG4gICAgICByZXR1cm4gdGhpcy5zaXplID49IG90aGVyLnNpemUgJiYgWy4uLm90aGVyU2V0XS5ldmVyeSgodmFsdWUpID0+IHRoaXMuaGFzKHZhbHVlKSk7XG4gICAgfSxcbiAgICBpc0Rpc2pvaW50RnJvbShvdGhlcikge1xuICAgICAgdGhpcy5lcG9jaDtcbiAgICAgIGNvbnN0IG90aGVyU2V0ID0gcHJveHlTZXQob3RoZXIpO1xuICAgICAgcmV0dXJuIFsuLi50aGlzLnZhbHVlcygpXS5ldmVyeSgodmFsdWUpID0+ICFvdGhlclNldC5oYXModmFsdWUpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHByb3hpZWRPYmplY3QgPSBwcm94eSh2T2JqZWN0KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocHJveGllZE9iamVjdCwge1xuICAgIHNpemU6IHsgZW51bWVyYWJsZTogZmFsc2UgfSxcbiAgICBkYXRhOiB7IGVudW1lcmFibGU6IGZhbHNlIH0sXG4gICAgaW5kZXg6IHsgZW51bWVyYWJsZTogZmFsc2UgfSxcbiAgICBlcG9jaDogeyBlbnVtZXJhYmxlOiBmYWxzZSB9LFxuICAgIHRvSlNPTjogeyBlbnVtZXJhYmxlOiBmYWxzZSB9XG4gIH0pO1xuICBPYmplY3Quc2VhbChwcm94aWVkT2JqZWN0KTtcbiAgcmV0dXJuIHByb3hpZWRPYmplY3Q7XG59XG5cbmNvbnN0IGlzT2JqZWN0ID0gKHgpID0+IHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIHggIT09IG51bGw7XG5sZXQgZGVmYXVsdFJlZlNldDtcbmNvbnN0IGdldERlZmF1bHRSZWZTZXQgPSAoKSA9PiB7XG4gIGlmICghZGVmYXVsdFJlZlNldCkge1xuICAgIGRlZmF1bHRSZWZTZXQgPSB1bnN0YWJsZV9nZXRJbnRlcm5hbFN0YXRlcygpLnJlZlNldDtcbiAgfVxuICByZXR1cm4gZGVmYXVsdFJlZlNldDtcbn07XG5mdW5jdGlvbiBkZWVwQ2xvbmUob2JqLCBnZXRSZWZTZXQgPSBnZXREZWZhdWx0UmVmU2V0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSB8fCBnZXRSZWZTZXQoKS5oYXMob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgaWYgKGlzUHJveHlTZXQob2JqKSkge1xuICAgIHJldHVybiBwcm94eVNldChbLi4ub2JqXSk7XG4gIH1cbiAgaWYgKGlzUHJveHlNYXAob2JqKSkge1xuICAgIHJldHVybiBwcm94eU1hcChbXG4gICAgICAuLi5vYmouZW50cmllcygpXG4gICAgXSk7XG4gIH1cbiAgY29uc3QgYmFzZU9iamVjdCA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDogT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSk7XG4gIFJlZmxlY3Qub3duS2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGJhc2VPYmplY3Rba2V5XSA9IGRlZXBDbG9uZShvYmpba2V5XSwgZ2V0UmVmU2V0KTtcbiAgfSk7XG4gIHJldHVybiBiYXNlT2JqZWN0O1xufVxuXG5leHBvcnQgeyBkZWVwQ2xvbmUsIGRldnRvb2xzLCBwcm94eU1hcCwgcHJveHlTZXQsIHN1YnNjcmliZUtleSwgd2F0Y2ggfTtcbiIsImltcG9ydCBDZW50cmVMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9DZW50cmVMaXN0JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnQC9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgTWFwIGZyb20gJ0AvY29tcG9uZW50cy9NYXAnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbi8qKlxuICogUXVvdGUgZm9ybSByZWFjdCBjb21wb25lbnRcbiAqXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFNlbmRzIGRhdGEgdG8gYSBzcGVjaWZpZWQgVVJMIHVzaW5nIGEgUE9TVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSBVUkwgdG8gc2VuZCB0aGUgZGF0YSB0by5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGF5bG9hZCAtIFRoZSBwYXlsb2FkIG9iamVjdCBjb250YWluaW5nIHRoZSBkYXRhIHRvIGJlIHNlbnQuXG4gICAgICogQHBhcmFtIHthbnl9IHBheWxvYWQuYXJnIC0gVGhlIGFyZ3VtZW50IHRvIGJlIGluY2x1ZGVkIGluIHRoZSBwYXlsb2FkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgSlNPTiByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1XUC1OT05DRSc6IGdsb2JhbFZhcmlhYmxlcy5ub25jZSAvLyBJbmNsdWRlIHRoZSBub25jZSBpbiB0aGUgcmVxdWVzdCBoZWFkZXJzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXJsID0gJyc7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUih1cmwsIGdldERhdGEpO1xuXG4gICAgaWYgKCFkYXRhPy5zdWNjZXNzKSB7XG4gICAgICAgIC8vIHN0YXRlLmZvcm1EYXRhID0gY2xvbmVEZWVwKGRhdGE/LmRhdGEpO1xuICAgICAgICAvLyBodHRwczovL3N0Z21mczUud3BlbmdpbmVwb3dlcmVkLmNvbS93cC1qc29uL3dwL3YyL2NlbnRyZS8/cGVyX3BhZ2U9MTAwJl9maWVsZHM9aWQsdGl0bGUsYWNmXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImdyaWQgZ2FwLTggbWQ6Z2FwLTEwXCI+XG4gICAgICAgICAgICAgICAgPEZpbHRlciAvPlxuICAgICAgICAgICAgICAgIDxDZW50cmVMaXN0IC8+XG4gICAgICAgICAgICAgICAgPE1hcCAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtcmFkaXVzMiBiZy1jb2xvcjE1IGdyaWQgbWluLWgtWzMwcmVtXSBwbGFjZS1pdGVtcy1jZW50ZXIgbWQ6bWluLWgtWzQwcmVtXVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiTG9hZGluZ1wiIHdpZHRoPVwiNjBcIiBoZWlnaHQ9XCI2MFwiIGNsYXNzTmFtZT1cIlwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3NwaW5uZXItZGFyay5zdmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY29uc3QgQ2VudHJlTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdj5DZW50cmVMaXN0PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VudHJlTGlzdDtcbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyB1c2VTbmFwc2hvdCB9IGZyb20gJ3ZhbHRpbyc7XG5cbmNvbnN0IEZpbHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBzbmFwID0gdXNlU25hcHNob3Qoc3RhdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c25hcC5mb3JtRGF0YT8uc2VhcmNofVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiAoc3RhdGUuZm9ybURhdGEuc2VhcmNoID0gZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIhcHItMTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1zZWFyY2guc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC0xLzIgei1bM10gLXRyYW5zbGF0ZS15LTEvMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTW9iaWxlIEZpbHRlciAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgcGItNFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHZhcigtLUdyYXktODApJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgZ2FwLTQgdGV4dC1sZyBmb250LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChzdGF0ZS5tb2RhbE9wZW4gPSAhc25hcC5tb2RhbE9wZW4pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1maWx0ZXIuc3ZnXCIgYWx0PVwiXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxuICAgICAgICAgICAgICAgICAgICBGaWx0ZXJzICg5KVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LTcwMCB1bmRlcmxpbmUgZGVjb3JhdGlvbi1ncmF5LTgwIGRlY29yYXRpb24tMiB1bmRlcmxpbmUtb2Zmc2V0LVs1cHhdXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c25hcC5oYW5kbGVSZXNldH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsImNvbnN0IE1hcCA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdj5NYXA8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iLCJpbXBvcnQgeyBwcm94eSB9IGZyb20gJ3ZhbHRpbyc7XG5pbXBvcnQgeyBkZXZ0b29scyB9IGZyb20gJ3ZhbHRpby91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2VudHJlRGF0YSB7XG4gICAgY2VudHJlVHlwZTogc3RyaW5nO1xuICAgIHByb2dyYW1tZVR5cGU6IHN0cmluZ1tdO1xuICAgIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgaXNDZXJ0aWZpZWQ6IGJvb2xlYW47XG4gICAgbW90aGVyVG9uZ3VlOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZW50cmVTZWFyY2hQcm9wcyB7XG4gICAgY2VudHJlVHlwZTogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgfT47XG4gICAgcHJvZ3JhbW1lVHlwZTogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgfT47XG4gICAgZGlzdGFuY2U6IHtcbiAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgIG1heDogbnVtYmVyO1xuICAgIH07XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICBpc0NlcnRpZmllZDogYm9vbGVhbjtcbiAgICBtb3RoZXJUb25ndWU6IEFycmF5PHtcbiAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICAgICAgYWN0aXZlOiBib29sZWFuO1xuICAgIH0+O1xuICAgIHNlYXJjaDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3RvcmVJbnRlcmZhY2Uge1xuICAgIGZvcm1EYXRhOiBDZW50cmVTZWFyY2hQcm9wcztcbiAgICBjZW50cmVzOiBDZW50cmVEYXRhW107XG4gICAgZm9ybVN1Ym1pdHRlZDogYm9vbGVhbjtcbiAgICBtb2RhbE9wZW46IGJvb2xlYW47XG4gICAgaXNNdXRhdGluZzogYm9vbGVhbjtcbiAgICBmb3JtRXJyb3I6IHN0cmluZztcbiAgICBoYW5kbGVGb3JtU3VibWl0OiAoKSA9PiB2b2lkO1xuICAgIGhhbmRsZVJlc2V0OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBkZWZhdWx0Rm9ybURhdGE6IENlbnRyZVNlYXJjaFByb3BzID0ge1xuICAgIGNlbnRyZVR5cGU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdBbGwnLFxuICAgICAgICAgICAgdmFsdWU6ICdhbGwnLFxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRWFybHkgWWVhcnMgQ2VudHJlJyxcbiAgICAgICAgICAgIHZhbHVlOiAnZWFybHkteWVhcnMtY2VudHJlJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdMYXJnZSBDaGlsZGNhcmUgQ2VudHJlJyxcbiAgICAgICAgICAgIHZhbHVlOiAnbGFyZ2UtY2hpbGRjYXJlLWNlbnRyZScsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHByb2dyYW1tZVR5cGU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdJbmZhbnQgQ2FyZScsXG4gICAgICAgICAgICB2YWx1ZTogJ2luZmFudC1jYXJlJyxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1BsYXlncm91cCcsXG4gICAgICAgICAgICB2YWx1ZTogJ3BsYXlncm91cCcsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTnVyc2VyeSAxJyxcbiAgICAgICAgICAgIHZhbHVlOiAnbnVyc2VyeS0xJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdOdXJzZXJ5IDInLFxuICAgICAgICAgICAgdmFsdWU6ICdudXJzZXJ5LTInLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0tpbmRlcmdhcnRlbiAxJyxcbiAgICAgICAgICAgIHZhbHVlOiAna2luZGVyZ2FydGVuLTEnLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0tpbmRlcmdhcnRlbiAyJyxcbiAgICAgICAgICAgIHZhbHVlOiAna2luZGVyZ2FydGVuLTInLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9XG4gICAgXSxcbiAgICBkaXN0YW5jZToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMjBcbiAgICB9LFxuICAgIG1vdGhlclRvbmd1ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0FsbCcsXG4gICAgICAgICAgICB2YWx1ZTogJ2FsbCcsXG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdNYWxheScsXG4gICAgICAgICAgICB2YWx1ZTogJ21hbGF5JyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDaGluZXNlJyxcbiAgICAgICAgICAgIHZhbHVlOiAnY2hpbmVzZScsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGFtaWwnLFxuICAgICAgICAgICAgdmFsdWU6ICd0YW1pbCcsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICBdLFxuICAgIGlzQ2VydGlmaWVkOiBmYWxzZSxcbiAgICBzZWFyY2g6ICcnLFxuICAgIGxhdGl0dWRlOiAwLFxuICAgIGxvbmdpdHVkZTogMFxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXRlOiBTdG9yZUludGVyZmFjZSA9IHByb3h5PFN0b3JlSW50ZXJmYWNlPih7XG4gICAgZm9ybURhdGE6IHsgLi4uZGVmYXVsdEZvcm1EYXRhIH0sXG4gICAgbW9kYWxPcGVuOiBmYWxzZSxcbiAgICBoYW5kbGVSZXNldDogKCkgPT4ge1xuICAgICAgICBzdGF0ZS5mb3JtRGF0YSA9IHsgLi4uZGVmYXVsdEZvcm1EYXRhIH07XG4gICAgfVxufSBhcyBTdG9yZUludGVyZmFjZSk7XG5cbmRldnRvb2xzKHN0YXRlLCB7IG5hbWU6ICdDZW50cmUgU2VhcmNoJywgZW5hYmxlZDogdHJ1ZSB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50cmUtc2VhcmNoJyk7XG5cbmlmIChlbGVtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChlbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcblxuICAgIHJvb3QucmVuZGVyKFxuICAgICAgICA8U3RyaWN0TW9kZT5cbiAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgPC9TdHJpY3RNb2RlPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiQ2VudHJlTGlzdCIsIkZpbHRlciIsIk1hcCIsInVzZVNXUiIsIkFwcCIsImdldERhdGEiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJnbG9iYWxWYXJpYWJsZXMiLCJub25jZSIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwic3RhdGUiLCJ1c2VTbmFwc2hvdCIsInNuYXAiLCJ0eXBlIiwidmFsdWUiLCJmb3JtRGF0YSIsInNlYXJjaCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInN0eWxlIiwiYm9yZGVyQm90dG9tIiwib25DbGljayIsIm1vZGFsT3BlbiIsImhhbmRsZVJlc2V0IiwicHJveHkiLCJkZXZ0b29scyIsImRlZmF1bHRGb3JtRGF0YSIsImNlbnRyZVR5cGUiLCJsYWJlbCIsImFjdGl2ZSIsInByb2dyYW1tZVR5cGUiLCJkaXN0YW5jZSIsIm1pbiIsIm1heCIsIm1vdGhlclRvbmd1ZSIsImlzQ2VydGlmaWVkIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJuYW1lIiwiZW5hYmxlZCIsIlN0cmljdE1vZGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJSZWFjdERPTSIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9
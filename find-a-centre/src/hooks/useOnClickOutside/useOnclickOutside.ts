// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useCallback, useEffect, useRef, useState } from 'react';

import type { RefObject } from 'react';
import canUsePassiveEvents from './canUsePassiveEvents';

export const DEFAULT_IGNORE_CLASS = 'ignore-onclickoutside';

export interface Callback<T extends Event = Event> {
    (event: T): void;
}

type El = HTMLElement;
type Refs = RefObject<El>[];

export interface Options {
    refs?: Refs;
    disabled?: boolean;
    eventTypes?: string[];
    excludeScrollbar?: boolean;
    ignoreClass?: string | string[];
    detectIFrame?: boolean;
}

interface Return {
    (element: El | null): void;
}

// eslint-disable-next-line require-jsdoc
const checkClass = (el: HTMLElement, cl: string): boolean => el.classList?.contains(cl);

// eslint-disable-next-line require-jsdoc
const hasIgnoreClass = (e: any, ignoreClass: string | string[]): boolean => {
    let el = e.target || e;

    while (el) {
        if (Array.isArray(ignoreClass)) {
            // eslint-disable-next-line no-loop-func
            if (ignoreClass.some(c => checkClass(el, c))) return true;
        } else if (checkClass(el, ignoreClass)) {
            return true;
        }

        el = el.parentElement;
    }

    return false;
};

// eslint-disable-next-line require-jsdoc
const clickedOnScrollbar = (e: MouseEvent): boolean =>
    document.documentElement.clientWidth <= e.clientX || document.documentElement.clientHeight <= e.clientY;

// eslint-disable-next-line require-jsdoc
const getEventOptions = (type: string): { passive: boolean } | boolean =>
    type.includes('touch') && canUsePassiveEvents() ? { passive: true } : false;

// eslint-disable-next-line require-jsdoc
const useOnclickOutside = (
    callback: Callback,
    {
        refs: refsOpt,
        disabled,
        eventTypes = ['mousedown', 'touchstart'],
        excludeScrollbar,
        ignoreClass = DEFAULT_IGNORE_CLASS,
        detectIFrame = true
    }: Options = {}
): Return => {
    const [refsState, setRefsState] = useState<Refs>([]);
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    const ref: Return = useCallback(el => setRefsState(prevState => [...prevState, { current: el }]), []);

    useEffect(() => {
        if (!refsOpt?.length && !refsState.length) return;

        // eslint-disable-next-line require-jsdoc
        const getEls = () => {
            const els: El[] = [];
            (refsOpt || refsState).forEach(({ current }) => current && els.push(current));
            return els;
        };

        // eslint-disable-next-line require-jsdoc
        const handler = (e: any) => {
            if (
                !hasIgnoreClass(e, ignoreClass) &&
                !(excludeScrollbar && clickedOnScrollbar(e)) &&
                getEls().every(el => !el.contains(e.target))
            ) {
                callbackRef.current(e);
            }
        };

        // eslint-disable-next-line require-jsdoc
        const blurHandler = (e: FocusEvent) =>
            // On firefox the iframe becomes document.activeElement in the next event loop
            setTimeout(() => {
                const { activeElement } = document;

                if (
                    activeElement?.tagName === 'IFRAME' &&
                    !hasIgnoreClass(activeElement, ignoreClass) &&
                    !getEls().includes(activeElement as HTMLIFrameElement)
                ) {
                    callbackRef.current(e);
                }
            }, 0);

        // eslint-disable-next-line require-jsdoc
        const removeEventListener = () => {
            eventTypes.forEach(type =>
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                document.removeEventListener(type, handler, getEventOptions(type))
            );

            if (detectIFrame) window.removeEventListener('blur', blurHandler);
        };

        if (disabled) {
            removeEventListener();
            return;
        }

        eventTypes.forEach(type => document.addEventListener(type, handler, getEventOptions(type)));

        if (detectIFrame) window.addEventListener('blur', blurHandler);

        // eslint-disable-next-line consistent-return
        return () => removeEventListener();
    }, [refsState, ignoreClass, excludeScrollbar, disabled, detectIFrame, JSON.stringify(eventTypes)]);

    return ref;
};

export default useOnclickOutside;

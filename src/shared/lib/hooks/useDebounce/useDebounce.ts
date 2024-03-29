import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * Хук, который позволяет отменить предыдущий вызов функции, пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
export const useDebounce = <T>(
    callback: (...args: T[]) => void,
    delay: number,
) => {
    const timer = useRef() as MutableRefObject<any>;
    return useCallback(
        (...args: T[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};

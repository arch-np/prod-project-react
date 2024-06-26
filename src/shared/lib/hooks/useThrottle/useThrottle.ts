import { useCallback, useRef, useEffect } from 'react';
// Выполнение задания в заданный промежуток времени
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);
    const timeoutRef = useRef<any>(null);

    const throttledCallback = useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                timeoutRef.current = setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );

    useEffect(
        () => () => {
            clearTimeout(timeoutRef.current);
        },
        [],
    );

    return throttledCallback;
}

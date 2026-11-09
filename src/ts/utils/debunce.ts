export const debunce = (func: (...args: any) => void, time: number) => {
    let timeoutId: number;
    return function (...args: any) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, time);
    };
};

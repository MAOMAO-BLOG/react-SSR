export const actionsType = {
    increase: 'counter/increase',
    decrease: 'counter/decrease',
    asyncIncrease: 'counter/asyncIncrease',
    asyncDecrease: 'counter/asyncDecrease',
}
function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration)
    })
}
export function increase() {
    return { type: actionsType.increase }
}
export function decrease() {
    return { type: actionsType.decrease }
}
export function asyncDecrease() {
    return async function (dispatch) {
        await delay(1000);
        dispatch(decrease());
    }
}
export function asyncIncrease() {
    return async function (dispatch) {
        await delay(1000);
        dispatch(increase());
    }
}
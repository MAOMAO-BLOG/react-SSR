import * as loginService from "@/services/loginService";
export const actionsType = {
    setLoginUser: 'login/setLoginUser',
    login: 'login/login',
    whoAmI: 'login/whoAmI',
    loginOut: 'login/loginOut',
}

export function setLoginUser(payload) {
    return { type: actionsType.setLoginUser, payload }
}
export function login(loginId, loginPwd) {
    return async function (dispatch) {
        const { data } = await loginService.login(loginId, loginPwd);
        if (data) {
            dispatch(setLoginUser(data));
            return true;
        } else {
            dispatch(setLoginUser(null));
            return false;
        }
    }
}
export function whoAmI(axios) {
    return async function (dispatch) {
        const { data } = await loginService.whoAmI(axios);
        console.log(data);
        if (data) {
            dispatch(setLoginUser(data));
            return true;
        } else {
            dispatch(setLoginUser(null));
            return false;
        }
    }
}
export function loginOut() {
    return function (dispatch) {
        dispatch(setLoginUser(null));
        loginService.loginOut();
    }
}
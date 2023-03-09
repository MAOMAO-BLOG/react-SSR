import request from "./request";
import isBrowser from "@/utils/isBrowser";
import cookie from 'cookie';
const auth = "authorization";
export async function login(loginId, loginPwd,axios=request) {
    const res = await axios.post('/api/user/login', {
        loginId,
        loginPwd
    })
    return res.data;
}
export async function whoAmI(axios=request) {
    const res = await axios.get('/api/user/whoami')
    return res.data;
}
export function loginOut() {
    if (isBrowser()) {
        let result = cookie.serialize('token', "", {
            maxAge: 0
        })
        document.cookie = request;
    }
}
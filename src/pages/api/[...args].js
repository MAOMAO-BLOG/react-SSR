import { createProxyMiddleware } from "http-proxy-middleware";
const cookieName = 'token'
export default createProxyMiddleware({
    target: 'http://yuanjin.tech:5100',
    origin: true,
    onProxyRes(proxyRes, req, res) {
        let token = proxyRes.headers['authorization']
        if (token) {
            proxyRes.headers['set-cookie'] = `${cookieName}=${token};Max-Age=${24 * 60 * 60};path=/`; // add new header to response
            delete proxyRes.headers['authorization']; // remove header from response
        }
    },
    onProxyReq(proxyReq, req, res) {
        let token = req.cookies[cookieName];
        if (token) {
            proxyReq.setHeader('authorization', token);
        }
    }
})
export const config = {
    api: {
        bodyParser: false
    }
}
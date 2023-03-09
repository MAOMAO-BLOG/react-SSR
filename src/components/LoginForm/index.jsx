import React, { useState } from 'react'
import { useRouter } from 'next/router'
export default function index({ onSubmit }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        loginId: '',
        loginPwd: ''
    })
    return (
        <div>
            <p>
                账号：<input type="text" value={formData.loginId} onChange={(e) => {
                    setFormData({
                        ...formData,
                        loginId: e.target.value
                    })
                }} />
            </p>
            <p>
                密码：<input type="password" value={formData.loginPwd} onChange={(e) => {
                    setFormData({
                        ...formData,
                        loginPwd: e.target.value
                    })
                }} />
            </p>
            <p>
                <button onClick={async () => {
                 
                    if (onSubmit) {
                        const data = await onSubmit(formData)
                        console.log('onSubmit',data);
                        if (data) {
                            router.push('/');
                        } else {
                            alert('账号/密码错误');
                        }
                    }
                }}>登录</button>
            </p>
        </div>
    )
}

import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Header() {
    const router = useRouter();
    return (
        <div>
            <Link href='/'>首页</Link>
            <Link href='/movies'>电影列表页</Link>
            <Link href='/redux'>redux 测试</Link>
            <Link href='/login'>登录页</Link>
            <Link href='/private'>受保护页</Link>
        </div>
    )
}

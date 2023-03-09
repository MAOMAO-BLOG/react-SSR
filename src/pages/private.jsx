import React, { useEffect } from 'react'
import withStore from '@/utils/withStore';
import { whoAmI } from '@/store/actions/login';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
function Private({ loginUser }) {
    const router = useRouter();
    useEffect(() => {
        if (!loginUser) {
            router.push('/');
        }
    }, [])
    if (loginUser) {
        return <h1>必须登录状态才能访问</h1>; 
    } else {
        return null;
    }
}
function mapState(state) {
    return {
        loginUser: state.login
    }
}
export default connect(mapState, null)(Private);
const func = async function ({ store, axios }) {
    await store.dispatch(whoAmI(axios));
}
//触发仓库的whoAmI,把数据填充到仓库
export const getServerSideProps = withStore(func);


import React from 'react'
import LoginForm from '@/components/LoginForm';
import { connect } from 'react-redux';
import { login } from '@/store/actions/login';
function mapDispatch(dispatch) {
    return {
        async onSubmit({ loginId, loginPwd }) {
            //登陆页面
            return await dispatch(login(loginId, loginPwd));

        }
    }
}
export default connect(null, mapDispatch)(LoginForm);

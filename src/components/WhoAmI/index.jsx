import React, { useEffect } from 'react';
import { whoAmI } from '@/store/actions/login'
import { connect } from 'react-redux'
function Page({ whoAmI }) {
    useEffect(() => {
        whoAmI && whoAmI();
    }, []);
    return (
        <></>
    )
}
function mapDispatch(dispatch) {
    console.log('mapDispatch');
    return {
        whoAmI() {
            dispatch(whoAmI());    
        }
    }
}
export default connect(null, mapDispatch)(Page);

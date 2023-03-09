import React from 'react'
import Header from '@/components/Header';
import '../styles/globals.css'
import { Provider } from 'react-redux';
import makeStore from '../store';
import WhoAmI from '@/components/WhoAmI'
export default function _app({ Component, pageProps }) {
    const { _initialState, ...rest } = pageProps;
    console.log('pageProps', pageProps);
    return (
        <Provider store={makeStore(_initialState)}>
            <div>
                <WhoAmI />
                <h1>模板</h1>
                <Header />
                <Component {...rest} />
            </div>
        </Provider>
    )
}

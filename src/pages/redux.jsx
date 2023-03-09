import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease, asyncDecrease, asyncIncrease } from '@/store/actions/counter'
import makeStore from '../store';
import withStore from '@/utils/withStore';
function Redux({ number, increase, decrease, asyncIncrease, asyncDecrease }) {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>加</button>
            <button onClick={asyncIncrease}>异步加</button>
            <button onClick={decrease}>减</button>
            <button onClick={asyncDecrease}>异步减</button>
        </div>
    )
}
function mapDispatch(dispatch) {
    return {
        increase() {
            dispatch(increase())
        },
        decrease() {
            dispatch(decrease())
        },
        asyncDecrease() {
            dispatch(asyncDecrease())
        },
        asyncIncrease() {
            dispatch(asyncIncrease())
        }
    }
}
function mapState(state) {
    return {
        number: state.counter
    }
}
const func = async function ({ store }) {
    await store.dispatch(asyncIncrease());
}
export const getServerSideProps = withStore(func)
export default connect(mapState, mapDispatch)(Redux);
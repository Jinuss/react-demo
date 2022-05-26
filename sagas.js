import { all, put, select, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
    console.log('hellow sagas!')
}

export function* IncrementAync({ value }) {
    yield put({ type: "INCREMENT_ASYNC", value: value * 2 })
}
export function* watchFunc() {
    yield takeEvery('INCREMENTASYNC', IncrementAync)
}
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchFunc()
    ])
} 
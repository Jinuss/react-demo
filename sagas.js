import { all, put, select, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
    console.log('hellow sagas!')
}

export function* IncrementAync() {
    const state = select();
    console.log(state);
    yield put({ type: "INCREMENT_ASYNC", data: new Date().toDateString() })
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
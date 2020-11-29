import { call, put, takeEvery, takeLastest } from 'redux-saga/effects';

import axios from 'axios';

function fetchApiTaluk() {

    return axios.get('http://localhost:3001/home').then(response => {
        console.log("reacreacreac", response.data);
        return response.data;
    })
    .catch(err => { console.log("errrrrrrr", err); throw err });


}
function* fetchTalukVillageData() {
    try {
        const talukData = yield call(fetchApiTaluk);
        yield put({ type: 'getTalukData', payload: talukData });
    }
    catch {
        console.log("catch blockkkk")
        yield put({ type: 'fetchDataFail', error: ["Fetch data Fail"] });
    }
}
function* mysaga() {

    yield takeEvery("getDataStart", fetchTalukVillageData)
}

export default mysaga;






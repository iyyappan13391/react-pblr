import { call, put, takeLatest , takeEvery } from 'redux-saga/effects';
import {GET_POST_RENTALDATA_START,GET_POST_RENTALDATA_SUCCESS,GET_POST_RENTALDATA_FAIL} from './constants';

import axios from 'axios';

function GetApiPostData(sendFilter) {
    console.log("sendFilter in sagaaaa", sendFilter);
    return axios.post('http://localhost:3001/post/getlist',sendFilter).then(response => {
        console.log("reacreacreac", response.data);
        return response.data;
    })
        .catch(err => { console.log("errrrrrrr", err); throw err });


}
function* GetRentalData(actions) {
    try {
        const postResponseData = yield call(GetApiPostData,actions.sendFilter);
        yield put({ type: GET_POST_RENTALDATA_SUCCESS, payload: postResponseData });
    }
    catch(err) {
        console.log("catch blockkkk",err);
        yield put({ type: GET_POST_RENTALDATA_FAIL, error: ["Fetch data Fail"] });
    }
}


export default GetRentalData;






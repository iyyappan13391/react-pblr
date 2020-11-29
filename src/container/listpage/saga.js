import { call, put, takeLatest , takeEvery } from 'redux-saga/effects';
import {GET_POST_RENTALDATA_START,GET_POST_RENTALDATA_SUCCESS,GET_POST_RENTALDATA_FAIL} from './constants';

import axios from 'axios';

function GetApiPostData() {
    
    return axios.get('http://localhost:3001/post/getlist').then(response => {
        console.log("reacreacreac", response.data);
        return response.data;
    })
        .catch(err => { console.log("errrrrrrr", err); throw err });


}
function* GetRentalData(actions) {
    try {
        const postResponseData = yield call(GetApiPostData);
        yield put({ type: GET_POST_RENTALDATA_SUCCESS, payload: postResponseData });
    }
    catch(err) {
        console.log("catch blockkkk",err);
        yield put({ type: GET_POST_RENTALDATA_FAIL, error: ["Fetch data Fail"] });
    }
}


export default GetRentalData;






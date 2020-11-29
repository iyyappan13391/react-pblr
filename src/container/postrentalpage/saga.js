import { call, put, takeLatest , takeEvery } from 'redux-saga/effects';
import {POST_CREATE_RENTAL_START,POST_RES_DATA_SUCCESS,POST_RES_DATA_FAIL} from './constants';

import axios from 'axios';

function PutApiTaluk(formData) {
    
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    return axios.post('http://localhost:3001/post/create',formData,config).then(response => {
        console.log("reacreacreac", response.data);
        return response.data;
    })
        .catch(err => { console.log("errrrrrrr", err); throw err });


}
function* CreateRentalData(actions) {
    try {
        const postResponseData = yield call(PutApiTaluk,actions.payload);
        yield put({ type: POST_RES_DATA_SUCCESS, payload: postResponseData });
    }
    catch(err) {
        console.log("catch blockkkk",err);
        yield put({ type: POST_RES_DATA_FAIL, error: ["Fetch data Fail"] });
    }
}


export default CreateRentalData;






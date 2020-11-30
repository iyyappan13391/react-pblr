
import { takeEvery,takeLatest, all } from 'redux-saga/effects';


import {GET_TALUK_VILLAGE_START,GET_TALUK_DATA,GET_VILLAGE_DATA,FETCH_DATA_FAIL} from './constants';
import {POST_CREATE_RENTAL_START} from '../postrentalpage/constants';
import {GET_POST_RENTALDATA_START} from '../listpage/constants';

import fetchTalukData from './saga';
import fetchVillageData from './villageSaga';
import CreateRentalData from '../postrentalpage/saga';
import GetRentalData from '../listpage/saga';



function *watchAll() {
    yield all([
        takeEvery(GET_TALUK_VILLAGE_START, fetchVillageData),
        takeEvery(GET_TALUK_VILLAGE_START, fetchTalukData),
        takeEvery(POST_CREATE_RENTAL_START, CreateRentalData),
        takeEvery(GET_POST_RENTALDATA_START, GetRentalData)
         
    ]);
  }
  
  export default watchAll;
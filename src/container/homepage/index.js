
import { takeEvery,takeLatest, all } from 'redux-saga/effects';


import {GET_TALUK_VILLAGE_START,GET_TALUK_DATA,GET_VILLAGE_DATA,FETCH_DATA_FAIL} from './constants';

import fetchTalukData from './saga';
import fetchVillageData from './villageSaga';



function *watchAll() {
    yield all([
        takeLatest(GET_TALUK_VILLAGE_START, fetchVillageData),
        takeLatest(GET_TALUK_VILLAGE_START, fetchTalukData)
         
    ]);
  }
  
  export default watchAll;
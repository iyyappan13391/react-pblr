
import {GET_TALUK_VILLAGE_START,GET_TALUK_DATA,GET_VILLAGE_DATA,FETCH_DATA_FAIL} from './constants';

export const Action_getDataStartfn = ()=>({type:GET_TALUK_VILLAGE_START});
export const Action_getTalukDatafn = ()=>({type: GET_TALUK_DATA});
export const Action_getVillageDatafn = ()=>({type: GET_VILLAGE_DATA});
export const Action_fetchDataFailfn = ()=>({type:FETCH_DATA_FAIL});



import {POST_CREATE_RENTAL_START,POST_RES_DATA_SUCCESS,POST_RES_DATA_FAIL} from './constants';

export const Action_PostRentalDataStartfn = (formdata)=>({type:POST_CREATE_RENTAL_START,payload:formdata});
export const Action_postResDataSuccessfn = ()=>({type: POST_RES_DATA_SUCCESS});
export const Action_postResDataFailfn = ()=>({type:POST_RES_DATA_FAIL});


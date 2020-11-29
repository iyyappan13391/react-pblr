
import {GET_POST_RENTALDATA_START,GET_POST_RENTALDATA_SUCCESS,GET_POST_RENTALDATA_FAIL} from './constants';

export const Action_getPostedRentalStartfn = (formdata)=>({type:GET_POST_RENTALDATA_START});
export const Action_getPostedRentalSuccessfn = ()=>({type: GET_POST_RENTALDATA_SUCCESS});
export const Action_getPostedRentalFailfn = ()=>({type:GET_POST_RENTALDATA_FAIL});


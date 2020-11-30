
import {GET_POST_RENTALDATA_START,GET_POST_RENTALDATA_SUCCESS,GET_POST_RENTALDATA_FAIL} from './constants';

export const Action_getPostedRentalStartfn = (senddata)=>({type:GET_POST_RENTALDATA_START,sendFilter:senddata});
export const Action_getPostedRentalSuccessfn = ()=>({type: GET_POST_RENTALDATA_SUCCESS});
export const Action_getPostedRentalFailfn = ()=>({type:GET_POST_RENTALDATA_FAIL});


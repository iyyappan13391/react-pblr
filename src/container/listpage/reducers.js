import React from 'react';
import {GET_POST_RENTALDATA_START,GET_POST_RENTALDATA_SUCCESS,GET_POST_RENTALDATA_FAIL} from './constants';
const initVal = {
    loading: false,
    dataResponse:[],
    error:''
}


const GetPostRental =  (state = initVal, action) =>{

    switch (action.type) {
        case GET_POST_RENTALDATA_START:
            return {
                loading: true
            }
        case GET_POST_RENTALDATA_SUCCESS:
            return {
                loading: false,
                dataResponse: action.payload

            }
        case GET_POST_RENTALDATA_FAIL:
            return {
                loading: false,
                error:action.error
            }
        default:
            return state;;
    }

}

export default GetPostRental;
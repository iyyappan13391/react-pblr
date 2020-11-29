import React from 'react';
import {POST_CREATE_RENTAL_START,POST_RES_DATA_SUCCESS,POST_RES_DATA_FAIL} from './constants';
const initVal = {
    loading: false,
    dataResponse:[],
    error:''
}


const createPostRental =  (state = initVal, action) =>{

    switch (action.type) {
        case POST_CREATE_RENTAL_START:
            return {
                loading: true
            }
        case POST_RES_DATA_SUCCESS:
            return {
                loading: false,
                dataResponse: action.payload

            }
        case POST_RES_DATA_FAIL:
            return {
                loading: false,
                error:action.error
            }
        default:
            return state;;
    }

}

export default createPostRental;
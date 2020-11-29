
import {GET_TALUK_VILLAGE_START,GET_TALUK_DATA,GET_VILLAGE_DATA,FETCH_DATA_FAIL} from './constants';


const initialValue = {
    loading: false,
    tdata: [],
    vdata:[],
    errordata:''
}
const TalukVillageReducers = (state = initialValue, actions) => {

    switch (actions.type) {
        case GET_TALUK_VILLAGE_START:
            return {
                loading: true
            }
        case GET_TALUK_DATA:
            console.log("state in get taluka loop");
            return {
                ...state,
                loading: false,
                tdata: actions.payload
            };
        case GET_VILLAGE_DATA:
            console.log("state in get village loop");
            return {
                ...state,
                loading: false,
                vdata: actions.payload
            };
        case FETCH_DATA_FAIL:
            return {
                ...state,
                loading: false,
                errordata: actions.error
            }
        default:
            return state;
    }

}

export default TalukVillageReducers;
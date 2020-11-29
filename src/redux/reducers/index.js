
const initialValue = {
    loading: false,
    data: []
}
const reducers = (state = initialValue, actions) => {

    switch (actions.type) {
        case 'getDataStart':
            return {
                loading: true
            }
        case 'getTalukData':
            return {
                ...state,
                loading: false,
                data: actions.payload
            };
        case 'getVillageData':
            return {
                ...state,
                loading: false,
                data: actions.payload
            };
        case 'fetchDataFail':
            return {
                ...state,
                loading: false,
                data: actions.error
            }
        default:
            return state;
    }

}

export default reducers;
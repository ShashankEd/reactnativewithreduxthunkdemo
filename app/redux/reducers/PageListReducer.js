import { ACTION_TYPES } from '../constants'
const initialState = {
    pageList: []
};
const pageListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.API_SUCCESS:
            return {
                ...state,
                pageList: action.payload
            };
        default:
            return state;
    }
}
export default pageListReducer;
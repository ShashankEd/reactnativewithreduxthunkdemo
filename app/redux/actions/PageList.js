import { ACTION_TYPES } from '../../redux/constants/index'
export function setPageList(pageList) {
    return {
        type: ACTION_TYPES.API_SUCCESS,
        payload: pageList,
    };
}
export function getPageList() {
    return async (dispatch) => {
        try {
            const apiResponse = await fetch('http://dummy.restapiexample.com/api/v1/employees', {
                method: 'GET'
            })
            const employees = await apiResponse.json()
            console.error("getPageList => " + JSON.stringify(employees));
            await dispatch(setPageList(employees.data));
            return employees.data || [];
        } catch (error) {
            console.error(error);
        }
    };
}
import * as actionTypes from "./actionTypes";

const  defaultState = {
    patientList:[], //病患列表
    orders:{} //當前醫囑
}

export const Reducer = (state = defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionTypes.GET_PATIENT_LIST: //初始化病患列表
            {
                newState.patientList = action.patientList;
                return newState;
            }
        case actionTypes.GET_PATIENT_ORDERS: //取得病患醫囑
            {
                newState.orders = action.orders;
                return newState;
            }
        default:
            return state;
    }
}
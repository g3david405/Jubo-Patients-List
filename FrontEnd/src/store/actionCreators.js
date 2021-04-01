import axios from 'axios'
import * as actionTypes from "./actionTypes";

//初始化頁面取得所有病患列表
export const getPatientList = () => {
    return (dispatch)=>{
        axios({
            url:`${process.env.REACT_APP_URL}/patient`,
            method:"get",
        }).then((res)=>{
            dispatch({
                type:actionTypes.GET_PATIENT_LIST,
                patientList:res.data.patientList
            })
        }).catch(()=>{
            alert("失敗");
        })
    }
}

//根據orderID取得對應醫囑資訊
export const getPatientOrders = (orderID,setLoading) => {
    return (dispatch)=>{
        setLoading(true);
        axios({
            url: `${process.env.REACT_APP_URL}/orders?id=${orderID}`,
            method:"get"
        }).then((res)=>{
            dispatch({
                type:actionTypes.GET_PATIENT_ORDERS,
                orders:res.data.orders
            })
        }).catch(()=>{
           alert("失敗");
        }).finally(()=>{
            setLoading(false);
        })
    }
}

//更新醫囑資訊
export const updateOrders = (orderID,updateContent) => {
    return (dispatch,getState)=>{
        const state = getState();
        axios({
            url:`${process.env.REACT_APP_URL}/orders`,
            method:"patch",
            data:{
                Id:orderID,
                updateContent:updateContent
            }
        }).then(()=>{
            dispatch({
                type:actionTypes.GET_PATIENT_ORDERS,
                orders:{...state,Message:updateContent}
            })
        })
    }
}
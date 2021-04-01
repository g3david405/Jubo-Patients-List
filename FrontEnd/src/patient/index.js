import React,{useEffect,useState,Fragment} from "react";
import {
    List,
    ListItem,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    CircularProgress,
    Tooltip
} from "@material-ui/core";
import {ContentWrapper, PatientListWrapper, PatientTitle, DialogWrapper, DialogTextarea} from "./style";
import * as actionCreators from "../store/actionCreators";
import {useDispatch, useSelector} from "react-redux";

export default function Patient(){
    const [loading,setLoading] = useState(true); //異步獲取病人醫囑時為true
    const [showDialog,setShowDialog] = useState(false); //是否顯示Dialog
    const [patientName,setPatientName] = useState(""); //出現dialog時的病人名稱
    const [updateOrders,setUpdateOrders] = useState(false); //使用者是否正在編輯醫囑(若是的話須提供textarea)
    const [updateText,setUpdateText] = useState(); //更新醫囑的文字(textarea中內容)
    const patientList = useSelector(state => state.patientList); //所有病人的名稱以及資訊(初始化頁面時取得)
    const orders = useSelector(state => state.orders); //點及單個病人時對應到的醫囑
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actionCreators.getPatientList()); //初始化頁面取得所有病人資訊
    },[])


    //點擊更新Icon時讓dialog切換為更新模式，並將舊有醫囑資訊帶入textarea預設值
    const HandleUpdateIconClick = () => {
        setUpdateOrders(true);
        if(orders.Message) {
            setUpdateText(orders.Message);
        }
        else{
            setUpdateText("");
        }
    }

    //點擊確認更新按鈕後發送異步請求，並結束更新模式
    const HandleOrdersUpdate = () => {
        dispatch(actionCreators.updateOrders(orders.Id,updateText))
        setUpdateOrders(false);
    }

    //點擊關閉按鈕後，將dialog視窗顯示設為false，並離開醫囑更新模式
    const HandleDialogClose = () => {
        setShowDialog(false);
        setUpdateOrders(false);
    }

    //點擊列表中病人名子，像後端發送請求獲得該醫囑，並顯示dialog和將對應的病人名稱顯示再dialog上
    const HandleListPatientClick = (patient) => {
        dispatch(actionCreators.getPatientOrders(patient.OrderId,setLoading));
        setPatientName(patient.Name);
        setShowDialog(true);
    }

    //點擊清除後自動保存，並退出更新模式
    const HandleClearUpdateText = () => {
        setUpdateText("");
        dispatch(actionCreators.updateOrders(orders.Id,""))
        setUpdateOrders(false);
    }

    return(
        <ContentWrapper>
            <Dialog open={showDialog}>
                <DialogWrapper>
                    <DialogTitle>{patientName} 的醫囑
                        <Tooltip title={"點選更新醫囑"}>
                            <span className={"iconfontUpdate"} onClick={()=>{
                                HandleUpdateIconClick();
                             }}>&#xe60c;
                            </span>
                        </Tooltip>
                    </DialogTitle>
                    <DialogContent style={{marginBottom:30}}>
                        {loading?
                            <CircularProgress />:
                            <Fragment>
                                {updateOrders?
                                    <DialogTextarea value={updateText} onChange={
                                        (e)=>{setUpdateText(e.target.value)}}>
                                    </DialogTextarea>:
                                    orders.Message?orders.Message.split("\n").map((item)=>{
                                        return (<p>{item}</p>)
                                    }):"(暫無醫囑)"}
                            </Fragment>}
                    </DialogContent>
                </DialogWrapper>
                <DialogActions>
                    {updateOrders?
                        <Fragment>
                            <Button onClick={()=>{
                                HandleOrdersUpdate();
                            }}>更新
                            </Button>
                            <Button onClick={()=>{
                                HandleClearUpdateText();
                            }}>清除
                            </Button>
                        </Fragment>
                        :
                        <Fragment />
                    }
                    <Button onClick={()=>{
                            HandleDialogClose();
                        }}>關閉
                    </Button>
                </DialogActions>
            </Dialog>
                <PatientTitle>
                    病人列表
                </PatientTitle>
                <PatientListWrapper>
                    <List>
                        {patientList.map((item)=>{
                            return (
                                <ListItem button key={item.Id} onClick={()=>{
                                    HandleListPatientClick(item);
                                }}>
                                    <ListItemText primary={item.Name} />
                                </ListItem>
                            )
                        })}
                    </List>
                </PatientListWrapper>
        </ContentWrapper>
    )
}


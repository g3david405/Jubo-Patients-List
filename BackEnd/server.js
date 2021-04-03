const express = require("express");
const app = express();
const cors = require('cors');
const mongo_url = process.env.MONGO;

//連接資料庫
const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/User')
mongoose.connect(mongo_url)
mongoose.Promise = global.Promise;


//制定病人and醫囑schema
const Schema = mongoose.Schema;
const PatientModelSchema = new Schema({
    Id: Number,
    Name: String,
    OrderId: Number
  },
    {
      versionKey: false //不生成"__v"欄位
    });
const Patient = mongoose.model('Patient', PatientModelSchema );
const OrdersModelSchema = new Schema({
     Id: Number,
     Message: String
  },
    {
      versionKey: false //不生成"__v"欄位
    });
const Orders = mongoose.model("Order",OrdersModelSchema);

//僅允許本地端口號3000access資源
const corsOptions = {
  origin: [
    'http://localhost:3000', //允許請求的來源列表
  ],
  methods: 'GET,PUT,PATCH,POST,DELETE' //允許請求的方法
};
app.use(cors(corsOptions))

//將request的參數jsonify
app.use(express.json())

//取得單個病人的醫囑(點擊列表時觸發)
app.get("/orders",(async (req, res) => {
    const id = req.query.id //獲取url中帶的orderID參數
    const orders = await Orders.find({Id:id}).exec(); //exec為異步函數，需await等待執行完成
    if(orders.length > 0) {
        //如果有找到order，返回order值
        res.send({orders: orders[0]});
    }
    else{
        //未找到order，空字符串
        res.send({orders: {Message:""}});
    }
}))

//創建單個病人的醫囑
app.post("/orders",(req, res) => {
  const request = req.body;
  const message = request.message;
  const Id = request.Id;
  Orders.create({
      Id:Id,
      Message:message});
  res.send({"code":"100"})
})

//更新單個病人的醫囑
app.patch("/orders",async (req,res)=>{
    const request = req.body;
    const orderID = request.Id;
    const updateContent = request.updateContent;
    const orders = await Orders.find({Id:orderID}).exec(); //exec為異步函數，需await等待執行完成
    if(orders.length > 0) {
        //若有找到對應order，則更新
        Orders.updateOne({Id: orderID}, {Message: updateContent}, function (err) {
            if (err) {
                res.send(err)
            }
        })
    }
    else{
        //若未找到對應order，則創建新的order
        Orders.create({Id: orderID, Message: updateContent});
    }
    res.send(request);
})

//初始化頁面時取得所有病人資訊
app.get("/patient",async (req,res) => {
  const user = await Patient.find().exec();
  res.send({patientList:user})
})

//創建病人資訊
app.post("/patient",(req,res)=>{
  const name = req.body.name;
  const id = req.body.id;
  const orderId = req.body.orderId;
  Patient.create({
      Name:name,Id:id,
      OrderId:orderId});
  res.send({"code":"100"})
})


app.listen(5000, ()=>{
  console.log("服務啟動");
})


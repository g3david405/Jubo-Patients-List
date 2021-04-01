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
      versionKey: false
    });
const Patient = mongoose.model('Patient', PatientModelSchema );
const OrdersModelSchema = new Schema({
     Id: Number,
     Message: String
  },
    {
      versionKey: false
    });
const Orders = mongoose.model("Order",OrdersModelSchema);

//僅允許本地端口號3000access資源
const corsOptions = {
  origin: [
    'http://localhost:3000',
  ],
  methods: 'GET,PUT,PATCH,POST,DELETE'
};
app.use(cors(corsOptions))

//將request的參數jsonify
app.use(express.json())

//取得單個病人的醫囑(點擊列表時觸發)
app.get("/orders",(async (req, res) => {
    const id = req.query.id
    const orders = await Orders.find({Id:id}).exec();
    if(orders.length > 0) {
        res.send({orders: orders[0]});
    }
    else{
        res.send({orders: {Message:""}});
    }
}))

//創建單個病人的醫囑
app.post("/orders",(req, res) => {
  const request = req.body;
  const message = request.message;
  const Id = request.Id;
  Orders.create({Id:Id,Message:message});
  res.send({"code":"100"})
})

//更新單個病人的醫囑
app.patch("/orders",async (req,res)=>{
    const request = req.body;
    const orderID = request.Id;
    const updateContent = request.updateContent;
    const orders = await Orders.find({Id:orderID}).exec();
    if(orders.length > 0) {
        Orders.updateOne({Id: orderID}, {Message: updateContent}, function (err) {
            if (err) {
                res.send(err)
            }
        })
    }
    else{
        Orders.create({Id:orderID,Message:updateContent});
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
  Patient.create({Name:name,Id:id,OrderId:orderId}
  );
  res.send({"code":"100"})
})


app.listen(5000, ()=>{
  console.log("服務啟動");
})


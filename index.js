const express=require("express")
const app=express()
const products=require("./products")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const Content=require("./schema")

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

mongoose.connect("mongodb+srv://Kiranmayee:Kiranmayee@cluster0.8jknrjv.mongodb.net/firstdb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("MOngodb Connected Successfully")
    })
    .catch((err)=>{
        console.log(err)
    })


app.get("/",(req,res)=>{
    res.send("server started successfully")
})
app.post("/add",(req,res)=>{
    console.log("data from frontend", req.body)
    const {name,passcode}=req.body
    const newData=new Content({
        name,passcode
    })
    newData.save()
    res.send("added")
})

app.get("/my-products",(req,res)=>{
    res.json(products)
})

app.get("/name",(req,res)=>{
    res.send("Codegnan IT Solutions")
})

app.listen(4000,()=>console.log("server is started"))
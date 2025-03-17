const express=require('express')
const app=express();
const port=3030;
const connectDB=require('./config/db');

connectDB();
app.use(express.json());
app.get('/',(req,res)=>
{
res.send("welcome for donation")
})

app.listen(port,()=>
{
 console.log(`server is ruuning on the port ${port} `)
})
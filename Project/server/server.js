const express=require("express")
const cors=require("cors")
const bodyParser = require('body-parser');
const path = require('path'); 
const NamesRouter=require("./routes/names.route")

const PORT=3000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app=express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use("/api/Names",NamesRouter)



app.listen(PORT,()=>{
    console.log("it is RUN");
})
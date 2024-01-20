const express=require("express")
const app = express()
const cors=require("cors")
const PORT=3000
app.use(cors())
app.use(express.json())
const authRoutes=require('./routes/auth.route')

app.use('/api/auth',authRoutes)
app.use('/api',router)

app.listen(PORT,()=>{
  console.log("listening on port");
})

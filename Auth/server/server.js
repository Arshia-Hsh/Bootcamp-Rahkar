const express=require("express")
const cors=require("cors")
const app = express()
const PORT=3000
const authRoutes=require('./routes/auth.route')

app.use(cors())
app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/book',bookRoutes)

app.listen(PORT,()=>{
  console.log("listening on port");
})

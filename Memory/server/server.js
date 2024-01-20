const express=require("express")
const app = express()
const cors=require("cors")
const PORT=3000
app.use(cors())
app.use(express.json())
const MemoryRoutes=require('./routes/Memoryroute')

app.use('/api/memory',MemoryRoutes)

app.listen(PORT,()=>{
  console.log("listening on port");
})

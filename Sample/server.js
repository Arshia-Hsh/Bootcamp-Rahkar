const express=require("express")
const cors=require("cors")

const UsersRouter=require("./routes/users.route")
const BooksRouter=require("./routes/books.route")

const PORT=3000;

app=express()
app.use(express.json())
app.use(cors())
app.use("/api/users",UsersRouter)
app.use("/api/books",BooksRouter)


app.listen(PORT,()=>{
    console.log("it is RUN");
})
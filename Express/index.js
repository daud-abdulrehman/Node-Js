const express = require('express')
const app = express()
const port = 3000
const users = ["daud","mansoor","umer"]
const adminRouter = 



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api",adminRouter)

app.get("/getUser/:id",(req,res)=>{
    console.log("===================id-------------",req.params.id)
    res.send(users[req.params.id])
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

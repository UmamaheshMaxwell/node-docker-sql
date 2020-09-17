const express =require("express");

const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) =>{
    res.send("Hello World !!")
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
})
const express = require("express")

const bodyParser = require("body-parser");
const config = require("config")

const app = express()
const PORT = process.env.PORT || config.get("PORT")

app.use(bodyParser.json())


app.use("/api/client/", require("./routes/clients"))
app.use("/api/", require("./routes/schedule"))
app.use("/api/", require("./routes/coach"))



app.listen(PORT,
    () => {
        console.log("Приложение работает на порту", PORT)
    })
const { json } = require("body-parser")
const { Router } = require("express")
const { pool } = require("../db/db")
const {take_arr,query_method}=require("../normalizers/normalizeMethods")
const {clientKeys} = require("../keys/keys")
const router = Router()



router.get("/", async(req, res) => {
    try {
        let users = await query_method('client')
        
        return res.status(200).json({users})

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }

})
router.post("/addclient", async (req, res) => {
    try {
        if (!req.body) return res.status(400).json({ message: "Ошибк, заполните поля" })

        const { name, surname, patronymic, birthdayDate, subscription, trainingStart, phoneNumber, gender } = req.body

        const data = await pool.query(`SELECT phone_number from client where phone_number=${phoneNumber}`)
        const candidate = take_arr(data[0])
        if(candidate.length) return res.status(400).json({message:"Такой пользователь уже существует"})

        const queryResult = await pool.query("INSERT INTO client (Name, surname, patronymic, birthday_date, subscription, training_start, phone_number,  gender) VALUES (?,?,?,?,?,?,?,?)", [name, surname, patronymic, birthdayDate, subscription, trainingStart, phoneNumber, gender])
        return res.status(200).json({message:queryResult})

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message:"Что-то пошло не так, попробуйте позже" })
    }

})

router.post("/updateclient/:id", async(req,res)=>{
    const id=req.params.id
    const data = await pool.query(`SELECT phone_number from client where phone_number=${phoneNumber}`)
    console.log()
})
module.exports = router
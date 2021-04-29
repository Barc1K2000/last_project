const { json } = require("body-parser")
const { Router } = require("express")
const { pool } = require("../db/db")
const {take_arr,query_method}=require("../normalizers/normalizeMethods")

const router = Router()



router.get("/", async(req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*')
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

        const { name, surname, patronymic, birthday_date, training_start, phone_number, gender } = req.body

        const data = await pool.query(`SELECT phone_number from client where phone_number=${phone_number}`)
        const candidate = take_arr(data[0])
        if(candidate.length) return res.status(400).json({message:"Такой пользователь уже существует"})
        const queryResult = await pool.query("INSERT INTO client (name, surname, patronymic, birthday_date, training_start, phone_number,  gender) VALUES (?,?,?,?,?,?,?)", [name, surname, patronymic, birthday_date, training_start, phone_number, gender])
        return res.status(200).json({message:queryResult})

    }
    catch (err) {
        return res.status(500).json({ message:"Что-то пошло не так, попробуйте позже" })
    }

})

router.get("/updateclient/:id", async(req,res)=>{
    try{
    const id=req.params.id
    const data = await query_method("client", `where id=${id}`)
    res.status(200).json({data})
    }catch(err){
        res.status(500).json({message:"Что-то пошло не так, попробуйте позже"})
    }
})
router.post("/edit/:id",async(req,res)=>{
    try{
    const {id} = req.params
    if(!req.body) return req.status(400).json({message:"Пожалуйста,заполните все поля"})
    const {name, surname, patronymic, birthday_date, training_start, phone_number, gender} = req.body
    await pool.query(`UPDATE client SET name="${name}", surname="${surname}", patronymic="${patronymic}", birthday_date="${birthday_date}", phone_number="${phone_number}" WHERE id="${id}"`)
    res.status(200).json({message:"Пользователь успешно изменен"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Что-то пошло не так, попробуйте позже"})
    }
})
router.post("/deleteclient/:id", async(req,res)=>{
    try{
    const id = req.params.id
    const candidate = await query_method("client",`where id=${id}`)
    if(candidate.length==0) return res.status(400).json({message:"Такого пользователя не  существует"})
    await pool.query(`DELETE FROM client WhERE id=${id}`)
    res.status(200).json({message:"Пользователь успешно удален"})
    }catch(err){
        return res.status(500).json({message:"Что-то пошло не так, попробуйте позже"})
    }
})
module.exports = router
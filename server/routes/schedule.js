const { json } = require("body-parser")
const { Router } = require("express")
const { pool } = require("../db/db")
const {take_arr,query_method}=require("../normalizers/normalizeMethods")

const router = Router()



router.get("/schedule", async(req, res) => {
    try {
        
        let schedule = await pool.query(`SELECT training.Id, days.name day,time, concat(coach.Name," ", coach.surname) coach, training_type.name type FROM training join coach on coach.id=training.coach join training_type on training_type.id = training.type join days on training.day = days.id`)
        return res.status(200).json({schedule:schedule[0]})

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }

})
router.post("/addschedule", async (req, res) => {
    try {
        if (!req.body) return res.status(400).json({ message: "Ошибка, заполните поля" })
        const {day, time, coachName, coachSurname ,type} = req.body
        const dayId = await pool.query("SELECT id from days where name=?", [day])
        const coachId = await pool.query("SELECT id from coach where name=? and surname=?", [coachName, coachSurname])
        const typeId = await pool.query("SELECT id from training_type where name=?", [type])
        const candidate = !!dayId[0].length && !!coachId[0].length && typeId[0].length
        if(!candidate) return res.status(400).json({message:"Введите корректные данные"})
        console.log(dayId[0][0].id)
        const queryResult = await pool.query("INSERT INTO training (day,time,type,coach) VALUES (?,?,?,?)", [dayId[0][0].id,time,typeId[0][0].id,coachId[0][0].id])
        return res.status(200).json({message:queryResult})
    }
    catch (err) {
        return res.status(500).json({ message:err })
    }

})




module.exports = router
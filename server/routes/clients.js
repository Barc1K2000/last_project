const { json } = require("body-parser")
const { Router } = require("express")
const { pool } = require("../db/db")
const router = Router()

router.get("/", (req, res) => {
    try {
        poolPromise.query("SELECT * FROM client", function (err, data) {
            if (err) return console.log(err);
            res.json({ data })
        })
    }
    catch (err) {
        res.status(500).json({ message: err })
    }

})
router.post("/addclient", (req, res) => {
    try {
        console.log(req.body)
        if (!req.body) return res.status(400).json({ message: "Ошибка" })
        const { name, surname, patronymic, birthdayDate, subscription, trainingStart, phoneNumber, diary, gender } = req.body
        pool.query("INSERT INTO client (Name, surname, patronymic, birthday_date, subscription, training_start, phone_number, diary, gender) VALUES (?,?,?,?,?,?,?,?,?)", [name, surname, patronymic, birthdayDate, subscription, trainingStart, phoneNumber, diary, gender], function (err, data) {
            if (err) return res.status(400).json({ error: err });
            
        });
    }
    catch (err) {
        res.status(500).json({ message: err })
    }

})
module.exports = router
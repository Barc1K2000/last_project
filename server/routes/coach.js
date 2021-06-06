const { json } = require("body-parser")
const { Router } = require("express")
const { pool } = require("../db/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("config")
const {take_arr,query_method}=require("../normalizers/normalizeMethods")

const router = Router()



router.post("/admin/auth", async(req, res) => {
   
        try {
            
            const { id, password } = await req.body
            const user = await pool.query(`SELECT * FROM COACH WHERE id=${id}`)
            if(user[0].length==0){
                return res.status(400).json({message:"Такого пользователя не существует"})
            }
            const isMatch = await user[0][0].password==password
            if(!isMatch){
                return res.status(400).json({message:"Неверный email или пароль"})
            }
            const token = jwt.sign(
                {userId:user[0][0].Id},
                config.get("jwtSecret"),
                {expiresIn:"1h"}
            )
            res.json({
                token,
                userId:user[0][0].Id,
                isAdmin:true
            })


        } catch (e) {
            res.status(500).json({ message: e.message })
        }

})


module.exports = router
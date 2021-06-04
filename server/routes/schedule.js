const { json } = require("body-parser")
const { Router } = require("express")
const { pool } = require("../db/db")
const {take_arr,query_method}=require("../normalizers/normalizeMethods")

const router = Router()



router.get("/schedule", async(req, res) => {
    try {
        let schedule = await query_method('training')
        return res.status(200).json({schedule})

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }

})

module.exports = router
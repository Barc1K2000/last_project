const { pool } = require("../db/db")



const take_arr =  (data) => {
    let arr = []
    data.map((item) => {
        item =  Object.values(item)
        item=item.toString()
        item = item.replaceAll(", ", "_")
        item=item.split(",")
        arr.push(item)
    })
   
    return arr
}

const query_method = async(tableName, conditions) =>{
    const client_data = await pool.query(`SELECT * FROM ${tableName} ${conditions}`)
    const normalize_client_data = await take_arr(client_data[0])

    const columns_data = await pool.query(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'last_project' AND TABLE_NAME = '${tableName}'`)
    const normalize_columns_data =  await take_arr(columns_data[0])
    let normalize_object = []
    normalize_client_data.map(item=>{
        let object = {}
        
        for(let i=0; i<normalize_columns_data.length;i++){
            let key_name = normalize_columns_data[i][0].toLowerCase()
            
            object[key_name]=item[i];
            
        }
        normalize_object.push(object)
    })
    return normalize_object
}
module.exports = {take_arr, query_method}
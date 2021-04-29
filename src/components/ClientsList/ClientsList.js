import {useHttp} from "../../hook.http/http.hook"
import {useState,useCallback, useEffect} from "react"
import {ClientsListItem} from "../ClientsListItem/ClientsListItem"

export const ClientsList = (props) =>{
    const {loading,request} = useHttp()
    const [clients, setClients] = useState({users:[]})
    const fetchData = useCallback(async()=>{
        const data =  await request("/api/client/")
        setClients(data)
        
    },[request])

    const deleteHandler = (id) =>{
        //console.log(clients=>({clients:clients.users.filter(el=>el.id!==id)}))
        setClients({users:[clients.users.filter(el=>el.id!=id)]})
        //const data = request(`/api/client/deleteClient/${id}`, "POST", null)
        console.log(clients)

    }

    useEffect(()=>{
        fetchData()
    },[fetchData])
    if (loading) return <h1>Loading</h1>
    return(
        <div>
            <ul>
                {
                    clients.users.map((item)=>{
                       return <ClientsListItem {...item}  deleteHandler={deleteHandler}/>
                    })
                }
            </ul>
            <button onClick={fetchData}>Нажми</button>
        </div>
    )
}
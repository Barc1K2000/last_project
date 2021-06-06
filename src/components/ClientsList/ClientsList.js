
import {useState,useCallback} from "react"
import {ClientsListItem} from "../ClientsListItem/ClientsListItem"

export const ClientsList = (props) =>{

    const [clients, setClients] = useState({users:[]})
    const fetchData = useCallback(async()=>{
        const data =  []
        setClients(data)
        
    },[])

    const deleteHandler = (id) =>{
        console.log(clients.users)
        let usersDelete = clients.users
        usersDelete.splice(id,1)
        setClients({users:[...usersDelete]})

    }

    //useEffect(()=>{
    //    fetchData()
    //    },[fetchData])

    return(
        <div>
            <ul>
                {
                    clients.users.map((item)=>{
                       return <ClientsListItem key={item.id.toString()} {...item}  deleteHandler={deleteHandler}/>
                    })
                }
            </ul>
            <button onClick={fetchData}>Нажми</button>
        </div>
    )
}
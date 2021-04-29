export const ClientsListItem = (props)=>{
    const {id, name, surname, phone_number, deleteHandler} = props
    console.log(deleteHandler)
    return(
         <li>
             <h3>{id}</h3>
             <h1>{name}</h1>
             <h2>{surname}</h2>
             <h5>{phone_number}</h5>
             <input type="button" onClick={()=>deleteHandler(id)} value="Удалить"/>
         </li>
    )
}
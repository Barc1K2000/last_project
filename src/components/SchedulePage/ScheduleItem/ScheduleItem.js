import './ScheduleItem.css';
import {transliterate} from "../../../transiterate/transliterate"
export const ScheduleItem = (props)=>{
    const {day,time,type,coach} = props.data
    const {isAuthenticated} = props
    console.log(isAuthenticated)
    const DeleteCell = () =>{
        if(isAuthenticated){
        return(
            <td align="center"><button type="submit" className="btn btn-primary">Удалить</button></td>
        )}
        return ""
    }
    return(
        <tr>
            <td align="center">{transliterate(day,true)}</td>
            <td align="center">{time}</td>
            <td align="center">{transliterate(coach,true)}</td>
            <td align="center">{transliterate(type,true)}</td>
            <DeleteCell/>
        </tr>
    )
}
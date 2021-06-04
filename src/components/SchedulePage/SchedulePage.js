import './SchedulePage.css';
import {useState,useCallback, useEffect} from "react"
import {ScheduleItem} from "./ScheduleItem/ScheduleItem"
import {useHttp} from "../../hook.http/http.hook"
export const SchedulePage =(props)=>{
    const {request,loading} = useHttp()
    const [schedule, setSchedule] = useState({schedule:[]})
    const fetchData = useCallback(async()=>{
        console.log(request)
        const data = await request("/api/schedule/")
        await setSchedule(data)
        
    },[request])

    useEffect(()=>{
        fetchData()
        },[fetchData])
    if (loading) return <h1>Loading</h1>
    return(
        <div className="schedulepage">
            <h1>Расписание групповых тренировок</h1>
            <div className="scheduleitems">
                {
                
                }
            </div>
        </div>
    )
}
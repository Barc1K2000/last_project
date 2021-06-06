import './SchedulePage.css';
import { useState, useCallback, useEffect } from "react"
import { ScheduleItem } from "./ScheduleItem/ScheduleItem"
import { transliterate } from "../../transiterate/transliterate"
import axios from "axios"



export const SchedulePage = (props) => {
    const { isAuthenticated } = props
    const [form, setForm] = useState({
        day: '',
        time: '',
        coach: '',
        type: ''
    })
    console.log(form)
    const [schedule, setSchedule] = useState([])
    const fetchData = useCallback(async () => {
        const { data } = await axios.get("/api/schedule")
        await setSchedule(data.schedule)

    }, [])
    
    const addData = useCallback(async (e) => {
        try {
            console.log("1")
            const coachData = await form.coach.split(" ")
            const formData = {
                day: transliterate(form.day),
                time: form.time,
                coachName: transliterate(coachData[0]),
                coachSurname: transliterate(coachData[1]),
                type: transliterate(form.type)
            }
            await axios.post("/api/addSchedule", { ...formData })
            fetchData()
        } catch (e) {

        }

    }, [form.day, form.time, form.coach, form.type, fetchData])

    useEffect(() => {
        fetchData()
    }, [fetchData])
    const AdminContent = () => {
        const changeHandler = event => {
            setForm({ ...form, [event.target.name]: event.target.value })
        }
        if (isAuthenticated) {
            return (
                <div className="addSchedule">
                    <input type="text" name="day" onChange={changeHandler} value={form.day} />
                    <input type="text" name="time" onChange={changeHandler} />
                    <input type="text" name="coach" onChange={changeHandler} />
                    <input type="text" name="type" onChange={changeHandler} />
                    <button type="submit" className="btn btn-primary" onClick={addData}>Добавить</button>
                </div>
            )
        }
        return 1
    }
    return (
        <div className="schedulepage">
            <h1>Расписание групповых тренировок</h1>
            <table>
                <thead>
                    <tr>
                        <th >День</th>
                        <th>Время</th>
                        <th>Тренер</th>
                        <th>Направление</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        schedule.map(item => <ScheduleItem key={item.Id.toString()} data={item} isAuthenticated={isAuthenticated} />)
                    }


                </tbody>
            </table>
          <AdminContent/>
        </div>
    )
}
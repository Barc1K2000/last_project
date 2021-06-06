import './AuthPage.css';
import { useContext, useState} from "react"

import axios from "axios"
import { AuthContext } from '../../context/authContext';


export const AuthPage = (props) => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        id:'',
        password:'',
        ckecked:''
    })
    const changeHandler = event =>{
        setForm({...form, [event.target.name]:event.target.value})
    }
    const authHandler = async(e) =>{
        try{
            e.preventDefault();
            const data = await axios.post("/api/admin/auth", {...form})
            console.log(data.data.token)
            auth.login(data.data.token, data.data.userId, data.data.isAdmin)
        }
        catch(e){

        }
    }
    return (
        <form>
            <div className="mb-3">
                <label  className="form-label">Введите ваш ID</label>
                <input type="text" className="form-control" name="id"  id="exampleInputEmail1" onChange={changeHandler}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Введите ваш пароль</label>
                <input type="password" className="form-control" name="password" onChange={changeHandler} id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" name="checked" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" >Войти как администратор</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={authHandler}>Войти</button>
        </form>
    )
}
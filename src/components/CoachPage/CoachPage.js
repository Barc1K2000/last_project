import './CoachPage.css';
import {CoachPageItem} from "./CoachPageItem/CoachPageItem"
export const CoachPage = (props)=>{
    return(
        <div className="coachpage">
            <h1>Тренеры KorenevskiyProg</h1>
            <div className="coachpageitems">
                <CoachPageItem/>
                <CoachPageItem/>
                <CoachPageItem/>
                <CoachPageItem/>
            </div>
        </div>
    )
}
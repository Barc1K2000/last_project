import './SportTypesPage.css';
import {SportTypesPageItem} from "./SportTypesPageItem/SportTypesPageItem"
export const SportTypesPage = (props)=>{
    return(
        <div className="sporttypes">
            <h1>Направления тренировок</h1>
            <div className="sporttypesitem">
                <SportTypesPageItem/>
                <SportTypesPageItem/>
                <SportTypesPageItem/>
                <SportTypesPageItem/>
                <SportTypesPageItem/>
                <SportTypesPageItem/>
                <SportTypesPageItem/>
            </div>
        </div>
    )
}
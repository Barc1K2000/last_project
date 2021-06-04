import './SubscriptionPage.css';
import {SubscriptionPageItem} from "./SubscriptionPageItem/SubscriptionPageItem"
export const SubscriptionPage = (props)=>{
    return(
        <div className="subscriptionpage">
            <h1>Абонементы на групповые и персональные тренировки</h1>
            <div className="subscriptionpageitems">
                <SubscriptionPageItem/>
                <SubscriptionPageItem/>
                <SubscriptionPageItem/>
            </div>
        </div>
    )
}
import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { ClientsList } from "./components/ClientsList/ClientsList"
import { CoachPage } from "./components/CoachPage/CoachPage";
import { SchedulePage } from "./components/SchedulePage/SchedulePage"
import { SportTypesPage } from "./components/SportTypesPage/SportTypesPage"
import { SubscriptionPage } from "./components/SubscriptionPage/SubscriptionPage";
import { AuthPage } from "./components/AuthPage/AuthPage"

export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated){
    return (
        <Switch>
            <Route path='/schedule' render={() => <SchedulePage isAuthenticated={isAuthenticated} />} />
            <Route path='/sporttypes' component={SportTypesPage} />
            <Route path='/subscription' component={SubscriptionPage} />
            <Route path='/coach' component={CoachPage} />
            <Route path='/clientslist' component={ClientsList} />
            <Redirect to="/schedule" />
        </Switch>
    )
   
}
return(
    <Switch>
    <Route path='/schedule' render={() => <SchedulePage isAuthenticated={isAuthenticated} />} />
    <Route path='/sporttypes' component={SportTypesPage} />
    <Route path='/subscription' component={SubscriptionPage} />
    <Route path='/coach' component={CoachPage} />
    <Route path='/clientslist' component={ClientsList} />
    <Route path='/adminAuth' component={AuthPage} />
    <Redirect to="/schedule" />
</Switch>
    )
}

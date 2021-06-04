import {ClientsList} from "../ClientsList/ClientsList"
import { CoachPage } from "../CoachPage/CoachPage";
import {NavBar} from "../NavBar/NavBar"
import {SchedulePage} from "../SchedulePage/SchedulePage"
import {SportTypesPage} from "../SportTypesPage/SportTypesPage"
import { SubscriptionPage } from "../SubscriptionPage/SubscriptionPage";
import {Route, Switch, BrowserRouter, Link} from "react-router-dom"
import {useHttp} from "../../hook.http/http.hook"
function App() {
  const {loading, request} = useHttp()
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Route path='/schedule' component={SchedulePage} render={()=><SchedulePage request={request} loading={loading} />} />
      <Route path='/sporttypes' component={SportTypesPage} />
      <Route path='/subscription' component={SubscriptionPage} />
      <Route path='/coach' component={CoachPage} />
      <Route path='/clientslist' component={ClientsList} />
      </BrowserRouter>
    </div>
  );
}

export default App;

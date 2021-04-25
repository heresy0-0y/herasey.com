import { Switch, Route } from "react-router-dom";
import {Proficiencies} from '../components'
import ContactContainer from './ContactContainer'

export default function MainContainer(props) {

  return (
    <Switch>
      <Route path="/">
        <Proficiencies/>
        <ContactContainer/>
      </Route>
    </Switch>
  );
}

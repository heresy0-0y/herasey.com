import { Switch, Route } from "react-router-dom";
import {Proficiencies} from '../components'
import ContactContainer from './ContactContainer'
import {Displaytainers} from '../components'

export default function MainContainer(props) {

  return (
    <Switch>
      <Route path="/">
        <Proficiencies/>
        <Displaytainers/>
        <ContactContainer/>
      </Route>
    </Switch>
  );
}

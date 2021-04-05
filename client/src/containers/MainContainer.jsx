import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Experience from '../screens/Experience'
import {Proficiencies} from '../components'

export default function MainContainer(props) {

  return (
    <Switch>
      <Route path="/">
        <Proficiencies/>
      </Route>
    </Switch>
  );
}

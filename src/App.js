import { Switch, Route, useHistory } from "react-router-dom";
import MainContainer from './containers/MainContainer'
import Layout from './layouts/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/'>
          <MainContainer/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

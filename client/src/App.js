import { Switch, Route } from "react-router-dom";
import { Grommet } from "grommet";
import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Grommet plain>
      <Layout>
        <Switch>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </Grommet>
  );
}

export default App;

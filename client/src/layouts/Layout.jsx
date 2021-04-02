import React from "react";
import { ThemeProvider } from "styled-components";
import { Wrapper, Navbar} from "../components";

export default function Layout(props) {

  return (
    <div>
      <Navbar/>
      <Wrapper>
        <div className="App">
        {props.children}
      </div>
    </Wrapper>
    </div>
  );
}

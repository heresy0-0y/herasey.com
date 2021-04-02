import React from "react";
import { Wrap, WrapContainer } from "./Wrapper.elements";

const Wrapper = (props) => {
  return (
    <>
    <WrapContainer>
      <Wrap>
        {props.children}
      </Wrap>
      </WrapContainer>
    </>
  );
};

export default Wrapper;

import React from "react";

const Context = React.createContext({
  amout: 0,
  get: false,
  setAmount: () => {},
  setGet: () => {},
});

export default Context;

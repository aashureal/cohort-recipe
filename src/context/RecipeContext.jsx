import React, { createContext, useState } from "react";

export const recipectx = createContext();

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <recipectx.Provider value={{ data, setData }}>
      {children}
    </recipectx.Provider>
  );
};

export default RecipeContext;

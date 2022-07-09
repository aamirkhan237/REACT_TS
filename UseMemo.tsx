import React, { useState, useMemo } from 'react';

const expensiveFunction = (inputValue:number) => {
  let expensiveValue = inputValue * 42;
  
 
  
  
  return expensiveValue;
};

const UseMemo = () => {
  const [inputValue, setInputValue] = useState(3);
  const expensiveValue = useMemo(
    () => expensiveFunction(inputValue), 
    [ inputValue ]
  );
  return <h1>Hello {expensiveValue}</h1>;
};

export default UseMemo;
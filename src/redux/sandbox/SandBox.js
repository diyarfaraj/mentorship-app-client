import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment } from "./testReducer";

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  return (
    <>
      <h1>testing 123</h1>
      <h3>the data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content="increment"
        color="green"
      />
      <Button
        onClick={() => dispatch(decrement(23))}
        content="decrement"
        color="red"
      />
    </>
  );
};

export default Sandbox;

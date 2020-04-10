import { useState } from "react";

export default function userHandleDate(initialState, id) {
  const [value, setValue] = useState(initialState);
  const updateValue = newState => {
    setValue(newState);
  };
  const format = "";

  return {
    value,
    onChange: updateValue,
    format,
    id
  };
}

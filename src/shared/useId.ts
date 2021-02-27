import { useState } from "react";

let id = 0;
const genId = () => ++id;

export const useId = () => {
  const [id] = useState(genId);
  return String(id);
};

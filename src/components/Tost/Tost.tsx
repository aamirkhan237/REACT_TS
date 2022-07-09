import React from "react";

type Hpostion = "left" | "center" | "right";
type Vpostion = "top" | "center" | "bottom";

type InastProps = {
  position: Exclude<`${Hpostion}.${Vpostion}`, "center.center"> | "center";
};

const Tost = ({ position }: InastProps) => {
  return <div>Tost - {position}</div>;
};

export default Tost;

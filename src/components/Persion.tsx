import React from "react";

type persionProp = {
  nameObj: {
    first: string;
    last: string;
  };
};

const Persion = (props: persionProp) => {
  return (
    <div>
      {props.nameObj.first} {props.nameObj.last}
    </div>
  );
};

export default Persion;

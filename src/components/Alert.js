import React from "react";

function Alert(props) {
  //to capitalize the first letter of type of alert
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  };
  return (
    //if alert is null then the rest of the function won't be evaluated
    props.alert && (
      <>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.mssg}
        </div>
      </>
    )
  );
}
export default Alert;

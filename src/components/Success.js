import React, { useEffect } from "react";

function Success(props) {
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/");
    }, 3000);
  }, []);
  return (
    <div className="text-title">
      <h2>Your payment was successfully received.</h2>

      <p> You will be redirected to the homepage shortly.</p>
    </div>
  );
}

export default Success;

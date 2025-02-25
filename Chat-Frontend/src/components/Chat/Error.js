import React from "react";

const Error = (props) => {
  const error = props.error || "";

  if (!error) {
    return null;
  }

  const errors =
    error && error.errors && Array.isArray(error.errors)
      ? error.errors
      : Array.of({ path: "", msg: error.message });

  return (
    <>
      {errors.map((err, idx) => {
        return (
          <div className="d-flex justify-content-center align-content-center" key={idx}>
            <h4 className="text-danger">
              {err.path ? <>{err.path} {": "} {err.msg}</> : <>{err.msg}</>}
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default Error;

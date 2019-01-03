import React from "react";

const Movie = props => {
  return (
    <React.Fragment>
      <div>Showing Movie: {props.match.params.id}</div>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          props.history.goBack();
        }}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default Movie;

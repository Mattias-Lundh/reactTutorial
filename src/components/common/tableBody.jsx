import React, { Component } from "react";
import Like from "./like";

class TableBody extends Component {
  render() {
    const { movies, onDelete, onLike } = this.props;

    return (
      <tbody>
        {movies.map(m => (
          <tr key={m._id}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like like={m.like} onClick={() => onLike(m)} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(m._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

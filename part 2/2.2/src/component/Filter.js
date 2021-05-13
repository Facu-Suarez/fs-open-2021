import React from "react";
import { del } from "../services/delete";

const Filter = ({ persons, search }) => {
  return (
    <div>
      {persons
        .filter((nam) => {
          if (search === "") {
            return nam;
          } else if (nam.name.toLowerCase().includes(search.toLowerCase())) {
            return nam;
          }
        })
        .map((nam) => {
          return (
            <div key={nam.id}>
              <p>
                {nam.name} {nam.num}
              </p>
              <button onClick={() => del(nam.id)}>delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default Filter;

import React from 'react'

const Filter = ({persons, search}) => {
    return(
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
              </div>
            );
          })}
      </div>
    )
}

export default Filter;
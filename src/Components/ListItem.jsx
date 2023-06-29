import React from 'react'

function ListItem({item}) {
  return (
    <div>
        <div className="id-div">
              <h4>{item.id}</h4>
            </div>
            <div className="img-div">
              <img src={item.avatar} width={300} height={300} alt="imgOfItme" />
            </div>
            <h3>{item.first_name}</h3>
    </div>
  )
}

export default ListItem
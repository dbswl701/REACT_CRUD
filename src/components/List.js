import React from 'react'

const List = ({data, handleDelete, handleModify}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <div>
        <button onClick={() => handleDelete(data.id)}>x</button>
        <button onClick={() => handleModify(data)}>o</button>
      </div>
    </div>
  )
}

export default List
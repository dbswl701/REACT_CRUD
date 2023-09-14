import React from 'react'

const Lists = ({datas, handleClear, handleDelete, handleModify}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {datas.map((data) => (
        <div key={data.id} style={{display: 'flex', flexDirection: 'row'}}>
          <p>{data.title}</p>
          <p>{data.price}</p>
          <div>
            <button onClick={() => handleDelete(data.id)}>x</button>
            <button onClick={() => handleModify(data)}>o</button>
          </div>
        </div>
      ))}
      <button onClick={handleClear}>목록 지우기</button>
    </div>
  )
}

export default Lists
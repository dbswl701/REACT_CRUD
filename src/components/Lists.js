import React from 'react'
import List from './List';

const Lists = ({datas, handleClear, handleDelete, handleModify}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {datas.map((data) => (
        <List key={data.id} data={data} handleDelete={handleDelete} handleModify={handleModify} />
      ))}
      <button onClick={handleClear}>목록 지우기</button>
    </div>
  )
}

export default Lists
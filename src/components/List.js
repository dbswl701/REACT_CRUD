import React from 'react'
import deleteIcon from '../assets/icons/delete.svg';
import writeIcon from '../assets/icons/write.svg';

const List = ({data, handleDelete, handleModify}) => {
  const style = {
    width: '40px',
    backgroundColor: 'transparent',
    border: 'none'
  }
  return (
    <div style={{display: 'flex', flexDirection: 'row', border: '1px solid #d7d7d7', justifyContent: 'space-between', padding: '0px 20px'}}>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <div style={{display: 'flex'}}>
        <button onClick={() => handleModify(data)} style={style}>
          <img src={writeIcon} style={{ width: '100%' }} />
        </button>
        <button onClick={() => handleDelete(data.id)} style={style}>
          <img src={deleteIcon} style={{ width: '100%' }} />
        </button>
      </div>
    </div>
  )
}

export default List
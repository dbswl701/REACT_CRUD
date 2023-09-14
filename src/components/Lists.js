import React from 'react'
import List from './List';
import deleteIcon from '../assets/icons/delete.svg';

const Lists = ({datas, handleClear, handleDelete, handleModify}) => {
  const style = {
    button: {
      backgroundColor: 'rgb(142,169,89)',
      border: 'none',
      color: 'white',
      width: '130px',
      height: '30px',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    icon: {
      width: '25px',
      fill: 'white',
      color: 'white',
    }
    // rgb(197, 81, 80)
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', marginTop: '40px', gap: '20px'}}>
      {datas.map((data) => (
        <List key={data.id} data={data} handleDelete={handleDelete} handleModify={handleModify} />
      ))}
      <button style={style.button} onClick={handleClear}>목록 지우기
      <img src={deleteIcon} style={style.icon} fill="white" /></button>
    </div>
  )
}

export default Lists
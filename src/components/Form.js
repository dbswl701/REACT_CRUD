import React from 'react'
import submit from '../assets/icons/submit.svg';
const Form = ({handleInput, input, handleSubmit, isModify, handleModifySubmit}) => {

  const style = {
    input: {
      width: '90%',
      border: 'none',
      borderBottom: '1px solid black',
      height: '30px',
    },
    button: {
      backgroundColor: 'rgb(142,169,89)',
      border: 'none',
      color: 'white',
      width: '90px',
      height: '30px',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    icon: {
      width: '25px',
      fill: 'yellow'
    }
  }
  // 가상클래스는 inline css 방법으로는 사용할 수 없다. onFocus={handleFocus} 이렇게 써야함.
  // css-in-js인 styled-component에서는 &:focus 와 같이 사용할 수 있다.
  // 위와 같이 사용하는 방법과 css 파일 따로 만드는 방법 같이 병행해도 괜찮나? 그냥 파일 따로 만들까...
  // style에 넣어줄때는 걍 onFocus, onBlur 써야할 듯....

  return (
    <div>
      <form style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}} onSubmit={handleSubmit}>
        <div style={{width: '45%'}}>
          <p style={{color: 'rgb(233, 184, 114)'}}>지출항목</p>
          {/* <input name="title" onChange={handleInput} value={input.title} style={{ width: '90%', border: 'none', borderBottom: '1px solid black', height: '30px' }} /> */}
          <input name="title" onChange={handleInput} value={input.title} style={style.input} placeholder="예) 렌트비"/>
        </div>
        <div style={{width: '45%'}}>
          <p style={{color: 'rgb(233, 184, 114)'}}>비용</p>
          <input type="number" name="price" onChange={handleInput} value={input.price} style={style.input} />
        </div>
      </form>
      {isModify ? 
        <button type="submit" onClick={(e) => handleModifySubmit(e, input)} style={style.button}><p>수정</p> <img src={submit} style={style.icon} /></button>
        : <button type="submit" onClick={handleSubmit} style={style.button}><p>제출</p>
        <img src={submit} style={style.icon} /></button>}
      
    </div>
  )
}

export default Form
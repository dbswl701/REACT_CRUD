import React from 'react'

const Form = ({handleInput, input, handleSubmit, isModify, handleModifySubmit}) => {
  return (
    <div>
      <form style={{display: 'flex'}} onSubmit={handleSubmit}>
        <div>
          <p>지출항목</p>
          <input name="title" onChange={handleInput} value={input.title} />
        </div>
        <div>
          <p>비용</p>
          <input type="number" name="price" onChange={handleInput} value={input.price} />
        </div>
      </form>
      {isModify ? 
        <button type="submit" onClick={(e) => handleModifySubmit(e, input)}>수정</button>
        : <button type="submit" onClick={handleSubmit}>제출</button>}
      
    </div>
  )
}

export default Form
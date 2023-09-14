import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';

function App() {
  const [datas, setDatas] = useState([
    {
      id: 0,
      title: '식비',
      price: '1200'
    },
    {
      id: 1,
      title: '밥먹기',
      price: '1400'
    }
  ]);

  const [input, setInput] = useState({
    id: '',
    title: '',
    price: ''
  });

  const [isModify, setIsModify] = useState(false);

  // handleInput, handleSubmit은 form안에서만 쓰이는데, Form으로 이동시켜주는게 맞을까? 보통 함수들은 App.js에 많이 빼놓던데...
  const handleInput = (e) => {
    const {name, value} = e.target; // 숫자도 문자열로 저장되기는 하는데 뭐 문제 없음
    setInput({...input, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {...input, id: Date.now()}; // 이렇게 Date.now()로 하는게 일반적인가? -> 백엔드랑 하면 
    setDatas(datas.concat(newData)); // setDatas({...datas, input}) 이렇게 요상하게 하니까 오류남. ㅋㅋㅋㅋ 이유를 찾자.
    setInput({  
      id: '',  
      title: '',
      price: ''
    });
  }
  // console.log(input);
  console.log(datas);

  // 근데 왜 리액트에서는 함수 선언식보다 화살표함수를 많이 쓸까?
  const handleClear = () => {
    setDatas([]);
  }

  const handleDelete = (id) => {
    const newData = datas.filter((data) => data.id !== id);
    setDatas(newData);
  }

  const handleModify = (data) => {
    // 수정 시 - form 내용 변경, 제출 버튼 수정 버튼으로 -> 수정중인지에 대한 상태 저장 필요
    setIsModify(true);
    setInput(data);
  }

  const handleModifySubmit = (e, modifyValue) => {
    e.preventDefault();
    setDatas(datas.map((data) => {
      if (data.id === modifyValue.id) return modifyValue;
      return data;
    }));
    setInput({  
      id: '',  
      title: '',
      price: ''
    });
    setIsModify(false);
  }

  return (
    <div>
      <h1>예산 계산기</h1>
      <div style={{backgroundColor: 'white', padding: '20px'}}>
        <Form handleInput={handleInput} input={input} handleSubmit={handleSubmit} isModify={isModify} handleModifySubmit={handleModifySubmit} />
        <Lists datas={datas} handleClear={handleClear} handleDelete={handleDelete} handleModify={handleModify} />
      </div>
    </div>
  );
}

export default App;
// Manifest: Line: 1, column: 1, Syntax error. -> 출력되는 이유, 2번 출력되는 이유
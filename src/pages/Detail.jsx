import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail({fruit}){
  
  const {id}=useParams();
  const [num,setNum]=useState(0);
  const [num2,setNum2]=useState(0);
  const {alert, setAlert}=useState(true);
  
  const selectedFruit = fruit[id];
  
  //html이 렌더링이 완료되면 실행됨.
  // useEffect(()=>{
  //   //여기에 작성되는 코드들은 컴포넌트가 마운트, 업데이트될 때마다 실행된다.
  //   console.log('Detail컴포넌트 useEffect()')//2
  //   setTimeout(()=>{
  //     setAlert(false);
  //   },5000)
    
  //   return()=>{
  //     console.log('clean-up')
  //     clearTimeout(timer)
  //   }
  // },[num]/*의존성배열 - 변경감지된 state, props 설정에 따라 실행여부가 결정됨
  //       빈 배열을 넣으면 마운트시 한번만 실행됨
  //       특정 state나 props가 있으면 마운트될 때와 해당 state, props가 업데이트 될 때 실행됨
  //       */)

  // console.log('그냥 console log 밖에있는')//1

  
  if(!selectedFruit){
    return <div>해당 상품이 없습니다.</div>
  }

  return(
    <div className="container mt-3">
      <button onClick={()=>{setNum(num+1)}}>버튼</button>{num}
      <button onClick={()=>{setNum2(num2+1)}}>버튼2</button>{num2}
      {/* {alert ? <div className="alert alert-danger">5초안에 구매하면 공짜</div>:``} */}
      <div className="row">
        <div className="col-md-6">
          <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[id].title}.jpg`} alt="" width='80%'/>
        </div>
        <div className="col-md-6">
          <h4>{fruit[id].title}</h4>
          <p>{fruit[id].content}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}
export default Detail
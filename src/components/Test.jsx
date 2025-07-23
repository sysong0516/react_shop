function Child(){
  return(
    <>
    <h1>1번째 자식</h1>
    </>
  )
}

function Child2(){
  return(
    <>
    <h1>2번째 자식</h1>
    </>
  )
}

function Child3(){
  return(
    <>
    <h1>3번째 자식</h1>
    </>
  )
}

function Test(){
  const [num, setNum] = useState(0);
  const [data, setData]=useState('');
  const [isPending, startTransition] = useTransition();

  const a = new Array(10000).fill(0);

  return(
    <>
      <input type="text" onChange={(e)=>{
        startTransition(()=>{
          setData(e.target.value);
        })
      }}/>
      {
        isPending ?
        <div>처리중입니다...</div>
        :
        a.map(()=>{
          return <div>{data}</div>
        })
      }
      {num} <button onClick={()=>num++}>+</button>
      <Child/>
      <Child2/>
      <Child3/>
    </>
  )
}

export default Test;

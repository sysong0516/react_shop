import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function About(){
  const navigate = useNavigate();
  return(
    <>
      <button onClick={()=>navigate('intro')}>회사소개</button>
      <button onClick={()=>navigate('history')}>연혁</button>
      <button onClick={()=>navigate('loc')}>오시는 길</button>
      <Outlet/>
      {/* 자식 컴포넌트 출력 */}
    </>
  )
}

export default About;
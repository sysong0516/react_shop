import { useNavigate } from "react-router-dom"

function Card({fruit}) {
  const navigate = useNavigate();
  return (
    <div className="col-md-4" onClick={()=>{
      navigate('/detail/'+fruit.id);
    }}>
      <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit.title}.jpg`} alt="" width='80%' />
      <h4>{fruit.title}</h4>
      <p>{fruit.content}</p>
    </div>
  )
}

export default Card
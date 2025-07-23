import './watchedProduct.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function WatchedProduct(fruit) {
  const watched = useSelector(state => state.watched);
  const navigate = useNavigate();
  console.log(watched)
  return (
    <div className='WatchedProduct'>
      <div className="cards">
        <p>최근 본 상품</p>
        {
          watched.map((i) => {
            return (
              <div className="card" key={i} onClick={()=>{navigate('/detail/' + fruit[i].id)}}>
                <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[i].title}.jpg`} alt="" width='100%' />
                <p>{fruit[i].title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default WatchedProduct
import Card from '../components/Card'
import bg from '../aa.jpg'

function MainPage({data}){

  return(
    <>
      <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
      <div className="container">
        <div className="row">
          {
            //data배열에 저장된 object를 순회한다. fr에 object를 한번씩 저장
            data.map((fr,i) => {
              return (
                //card.jsx의 매개변수 fruit로 fr전달
                <Card fruit={fr}/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default MainPage
function Card({fruit}) {
  return (
    <div className="col-md-4">
      <img src={`${import.meta.env.BASE_URL}img/${fruit.title}.jpg`} alt="" width='80%' />
      <h4>{fruit.title}</h4>
      <p>{fruit.content}</p>
    </div>
  )
}

export default Card
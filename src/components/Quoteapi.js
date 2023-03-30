

function Quoteapi({data}) {
  console.log(data);
  return (
    <>
    <h1>Quote from Game of Thrones Show</h1>
    <h2>{data.sentence}</h2>
    <h3>{data.character.name}</h3>
    <h5>{data.character.house.name}</h5>
    </>
  )
}

export default Quoteapi;
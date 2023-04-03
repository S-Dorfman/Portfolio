

function Quoteapi({data}) {
  // console.log(data);
  return (
    <>
    <h2>Quote from Game of Thrones Show</h2>
    <h3>{data.sentence}</h3>
    <h3>{data.character.name}</h3>
    <h5>{data.character.house.name}</h5>
    </>
  )
}

export default Quoteapi;
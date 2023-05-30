

function Quoteapi({data}) {
  // console.log(data);
  return (
    <>
    <h3>Quote from the Game of Thrones Verse:</h3>
    <h4>{data.sentence}</h4>
    <h5>{data.character.name}</h5>
    {/* <h5>{data.character.house.name}</h5> */}
    <p>-randomly generated from Game of Thrones API</p>
    </>
  )
}

export default Quoteapi;
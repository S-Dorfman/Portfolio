import { useState, useEffect } from 'react';
import Quoteapi from '../components/Quoteapi';



function Quote() {
//api key = https://api.gameofthronesquotes.xyz/v1/random
// state to hold data
const [quote, setQuote] = useState(null);

// useEffect allows to reach out the external systems
// await = wait for data to be fetched from external api
//res.json parses data from response in json format
useEffect(() => {
    async function fetchApi() {
      const res = await fetch('https://api.gameofthronesquotes.xyz/v1/random')
      const data = await res.json();
      // console.log(data);
      setQuote(data);
    }

    //calling function
  fetchApi();  
  }, [])
  // console.log('data', quote);


  return (
    <>
    {/* make sure quote is not null before return */}
    {quote && <Quoteapi data={quote} />}
    </>
  )
}

export default Quote;
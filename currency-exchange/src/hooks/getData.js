// async function getData(currency='usd'){

import { useState , useEffect } from "react";

//     const response =await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
//     const res = await response.json();
//     return res.currency;
// }
// export default getData;

// directly doing like this is wrong because react will render it many times and all the time it will sends the fetch request , so only sends when the currecy has been changed

function getData(currency){
    const [data , setData] = useState({});
    useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=> res.json()).then((res)=>{setData(res[currency])});
    } , [currency])
    return data;
}
export default getData;
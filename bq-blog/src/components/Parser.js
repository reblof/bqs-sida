import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const Parser =()=> {
    const [parsedCsvData, setParsedCsvData] = useState([]);
    useEffect(() => {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRUvD-Cab6I3vItJ3w1MNEiMM3L8wuJwre1hjE1WxNGERsi84ZdEkK1ZWcXaPaKPcrK2viV-aOSlAcg/pub?output=csv', {
            header: true,
            download: true,
            complete: results => {
            //   setParsedCsvData(results.data)
              localStorage.setItem('posts', JSON.stringify(results.data))
            },
          });
    },[])
    // console.log(parsedCsvData[0])
    // return(
    //     <>
    //         {parsedCsvData &&
    //             parsedCsvData.map((parsedData, index) => (
    //             <article id={`art-${index}`}>
    //                 <a href={parsedData.Länk}>
    //                     <h2>{parsedData.Titel}</h2>
    //                     <p>{parsedData.Beskrivning}</p>
    //                     <span class="button">Läs inlägget</span>
    //                 </a>
    //             </article>
    //         ))}
    //     </>
    // )
  }
  export default Parser
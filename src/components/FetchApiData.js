import React, { useEffect, useState } from 'react'
import axios from "axios";

const BASE_URL = 'http://ec2-13-234-232-118.ap-south-1.compute.amazonaws.com:61001/transactions/getAllTransactions'

export const FetchApiData = () => {

    const [results, setResults] = useState(null);
    
    useEffect(() => {
      axios.get(BASE_URL).then((response) => {
        setResults(response.da);
      });
    }, []);

    if (!results) return null;
    console.log("Results in FetchApiData Component :" , results.data)
  return (
    <div>
      
    </div>
  )
}

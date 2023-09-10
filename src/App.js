import React, { useEffect, useState } from 'react'
import axios from "axios";
import { PaginationFilteringTable } from "./components/PaginationFilteringTable";

const BASE_URL = 'http://ec2-13-234-232-118.ap-south-1.compute.amazonaws.com:61001/transactions/getAllTransactions'

function App(){
  const [results, setResults] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setResults(response.data);
    });
  }, []);

  if (!results) return null;
    // console.log("Results in App Component :" , results.data);
  return (
    <div className="App">
      <PaginationFilteringTable results={results.data}/>
    </div>
  )
}

export default App;
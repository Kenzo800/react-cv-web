import { useState } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

// *** 理解 useState
// const [a,setA] = useState(100)
// function plus(){
//     setA((prev) => prev + 200)
//     setA((prev) => prev + 200)
//     setA(a + 200)
//     setA(a + 200)
// }

const Home = () => {
  const [data, setData] = useState([]);
  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};
export default Home;

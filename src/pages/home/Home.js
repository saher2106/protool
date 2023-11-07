// import './Home.css';

// export default function Home(){
//     return(
//         <div className="page-title">
//             <h1>Home</h1>
//         </div>
//     )
// }

import React from "react";
import Cards from "../cards/Cards";
// import Table from "../Table/Table";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
            <div className="page-title">
            <h1>Progress Reports</h1>
            </div>
      <Cards />
      {/* <Table /> */}
    </div>
  );
};

export default Home;
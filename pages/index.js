import React from "react";
//import Link from "next/link";
//import '../styles/global.css'
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";

// const Index = () => {
//   return (
//     <> 
    
//       <div>
//         <div className="navbar">
//           <A href={"/"} text="Главная" />
//           <A href={"/users"} text="Пользователи" />
//         </div>
//         <h1>Главная страница</h1>
//         <style jsx>
//           {`
//             .navbar {
//               background: orange;
//               padding: 15px;
//             }
            
//           `}
//         </style>
//       </div>
//     </>
//   );
// };
const Index = () => {
  return (
          <MainContainer keywords={"main page"}>

              <h1>Главная страница</h1>

          </MainContainer>
  );
};

export default Index;
// <MainContainer keywords={"main page"}>
// </MainContainer>

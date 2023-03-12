// import {BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "./NavBarBoostrap";
// import ErrorBoundary from "./ErrorBoundary";
import React from "react";
import Postlist from "./PostList";
import Example1 from "./Example.1";
import Skills from "./Skills";
import Experiences from "./Experiences"


function App (){
  return(
    <>
    <Postlist />
    <Example1 />
    <Skills />
    <Experiences/>
    </>
  )
}



// const routes =()=>{
// <Routes>
//   <Route path='/' element={<HomeScreen />}></Route>
//   <Route path='/Profile' element={<Profile /> } ></Route>   
//   <Route path='/Shop' element={<Shop />}></Route>
// </Routes>
// }

// const HomeScreen = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// };

// const Profile = () => {
//   return (
//     <div>
//       <h1>Profile Screen</h1>
//     </div>
//   );
// };

// const Shop= () => {
// throw new Error("oh no")
    
// };


// export class App extends React.Component{
//   render(){
//     return(
//     <ErrorBoundary>
//     <BrowserRouter>
//     <Navbar />
//     {routes}
//     </BrowserRouter>
//     </ErrorBoundary>
//   );
// }
// }


// function Navbar() {
//   return (
//     <>
//       {/* <NavBar class="navbar navbar-expand-sm navbar-custom bg-light">
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
//         <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="navbar-collapse collapse" id="navbarCustom">
//         <Nav className="navbar-nav"> */}
//             {/* <li class="nav-item active"> */}
//                 <NavLink to ="/">Home</NavLink>
//             {/* </li>
//             <li class="nav-item"> */}
//                 <NavLink  to ="/Profile" >Profile</NavLink >
//             {/* </li> 
//             <li class="nav-item"> */}
//                 <NavLink   to ="/Shop">Shop</NavLink >
//             {/* </li> */}
//     {/* //     </Nav> */}
//     {/* // </div> */}
//     {/* // </NavBar> */}
//  </>


//   );
// }

export default App;

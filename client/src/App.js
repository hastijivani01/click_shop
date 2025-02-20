//   import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import Home from "./Page/Home";
// import Header from "./Component/Header";
// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import Footer from "./Component/Footer";
// import Cart from "./Page/Cart";
// import SignIn from "./Component/SignIn";
// import SignUp from './Component/Login'
// import ChildredenComponent from './Component/ChildenComponent'
// import AdminPanel from "./Component/AdminPanel";
// // Correctly create the context
// const MyContext = createContext();

// function App() {
//   const [countryList, setCountryList] = useState([]);
//   const[isheaderfooter, setisheaderfooter] = useState(true)

//   useEffect(() => {
//     getCountry("https://countriesnow.space/api/v0.1/countries/");
//   }, []);

//   const getCountry = async (url) => {
//     try {
//       const response = await axios.get(url);
//       console.log(response.data.data);
//       setCountryList(response.data.data); // Store data in state if needed
//     } catch (error) {
//       console.error("Error fetching countries:", error);
//     }
//   };

//   const values = {
//     countryList, 
//     isheaderfooter,
//     setisheaderfooter
//   };

//   return (
//     <>
//       <Router>
//         <MyContext.Provider value={values}>
//           {
//             isheaderfooter === true && <Header />
//           }
          
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route exact path="/cart">
//               <Cart />
//             </Route>
//             <Route exact path="/signin">
//               <SignIn />
//             </Route>
//             <Route exact path="/signup">
//               <SignUp />
//             </Route>
//             <Route exact path="/admin">
//             <AdminPanel />
//             </Route>
//           </Switch>
//           {
//             isheaderfooter === true && <Footer />
//           } 
//           {/* <Footer /> */}
//         </MyContext.Provider>
//             {/* <ChildredenComponent /> */}
//       </Router>
//     </>
//   );
// }

// export default App;
// export { MyContext };

































import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Component/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Component/Footer";
import Cart from "./Page/Cart";
import SignIn from "./Component/SignIn";
import SignUp from './Component/Login';
import AdminPanel from "./Component/AdminPanel";

// Correctly create the context
const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [isheaderfooter, setisheaderfooter] = useState(true);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data.data);
      setCountryList(response.data.data); // Store data in state if needed
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const values = {
    countryList,
    isheaderfooter,
    setisheaderfooter
  };

  return (
    <Router>
      <MyContext.Provider value={values}>
        {isheaderfooter && <Header />}
        
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/cart"><Cart /></Route>
          <Route exact path="/signin"><SignIn /></Route>
          <Route exact path="/signup"><SignUp /></Route>
          <Route exact path="/admin"><AdminPanel /></Route>
        </Switch>

        {isheaderfooter && <Footer />}
      </MyContext.Provider>
    </Router>
  );
}

export default App;
export { MyContext };

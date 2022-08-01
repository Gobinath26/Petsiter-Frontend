import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './sb.css';
import Register from './Register';
import Login from './Login';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useState } from 'react';
import Dashboard from './Dashboard';
import Customer from './Customer';
import Worker from './Worker';
import Myorder from './Myorder';
import Editorder from './Editorder';
import Payment from './Payment';
import Accept from './Accept';
import Orderstatus from './Orderstatus';
import Estimate from './Estimate';
import Confirmorder from './Confirmorder';
import background from "./images/bgimage1.jpg";
 
function App() {
  const [user,setuser]=useState(null)
  const [order,setorder]=useState(null)
  const [bill,setbill] = useState(null)
  const [hour,sethour] = useState(null)
  return (
    <div className="App"   id='bckgrd'>
       <BrowserRouter>
        <div id="wrapper">
           {/* <Sidebar user={user}/> */}
           <div id="content-wrapper" class="d-flex flex-column">
            <div id="content"> 
               <Topbar user={user} setuser={setuser}/> 
                <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Register />}></Route>
                  <Route path="/login" element={<Login setuser={setuser}/>}></Route>
                  <Route path="/dashboard" element={<Dashboard/>}></Route>
                  <Route path="/customer" element={<Customer user={user}    />}></Route>
                  <Route path="/staff" element={<Worker user={user}/>}></Route>
                  <Route path="/order/:id" element={<Myorder setorder={setorder} user={user}
                   setbill={setbill}/>}></Route>
                  <Route path="/myorder/:id" element={<Editorder user={user}/>}></Route>
                  <Route path="/payment/:id" element={<Payment bill={bill}/>}></Route>
                  <Route path="/accept/:id" element={<Accept user={user}/>}></Route>
                  <Route path="/orderstatus" element={<Orderstatus user={user} />}></Route>
                  <Route path="/estimate" element={<Estimate setbill={setbill} sethour={sethour}/>}></Route>
                  <Route path="/confirmorder/:id" element={<Confirmorder setbill={setbill} sethour={sethour}/>}></Route>
                  </Routes>
              </div>
            </div>
          </div>
        </div>  
        </BrowserRouter>

    </div>
 
  );
}

export default App;

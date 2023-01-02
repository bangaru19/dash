import React from 'react';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import { Routes ,Route} from 'react-router-dom';
import  Dashboard  from '../BodyComponent/Dashboard';
import  PaymentGateway  from '../BodyComponent/PaymentGateway';
export default function HeaderComponent() {
  return (
    <div>
         <Navbar />
         <Sidenav />
         {/* Reagistration Our routes */}
         
         <Routes>
          <Route path='/' render={() => <Dashboard />} />
          <Route path='/PaymentGateway' render={() => <PaymentGateway />} />
          </Routes>
          
    </div>
  )
}


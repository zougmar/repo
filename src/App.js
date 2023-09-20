import './assets/css/bootstrap.css';
import './assets/css/bootstrap.min.css';
import './assets/css/boxicon.min.css';
import './assets/css/custom.css';
import './assets/css/templatemo.css';

import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./Component/Auth/login";
import Logout from "./Component/Auth/logout";

import Arborescence from "./Component/Arborescence";
import HeadContact from "./Component/HeadContact";
import Liste from "./Component/Liste";
import Galerie from "./Component/Galerie";
import HeadHistoire from "./Component/HeadHistoire";


function App() {
      return (
        <BrowserRouter>
        <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Arborescence" element={<Arborescence />} />
              <Route path="/HeadHistoire" element={<HeadHistoire />} />
              <Route path="/Liste" element={<Liste />} />
              <Route path="/Galerie" element={<Galerie />} />
              <Route path="/HeadContact" element={<HeadContact />} />
              <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
      );
    }
    

export default App;



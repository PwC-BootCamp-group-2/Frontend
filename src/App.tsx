import './App.css';
import Sidebar from './application/components/individuals/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './website/assets/css/style1.css';
import './website/assets/css/style2.css';
import './website/assets/css/style3.css';
// old
import './website/assets/css/damier.css';
import './website/assets/css/leke.css';
import './website/assets/css/sarah.css';

import { FC, useState } from 'react';
import ApplicationRoutes from './application/ApplicationRoutes';
import WebsiteRoutes from './website/WebsiteRoutes';
const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <ApplicationRoutes />
        <WebsiteRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;

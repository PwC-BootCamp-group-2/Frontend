import "./App.css";
import "./website/assets/css/style1.css";
import "./website/assets/css/style2.css";
import "./website/assets/css/style3.css";
// old
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./website/assets/css/damier.css";
import "./website/assets/css/leke.css";
import "./website/assets/css/sarah.css";

import "./App.css";
import { FC } from "react";
import ApplicationRoutes from "./application/ApplicationRoutes";
import WebsiteRoutes from "./website/WebsiteRoutes";
import { BrowserRouter as Router } from "react-router-dom";
const App: FC = () => {
  return (
    <>
      <Router>
        <WebsiteRoutes />
        <ApplicationRoutes />
      </Router>
      <ToastContainer />

    </>
  );
};

export default App;

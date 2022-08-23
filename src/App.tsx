import "./App.css";
import { FC } from "react";
import ApplicationRoutes from "./application/ApplicationRoutes";
import WebsiteRoutes from "./website/WebsiteRoutes";
import { BrowserRouter as Router } from "react-router-dom";
const App: FC = () => {
  return (
    <>
      <Router>
        <ApplicationRoutes />
        <WebsiteRoutes />
      </Router>
    </>
  );
};

export default App;

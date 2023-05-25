import "./App.css";
import Home from "./Home";
import Flag from "./Flag";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { createContext } from "react";
export const DemoContext = createContext();

function App() {
  // const [context, setContext] = useState({...demoData})
  return (
    // <DemoContext.Provider value = {[context, setContext]}
      <div className="App ">
        <Nav />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/flags/:country" element={<Flag />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    // <DemoContext.Provider/>
  );
}

export default App;

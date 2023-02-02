import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from "./componets/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/inicio" element={<Home></Home>} />
          <Route path="/series"  element={<Series></Series>}/>
          <Route path="/comics" element={<Comics></Comics>} />
          <Route element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "../src/Pages/Homepage";
import ErrorPage from "../src/Pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

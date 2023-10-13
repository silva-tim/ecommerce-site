import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Men from "./pages/Men";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Men />} />
      </Routes>
    </>
  );
}

export default App;

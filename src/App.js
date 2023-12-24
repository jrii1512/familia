import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Kisut from "./Kisut/Kisut";
import KisuDetali from "./Kisut/KisuDetali";
import ImageGallery from "./components/ImageGallery";
import Joulu from "./components/Joulu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/joulu" element={<Joulu />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/kisut" element={<Kisut />} />
          <Route path="/kisut/:id" element={<KisuDetali />} />
          {process.env.REACT_APP_SERVER === "http://localhost:4000" && (
            <Route path="/uploader" element={<Upload />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

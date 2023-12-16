import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Kisut from "./Kisut/Kisut";
import KisuDetali from "./Kisut/KisuDetali";
import ImageGallery from "./components/ImageGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/kisut" element={<Kisut />} />
          <Route path="/kisut/:id" element={<KisuDetali />} />
          <Route path="/uploader" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

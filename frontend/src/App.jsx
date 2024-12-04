import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TrackList from "./pages/TrackList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trackList" element={<TrackList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

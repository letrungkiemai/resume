import "./App.css";
import { Header } from "./components/Header";
import { Page } from "./components/Page";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-fit">
            <Header></Header>
            <Page></Page>
            <div
              className="sm:hidden block sticky bottom-0 left-0 text-2xl ml-1"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ⬆️
            </div>
          </div>
        }
      />
      <Route path="other" element={<h1>yolo</h1>} />
    </Routes>
  );
}

export default App;

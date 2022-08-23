import "./App.css";
import { Graph } from "./components/ExpGraph";
import { Header } from "./components/Header";
import { Page } from "./components/Page";

function App() {
  return (
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
  );
}

export default App;

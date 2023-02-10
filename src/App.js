import "./App.css";
import { IpForm } from "./components/IpForm";
import { Header } from "./layout/header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-8 mx-auto p-4 py-md-5">
          <Header />

          <IpForm />
        </div>
      </div>
    </div>
  );
}

export default App;

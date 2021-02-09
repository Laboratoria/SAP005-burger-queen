import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <hr/>
      <Login />
      <Register/>
      <hr/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

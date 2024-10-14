import "./App.css";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Sales from "./components/Sales";
import Recommended from "./components/Recommended";
import Topic from "./components/Topic";
import Popular from "./components/Popular";
import Footer from "./components/Footer";


function App() {

  return(
    <div>
      <Navbar />
      <Categories/>
      <Sales/>
      <Recommended/>
      <Topic/>
      <Popular/>
      <Footer/>
    </div>
  )
}

export default App;

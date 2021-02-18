import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Product from "./pages/products";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navmenu from "./components/navmenu";
import Distribution from "./components/distribution";
import Values from "./components/values";
import Production from "./components/production";
import Footer from "./components/footer";
import { FontAwesomeIcon, Award } from "@fortawesome/react-fontawesome";
import Header from "./components/header";
import Products from "./pages/products";
import img1 from "./img/volic3.jpg";
import img2 from "./img/volic2.jpg";
import img3 from "./img/volic1.jpg";
import NavigationBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            <Home />

            <Distribution />
            <Production />
            <Values />
          </Route>
          <Route
            path="/about"
            render={(props) => (
              <>
                <Header
                  imgsrc={img1}
                  subtitle={"Our SHort story tells it all"}
                />
                <About />
                <Distribution />
              </>
            )}
          />

          <Route path="/contact">
            <Header imgsrc={img2} subtitle={"We are just a click away"} />
            <Contact />
            <Distribution />
          </Route>
          <Route path="/products">
            <Header imgsrc={img3} subtitle={"We pride in range of quality"} />
            <Products />
            <Distribution />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

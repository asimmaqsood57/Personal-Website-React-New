import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import About from "./components/About";
import { Switch, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

import { useState, useEffect } from "react";

function App() {
  const [isLoading, setisLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 3500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setisLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

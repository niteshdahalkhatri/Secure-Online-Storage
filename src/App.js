import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
//styling
import * as s from "./App.style";

//components
import SideBar from "./components/sidebar/SideBar";

import Header from "./components/pages/storage/Header";
import MainView from "./components/pages/storage/MainView";
import Footer from "./components/pages/storage/Footer";
import Home from "./components/pages/storage/Home";
import Upload from "./components/pages/storage/Upload";

function App() {
  const { path } = useRouteMatch();
  return (
    <s.App>
      <SideBar />
      <MainView>
        <Header />
        <Switch>
          <Route exact path={`${path}`} component={Home} />
          <Route path={`${path}/upload`} component={Upload} />
        </Switch>
        <Footer />
      </MainView>
    </s.App>
  );
}

export default App;

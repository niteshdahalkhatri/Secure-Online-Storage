import React from "react";
import { useRouteMatch, Route } from "react-router-dom";
//styling
import * as s from "./App.style";

//private route
// import PrivateRoute from "./components/authentication/PrivateRoute";

//components
import SideBar from "./components/sidebar/SideBar";

import Header from "./components/pages/storage/Header";
import MainView from "./components/pages/storage/MainView";
import Footer from "./components/pages/storage/Footer";
import Home from "./components/pages/storage/Home";
import UpdateProfile from "./components/authentication/UpdateProfile";
import Upload from "./components/pages/storage/Upload";
import SharedWithMe from "./components/pages/storage/SharedWithMe";

function App() {
  const { path } = useRouteMatch();
  return (
    <s.App>
      <SideBar />
      <MainView>
        <Header />
        <Route exact path={`${path}`} component={Home} />
        <Route exact path={`${path}/folders/:folderId`} component={Home} />
        <Route path={`${path}/update-profile`} component={UpdateProfile} />
        <Route path={`${path}/encrypt`} component={Upload} />
        <Route path={`${path}/shared-with-me`} component={SharedWithMe} />
        <Footer />
      </MainView>
    </s.App>
  );
}

export default App;

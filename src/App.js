import React from "react";
import { useRouteMatch } from "react-router-dom";
//styling
import * as s from "./App.style";

//private route
import PrivateRoute from "./components/authentication/PrivateRoute";

//components
import SideBar from "./components/sidebar/SideBar";

import Header from "./components/pages/storage/Header";
import MainView from "./components/pages/storage/MainView";
import Footer from "./components/pages/storage/Footer";
import Home from "./components/pages/storage/Home";
import UpdateProfile from "./components/authentication/UpdateProfile";
import Upload from "./components/pages/storage/Upload";
import SharedWithMe from "./components/pages/storage/SharedWithMe";
import SearchPage from "./components/pages/storage/SearchResults";
import SharedByMe from "./components/pages/storage/SharedByMe";
import Bin from "./components/pages/storage/Bin";
import Decrypt from "./components/pages/storage/Decrypt";

function App() {
  const { path } = useRouteMatch();
  return (
    <s.App>
      <SideBar />
      <MainView>
        <Header />
        <PrivateRoute exact path={`${path}`} component={Home} />
        <PrivateRoute
          exact
          path={`${path}/folders/:folderId`}
          component={Home}
        />
        <PrivateRoute
          path={`${path}/update-profile`}
          component={UpdateProfile}
        />
        <PrivateRoute path={`${path}/encrypt`} component={Upload} />
        <PrivateRoute path={`${path}/decrypt`} component={Decrypt} />
        <PrivateRoute
          path={`${path}/shared-with-me`}
          component={SharedWithMe}
        />
        <PrivateRoute path={`${path}/shared-by-me`} component={SharedByMe} />
        <PrivateRoute path={`${path}/bin`} component={Bin} />

        {/**search poage*/}
        <PrivateRoute path={`${path}/search-result`} component={SearchPage} />
        <Footer />
      </MainView>
    </s.App>
  );
}

export default App;

import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Spinner from 'src/components/shared/Spinner/Spinner';
import Sidebar from 'src/components/shared/Sidebar/Sidebar';
import Footer from 'src/components/shared/Footer/Footer';
import Facebook from 'src/components/views/Facebook/Facebook';
import Instagram from 'src/components/views/Instagram/Instagram';
import Twitter from 'src/components/views/Twitter/Twitter';
import GoogleSearch from 'src/components/views/GoogleSearch/GoogleSearch';
import GoogleDisplay from 'src/components/views/GoogleDisplay/GoogleDisplay';
import Pinterest from 'src/components/views/Pinterest/Pinterest';
import Snapchat from 'src/components/views/Snapchat/Snapchat';
import Linkedin from 'src/components/views/Linkedin/Linkedin';
import Tiktok from 'src/components/views/Tiktok/Tiktok';

import './App.scss';

// TODO: Wrap routed components in new FormPanel HOC

const App: React.FC = () => {
  return (
    <div className="app">
      <Suspense fallback={<Spinner size={128}/>}>
        <BrowserRouter>
          <Sidebar/>

          <Switch>
            <Route exact path="/facebook" component={Facebook}/>
            <Route exact path="/instagram" component={Instagram}/>
            <Route exact path="/twitter" component={Twitter}/>
            <Route exact path="/google-search" component={GoogleSearch}/>
            <Route exact path="/google-display" component={GoogleDisplay}/>
            <Route exact path="/pinterest" component={Pinterest}/>
            <Route exact path="/snapchat" component={Snapchat}/>
            <Route exact path="/linkedin" component={Linkedin}/>
            <Route exact path="/tiktok" component={Tiktok}/>
            <Redirect from="*" to="/facebook"/>
          </Switch>

          <Footer/>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;

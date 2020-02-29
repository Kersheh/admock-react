import React, { Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import FormPanel from 'src/components/shared/FormPanel/FormPanel';
import AdPreview from 'src/components/shared/AdPreview/AdPreview';
import Spinner from 'src/components/shared/Spinner/Spinner';
import Sidebar from 'src/components/shared/Sidebar/Sidebar';
import Footer from 'src/components/shared/Footer/Footer';
import BrowserTitle from 'src/components/shared/BrowserTitle/BrowserTitle';

import Facebook from 'src/components/views/forms/Facebook/Facebook';
import Instagram from 'src/components/views/forms/Instagram/Instagram';
import Twitter from 'src/components/views/forms/Twitter/Twitter';
import GoogleSearch from 'src/components/views/forms/GoogleSearch/GoogleSearch';
import GoogleDisplay from 'src/components/views/forms/GoogleDisplay/GoogleDisplay';
import Pinterest from 'src/components/views/forms/Pinterest/Pinterest';
import Snapchat from 'src/components/views/forms/Snapchat/Snapchat';
import Linkedin from 'src/components/views/forms/Linkedin/Linkedin';
import Tiktok from 'src/components/views/forms/Tiktok/Tiktok';

import FacebookPreview from 'src/components/views/previews/FacebookPreview/FacebookPreview';
import InstagramPreview from 'src/components/views/previews/InstagramPreview/InstagramPreview';
import TwitterPreview from 'src/components/views/previews/TwitterPreview/TwitterPreview';
import GoogleSearchPreview from 'src/components/views/previews/GoogleSearchPreview/GoogleSearchPreview';
import GoogleDisplayPreview from 'src/components/views/previews/GoogleDisplayPreview/GoogleDisplayPreview';
import PinterestPreview from 'src/components/views/previews/PinterestPreview/PinterestPreview';
import SnapchatPreview from 'src/components/views/previews/SnapchatPreview/SnapchatPreview';
import LinkedinPreview from 'src/components/views/previews/LinkedinPreview/LinkedinPreview';
import TiktokPreview from 'src/components/views/previews/TiktokPreview/TiktokPreview';

import './App.scss';

const routerViews = [
  {
    view: <Facebook/>,
    preview: <FacebookPreview/>,
    path: '/facebook'
  },
  {
    view: <Instagram/>,
    preview: <InstagramPreview/>,
    path: '/instagram'
  },
  {
    view: <Twitter/>,
    preview: <TwitterPreview/>,
    path: '/twitter'
  },
  {
    view: <GoogleSearch/>,
    preview: <GoogleSearchPreview/>,
    path: '/google-search'
  },
  {
    view: <GoogleDisplay/>,
    preview: <GoogleDisplayPreview/>,
    path: '/google-display'
  },
  {
    view: <Pinterest/>,
    preview: <PinterestPreview/>,
    path: '/pinterest'
  },
  {
    view: <Snapchat/>,
    preview: <SnapchatPreview/>,
    path: '/snapchat'
  },
  {
    view: <Linkedin/>,
    preview: <LinkedinPreview/>,
    path: '/linkedin'
  },
  {
    view: <Tiktok/>,
    preview: <TiktokPreview/>,
    path: '/tiktok'
  },
];

const routerViewComponents = routerViews.map((route, key) => {
  return (
    <Route exact path={route.path} key={key}>
      <FormPanel>
        {route.view}
      </FormPanel>

      <AdPreview>
        {route.preview}
      </AdPreview>
    </Route>
  );
});

const App: React.FC = () => {
  const history = createBrowserHistory();

  return (
    <div className="app">
      <Suspense fallback={<Spinner size={128}/>}>
        <BrowserTitle history={history}/>

        <Router history={history}>
          <Sidebar history={history}/>

          <Switch>
            {routerViewComponents}

            <Redirect from="*" to="/facebook"/>
          </Switch>

          <Footer/>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;

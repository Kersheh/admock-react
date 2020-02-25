import React, { Suspense, useState, useEffect } from 'react';
import { createBrowserHistory, History, Location } from 'history';
import { useTranslation } from 'react-i18next';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import TRANSLATION_MAP from 'src/constants/translationMap';
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

const MEDIA_TYPE_TRANSLATIONS = TRANSLATION_MAP.MEDIA_TYPE_TRANSLATIONS;

type BrowserTitleProps = {
  history: History;
};

const BrowserTitle: React.FC<BrowserTitleProps> = ({ history }: BrowserTitleProps) => {
  const { t } = useTranslation();
  const [routePath, setRoutePath] = useState(history.location.pathname);

  const historyUnlisten = history.listen((location: Location) => {
    setRoutePath(location.pathname);
  });

  useEffect(() => {
    return () => {
      historyUnlisten();
    };
  }, [historyUnlisten]);

  return (
    <Helmet>
      <title>
        {routePath ? `${t('APP_TITLE')} — ${t(MEDIA_TYPE_TRANSLATIONS[routePath.slice(1)])}` : t('APP_TITLE')}
      </title>
    </Helmet>
  );
};

// TODO: Wrap routed components in new FormPanel HOC
const App: React.FC = () => {
  const history = createBrowserHistory();

  return (
    <div className="app">
      <Suspense fallback={<Spinner size={128}/>}>
        <BrowserTitle history={history}/>

        <Router history={history}>
          <Sidebar history={history}/>

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
        </Router>
      </Suspense>
    </div>
  );
};

export default App;

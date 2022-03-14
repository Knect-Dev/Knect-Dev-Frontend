import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, personCircleOutline, statsChartOutline } from 'ionicons/icons';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => (
  <IonApp>
    <Header />
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="stats" href="/stats">
            <IonIcon icon={statsChartOutline} />
            <IonLabel>Stats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

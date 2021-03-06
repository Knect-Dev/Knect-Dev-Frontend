import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
} from '@ionic/react';
import { homeOutline, personCircleOutline, statsChartOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { useSelector, useDispatch } from 'react-redux';
import {reactLocalStorage} from 'reactjs-localstorage';

import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Auth from './components/Auth/Auth';

import { setLocalUser } from './store/user';
import jwt_decode from "jwt-decode";

const Main = () => {
  let dispatch = useDispatch();

  //get user from localStorage
  let localUser = reactLocalStorage.getObject('localUser') ? reactLocalStorage.getObject('localUser') : {};
  let user = useSelector(state => state.user.user);

  if(Object.keys(user).length === 0){
    if(Object.keys(localUser).length !== 0){
    
      user = localUser;
      let decoded = jwt_decode(user.token);
      if( Date.now() > decoded.expiresIn + decoded.signTime ){
      } else {
        user = {};
        dispatch(setLocalUser(localUser));
      }
    }
  } 

  return(
    <>
      <Header user={user}/>
      <Filter />
      <IonContent id="main">
        {!user.email ?
        <Auth/> :
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
        }
      </IonContent>
    </>
  );
};

export default Main;

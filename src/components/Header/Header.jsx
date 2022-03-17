import { useState } from 'react';
import { useSelector } from 'react-redux';
import { sunnyOutline, moonOutline, logOutOutline} from 'ionicons/icons';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonMenuButton,
  IonButtons,
  IonIcon
} from '@ionic/react';
import './header.scss';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);

  const themeToggleHandler = () => {
    document.body.classList.toggle('dark');
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  const { currentPage } = useSelector(state => state.currentPage);
  console.log('currentPage: ', currentPage);

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'> 
        <IonIcon id='logout-button' icon={logOutOutline}></IonIcon>
        <IonTitle id='title'>Knect.Dev</IonTitle>
        {darkTheme ?
            <IonIcon class='dark-icon' icon={sunnyOutline} onClick={themeToggleHandler}></IonIcon>
            :
            <IonIcon class='dark-icon' icon={moonOutline} onClick={themeToggleHandler}></IonIcon>}
        </IonButtons>
        {currentPage === '/home' ?
          <IonButtons slot='end'>
            <IonSearchbar
              id='search-bar'
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value)}
            ></IonSearchbar>
            Filters
            <IonMenuButton auto-hide='false'></IonMenuButton>
          </IonButtons>
          : null
        }
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

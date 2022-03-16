import { useState } from 'react';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonMenuButton,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/react';
import { sunnyOutline, moonOutline } from 'ionicons/icons';
import { accessibilityOutline } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import './header.scss';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);

  const themeToggleHandler = () => {
    document.body.classList.toggle('dark');
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  let userState = useSelector((state) => state.user);

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonButton>
            <IonIcon slot='icon-only' icon={accessibilityOutline}></IonIcon>
          </IonButton>
          {darkTheme ?
            <IonIcon icon={sunnyOutline} onClick={themeToggleHandler}></IonIcon>
            : 
            <IonIcon icon={moonOutline} onClick={themeToggleHandler}></IonIcon>}
        </IonButtons>
        <IonTitle>Knect.Dev</IonTitle>
        <IonButtons slot='secondary'>
          <IonSearchbar
            id='search-bar'
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value)}
          ></IonSearchbar>
        </IonButtons>
        <IonButtons slot='end'>
          Filters
          <IonMenuButton auto-hide='false'></IonMenuButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

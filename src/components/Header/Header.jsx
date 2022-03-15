import { useState } from 'react';
import { IonHeader, IonTitle, IonToolbar, IonSearchbar, IonMenuButton, IonButton, IonButtons, IonToggle, IonIcon } from '@ionic/react';
import { sunnyOutline, moonOutline } from 'ionicons/icons';
import { accessibilityOutline, contrastOutline } from 'ionicons/icons';
import './header.scss'

const Header = () => {
  const [searchText, setSearchText] = useState('');
  console.log('SEARCHTEXT', searchText);

  const [darkTheme, setDarkTheme] = useState(false);

  const themeToggleHandler = () => {
    document.body.classList.toggle('dark');
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  return (

    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={accessibilityOutline}></IonIcon>
          </IonButton>
          {
            darkTheme ?
              <IonIcon icon={moonOutline} onClick={themeToggleHandler}></IonIcon>
              :
              <IonIcon icon={sunnyOutline} onClick={themeToggleHandler}></IonIcon>
          }
          {/* <IonToggle
            slot="icon-only" icon={contrastOutline} class="themeToggle"
            onIonChange={themeToggleHandler}
          /> */}
        </IonButtons>
        <IonTitle>Knect.Dev</IonTitle>
        <IonButtons slot="secondary">
          <IonSearchbar id="search-bar" value={searchText} onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar>
        </ IonButtons>
        <IonButtons slot="end">
          Filters
          <IonMenuButton auto-hide="false"></IonMenuButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;


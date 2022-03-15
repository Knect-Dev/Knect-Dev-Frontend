import { useState } from 'react';
import { IonHeader, IonTitle, IonToolbar, IonSearchbar, IonMenuButton, IonButton, IonButtons, IonToggle, IonIcon } from '@ionic/react';
import { accessibilityOutline, contrastOutline } from 'ionicons/icons';
import './Header.scss'

const Header = () => {
  const [searchText, setSearchText] = useState('');
  console.log('SEARCHTEXT', searchText);

  // // Query for the toggle that is used to change between themes
  // const toggle = document.querySelector('#themeToggle');
  // console.log('toggle', toggle);
  // // Listen for the toggle check/uncheck to toggle the dark class on the <body>
  // toggle.addEventListener('ionChange', (ev) => {
  //   document.body.classList.toggle('dark', ev.detail.checked);
  // });
  // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  // // Listen for changes to the prefers-color-scheme media query
  // prefersDark.addListener((e) => checkToggle(e.matches));
  // // Called when the app loads
  // function loadApp() {
  //   checkToggle(prefersDark.matches);
  // }
  // // Called by the media query to check/uncheck the toggle
  // function checkToggle(shouldCheck) {
  //   toggle.checked = shouldCheck;
  // }

  const themeToggleHandler = () => document.body.classList.toggle('dark');

  return (

    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={accessibilityOutline}></IonIcon>
          </IonButton>
          <IonToggle
            slot="icon-only" icon={contrastOutline} class="themeToggle"
            onIonChange={themeToggleHandler}
          />
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


import { useState } from 'react';
import { IonHeader, IonTitle, IonToolbar, IonSearchbar, IonMenuButton, IonButton, IonButtons, IonToggle, IonIcon } from '@ionic/react';
import { accessibilityOutline, contrastOutline } from 'ionicons/icons';
import {  useSelector } from 'react-redux';
import './header.scss'

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const themeToggleHandler = () => document.body.classList.toggle('dark');
  let userState = useSelector(state => state.user)

  return (

    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={accessibilityOutline}></IonIcon>
          </IonButton>
           <IonTitle>{userState.user[0].firstName}</IonTitle> {/* logged in username */}
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


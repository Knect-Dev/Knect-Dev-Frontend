import { useState } from 'react';
import { IonHeader, IonTitle, IonToolbar, IonSearchbar, IonMenuButton, IonButton, IonButtons, IonIcon } from '@ionic/react';
import { accessibilityOutline } from 'ionicons/icons';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonHeader>
      <IonToolbar>

        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={accessibilityOutline}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>Knect.Dev</IonTitle>
        <IonButtons slot="secondary">
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar>
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


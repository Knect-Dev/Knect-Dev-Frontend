import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react';

import React from 'react';
import { useState } from 'react';

const SideMenu = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <React.Fragment>
      <IonMenu content-id='main-content'>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>
              Hi, Kellen
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide='false'>
              <IonButton>Hi</IonButton>
            </IonMenuToggle>
          </IonList>

          <IonItem
            button
            onClick={() => {
              setIsVisible(true);
              if (isVisible === true) {
                setIsVisible(false);
              }
            }}
          >
      
          </IonItem>
          <IonMenuToggle>
            <IonList>
            <IonButton>Hi</IonButton>
            </IonList>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
    </React.Fragment>
  );
};

export default SideMenu;

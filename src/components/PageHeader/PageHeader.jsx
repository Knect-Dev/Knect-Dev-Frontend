import {IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import './PageHeader.css';

const PageHeader = ({title}) => {
  return (
        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center" id="header-title">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
  );
};

export default PageHeader;

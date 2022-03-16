import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

const StatsCard = (props) => {
  return (
    <IonCard>
      <IonCardHeader class='ion-text-center'>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
          </IonCol>
          <IonCol>
          <IonCardContent>{props.children}</IonCardContent>
          </IonCol>
          <IonCol>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default StatsCard;

import {
  IonContent, IonMenu, IonList, IonItem, IonHeader, IonTitle, IonToolbar,
} from '@ionic/react';

const Filter = () => {

  return (
    <IonMenu side="end" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar translucent>
          <IonTitle>Jobs Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Add a filter menu here  */}

        <IonList>
          <IonItem>Status</IonItem>
          <IonItem>Company</IonItem>
          <IonItem>Date Applied</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Filter;


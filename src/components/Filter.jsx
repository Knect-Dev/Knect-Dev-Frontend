import {
  IonContent, IonMenu, IonList, IonItem
} from '@ionic/react';

const Filter = () => {

  return (
    <IonMenu side="end" menuId="first" contentId="main">
      <IonContent>
        {/* Add a filter menu here  */}


        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
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


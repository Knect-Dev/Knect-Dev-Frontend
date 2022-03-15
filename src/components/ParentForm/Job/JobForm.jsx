import { IonModal, IonContent, IonButton, IonItem, IonInput } from '@ionic/react';


const JobForm = () => {
  return (
    <>
      <IonContent>
        <IonItem>
          <IonInput value={'Job'} placeholder="Enter Input" clearInput></IonInput>
        </IonItem>
      </IonContent>
    </>
  )
}

export default JobForm;
import { IonModal, IonContent, IonButton, IonItem, IonInput } from '@ionic/react';


const CompanyForm = () => {
  return (
    <>
      <IonContent>
        <IonItem>
          <IonInput value={'Company'} placeholder="Enter Input" clearInput></IonInput>
        </IonItem>
      </IonContent>
    </>
  )
}

export default CompanyForm;
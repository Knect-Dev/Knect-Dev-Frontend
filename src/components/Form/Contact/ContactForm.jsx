import { IonModal, IonContent, IonButton, IonItem, IonInput } from '@ionic/react';


const ContactForm = () => {
  return (
    <>
      <IonItem>
        <IonInput value={'woop'} placeholder="Enter Input" clearInput></IonInput>
      </IonItem>
    </>
  )
}

export default ContactForm;
import { IonModal, IonLabel, IonContent, IonButton, IonItem, IonInput, IonTextarea } from '@ionic/react';
import { useState } from 'react';


const ContactForm = ({ values, setValues }) => {

  function handleChange(e) {
    setValues(prevValues => prevValues, values[e.target.name] = e.detail.value);
  }
  console.log(values);
  return (  
    <>
      <IonContent>
        <IonItem>
          <IonLabel>Name: </IonLabel>
          <IonInput value={values.contactName} onIonChange={e => handleChange(e)} name='contactName' placeholder="Enter Input" clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Company: </IonLabel>
          <IonInput value={values.contactCompany} onIonChange={e => handleChange(e)} name='contactCompany' placeholder="Enter Input" clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Role: </IonLabel>
          <IonInput value={values.contactRole} onIonChange={e => handleChange(e)} name='contactRole' placeholder="Enter Input" clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Email: </IonLabel>
          <IonInput value={values.contactEmail} onIonChange={e => handleChange(e)} name='contactEmail' placeholder="Enter Input" clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>LinkedIn: </IonLabel>
          <IonInput value={values.contactLinkedIn} onIonChange={e => handleChange(e)} name='contactLinkedIn' placeholder="Enter Input" clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Phone Number: </IonLabel>
          <IonInput value={values.contactPhone} onIonChange={e => handleChange(e)} name='contactPhone' placeholder="Enter Input" clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Notes: </IonLabel>
          <IonTextarea value={values.contactNotes} onIonChange={e => handleChange(e)} name='contactNotes' placeholder="Enter Input" clearInput></IonTextarea >
        </IonItem>
      </IonContent>
    </>
  )
}

export default ContactForm;
import { IonModal, IonLabel, IonContent, IonButton, IonItem, IonInput, IonTextarea } from '@ionic/react';
import { useState } from 'react';
import { When } from 'react-if';

const ContactForm = ({ state, dispatch }) => {
  const [lock, setLock] = useState(true);

  function handleChange(e) {
    console.log('tag', e.target.name, 'value', e.detail.value);
    dispatch({ type: 'SET_CONTACT', data: [e.target.name, e.detail.value] });
  }

  console.log(state);
  return (  
    <>
      <When condition={lock}>
        <IonContent>
          <p>sup</p>
        </IonContent>
      </When>
      <When condition={!lock}>
        <IonContent>
          <IonItem>
            <IonLabel>Name: </IonLabel>
            <IonInput value={state.contact.contactName} onIonChange={e => handleChange(e)} name='contactName' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Company: </IonLabel>
            <IonInput value={state.contact.contactCompany} onIonChange={e => handleChange(e)} name='contactCompany' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Role: </IonLabel>
            <IonInput value={state.contact.contactRole} onIonChange={e => handleChange(e)} name='contactRole' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Email: </IonLabel>
            <IonInput value={state.contact.contactEmail} onIonChange={e => handleChange(e)} name='contactEmail' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>LinkedIn: </IonLabel>
            <IonInput value={state.contact.contactLinkedIn} onIonChange={e => handleChange(e)} name='contactLinkedIn' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Phone Number: </IonLabel>
            <IonInput value={state.contact.contactPhone} onIonChange={e => handleChange(e)} name='contactPhone' placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Notes: </IonLabel>
            <IonTextarea value={state.contact.contactNotes} onIonChange={e => handleChange(e)} name='contactNotes' placeholder="Enter Input" clearInput></IonTextarea >
          </IonItem>
        </IonContent>
      </When>
    </>
  )
}

export default ContactForm;
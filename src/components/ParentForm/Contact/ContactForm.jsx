import { IonModal, IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonTextarea } from '@ionic/react';
import { useState } from 'react';
import { When } from 'react-if';

import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

const ContactForm = ({ state, dispatch }) => {
  const [lock, setLock] = useState(true);

  function handleChange(e) {
    dispatch({ type: 'SET_CONTACT', data: [e.target.name, e.detail.value] });
  }

  function toggleEditHandler() {
    setLock(!lock);
  }

  return (  
    <>
      <IonContent>
        <When condition={lock}>
          <IonItem>
            Name:  {state.contact.contactName}
          </IonItem>
          <IonItem>
            Company:  {state.contact.contactCompany}
          </IonItem>
          <IonItem>
            Role: {state.contact.contactRole}
          </IonItem>
          <IonItem>
            Email: {state.contact.contactEmail}
          </IonItem>
          <IonItem>
            LinkedIn: {state.contact.contactLinkedIn}
          </IonItem>
          <IonItem>
            Phone Number: {state.contact.contactPhone}
          </IonItem>
          <IonItem>
            Notes: {state.contact.contactNotes}
          </IonItem>
        </When>
        <When condition={!lock}>
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
        </When>
        {lock ?
          <IonIcon class="edit-profile-icon" icon={lockOpenOutline} onClick={toggleEditHandler}></IonIcon>
          :
          <IonIcon class="edit-profile-icon" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>}
      </IonContent>
    </>
  )
}

export default ContactForm;
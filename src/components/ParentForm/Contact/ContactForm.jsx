import { IonLabel, IonContent, IonButton, IonIcon, IonItem, IonInput, IonGrid, IonRow, IonCol, IonAccordionGroup, IonAccordion, IonList } from '@ionic/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { When } from 'react-if';

import { closeOutline } from 'ionicons/icons';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';

const ContactForm = ({ state, disable, setDisable, showForm, setShowForm }) => {
  const [lock, setLock] = useState(true);

  let contactState = useSelector(state => state.contacts.contacts);
  let dispatch = useDispatch();

  function handleChange(e) {
    dispatch({ type: 'SET_CONTACTS', payload: { id: e.target.about, name: e.target.name, value: e.detail.value } });
  }

  function toggleEditHandler() {
    setDisable(!disable);
    setLock(!lock);
  }

  // needs to be worked on after Job and Company tab are being rendered
  // const currentContacts = contactState.find(contact => contact.JobId === jobId && contact.CompanyId === companyId)
  return (
    <>
      <IonContent>
        <IonGrid>
          <When condition={lock}>

            <IonRow class='ion-justify-content-between status-background'>
              <IonItem class='status-item' >Application Status</IonItem>
              <IonButton class='job-button' color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
            </IonRow>

            <IonRow>
              <IonCol size='6'>{contactState.company || 'Company Name'}</IonCol>
              <IonCol size='6'>Career Page</IonCol>
            </IonRow>

            <IonAccordionGroup>
              {contactState.map(contact => {
                return (
                  <IonAccordion key={contact.id}>
                    <IonItem slot="header">
                      <IonLabel><h1 style={{ display: 'inline' }}>{contact.name}</h1> <h5 style={{ display: 'inline' }}>&nbsp;     {contact.role}</h5></IonLabel>
                    </IonItem>

                    <IonList slot="content">
                      <IonItem>
                        LinkedIn: <h5>&nbsp; {contact.linkedIn}</h5>
                      </IonItem>
                      <IonItem>
                        Email: <h5>&nbsp; {contact.email}</h5>
                      </IonItem>
                      <IonItem>
                        Phone: <h5>&nbsp; {contact.phone}</h5>
                      </IonItem>
                      <IonItem>
                        Notes: <IonCol><h5>&nbsp; {contact.notes}</h5></IonCol>
                      </IonItem>
                    </IonList>
                  </IonAccordion>
                )
              })}
            </IonAccordionGroup>
          </When >
          <When condition={!lock}>
            <IonRow class='ion-justify-content-between status-background'>
              <IonItem class='status-item' >Application Status</IonItem>
              <IonButton class='job-button' color='danger' onClick={() => setShowForm(!showForm)}><IonIcon icon={closeOutline}></IonIcon></IonButton>
            </IonRow>

            <IonRow>
              <IonCol size='6'>{contactState.company}</IonCol>
              <IonCol size='6'>Career Page</IonCol>
            </IonRow>

            <IonAccordionGroup>
              {contactState.map(contact => {
                return (
                  <IonAccordion key={contact.id}>
                    <IonItem slot="header">
                      <IonLabel><h1 style={{ display: 'inline' }}>{contact.name}</h1> <h5 style={{ display: 'inline' }}>&nbsp;     {contact.role}</h5></IonLabel>
                    </IonItem>

                    <IonList slot="content">
                      <IonItem>
                        <IonLabel>Name: </IonLabel>
                        <IonInput about={contact.id} value={contact.name} onIonChange={e => handleChange(e)} name='name' clearInput></IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Role: </IonLabel>
                        <IonInput about={contact.id} value={contact.role} onIonChange={e => handleChange(e)} name='role' clearInput></IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel>LinkedIn: </IonLabel>
                        <IonInput about={contact.id} value={contact.linkedIn} onIonChange={e => handleChange(e)} name='linkedIn' clearInput></IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Email: </IonLabel>
                        <IonInput about={contact.id} value={contact.email} onIonChange={e => handleChange(e)} name='email' clearInput></IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Phone: </IonLabel>
                        <IonInput about={contact.id} value={contact.phone} onIonChange={e => handleChange(e)} name='phone' clearInput></IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Notes: </IonLabel>
                        <IonInput about={contact.id} value={contact.notes} onIonChange={e => handleChange(e)} name='notes' clearInput></IonInput>
                      </IonItem>
                    </IonList>
                  </IonAccordion>
                )
              })}
            </IonAccordionGroup>
          </When>
          {lock ?
            <IonIcon class="edit-form-icon-locked" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>
            :
            <IonIcon class="edit-form-icon-unlocked" icon={lockOpenOutline} onClick={toggleEditHandler} ></IonIcon>}
        </IonGrid >
      </IonContent>
    </>
  )
}

export default ContactForm;
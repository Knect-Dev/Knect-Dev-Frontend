import { IonLabel, IonContent, IonIcon, IonItem, IonInput, IonGrid, IonRow, IonCol, IonAccordionGroup, IonAccordion, IonList, IonText } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { If, Then, When, Else } from 'react-if';

import KnectIconLight from '../../../resources/Knect.dev.png';
import KnectIconDark from '../../../resources/knect_dev_white.png';

import { closeOutline } from 'ionicons/icons';

const ContactForm = ({
  handleCloseForm,
  lock,
  currentCompany,
  theme,
}) => {

  let contactState = useSelector(state => state.contacts.contacts);
  let dispatch = useDispatch();

  function handleChange(e) {
    dispatch({ type: 'SET_CONTACTS', payload: { id: e.target.about, name: e.target.name, value: e.detail.value } });
  }
  // needs to be worked on after Job and Company tab are being rendered
  // const currentContacts = contactState.find(contact => contact.JobId === jobId && contact.CompanyId === companyId)
  return (
    <>
      <IonContent>
        <IonGrid>
          <IonRow class='ion-justify-content-between ion-align-items-center' style={{ backgroundColor: 'rgb(150, 150, 150, .50)' }}>
            <img src={theme ? KnectIconDark : KnectIconLight} alt='Knect Dev Small Icon' style={{ height: '2rem', paddingLeft: '.5rem' }} />
            <If condition={lock}>
              <Then>
                <IonText class='status-item ion-padding-start'><h3>{`Contacts at ${currentCompany?.name}`}</h3></IonText>
              </Then>
              <Else>
                <IonText class='status-item ion-padding-start'><h3>{'New Contact'}</h3></IonText>
              </Else>
            </If>
            <IonIcon class="header-icon" icon={closeOutline} onClick={handleCloseForm}></IonIcon>
          </IonRow>

          <When condition={lock}>
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
        </IonGrid >
      </IonContent>
    </>
  )
}

export default ContactForm;
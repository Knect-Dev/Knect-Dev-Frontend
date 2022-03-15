import { IonModal, IonContent, IonButton } from '@ionic/react';
import { useState } from 'react';

import './Form.scss';

const Form = ({ showForm, setShowForm }) => {

  return (
    <>
      {/* <IonButton onClick={setShowModal(!showModal)}>Show</IonButton> */}
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}
      >
        <IonContent>
          <IonButton onClick={() => setShowForm(!showForm)}>Close</IonButton>
        </IonContent>
      </IonModal>
    </>
  )
}

export default Form;
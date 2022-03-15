import { IonModal, IonContent, IonButton, IonItem, IonInput } from '@ionic/react';
import { useState } from 'react';

import './Form.scss';

const Form = ({ showForm, setShowForm }) => {

  const [locked, setLocked] = useState(true);

  return (
    <>
      {/* <IonButton onClick={setShowModal(!showModal)}>Show</IonButton> */}
      <IonModal
        isOpen={showForm}
        swipeToClose={true}
        backdropDismiss={false}
      >
        <IonContent>
          <IonItem>
            <IonInput value={'woop'} placeholder="Enter Input" clearInput></IonInput>
          </IonItem>
          <IonButton onClick={() => setShowForm(!showForm)}>Close</IonButton>
        </IonContent>
      </IonModal>
    </>
  )
}

export default Form;
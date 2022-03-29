import { IonContent, IonIcon, IonAlert } from '@ionic/react';
import { lockOpenOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';

function LockButton({ toggleEditHandler, lock }) {

  const [showAlert, setShowAlert] = useState(false);

  function handleClick(e) {
    setShowAlert(false);
    if (e === 'accept') toggleEditHandler(true);
    if (e === 'discard') toggleEditHandler(false);
  }

  return (
    <>
      <IonContent>
        {lock ?
          <IonIcon class="edit-form-icon-locked" icon={lockClosedOutline} onClick={() => toggleEditHandler(false)}></IonIcon>
          :
          <IonIcon class="edit-form-icon-unlocked" icon={lockOpenOutline} onClick={() => setShowAlert(!showAlert)}></IonIcon>}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={'Confirm Changes'}
          message={'Submit these changes and save to the database?'}
          buttons={[
            {
              text: 'Discard',
              id: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                handleClick('discard');
              }
            },
            {
              text: 'Accept',
              id: 'accept',
              cssClass: 'success',
              handler: () => {
                handleClick('accept');
              }
            }
          ]}
        />
      </IonContent>
    </>
  )
}

export default LockButton;

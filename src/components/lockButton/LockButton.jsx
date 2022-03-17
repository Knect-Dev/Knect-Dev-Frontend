import { IonContent, IonIcon, IonPopover, IonButton, IonAlert } from '@ionic/react';
import { lockOpenOutline, lockClosedOutline, saveOutline, trashOutline } from 'ionicons/icons';
import { useState } from 'react';

import './lockButton.scss';

function LockButton({ toggleEditHandler, lock }) {

  const [showAlert1, setShowAlert] = useState(false);

  function handleClick(e) {
    setShowAlert(false);
    if (e === 'accept') toggleEditHandler(true);
    if (e === 'cancel') toggleEditHandler(false);
  }

  return (
    <>
      <IonContent>
        {lock ?
          <IonIcon class="edit-form-icon-locked" icon={lockClosedOutline} onClick={toggleEditHandler}></IonIcon>
          :
          <IonIcon class="edit-form-icon-unlocked" icon={lockOpenOutline} onClick={() => setShowAlert(!showAlert1)}></IonIcon>}
        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={'Confirm Changes'}
          message={'Would you like to submit these changes?'}
          buttons={[
            {
              text: 'Cancel',
              id: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                handleClick('cancel');
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

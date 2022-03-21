import { useState } from 'react';
import { IonIcon, IonAlert } from '@ionic/react';

import { trashOutline } from 'ionicons/icons';


const TrashButton = ({ currentJob, deleteHandler, handleCloseForm }) => {

  const [showAlert, setShowAlert] = useState(false);

  function handleClick(e) {
    setShowAlert(false);
    if (e === 'confirm') {
      deleteHandler({ type: 'JOB', id: currentJob?.id });
      handleCloseForm();
    };
  }

  return (
    <>
      <IonIcon class="header-icon" icon={trashOutline} onClick={() => setShowAlert(true)}></IonIcon>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='ion-text-center'
        header={'CONFIRM DELETE'}
        message={'Deleting this Job will be <strong>Permanent!</strong>'}
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
            text: 'Confirm',
            id: 'accept',
            cssClass: 'success',
            handler: () => {
              handleClick('confirm');
            }
          },
        ]}
      />
    </>
  )
}

export default TrashButton;
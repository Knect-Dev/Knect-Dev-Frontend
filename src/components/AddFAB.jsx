import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

const AddFAB = () => {

  const handleClick = (e) => {
    alert("You've got mayo.");
  };
  
  return (
    <IonFab vertical="top" horizontal="end" slot="fixed">
      <IonFabButton onClick={handleClick} color="danger">
        <IonIcon icon={addOutline} />
      </IonFabButton>
    </IonFab>
  );
}

export default AddFAB;
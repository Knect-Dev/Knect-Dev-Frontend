import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

const AddFAB = ({ showForm, setShowForm }) => {

  const handleClick = (e) => {
    setShowForm(!showForm);
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
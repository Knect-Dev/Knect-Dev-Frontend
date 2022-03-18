import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

const AddFAB = ({ showForm, setShowForm, setSelectedJobId, setSelectedCompanyId }) => {

  const handleClick = (e) => {
    setSelectedCompanyId(null);
    setSelectedJobId(null);
    setShowForm(!showForm);
  };

  return (
    <IonFab vertical="top" horizontal="end" slot="fixed">
      <IonFabButton onClick={handleClick} color="success">
        <IonIcon icon={addOutline} />
      </IonFabButton>
    </IonFab>
  );
}

export default AddFAB;
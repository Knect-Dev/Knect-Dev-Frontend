import { IonFab, IonFabButton, IonIcon, IonPopover, IonContent, IonButton, IonItem, IonChip } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

const AddFAB = ({ showForm, setShowForm, setSelectedJobId, setSelectedCompanyId, setActiveForm }) => {

  const handleClick = (input) => {
    setActiveForm(input);
    setSelectedCompanyId(null);
    setSelectedJobId(null);
    setShowForm(true);
  };

  return (
    <IonFab vertical="top" horizontal="end" slot="fixed">
      <IonFabButton id="add-trigger" color="success">
        <IonPopover trigger="add-trigger">
          <IonContent>
            <IonItem onClick={() => handleClick('Job')} button={true} detail={true}><h3 style={{ margin: 'auto' }}>Add Job</h3></IonItem>
            <IonItem onClick={() => handleClick('Company')} button={true} detail={true}><h3 style={{ margin: 'auto' }}>Add Company</h3></IonItem>
            <IonItem onClick={() => handleClick('Contact')} button={true} detail={true}><h3 style={{ margin: 'auto' }}>Add Contact</h3></IonItem>
          </IonContent>
        </IonPopover>
        <IonIcon icon={addOutline} />
      </IonFabButton>
    </IonFab>
  );
}

export default AddFAB;
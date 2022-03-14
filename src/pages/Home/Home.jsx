import { IonContent, IonFab, IonFabButton, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../../components/ExploreContainer';
import { addOutline } from 'ionicons/icons';

import './Home.css';

const Home = () => {

  const handleClick = (e) => {
    alert("You've got mayo.");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* New content goes here */}
        {/* <ExploreContainer name="Home page" /> */}
         {/*-- fab placed to the top end --*/}
         <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton onClick={handleClick}>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>

    </IonPage>
  );
};

export default Home;

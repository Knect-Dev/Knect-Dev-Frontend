import { IonContent, IonPage} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import PageHeader from '../../components/PageHeader/PageHeader.jsx'


const Stats = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeader title={'Stats'} />
        <ExploreContainer name="Stats page" />
      </IonContent>
    </IonPage>
  );
};

export default Stats;

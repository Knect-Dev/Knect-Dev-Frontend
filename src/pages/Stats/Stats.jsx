import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import XYGrid from '../../components/XYGrid/XYGrid'
import './Stats.scss';


const exampleData = [
  { x: 1, y: 30 },
  { x: 2, y: 5 },
  { x: 3, y: 15 },
];

const Stats = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeader title={'Stats'} />
        <ExploreContainer name='Stats page' />
        <XYGrid data={exampleData} />
      </IonContent>
    </IonPage>
  );
};

export default Stats;

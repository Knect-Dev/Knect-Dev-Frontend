import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import XYGrid from '../../components/XYGrid/XYGrid';
import BarGraph from '../../components/BarGraph/BarGraph';
import StatsCard from '../../components/StatCard/StatCard';
import './stats.scss';

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
        <IonGrid>
          <IonRow>
          <IonCol/>
              <StatsCard title='Jobs'>
                <BarGraph />
              </StatsCard>
              <StatsCard title='Offers'>
                <XYGrid data={exampleData} />
              </StatsCard>
            <IonCol/>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Stats;

import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import XYGrid from '../../components/XYGrid/XYGrid';
import BarGraph from '../../components/BarGraph/BarGraph';
import StatsCard from '../../components/StatCard/StatCard';
import './stats.scss';

const exampleData = [
  { x: 1, y: 78000 },
  { x: 2, y: 80000 },
  { x: 3, y: 75000},
  { x: 4, y: 92000 },
  { x: 5, y: 90000 },
  { x: 6, y: 100000},
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
            <IonCol/>
          </IonRow>
          <IonRow>
          <IonCol/>
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

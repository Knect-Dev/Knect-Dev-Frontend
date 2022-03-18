import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import XYGrid from '../../components/XYGrid/XYGrid';
import BarGraph from '../../components/BarGraph/BarGraph';
import StatsCard from '../../components/StatCard/StatCard';
import './stats.scss';

const exampleData = [
  { x: 1, y: 78000, color: '2' },
  { x: 2, y: 80000, color: '3' },
  { x: 3, y: 75000, color: '5'},
  { x: 4, y: 92000, color: '7' },
  { x: 5, y: 90000, color: '8' },
  { x: 6, y: 100000, color: '9'},
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

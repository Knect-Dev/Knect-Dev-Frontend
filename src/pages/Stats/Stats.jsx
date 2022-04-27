import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import XYGrid from '../../components/XYGrid/XYGrid';
import BarGraph from '../../components/BarGraph/BarGraph';
import StatsCard from '../../components/StatCard/StatCard';
import './stats.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getJobs } from '../../store/jobs.js';
import { useEffect } from 'react';


// This can be modified to take in data like the XYGrid, or the XYGrid can be modified to work like this.
const jobData = [
  { x: 'Applied', y: 0, color: '#32a852' },
  { x: 'Phone Screen', y: 0, color: '#3261a8' },
  { x: 'Tech Interview', y: 0, color: '#a89c32' },
  { x: 'Onsite', y: 0, color: '#6332a8' },
  { x: 'Offer', y: 0, color: '#a83e32' },
];



const exampleData = [
  { x: 1, y: 78000, color: '2' },
  { x: 2, y: 80000, color: '3' },
  { x: 3, y: 75000, color: '5'},
  { x: 4, y: 92000, color: '7' },
  { x: 5, y: 90000, color: '8' },
  { x: 6, y: 100000, color: '9'},
];

const Stats = () => {

  const token = useSelector(state => state.user.user.token);
  // const [jobStateData, setJobStateData] = useState(jobData)
  const dispatch = useDispatch();
  const jobState = useSelector(state => state.jobs.jobs);
  
  useEffect(() => {
    dispatch(getJobs(token)); 
  },[])

  useEffect(() => {
    jobState.forEach(job => {
      switch (job.stage) {
        case 'Applied':
          jobData[0].y += 1;
          break;
        case 'Phone Screen':
          jobData[1].y += 1;
          break;
        case 'Tech Interview':
          jobData[2].y += 1;
          break;
        case 'Onsite':
          console.log("o")
          // console.log(jobData[3].y)
          jobData[3].y += 1;
          // console.log(jobData[3].y)
          break;
        case 'Offer':
          jobData[4].y += 1;
          break;
      
        default:
          break;
      }
    });
  }, [jobState])
  
  
 

  

  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeader title={'Stats'} />
        <IonGrid>
          <IonRow>
          <IonCol/>
              <StatsCard title='Jobs'>
                <BarGraph jobData={jobData} />
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

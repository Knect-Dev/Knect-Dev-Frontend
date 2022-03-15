import './infiniteJobs.scss';

import { 
  IonButton,
  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent, 
  IonItem,
  IonLabel,
  IonList,  
  // IonPage, 
  useIonViewWillEnter
} from '@ionic/react';
import { useState } from 'react';

const InfiniteJobs = () => {
  const [data, setData] = useState([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  
  const pushData = () => {
    const max = data.length + 20;
    const min = max - 20;
    const newData = [];
    for (let i = min; i < max; i++) {
      newData.push('Item' + i); // creates a generic item
    }
    
    setData([
      ...data,
      ...newData
    ]);
  }
  
  const loadData = (ev) => {
    setTimeout(() => {
      pushData();
      console.log('Loaded data');
      ev.target.complete();
      if (data.length === 1000) { // TODO set this to equal the total jobs 
        setInfiniteDisabled(true);
      }
    }, 500);
  }  
  
  useIonViewWillEnter(() => {
    pushData();
  });
  
  return (
    // <IonPage>
     
      <IonContent>
        
        <IonButton onClick={() => setInfiniteDisabled(!isInfiniteDisabled)} expand="block">
          Toggle Infinite Scroll
        </IonButton>
        
        <IonList class="ion-justify-content-center">
          {data.map((item, index) => {
            return (
              <IonItem key={index}>
                <IonLabel>{item}</IonLabel>
              </IonItem>
            )
          })}
        </IonList>
        
        <IonInfiniteScroll
          onIonInfinite={loadData}
          threshold="100px"
          disabled={isInfiniteDisabled}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    // </IonPage>
  );
};

export default InfiniteJobs;
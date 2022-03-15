import './jobsList.scss';

import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  useIonViewWillEnter
} from '@ionic/react';
import { useState } from 'react';

const JobsList = () => {
  const [data, setData] = useState([]); // use jobs data from redux state as initial state
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

  const pushData = () => { // This adds to current data set
    const newData = [];
    for (let i = 0; i < 20; i++) {
      newData.push('#' + (i + 1)); // creates an item
    }

    // const max = data.length + 20;
    // const min = max - 20;
    // const newData = [];
    // for (let i = min; i < max; i++) {
    //   newData.push('#' + (i+1)); // creates an item
    // }

    setData([
      ...data,
      ...newData
    ]);
  }

  const loadData = (ev) => { // gets called by `onIonInfinite`
    setTimeout(() => {
      pushData();
      console.log('Loaded data');
      ev.target.complete();
      if (data.length === 1000) { // TODO set this to equal to the total jobs 
        setInfiniteDisabled(true);
      }
    }, 500);
  }

  useIonViewWillEnter(() => { // initial rendering
    pushData(); // use INITIAL data
  });

  return (
    <IonContent>
      <IonList class="ion-margin-">
        {data.map((item, index) => {
          return (
            <IonItem class="ion-justify-content-center ion-margin-bottom" key={index}>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          )
        })}
      </IonList>

      <IonInfiniteScroll
        onIonInfinite={loadData} // 
        threshold="100px"
        disabled={isInfiniteDisabled}
      >
        <IonInfiniteScrollContent
          loadingSpinner="bubbles"
          loadingText="Loading more data..."
        ></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
};

export default JobsList;

const jobSchema = (sequelize, DataTypes) => sequelize.define('Jobs', {
  company: { type: DataTypes.STRING, required: true },
  title: { type: DataTypes.STRING, required: true },
  location: { type: DataTypes.STRING, defaltValue: '', required: false },
  appliedDate: { type: DataTypes.DATE, defaltValue: null, required: false },
  applied: { type: DataTypes.BOOLEAN, defaltValue: false, required: false },
  technologies: { type: DataTypes.ARRAY(DataTypes.STRING), required: false },
  openPositions: { type: DataTypes.INTEGER, defaultValue: null, required: false },
  interview: { type: DataTypes.BOOLEAN, defaultValue: false, required: false },
  contacts: { type: DataTypes.STRING, defaultValue: '', required: false },
  notes: { type: DataTypes.STRING, defaultValue: '', required: false },
});
import {
  IonContent, IonMenu, IonList, IonItem, IonHeader, IonTitle, IonToolbar, IonButton
} from '@ionic/react';

const Filter = () => {

  // let jobFilters =
  // {
  //   stages: ['Not applied', 'Phone screen', 'Code Challenge', 'Onsite'],
  // };

  return (
    <IonMenu side="end" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar translucent>
          <IonTitle>Jobs Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Add a filter menu here  */}

        <IonList>
          {/* {jobFilters.stages.map((stage, key) => {
            return (
              <IonItem onClick={() => ''} key={key}>{stage}</IonItem>
            )
          })} */}
          <IonItem><IonButton>Reset</IonButton></IonItem>
          <IonItem>Company</IonItem>
          <IonItem>Title</IonItem>
          <IonItem>Location</IonItem>
          <IonItem>Active</IonItem>
          <IonItem>Stage</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Filter;


// {
//   Object.keys(jobFilters).map((filter, key) => {
//     return (
//       <IonAccordion value={filter}>
//         <IonItem slot="header">
//           <IonLabel>{filter}</IonLabel>
//         </IonItem>
//         <>
//           {jobFilters.stages.map((subFilter, key) => {
//             return (
//               <IonList slot="content">
//                 <IonItem>
//                   <IonLabel>{subFilter}</IonLabel>
//                 </IonItem>
//                 <IonItem>
//                   <IonLabel>{subFilter}</IonLabel>
//                 </IonItem>
//                 <IonItem>
//                   <IonLabel>{subFilter}</IonLabel>
//                 </IonItem>
//               </IonList>)
//           })}
//         </>
//       </IonAccordion>
//     )
//   })
// }
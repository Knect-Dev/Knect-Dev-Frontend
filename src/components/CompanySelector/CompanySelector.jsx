import { IonSelect, IonSelectOption, IonCol, IonLabel, IonInput, IonSearchbar, IonList, IonItemOption } from '@ionic/react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { When } from 'react-if';
import fuzzysort from 'fuzzysort';

const CompanySelector = ({ currentCompany, setActiveForm, handleCompanyChange, lock }) => {
  const [companySearch, setCompanySearch] = useState('');
  const companies = useSelector(state => state.companies.companies);
  let fuzzyCompanies;

  function handleInput(event) {
    setCompanySearch(event.target.value.toLowerCase());
    fuzzyCompanies = fuzzysort.go(companySearch, companies, {key: 'name'});
    
    console.log('COMPANY search event', event.target.value);
    console.log('fuzzy companies', fuzzyCompanies);
  };

  return (
    <>
      <When condition={lock}>
        <IonCol size='6' onClick={() => setActiveForm('Company')} style={{ cursor: 'pointer' }}>Company: <h5 style={{ display: 'inline' }}>{currentCompany.company}</h5></IonCol>
        <IonCol size='6'>Career Page</IonCol>
      </When>

      <When condition={!lock}>
        <IonCol size='6'>
          <IonSearchbar placeholder='search companies' onIonChange={handleInput}></IonSearchbar>
          <IonList
            // placeholder={currentCompany.company}
            // multiple={false}
            // cancelText="Cancel"
            // okText="Okay"
            // onIonChange={e => handleCompanyChange(e.detail.value)}
            name='CompanyId'>
              {fuzzyCompanies?.map((company, idx) => (
                <IonItemOption
                  key={company + idx} 
                  value={{ id: company.id, company: company.name }}>
                  {company.name}
                </IonItemOption>
              ))};
          </IonList>
        </IonCol>
        <IonCol size='6'>
          <IonLabel>Job listing here?</IonLabel>
          <IonInput></IonInput>
        </IonCol>
      </When>
    </>
  )
}
//       <When condition={!lock}>
//         <IonCol size='6'>
//           <IonInput placeholder='search companies'>

//           </IonInput>
//           <IonSelect placeholder={currentCompany.company} multiple={false} cancelText="Cancel" okText="Okay" onIonChange={e => handleCompanyChange(e.detail.value)} name='CompanyId'>
//             {companies.map((company, idx) => <IonSelectOption key={company + idx} value={{ id: company.id, company: company.name }}>{company.name}</IonSelectOption>)};
//           </IonSelect>
//         </IonCol>
//         <IonCol size='6'>
//           <IonLabel></IonLabel>
//           <IonInput></IonInput>
//         </IonCol>
//       </When>
//     </>
//   )
// }

export default CompanySelector;
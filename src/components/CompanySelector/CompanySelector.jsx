import { IonSelect, IonSelectOption, IonCol, IonLabel, IonInput, IonSearchbar, IonList, IonItemOption } from '@ionic/react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { When } from 'react-if';
import fuzzysort from 'fuzzysort';

const CompanySelector = ({ currentCompany, setActiveForm, handleCompanyChange, lock }) => {
  const [companySearch, setCompanySearch] = useState('');
  const companies = useSelector(state => state.companies.companies);
  const [displayCompanies, setDisplayComanies] = useState(companies);

  function handleInput(event) {
    setCompanySearch(event.target.value);
  };

  useEffect(() => {
    let fuzziedCompanies = fuzzysort.go(companySearch, companies, { keys: ['name'] })
    if (fuzziedCompanies.length > 0) setDisplayComanies(fuzziedCompanies);
    else if (fuzziedCompanies.length === 0) setDisplayComanies(companies);
  }, [companySearch]);

  return (
    <>
      <When condition={lock}>
        <IonCol size='6' onClick={() => setActiveForm('Company')} style={{ cursor: 'pointer' }}>Company: <h5 style={{ display: 'inline' }}>{currentCompany.company}</h5></IonCol>
        <IonCol size='6'>Career Page</IonCol>
      </When>

      <When condition={!lock}>
        <IonCol size='6'>
          <IonSearchbar placeholder='search companies' onIonChange={handleInput}></IonSearchbar>
          <IonSelect
            placeholder={currentCompany.company}
            multiple={false}
            cancelText="Cancel"
            okText="Okay"
            onIonChange={e => handleCompanyChange(e.detail.value)}
            name='CompanyId'>
            {displayCompanies.map((company, idx) => {
              return (
                <IonSelectOption
                  key={company + idx} 
                  value={company.obj ? { id: company.obj.id, company: company.obj.name } : { id: company.id, company: company.name }}>
                  {company.name || company.obj.name}
                </IonSelectOption>)
            })};
          </IonSelect>
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
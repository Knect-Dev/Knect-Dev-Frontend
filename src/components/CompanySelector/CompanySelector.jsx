import { IonSelect, IonSelectOption, IonCol, IonChip, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { When } from 'react-if';
import fuzzysort from 'fuzzysort';

import './companySelector.scss';

const CompanySelector = ({ currentCompany, setActiveForm, changeCompany, setLock, setDisable, lock, setRedirect }) => {
  const [companySearch, setCompanySearch] = useState('');
  const companies = useSelector(state => state.companies.companies);
  const [displayCompanies, setDisplayComanies] = useState(companies);
  const [selectedCompany, setSelectedCompany] = useState(null);

  function handleInput(event) {
    setCompanySearch(event.target.value);
  };

  useEffect(() => {
    let fuzziedCompanies = fuzzysort.go(companySearch, companies, { keys: ['name'] })
    if (fuzziedCompanies.length > 0) setDisplayComanies(fuzziedCompanies);
    else if (fuzziedCompanies.length === 0 && companySearch.length > 0) setDisplayComanies([]);
    else if (fuzziedCompanies.length === 0) setDisplayComanies(companies);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companySearch]);

  function handleChange(value) {
    console.log('called');
    console.log(value);
    setSelectedCompany(value.company);
    changeCompany(value);
  }

  function handleClick() {
    setRedirect(true);
    setActiveForm('Company');
    setLock(false);
    setDisable(true);
  };

  return (
    <>
      <IonCol size='6'>
        <IonLabel>
          Select Company:
        </IonLabel>
        <IonSearchbar placeholder='Search Companies' onIonChange={handleInput}></IonSearchbar>
        <When condition={displayCompanies.length > 0}>
          {/* <IonSelect
            placeholder={selectedCompany || 'Select Company'}
            multiple={false}
            cancelText="Cancel"
            okText="Okay"
            
            name='CompanyId'> */}
          {companySearch &&
            <IonList className='custom-list'>
              {displayCompanies.map((company, idx) => {
                return (
                  <IonItem
                    onClick={e => handleChange(e)}
                    className='custom-item'
                    key={company + idx}
                    value={company.obj ? { id: company.obj.id, company: company.obj.name } : { id: company.id, company: company.name }}>
                    {company.name || company.obj.name}
                  </IonItem>)
              })}
            </IonList>}
          {/* </IonSelect> */}
        </When>

        <When condition={displayCompanies.length === 0}>
          <IonChip
            onClick={handleClick}
            style={{ position: 'absolute', display: 'block', textAlign: 'center', fontSize: '1.2em', zIndex: '100', right: '.3rem' }}
            color="secondary">CLICK to ADD</IonChip>
        </When>

      </IonCol>
    </>
  )
}

export default CompanySelector;
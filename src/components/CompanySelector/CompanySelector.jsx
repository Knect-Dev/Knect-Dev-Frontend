import { IonCol, IonChip, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import fuzzysort from 'fuzzysort';

import './companySelector.scss';

const CompanySelector = ({ currentCompany, setActiveForm, changeCompany, setLock, setDisable, setRedirect }) => {
  const companies = useSelector(state => state.companies.companies);
  const [companySearch, setCompanySearch] = useState('');
  const [displayCompanies, setDisplayComanies] = useState(companies);

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
    changeCompany(value);
    setCompanySearch('');
  };

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
        <IonSearchbar style={{ height: '4.5rem' }} placeholder={currentCompany.company || `Search Companies`} onIonChange={handleInput} value={companySearch}></IonSearchbar>
          {companySearch && 
            <IonList className='custom-company-list' style={{ minHeight: 'auto', maxHeight: '10rem', overflowY: displayCompanies.length > 3 ? 'scroll' : null }}>
              {displayCompanies.map((company, idx) => {
                return (
                  <IonItem
                    onClick={e => handleChange(e.target.name)}
                    button={true}
                    className='custom-item'
                    key={company + idx}
                    name={company.obj ? { id: company.obj.id, company: company.obj.name } : { id: company.id, company: company.name }}>
                    {company.name || company.obj.name}
                  </IonItem>)
              })}
            <IonItem>
              <IonChip
                onClick={handleClick}
                style={{ position: 'absolute', display: 'inline-block', fontSize: '1.2em', zIndex: '100', right: '.3rem' }}
                color="secondary">
                CLICK to ADD
              </IonChip>
            </IonItem>
          </IonList>}
      </IonCol>
    </>
  )
}

export default CompanySelector;
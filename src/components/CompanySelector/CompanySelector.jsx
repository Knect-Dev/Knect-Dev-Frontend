import { IonSelect, IonSelectOption, IonCol, IonChip, IonSearchbar } from '@ionic/react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { When } from 'react-if';
import fuzzysort from 'fuzzysort';

const CompanySelector = ({ currentCompany, setActiveForm, changeCompany, setLock, setDisable, lock, disable }) => {
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
    setSelectedCompany(value.company);
    changeCompany(value);
  }

  function handleClick() {
    setActiveForm('Company');
    setLock(false);
    setDisable(true);
  };

  return (
    <>
      <When condition={lock}>
        <IonCol size='6' onClick={() => setActiveForm('Company')} style={{ cursor: 'pointer' }}>Company: <h5 style={{ display: 'inline' }}>{currentCompany.company}</h5></IonCol>
      </When>

      <When condition={!lock}>
        <IonCol size='6'>
          <IonSearchbar placeholder='Search Companies' onIonChange={handleInput}></IonSearchbar>
          <When condition={displayCompanies.length > 0}>
            <IonSelect
              placeholder={selectedCompany || 'Select Company'}
              multiple={false}
              cancelText="Cancel"
              okText="Okay"
              onIonChange={e => handleChange(e.detail.value)}
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
          </When>

          <When condition={displayCompanies.length === 0}>
            <IonChip
              onClick={handleClick}
              style={{ display: 'block', width: '6rem', textAlign: 'center', fontSize: '1.2em' }}
              color="secondary">CLICK to ADD</IonChip>
          </When>

        </IonCol>
      </When>
    </>
  )
}

export default CompanySelector;
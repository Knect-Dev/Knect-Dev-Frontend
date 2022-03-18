import { IonSelect, IonSelectOption, IonCol, IonLabel, IonInput } from '@ionic/react';
import { useSelector } from 'react-redux';
import { When } from 'react-if';

const CompanySelector = ({ currentCompany, setActiveForm, handleCompanyChange, lock }) => {
  const companies = useSelector(state => state.companies.companies);

  return (
    <>
      <When condition={lock}>
        <IonCol size='6' onClick={() => setActiveForm('Company')} style={{ cursor: 'pointer' }}>Company: <h5 style={{ display: 'inline' }}>{currentCompany.company}</h5></IonCol>
        <IonCol size='6'>Career Page</IonCol>
      </When>

      <When condition={!lock}>
        <IonCol size='6'>
          <IonSelect placeholder={currentCompany.company} multiple={false} cancelText="Cancel" okText="Okay" onIonChange={e => handleCompanyChange(e.detail.value)} name='CompanyId'>
            {companies.map((company, idx) => <IonSelectOption key={company + idx} value={{ id: company.id, company: company.name }}>{company.name}</IonSelectOption>)};
          </IonSelect>
        </IonCol>
        <IonCol size='6'>
          <IonLabel></IonLabel>
          <IonInput></IonInput>
        </IonCol>
      </When>
    </>
  )
}

export default CompanySelector;
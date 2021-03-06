import { IonLabel, IonContent, IonIcon, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';

import { If, Then, When, Else } from 'react-if';

import { closeOutline, openOutline } from 'ionicons/icons';

import KnectIconLight from '../../../resources/Knect.dev.png';
import KnectIconDark from '../../../resources/knect_dev_white.png';

const CompanyForm = ({
  theme,
  lock,
  handleCompanyChange,
  handleCloseForm,
  companyValues,
  currentCompany
}) => {
  return (
    <>
      <IonContent>
        <IonGrid>
          <IonRow class='ion-justify-content-between ion-align-items-center' style={{ backgroundColor: 'rgb(150, 150, 150, .50)' }}>
            <img src={theme ? KnectIconDark : KnectIconLight} alt='Knect Dev Small Icon' style={{ height: '2rem', paddingLeft: '.5rem' }} />
            <If condition={lock}>
              <Then>
                <IonText class='status-item ion-padding-start'><h3>Company Information</h3></IonText>
              </Then>
              <Else>
                <IonText class='status-item ion-padding-start'><h3>{companyValues?.name || 'New Company'}</h3></IonText>
              </Else>
            </If>
            <IonIcon class="header-icon" icon={closeOutline} onClick={handleCloseForm}></IonIcon> 
          </IonRow>

          <When condition={lock}>

            <IonRow class="ion-padding-bottom">
              <IonCol size='12' class='ion-text-center'>
                <h3 style={{ display: 'inline' }}>&nbsp;{companyValues?.name}&nbsp;</h3>
                {companyValues?.careersUrl && <a
                  href={companyValues?.careersUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}>
                  <IonIcon icon={openOutline}></IonIcon>
                </a>}
              </IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              <IonCol size='6'>Leader: <h5 style={{ display: 'inline' }}>{companyValues?.leader}</h5></IonCol>
              <IonCol size='6'>HQ: <h5 style={{ display: 'inline' }}>{companyValues?.hq}</h5></IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              <IonCol>Size: <h5 style={{ display: 'inline' }}>{companyValues?.size}</h5></IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              <IonCol>Product: <h5 style={{ display: 'inline' }}>{companyValues?.product}</h5></IonCol>
            </IonRow>

            <IonRow class="ion-padding-bottom">
              <IonCol>Clients: <h5 style={{ display: 'inline' }}>{companyValues?.clients}</h5></IonCol>
            </IonRow>

            <IonRow>
              <IonCol>Mission: <h5 style={{ display: 'inline' }}>{companyValues?.mission}</h5></IonCol>
            </IonRow>

          </When>

          <When condition={!lock}>
            <IonRow>
              <IonCol size='6'>
                <When condition={currentCompany}>
                  Company: <h5 style={{ display: 'inline' }}>{companyValues?.name}</h5>
                </When>
                <When condition={!currentCompany}>
                  <IonLabel>Company: </IonLabel>
                  <IonTextarea class='custom-input' value={companyValues?.name} onIonChange={e => handleCompanyChange(e)} placeholder='madeup inc.' name='name' clearInput></IonTextarea>
                </When>
              </IonCol>
              <IonCol size='6'>
                <IonLabel>Career Page: </IonLabel>
                <IonTextarea class='custom-input' value={companyValues?.careersUrl} onIonChange={e => handleCompanyChange(e)} placeholder='https://www.madeupinc.com/careers' name='careersUrl' clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size='4'>
                <IonLabel>Leader: </IonLabel>
                <IonInput class='custom-input' value={companyValues?.leader} onIonChange={e => handleCompanyChange(e)} placeholder='Jody Smith' name='leader' auto-grow clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>HQ: </IonLabel>
                <IonInput class='custom-input' value={companyValues?.hq} onIonChange={e => handleCompanyChange(e)} placeholder='San Fran, CA' name='hq' clearInput></IonInput>
              </IonCol>

              <IonCol size='4'>
                <IonLabel>Size: </IonLabel>
                <IonInput class='custom-input' value={companyValues?.size} type='number' step='1000' min='0' onIonChange={e => handleCompanyChange(e)} placeholder='1000' name='size' clearInput></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Product: </IonLabel>
                <IonTextarea class='custom-input' value={companyValues?.product} onIonChange={e => handleCompanyChange(e)} name='product' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Clients: </IonLabel>
                <IonTextarea class='custom-input' value={companyValues?.clients} onIonChange={e => handleCompanyChange(e)} name='clients' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel>Mission: </IonLabel>
                <IonTextarea class='custom-input' value={companyValues?.mission} onIonChange={e => handleCompanyChange(e)} name='mission' auto-grow clearInput></IonTextarea>
              </IonCol>
            </IonRow>

          </When>
        </IonGrid>
      </IonContent>
    </>
  )
}

export default CompanyForm;
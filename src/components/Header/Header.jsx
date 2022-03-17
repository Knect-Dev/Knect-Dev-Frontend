import { useState } from 'react';
import { sunnyOutline, moonOutline, logOutOutline} from 'ionicons/icons';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonMenuButton,
  IonButtons,
  IonIcon
} from '@ionic/react';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch, clearSearch } from '../../store/search.js';

const Header = () => {

  const dispatch = useDispatch();


  const [searchText, setSearchText] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);

  const updateSearchText = (string) => dispatch(setSearch(string))

  const themeToggleHandler = () => {
    document.body.classList.toggle('dark');
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  const { currentPage } = useSelector(state => state.currentPage);
  console.log('currentPage: ', currentPage);

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'> 
        <IonIcon id='logout-button' icon={logOutOutline}></IonIcon>
        <IonTitle id='title'>Knect.Dev</IonTitle>
        {darkTheme ?
            <IonIcon class='dark-icon' icon={sunnyOutline} onClick={themeToggleHandler}></IonIcon>
            :
            <IonIcon class='dark-icon' icon={moonOutline} onClick={themeToggleHandler}></IonIcon>}
        </IonButtons>
        {currentPage === '/home' ?
          <IonButtons slot='end'>
            <IonSearchbar
              id='search-bar'
              value={searchText}
              onIonChange={(e) => updateSearchText(e.detail.value)} // test this
            ></IonSearchbar>
            Filters
            <IonMenuButton auto-hide='false'></IonMenuButton>
          </IonButtons>
          : null
        }
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

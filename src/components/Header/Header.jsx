import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonMenuButton,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/react';
import { sunnyOutline, moonOutline } from 'ionicons/icons';
import { accessibilityOutline } from 'ionicons/icons';
// import { useLocation } from 'react-router';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch, clearSearch } from '../../store/search.js';

const Header = () => {

  const dispatch = useDispatch();
  // const searchStr = useSelector(state => state.search);


  const [searchText, setSearchText] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  // console.log('searchText', searchText);

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
          <IonButton>
            <IonIcon slot='icon-only' icon={accessibilityOutline}></IonIcon>
          </IonButton>
          {darkTheme ?
            <IonIcon icon={sunnyOutline} onClick={themeToggleHandler}></IonIcon>
            :
            <IonIcon icon={moonOutline} onClick={themeToggleHandler}></IonIcon>}
        </IonButtons>
        <IonTitle>Knect.Dev</IonTitle>
        {currentPage === '/home' ?
          <IonButtons slot='end'>
            <IonSearchbar
              id='search-bar'
              value={searchText}
              onIonChange={(e) => updateSearchText(e.detail.value)} // test this
            ></IonSearchbar>
            <IonButton onClick={() => dispatch(setSearch)}>
              Search
            </IonButton>
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

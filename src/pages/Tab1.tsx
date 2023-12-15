import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonCheckbox, IonToolbar, IonSearchbar,IonLabel,  IonButton, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSearch = (e: CustomEvent) => {
    const text = (e.detail.value as string).trim();
    setSearchText(text);
  };

  const handleEmailChange = (e: CustomEvent) => {
    const text = e.detail.value as string;
    setEmail(text);
  };

  const handlePasswordChange = (e: CustomEvent) => {
    const text = e.detail.value as string;
    setPassword(text);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  

  return (
    <IonPage>
      <IonHeader  className="header" >
        <IonToolbar class='header' className="header">
          <IonSearchbar value={searchText} onIonChange={handleSearch}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Annisa</IonTitle>
          </IonToolbar>
        </IonHeader>
    
        <h1>MASUK</h1>
       
      <div className="signInContainer">
     
        <IonLabel className="signInLabel">Nama Pengguna atau Email</IonLabel>
        <IonInput 
          value={email}
          onIonChange={handleEmailChange}
          className="signInInput"
          clearInput
        ></IonInput>
        
        <IonLabel className="signInLabel">Password</IonLabel>

        <IonInput
          value={password}
          type="password"
          onIonChange={handlePasswordChange}
          className="signInInput"
          clearInput
        ></IonInput>
         <div className="rememberMeContainer">
            <IonCheckbox 
              checked={rememberMe}
              onIonChange={handleRememberMeChange}
            />
            <span>Ingat Saya</span>
          </div>
        <IonButton >Masuk</IonButton>
        <div className="forgotPassword">Lupa Kata Sandi</div>
      </div>
      <br></br>
      <div className="bpa" > Belum Punya Akun? <span className="forgotPassword">Klik Disini</span></div>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;

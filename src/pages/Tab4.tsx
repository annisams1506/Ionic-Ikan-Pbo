import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonGrid,IonRow,IonCol, IonCard,IonCardHeader, IonCardContent, IonImg, IonItem, IonToolbar, IonButton, IonSearchbar, IonIcon, IonLabel } from '@ionic/react';
import { fastFood } from 'ionicons/icons';
import {fish} from 'ionicons/icons';
import { pizza } from 'ionicons/icons';
import { constructOutline } from 'ionicons/icons';
import { ellipse } from 'ionicons/icons';
import { ellipseOutline } from 'ionicons/icons';
import dori from './dori.jpg';
import tuna from './tuna.jpg';


import latar from './image3.jpg';

const Tab4: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: CustomEvent) => {
    const text = (e.detail.value as string).trim();
    setSearchText(text);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar value={searchText} onIonChange={handleSearch}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src={latar} alt="Slide 1" style={{ width: '500px', height: '250px' }} />
        <br />
        <div>
          <h1 style={{color:'blue'}}>Menu</h1>

        
          <IonIcon style={{width:'100px', height:'50px'}}icon={fish} aria-hidden="true"></IonIcon>
          <IonIcon style={{width:'100px', height:'50px'}}icon={fastFood} aria-hidden="true"></IonIcon>
          <IonIcon style={{width:'100px', height:'50px'}}icon={pizza} aria-hidden="true"></IonIcon>
          <IonIcon style={{width:'100px', height:'50px'}}icon={constructOutline} aria-hidden="true"></IonIcon>
        <IonLabel>Ikan Segar</IonLabel> &nbsp; &nbsp; &nbsp; &nbsp;<IonLabel>Seafood</IonLabel> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<IonLabel>Fillet Ikan</IonLabel>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<IonLabel>Olahan Ikan</IonLabel>
         
        </div><br /> <br />
        <div> 
            <h1 style={{color: 'blue'}}>Promo Minggu Ini</h1>
           &nbsp;  <img src="https://via.placeholder.com/120" alt="Slide 1" /> &nbsp;
            <img src="https://via.placeholder.com/120" alt="Slide 1" /> &nbsp;
            <img src="https://via.placeholder.com/120" alt="Slide 1" /> &nbsp;<br />
            <br />
          &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
           <IonIcon icon={ellipse} aria-hidden="true"></IonIcon>
           <IonIcon icon={ellipseOutline} aria-hidden="true"></IonIcon>
           <IonIcon icon={ellipseOutline} aria-hidden="true"></IonIcon>
           <IonIcon icon={ellipseOutline} aria-hidden="true"></IonIcon>
           <IonIcon icon={ellipseOutline} aria-hidden="true"></IonIcon>
           <IonIcon icon={ellipseOutline} aria-hidden="true"></IonIcon>

        </div>

        <div>
            <h1 style={{color:'blue'}}>Produk Terlaris</h1>
           
            <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                <IonImg src={dori} style={{ width: '50%', height: '100%', margin: 'auto' }} />
                  <IonItem>
                    <IonLabel>Fillet Ikan</IonLabel>
                    
                  </IonItem>
                </IonCardHeader>
                <IonCardContent>
                  <h2 style={{ color: 'black', fontWeight: 'bold' }}>Fillet dorry (1000gr).</h2>
                  <span style={{ color: 'blue', fontWeight: 'bold' }}>Rp.60.000</span>
                  <br /> <br />
                  <IonButton>Beli Sekarang</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  
                <IonImg src={tuna} style={{ width: '50%', height: '100%', margin: 'auto' }} />
                  <IonItem>
                    <IonLabel>Fillet Ikan</IonLabel>
                  </IonItem>
                </IonCardHeader>
                <IonCardContent>
                <h2 style={{ color: 'black', fontWeight: 'bold' }}>Fillet Tuna (1000gr).</h2>
                  <span style={{ color: 'blue', fontWeight: 'bold' }}>Rp.70.000</span>
                  <br /><br />
                  <IonButton>Beli Sekarang</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;

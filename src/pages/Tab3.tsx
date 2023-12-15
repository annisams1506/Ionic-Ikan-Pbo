import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonImg, IonSearchbar, IonToolbar, IonButton, IonFooter, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import dori from './dori.jpg';
import  tuna from './tuna.jpg';

const Tab3: React.FC = () => {
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
      <IonContent>
        <IonCard  >
        <div>
          <h3 style={{fontSize:'14pt'}}>Ikan Segar &nbsp; &nbsp; <span>Seafood</span> &nbsp; &nbsp; <span style={{color:'black'}}> Fillet Ikan</span> &nbsp; &nbsp; <span>Olahan Ikan</span></h3> &nbsp;
        </div>
        </IonCard>
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
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab3;

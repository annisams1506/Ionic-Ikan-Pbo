import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonSearchbar, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';
import './Tab2.css';
import siomayImage from './siomay.jpg'; 

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: CustomEvent) => {
    const text = (e.detail.value as string).trim();
    setSearchText(text);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resep Siomay Ikan Tenggiri</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar value={searchText} onIonChange={handleSearch}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>   
          <IonCardHeader>
          <IonImg src={siomayImage} style={{ width: '30%', height: '100%', margin: 'auto' }} />
      
            <IonCardTitle>Siomay Ikan Tenggiri</IonCardTitle>
            
            <IonCardSubtitle>
              Bahan-bahan 350 gr ikan tenggiri yang sudah dihaluskan 3 sdm tepung kanji 1 sdt bawang putih halus 2 batang daun bawang iris 2 butir putih
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <br />
            <br />
            <IonButton>READ MORE</IonButton>
            <br />
            <br />
            5 Desember 2019. Tidak Ada Komentar
          </IonCardContent>
        </IonCard>
<br></br>
        <IonCard>   
          <IonCardHeader>
          
            <IonCardTitle>Sate Cumi Bakar Original</IonCardTitle>
            
            <IonCardSubtitle>
            Bersihkan cumi-cumi, lepaskan kepala dari badannya, cuci bersih lalu olesi dengan campuran garam dan air jeruk nipis. Sisihkan selama 15 menit.
             </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <br />
            <br />
            <IonButton>READ MORE</IonButton>
            <br />
            <br />
            1 Desember 2019. Tidak Ada Komentar
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

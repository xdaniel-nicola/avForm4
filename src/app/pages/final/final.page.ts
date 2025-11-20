import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  arrowBack, 
  shieldOutline, 
  heartOutline, 
  peopleOutline, 
  globeOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonBackButton,
    IonGrid,
    IonRow,
    IonCol,
    IonFooter
  ],
})
export class FinalPage {
  finalImage = 'https://images.unsplash.com/photo-1762337680853-021ae83289e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzYWZldHklMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNTEyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080';

  constructor(private router: Router) {
    addIcons({ 
      arrowBack, 
      shieldOutline, 
      heartOutline, 
      peopleOutline, 
      globeOutline 
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}

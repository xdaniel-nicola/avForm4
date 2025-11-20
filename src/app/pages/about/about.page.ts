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
  atOutline, 
  peopleOutline, 
  accessibilityOutline, 
  lockClosedOutline, 
  bookOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
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
export class AboutPage {

  constructor(private router: Router) {
    addIcons({ 
      arrowBack, 
      shieldOutline, 
      atOutline, 
      peopleOutline, 
      accessibilityOutline, 
      lockClosedOutline, 
      bookOutline 
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToContent() {
    this.router.navigate(['/content']);
  }
}

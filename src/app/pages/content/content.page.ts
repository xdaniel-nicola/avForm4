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
  IonBackButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  arrowBack, 
  shieldOutline, 
  keyOutline, 
  mailOutline, 
  phonePortraitOutline, 
  wifiOutline, 
  personRemoveOutline,
  checkmarkCircleOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
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
    IonBackButton
  ],
})
export class ContentPage {
  contentImage = 'https://images.unsplash.com/photo-1758983308742-f4ba1f8c8cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJpdmFjeSUyMGxvY2t8ZW58MXx8fHwxNzYzNTEyMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080';

  constructor(private router: Router) {
    addIcons({ 
      arrowBack, 
      shieldOutline, 
      keyOutline, 
      mailOutline, 
      phonePortraitOutline, 
      wifiOutline, 
      personRemoveOutline,
      checkmarkCircleOutline 
    });
  }

  navigateToQuiz() {
    this.router.navigate(['/quiz']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

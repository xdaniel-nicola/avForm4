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
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonModal
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { shieldOutline, lockClosedOutline, eyeOutline, warningOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
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
    IonGrid,
    IonRow,
    IonCol,
    IonFooter,
    IonModal
  ],
})
export class HomePage {
  heroImage = 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NjM0ODAxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080';

  showModal = false;
  openPreview() {
    this.showModal = true;
  }
  closePreview() {
    this.showModal = false;
  }

  constructor(private router: Router) {
    addIcons({ shieldOutline, lockClosedOutline, eyeOutline, warningOutline });
  }

  navigateToContent() {
    this.router.navigate(['/content']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}

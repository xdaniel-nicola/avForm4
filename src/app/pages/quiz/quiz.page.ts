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
  IonProgressBar
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  arrowBack, 
  checkmarkCircleOutline, 
  closeCircleOutline, 
  trophyOutline,
  refreshOutline
} from 'ionicons/icons';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
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
    IonProgressBar
  ],
})
export class QuizPage {
  currentQuestion = 0;
  selectedAnswer: number | null = null;
  showResult = false;
  score = 0;

  quizQuestions: Question[] = [
    {
      id: 1,
      question: 'Qual é a característica de uma senha forte?',
      options: [
        'Nome + data de nascimento',
        'Pelo menos 12 caracteres com letras, números e símbolos',
        'Nome do pet ou time favorito',
        'Sequência numérica como 123456'
      ],
      correctAnswer: 1,
      explanation: 'Uma senha forte deve ter pelo menos 12 caracteres combinando letras maiúsculas, minúsculas, números e símbolos especiais.'
    },
    {
      id: 2,
      question: 'O que é phishing?',
      options: [
        'Um tipo de vírus de computador',
        'Um golpe que tenta roubar informações se passando por empresas legítimas',
        'Uma rede social',
        'Um programa de segurança'
      ],
      correctAnswer: 1,
      explanation: 'Phishing é uma técnica de golpe onde criminosos se passam por empresas ou pessoas confiáveis para roubar dados pessoais e senhas.'
    },
    {
      id: 3,
      question: 'É seguro usar a mesma senha em vários sites?',
      options: [
        'Sim, facilita memorizar',
        'Sim, se for uma senha forte',
        'Não, se um site for comprometido todos ficam vulneráveis',
        'Não importa, senhas não fazem diferença'
      ],
      correctAnswer: 2,
      explanation: 'Nunca use a mesma senha em diferentes sites. Se um site for hackeado, todos os outros que usam a mesma senha também ficam em risco.'
    },
    {
      id: 4,
      question: 'O que você deve fazer ao usar Wi-Fi público?',
      options: [
        'Acessar banco e fazer compras normalmente',
        'Evitar acessar informações sensíveis ou usar VPN',
        'Compartilhar seus arquivos com outros usuários',
        'Desligar o antivírus para ter mais velocidade'
      ],
      correctAnswer: 1,
      explanation: 'Em Wi-Fi público, evite acessar bancos ou informações sensíveis. Use uma VPN para criptografar sua conexão se necessário.'
    },
    {
      id: 5,
      question: 'O que é autenticação em dois fatores (2FA)?',
      options: [
        'Usar duas senhas diferentes',
        'Uma camada extra de segurança além da senha',
        'Fazer login duas vezes',
        'Um tipo de vírus'
      ],
      correctAnswer: 1,
      explanation: 'A autenticação em dois fatores adiciona uma camada extra de segurança, geralmente um código enviado para seu celular, além da senha.'
    },
    {
      id: 6,
      question: 'Por que é importante manter o software atualizado?',
      options: [
        'Para ter novos recursos divertidos',
        'Para corrigir vulnerabilidades de segurança',
        'Não é importante',
        'Apenas para ocupar espaço no disco'
      ],
      correctAnswer: 1,
      explanation: 'Atualizações corrigem falhas de segurança que podem ser exploradas por hackers. Sempre mantenha seus dispositivos atualizados.'
    },
    {
      id: 7,
      question: 'Um banco pede sua senha por e-mail. O que fazer?',
      options: [
        'Enviar imediatamente',
        'Ligar para confirmar primeiro',
        'Nunca enviar, é golpe! Bancos nunca pedem senha por e-mail',
        'Enviar apenas metade da senha'
      ],
      correctAnswer: 2,
      explanation: 'Bancos NUNCA pedem senhas por e-mail, telefone ou SMS. Isso é sempre um golpe de phishing. Denuncie e delete a mensagem.'
    },
    {
      id: 8,
      question: 'O que você NÃO deve compartilhar publicamente nas redes sociais?',
      options: [
        'Fotos de paisagens',
        'Sua localização em tempo real e dados pessoais',
        'Receitas de culinária',
        'Citações inspiradoras'
      ],
      correctAnswer: 1,
      explanation: 'Evite compartilhar sua localização em tempo real, endereço, telefone, dados bancários e outras informações sensíveis nas redes sociais.'
    }
  ];

  constructor(private router: Router) {
    addIcons({ 
      arrowBack, 
      checkmarkCircleOutline, 
      closeCircleOutline, 
      trophyOutline,
      refreshOutline 
    });
  }

  get progress(): number {
    return (this.currentQuestion + 1) / this.quizQuestions.length;
  }

  get currentQ(): Question {
    return this.quizQuestions[this.currentQuestion];
  }

  handleAnswer(answerIndex: number) {
    if (this.selectedAnswer !== null) return;

    this.selectedAnswer = answerIndex;
    
    if (answerIndex === this.currentQ.correctAnswer) {
      this.score++;
    }
  }

  handleNext() {
    if (this.currentQuestion < this.quizQuestions.length - 1) {
      this.currentQuestion++;
      this.selectedAnswer = null;
    } else {
      this.showResult = true;
    }
  }

  restartQuiz() {
    this.currentQuestion = 0;
    this.selectedAnswer = null;
    this.showResult = false;
    this.score = 0;
  }

  getScoreMessage(): string {
    const percentage = (this.score / this.quizQuestions.length) * 100;
    if (percentage === 100) {
      return 'Perfeito! Você é um expert em segurança digital! 🎉';
    } else if (percentage >= 75) {
      return 'Excelente! Você tem ótimos conhecimentos sobre segurança digital! 👏';
    } else if (percentage >= 50) {
      return 'Bom trabalho! Continue estudando para melhorar ainda mais! 📚';
    } else {
      return 'Você pode melhorar! Revise o conteúdo e tente novamente! 💪';
    }
  }

  getScorePercentage(): number {
    return Math.round((this.score / this.quizQuestions.length) * 100);
  }

  isCorrectAnswer(index: number): boolean {
    return this.selectedAnswer !== null && index === this.currentQ.correctAnswer;
  }

  isIncorrectAnswer(index: number): boolean {
    return this.selectedAnswer !== null && 
           this.selectedAnswer === index && 
           index !== this.currentQ.correctAnswer;
  }

  navigateToFinal() {
    this.router.navigate(['/final']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

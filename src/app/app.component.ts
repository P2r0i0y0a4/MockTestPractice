import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface QuestionItem {
  id: number;
  title: string;
  topic: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 60 Questions';
  selectedQuestion = 1;
  searchText = '';
  currentUrl = '/';

  questions: QuestionItem[] = [
    { id: 1, title: 'Binding', topic: 'Basics' },
    { id: 2, title: 'Counter', topic: 'Events' },
    { id: 3, title: 'Toggle', topic: 'Events' },
    { id: 4, title: 'Image', topic: 'Binding' },
    { id: 5, title: 'Binding Refactor', topic: 'Binding' },
    { id: 6, title: 'Lifecycle', topic: 'Lifecycle' },
    { id: 7, title: 'Parent to Child', topic: 'Components' },
    { id: 8, title: 'Output Event', topic: 'Components' },
    { id: 9, title: 'Disable Submit', topic: 'Forms' },
    { id: 10, title: 'Precomputed Value', topic: 'Templates' },
    { id: 11, title: 'Dynamic Class', topic: 'Styling' },
    { id: 12, title: 'Click Events', topic: 'Events' },
    { id: 13, title: 'User Loop', topic: 'Directives' },
    { id: 14, title: 'Track By', topic: 'Performance' },
    { id: 15, title: 'ngIf Else', topic: 'Directives' },
    { id: 16, title: 'Loading Message', topic: 'State' },
    { id: 17, title: 'Empty Table', topic: 'Templates' },
    { id: 18, title: 'Dropdown Fields', topic: 'Forms' },
    { id: 19, title: 'Nested Lists', topic: 'Directives' },
    { id: 20, title: 'Structural Directives', topic: 'Directives' },
    { id: 21, title: 'First Five', topic: 'Pipes and Lists' },
    { id: 22, title: 'Highlight Selected', topic: 'State' },
    { id: 23, title: 'Template Form', topic: 'Forms' },
    { id: 24, title: 'Template Validation', topic: 'Forms' },
    { id: 25, title: 'Touched Errors', topic: 'Forms' },
    { id: 26, title: 'Email Validation', topic: 'Forms' },
    { id: 27, title: 'Form Builder', topic: 'Reactive Forms' },
    { id: 28, title: 'Password Length', topic: 'Reactive Forms' },
    { id: 29, title: 'Reset Form', topic: 'Forms' },
    { id: 30, title: 'Capture All Inputs', topic: 'Forms' },
    { id: 31, title: 'Conditional Required', topic: 'Reactive Forms' },
    { id: 32, title: 'Linked Dropdown', topic: 'Forms' },
    { id: 33, title: 'Dynamic Fields', topic: 'Reactive Forms' },
    { id: 34, title: 'Consistent Form', topic: 'Forms' },
    { id: 35, title: 'Errors After Interaction', topic: 'Forms' },
    { id: 36, title: 'Disable Until Valid', topic: 'Forms' },
    { id: 37, title: 'API Service', topic: 'Services' },
    { id: 38, title: 'HTTP GET', topic: 'HTTP' },
    { id: 39, title: 'Display API Data', topic: 'HTTP' },
    { id: 40, title: 'HTTP POST', topic: 'HTTP' },
    { id: 41, title: 'Delete and Refresh', topic: 'HTTP' },
    { id: 42, title: 'Shared State', topic: 'Services' },
    { id: 43, title: 'Fetch On Init', topic: 'Lifecycle' },
    { id: 44, title: 'Error Handling', topic: 'HTTP' },
    { id: 45, title: 'Update Data', topic: 'HTTP' },
    { id: 46, title: 'Centralized API', topic: 'Services' },
    { id: 47, title: 'Loading State', topic: 'HTTP' },
    { id: 48, title: 'No Repeated Fetch', topic: 'Performance' },
    { id: 49, title: 'Routing Configuration', topic: 'Routing' },
    { id: 50, title: 'Router Links', topic: 'Routing' },
    { id: 51, title: 'Route Param', topic: 'Routing' },
    { id: 52, title: 'Programmatic Navigation', topic: 'Routing' },
    { id: 53, title: 'Wildcard Route', topic: 'Routing' },
    { id: 54, title: 'Nested Routes', topic: 'Routing' },
    { id: 55, title: 'Query Params', topic: 'Routing' },
    { id: 56, title: 'Date Pipe', topic: 'Pipes' },
    { id: 57, title: 'Uppercase Pipe', topic: 'Pipes' },
    { id: 58, title: 'Truncate Text', topic: 'Pipes' },
    { id: 59, title: 'Currency Pipe', topic: 'Pipes' },
    { id: 60, title: 'Mini App', topic: 'Final Practice' }
  ];

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  get currentQuestion(): QuestionItem {
    return this.questions.find((question) => question.id === this.selectedQuestion) || this.questions[0];
  }

  get showRoutingOutput(): boolean {
    return this.selectedQuestion >= 49 && this.selectedQuestion <= 55 && this.currentUrl !== '/';
  }

  get showRoutedPage(): boolean {
    return this.currentUrl !== '/';
  }

  get filteredQuestions(): QuestionItem[] {
    const value = this.searchText.trim().toLowerCase();

    if (!value) {
      return this.questions;
    }

    return this.questions.filter((question) => {
      const questionNumber = `q${question.id.toString().padStart(2, '0')}`;
      return questionNumber.includes(value)
        || question.title.toLowerCase().includes(value)
        || question.topic.toLowerCase().includes(value)
        || question.id.toString().includes(value);
    });
  }

  selectQuestion(id: number): void {
    this.selectedQuestion = id;
  }

  previousQuestion(): void {
    if (this.selectedQuestion > 1) {
      this.selectedQuestion--;
    }
  }

  nextQuestion(): void {
    if (this.selectedQuestion < this.questions.length) {
      this.selectedQuestion++;
    }
  }
}

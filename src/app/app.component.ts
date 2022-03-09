import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Topics', url: '/topic', icon: 'mail' },
    { title: 'Study Materials', url: '/materials', icon: 'heart' },
    { title: 'Subject', url: '/subject', icon: 'paper-plane' },
    { title: 'Question & Answers', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  ];
  constructor() {}
}

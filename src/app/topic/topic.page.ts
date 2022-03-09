import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
})
export class TopicPage implements OnInit {
  results: Observable<any>;
  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.results = this.topicsService.getTopics();
  }

}

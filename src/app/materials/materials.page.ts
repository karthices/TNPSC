import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {

  results: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, private topicService: TopicsService) { }

  ngOnInit() {
    let topic_id = this.activatedRoute.snapshot.paramMap.get('topic_id');
    // let topic_id = this.activatedRoute.snapshot.paramMap.get('topic_id');
    if(topic_id != null)
    this.results = this.topicService.getMaterialsByTopicId(topic_id);
    else 
    this.results = this.topicService.getMaterials();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Material } from '../classes/Material';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  results: Material;
  constructor(private activatedRoute: ActivatedRoute, private topicService: TopicsService) { }

  ngOnInit() {
    let material_id = this.activatedRoute.snapshot.paramMap.get('material_id');
    this.topicService.getMaterialById(material_id).subscribe(result =>{
      this.results = result;
      console.log(this.results);
    });
  }

}

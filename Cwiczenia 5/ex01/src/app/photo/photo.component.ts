import { Component, OnInit } from '@angular/core';
import { DataService } from "../data-service/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo: any;
  id?: any;

  constructor(public data: DataService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.data.getPhoto(this.id).subscribe(data => this.photo = data);
  }

}

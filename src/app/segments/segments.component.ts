import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss']
})
export class SegmentsComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  contacts = [];
  displayedColumns: string[] = ['name', 'members', 'usage'];
  dataSource: any;

  // TO DELETE !!!!
  project_id: string = "62c3f10152dc7400352bab0d";

  constructor() { }

  ngOnInit(): void {
    this.getSegments();
  }

  getSegments() {
    
  }

}

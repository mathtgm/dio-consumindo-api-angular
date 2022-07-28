import { Component, OnInit } from '@angular/core';
import { RickMortyApiService } from '../../services/rick-morty-api.service';

@Component({
  selector: 'app-rick-morty-list',
  templateUrl: './rick-morty-list.component.html',
  styleUrls: ['./rick-morty-list.component.css']
})
export class RickMortyListComponent implements OnInit {

  personagens: Array<any> = [];

  constructor(private rickMortyAPI:RickMortyApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {

    this.rickMortyAPI.getList().subscribe(resultList => {
        this.personagens = resultList['results'];
    })

  }

}

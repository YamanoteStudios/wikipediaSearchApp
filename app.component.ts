import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';


import { WikipediaSearchAppService } from './wikipedia-search-app.service';
//application wide shared Rx operators
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:Array<string>;
  term$ = new Subject<string>();
  constructor(private service:WikipediaSearchAppService) {
    
    this.term$
        .subscribe(term => this.search(term))
  }

  search(term: string) {
    this.service.search(term)
                .subscribe(results => this.items = results);
  }
}

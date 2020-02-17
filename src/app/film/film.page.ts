import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {

  	url = 'http://antonintouron.fr/private/theo/public/api/';
    results: Observable<any>;

    constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.url = this.url + 'film/' + this.activatedRoute.snapshot.paramMap.get('id');
        this.results = this.httpClient.get(this.url);
        this.results
            .subscribe(data => {
                console.log(data);
            });
    }

}

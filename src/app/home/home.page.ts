import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

    url = 'http://antonintouron.fr/private/theo/public/api/';
    results: Observable<any>;

    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        // this.results = this.homeService.searchFilms();

        this.url = this.url + 'film';
        this.results = this.httpClient.get(this.url);
        this.results
            .subscribe(data => {
                // console.log(data);
            });
    }
}

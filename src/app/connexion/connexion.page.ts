import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.page.html',
    styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
    url = 'http://antonintouron.fr/private/theo/public/api/user/';
    results: Observable<any>;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
    }

    checkLog(form: NgForm) {
        this.url = this.url + form.value.email + '/' + form.value.password;
        this.results = this.httpClient.get(this.url);
        this.results
            .subscribe(data => {
                if (data !== false) {
                    window.location.replace('/home');
                } else {
                    window.location.replace('/connexion');
                }
            });
    }
}

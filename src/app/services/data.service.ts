import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{

    constructor(public http:Http){

    }

    getUsers(){
        return this.http.get('http://jsonplaceholder.typicode.com/users')
            .map(res => res.json());
    }

    addUser(user){
        return this.http.post('http://jsonplaceholder.typicode.com/users', user)
            .map(res => res.json());
    }

}

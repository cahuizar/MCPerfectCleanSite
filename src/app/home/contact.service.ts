import {Injectable}               from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions}  from '@angular/http';
import {Observable}               from 'rxjs/Observable';
import {Email}                    from './Email';

@Injectable()
export class ContactService {
  constructor (private _http: Http) {}

  private _contactUrl = 'assets/images/email.php';

  postEmail(newMail: Email): Observable<string>{
    let body = `FName=${newMail.FName}&LName=${newMail.LName}&PNumber=${newMail.PNumber}&Email=${newMail.Email}&Addr1=${newMail.Addr1}&Addr2=${newMail.Addr2}&City=${newMail.City}&Zip=${newMail.Zip}&Message=${newMail.Message}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._contactUrl, body, options)
                    .map(res =>  <string> res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error('Error in retrieving stuff: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

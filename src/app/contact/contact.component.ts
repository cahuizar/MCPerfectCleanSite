import { Component, OnInit } from '@angular/core';
import { Http, HttpModule }    from '@angular/http';
import { ContactService }    from './contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email }    from './Email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [HttpModule, ContactService]
})
export class ContactComponent implements OnInit {
  constructor(private _contactService : ContactService) { }
  ngOnInit() {}

  public message: Email = {FName: '', LName: '', PNumber: '', Email: '', Message: ''};

  onSubmit() {
    this._contactService.postEmail(this.message).subscribe(
      response => this.handleResponse(response),
      error => this.handleResponse(error)
    );
  }

  handleResponse(response){
    console.log(response);

    if(response.status =='success'){
      console.log('Message sent sucessfully');
      this.message = {FName: '', LName: '', PNumber: '', Email: '', Message: ''};
      alert('Your message has been successfully sent. Thank You.')

    }

    if(response.status =='error'){
      alert('Error sending the message');
      console.log('Message error');
    }
  }
}

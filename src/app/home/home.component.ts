import { Component, OnInit } from '@angular/core';
import { ContactService }    from './contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email }    from './Email';
import { Http, HttpModule }    from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpModule, ContactService]
})
export class HomeComponent implements OnInit {
  constructor(private _contactService : ContactService) { }
ngOnInit() {}

public message: Email = {FName: '', LName: '', PNumber: '', Email: '', Addr1: '', Addr2:'', City:'', Zip:'', Message: ''};

onSubmit() {
  this._contactService.postEmail(this.message).subscribe(
    response => this.handleResponse(response),
    error => this.handleResponse(error)
  );
}

handleResponse(response){
  console.log(`msg is: {response.status}`);

  if(response.status =='success'){
    console.log('Message sent sucessfully');
    this.message = {FName: '', LName: '', PNumber: '', Email: '', Addr1: '', Addr2:'', City:'', Zip:'', Message: ''};
    alert('Your message has been successfully sent. Thank You.')

  }

  if(response.status =='error'){
    alert('Error sending the message');
    console.log('Message sent sucessfully');
  }
}
}

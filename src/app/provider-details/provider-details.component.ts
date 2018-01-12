import { Input, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../data.service';
import { Producer } from '../producer';

@Component({
  selector: 'trueque-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProviderDetailsComponent implements OnInit {

  title:string = 'Agregar nuevo vivero';
  savedTitle:string = 'Nuevo vivero guardado';
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  @Input() longitude:number;
  @Input() latitude:number;
  email:string = '';

  constructor(private fb: FormBuilder,private _dataService: DataService) {
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(500)])],
      'longitude' :  [{value: null, disabled: true}, Validators.required],
      'latitude' :  [{value: null, disabled:true}, Validators.required],
      'email' :  [null, Validators.compose([Validators.email,Validators.required])]
    });
  }

  ngOnInit() {
  }

  addPost(post) {
    console.log('add new provider: ' + post);
    this.description = post.description;
    this.name = post.name;
    this.email = post.email;
  }

}

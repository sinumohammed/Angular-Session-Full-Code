import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from './../services/user-preferences.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template: `            
          <h1>This is the home page</h1>
          <div style='padding: 5px;color: red;'>{{envInfoDetails}}</div>          
          <div>
              Colour Preference :
              <input type='text' [(ngModel)]='colour' [style.background]="colour"/>
          </div>
          `,

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  envInfoDetails:string;

  // Create a private variable to hold an instance of the UserPreferencesService
  //private _userPreferencesService: UserPreferencesService;

  // In the constructor we are creating an instance of the UserPreferencesService
  // using the new keyword. So this instance is local to this component and we
  // cannot use it share data with other components. Later we will modify this
  // code to use dependency injection, which creates a Singleton so the colour
  // data can be shared with other components.
  // constructor() {
  //   this._userPreferencesService = new UserPreferencesService();
  // }

  // so better approach using with DI, share the data across multiple component
  constructor(private _userPreferencesService: UserPreferencesService) { 
    this.envInfoDetails=environment.envInfo;
  }


  // Implement a getter to retrieve the colourPreference value
  // from the service
  get colour(): string {
    return this._userPreferencesService.colourPreference;
  }

  // Implement a setter to change the colourPreference value
  // of the service
  set colour(value: string) {
    this._userPreferencesService.colourPreference = value;
  }


  ngOnInit() {
  }

}

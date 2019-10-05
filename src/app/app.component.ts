import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFirstAngular8App';
  backgroundColor = "silver";
  model: any = {};
  dataServiceObj: DataService;

  // injected our service into our component constructor
  constructor(dataService: DataService) {
    this.dataServiceObj = dataService;
    // get the model object from our service
    this.model = this.dataServiceObj.getDefaultObject();
  }
  Submit() {
    //logged our model using service method
    this.dataServiceObj.logObject(this.model);
  }
}
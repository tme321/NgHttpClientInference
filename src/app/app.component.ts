import { Component } from '@angular/core';
import { InferHttpGetService } from './infer-http-get/infer-http-get.service';
import { Observable } from 'rxjs';
import { Data } from './infer-http-get/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data$: Observable<Data[]>;

  constructor(private inferService: InferHttpGetService){}

  ngOnInit() {
    this.data$ = this.inferService.getData();
  }


}

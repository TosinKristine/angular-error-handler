import { NgModule,ErrorHandler } from '@angular/core';
import {ErrorsHandler} from './error-handler';


@NgModule({
  declarations: [ ],
  imports: [ ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
  ],
  bootstrap: []
})
export class ErrorModule { }

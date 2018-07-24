// errors-handler.ts
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
declare var $;
@Injectable()
export class ErrorsHandler implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        $("#dvAlertOffline").show();
      }
      else {
        if (error.status === 401) {
          $("#dvAlertUnauthorized").show();
          $("#dvAlertUnauthorized span").html(error.url);
          
        }
        else if (error.status === 403) {
          $("#dvAlertForbidden").show();
        }
        else if (error.status === 404) {
          $("#dvAlertNotFound").show();
        }
        else
        {
          $("#dvAlertServerError").show();
        }
      }
    }
    else
   {
      $("#dvAlertAppError").show();
    }
    console.log(error)
    //Log Error to file
  }
}
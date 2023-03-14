
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { delay, finalize, Observable } from "rxjs";

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    return next.handle(req).pipe(delay(5000), finalize(() => this.spinner.hide()));
  }
}

export const HttpLoaderInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpLoaderInterceptor,
  multi: true
}

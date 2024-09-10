import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private toastr = inject(ToastrService);

  constructor() { }

  showSuccess(message: string = 'Successfully Saved') {
    this.toastr.success('Success', message);
  }

  showError(message: string = 'Something went wrong') {
    this.toastr.error('Error', message);
  }

}

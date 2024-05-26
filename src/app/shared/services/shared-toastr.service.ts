import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedToastrService {

  constructor(private toastr:ToastrService) { }

  showSuccess(message:string){
    this.toastr.success(message,'',{
      timeOut:2000,
      progressAnimation:'increasing',
      progressBar:true,
    })
  }

  showWarning(message:string){
    this.toastr.warning(message,'',{
      timeOut:2000,
      progressAnimation:'increasing',
      progressBar:true,
    })
  }

  showError(message:string){
    this.toastr.error(message,'',{
      timeOut:2000,
      progressAnimation:'increasing',
      progressBar:true,
    })
  }
}

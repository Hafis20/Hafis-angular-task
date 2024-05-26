import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const takeToken = inject(LocalstorageService);
  const router = inject(Router);

  // If no tokens available 
  if(!takeToken.adminTokenFromLocalStorage || !takeToken.userTokenFromLocalStorage){
    return true;
  }else{
    // If admin token available
    if(takeToken.adminTokenFromLocalStorage){
      router.navigate(['/admin/dashboard']);
    }else{
      // If user token available
      router.navigate(['/user/dashboard']);
    }
    return false;
  }
};

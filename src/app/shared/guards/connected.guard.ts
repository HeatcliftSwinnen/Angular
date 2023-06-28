import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';
import { map } from 'rxjs';


export const connectedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const fakeAuthService = inject(FakeAuthService)

  //Normalement ici, on fait genre des vérifications de si on a un user connecté, on reviendra faire ça quand on aura vu les observables et le storage
  //La guard, renvoie juste un boolean vrai ou faux, pour savoir si peut accéder au composant
  return fakeAuthService.$connectedUser.pipe(map((res) => { 
    if(res) {
      return true;
    }
    else {
      router.navigateByUrl('/demo/demo5');
      return false;
    }
  }));
  //Souvent, plutôt que renvoyer faux, on va faire une redirection (vers une page login...une page Teuh teuh teuh vous n'êtes pas admin etc)
};

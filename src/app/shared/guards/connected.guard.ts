import { CanActivateFn } from '@angular/router';

export const connectedGuard: CanActivateFn = (route, state) => {
  //Normalement ici, on fait genre des vérifications de si on a un user connecté, on reviendra faire ça quand on aura vu les observables et le storage

  //La guard, renvoie juste un boolean vrai ou faux, pour savoir si peut accéder au composant
  return false;
  //Souvent, plutôt que renvoyer faux, on va faire une redirection (vers une page login...une page Teuh teuh teuh vous n'êtes pas admin etc)
};

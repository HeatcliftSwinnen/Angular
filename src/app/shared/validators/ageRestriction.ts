import { AbstractControl, ValidatorFn } from "@angular/forms";

export function ageRestriction(age : number) : ValidatorFn | null {
    return (control : AbstractControl) => {
        //Si une valeur est tapée dans le control (sinon va planter quand on va vouloir faire getFullYear() sur un truc qu'est pas une date)
        if(control.value) {
            const todayYear = new Date().getFullYear();
            const fanYear = new Date(control.value).getFullYear();
            if(todayYear - fanYear <= age){
                return { peggi : true }
            }
        }
        return null;
    }
}
import {PipeTransform, Pipe} from '@angular/core'

@Pipe({
  name:'fomatPhone',
  pure:false
})
export class fomatPhonePipe implements PipeTransform{

  
transform(value: any):any {
   if(value && value.length == 10) {
      return value.replace(/\D+/g, '')
      .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
   } 
   return value
}

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<any>, ...iargs: unknown[]): unknown {
    if(array){
      let args=iargs[0]
      let sortField = args[0] as string;
      let sortDirection =args[1] as string;
      let d =1;
      if (sortDirection === 'desc'){
        d=-1;
      }
      array.sort((a:any,b:any) => {
        if(a[sortField]<b[sortField]){
          return -1 *d;
        }else if(a[sortField]>b[sortField]){
          return 1*d;
        }else{
          return 0;
        }
      });
      
      
      
    }//else{console.log("no array")}
    return array;
  }

}

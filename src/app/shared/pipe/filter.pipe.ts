import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (!value) {
      return value
    }
    if (!filterString) {
      return value
    }
    filterString = filterString.toLocaleLowerCase()
    return value.filter((item: any)=> {
      return JSON.stringify(item).toLocaleLowerCase().includes(filterString)
    })
    // const users = [];
    // for (const user of value) {
    //   if (user['hotelName'] === filterString) {
    //     users.push(user)
    //   }
    // }
    // return users;
  }

}

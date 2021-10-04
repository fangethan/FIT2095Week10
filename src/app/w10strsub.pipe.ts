import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'w10strsub'
})
export class W10strsubPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    let transformedAge: number = 0;
    transformedAge = 2021 - value
    return transformedAge;
  }

//  syntax for calling pipe
//  {{value | pipeFunction:param1:param2:param3}}
//  <td>{{item.name| w10strsub:1:2}}</td>
// <td>{{"Week 10 Lab"| w10strsub:5:9 }}

}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'convertMinutes'
})
export class ConvertMinutes implements PipeTransform{
  transform(minutes:number){
    const hours= Math.floor(minutes/60);
    const realMinutes=minutes %60;
    return `${hours}h ${realMinutes<10 ? '0': ''}${realMinutes}m`
  }
}

import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService){}

    compute(a: number, b: number){
        console.log(`drawing 45 watts of power from the PSU`);
        this.powerService.supplyPower(45);
        return (a + b) ;
    }
}

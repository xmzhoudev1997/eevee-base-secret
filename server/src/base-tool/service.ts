import {  Injectable } from '@nestjs/common';

let time = 0;
let count = 0;

@Injectable()
export class BaseToolService {
  constructor(
  ) { }
  getId = async (): Promise<string> => {
    const now = Date.now();
    if (now === time) {
      count = count + 1;
    } else {
      count = 0;
      time = now;
    }
    const n = String(count).split('').length;
    return `${now}-${new Array(8 - n).fill('0').join('')}${count}`;
  }
  getIds = async (count: number): Promise<string[]> => {
    return await Promise.all(Array(count).fill('').map(() => this.getId()));
  }
}

import {  Injectable } from '@nestjs/common';
import { LOCALE_COMM } from './class';

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

  getLocales = async (): Promise<LOCALE_COMM[]> => {
    return [
      {
        code: 'zh-CN',
        desc: '中文',
        icon: '🇨🇳',
      },
      {
        code: 'en-US',
        desc: '英文',
        icon: '🇺🇸',
      },
      {
        code: 'ja-JP',
        desc: '日文',
        icon: '🇯🇵',
      },
      {
        code: 'ko-KR',
        desc: '韩文',
        icon: '🇰🇷',
      },
    ];
  }
}

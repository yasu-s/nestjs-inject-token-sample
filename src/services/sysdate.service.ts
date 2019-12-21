import { Injectable } from '@nestjs/common';

@Injectable()
export class SysDateService {
  getDate(): string {
    return new Date().toISOString();
  }
}

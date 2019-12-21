import { Controller, Get } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { EXECUTE_METADATA_KEY } from './decorators/execute.decorator';
import { HelloService } from './services/hello.service';
import { SysDateService } from './services/sysdate.service';

@Controller()
export class AppController {
  constructor(private readonly moduleRef: ModuleRef) {}

  @Get()
  getHello(): string {
    const service = this.moduleRef.get('HELLO_SERVICE') as HelloService;
    return service.getHello();
  }

  @Get('sysdate')
  getSysDate(): string {
    const service = this.moduleRef.get('SYSDATE_SERVICE') as SysDateService;
    return service.getDate();
  }

  @Get('exec')
  exec(): void {
    const service = this.moduleRef.get('EXECUTE_SERVICE');
    for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(service))) {
      if (typeof service[key] !== 'function') {
        continue;
      }
      if (!Reflect.getMetadataKeys(service, key).some(m => m === EXECUTE_METADATA_KEY)) {
        continue;
      }
      service[key]();
    }
  }
}

import { Controller, Get } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { HelloService } from './services/hello.service';

@Controller()
export class AppController {
  constructor(private readonly moduleRef: ModuleRef) {}

  @Get()
  getHello(): string {
    const service = this.moduleRef.get('HELLO_SERVICE') as HelloService;
    return service.getHello();
  }
}

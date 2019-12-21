import { Injectable, Logger } from '@nestjs/common';

import { Execute } from '../decorators/execute.decorator';

@Injectable()
export class ExecuteService {
  @Execute()
  exec(): void {
    Logger.log('ExecuteService - exec');
  }
}

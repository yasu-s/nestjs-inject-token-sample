import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { HelloService } from './services/hello.service';
import { SysDateService } from './services/sysdate.service';
import { ExecuteService } from './services/execute.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    { provide: 'HELLO_SERVICE', useClass: HelloService },
    { provide: 'SYSDATE_SERVICE', useClass: SysDateService },
    { provide: 'EXECUTE_SERVICE', useClass: ExecuteService },
  ],
})
export class AppModule {}

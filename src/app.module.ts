import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { HelloService } from './services/hello.service';
import { SysDateService } from './services/sysdate.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    { provide: 'HELLO_SERVICE', useClass: HelloService },
    { provide: 'SYSDATE_SERVICE', useClass: SysDateService },
  ],
})
export class AppModule {}

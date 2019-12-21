import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { HelloService } from './services/hello.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{ provide: 'HELLO_SERVICE', useClass: HelloService }],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { setupConfig } from './config/config.setup';
import { setupMongodb } from './db/mongodb.setup';

@Module({
  imports: [
    // config
    setupConfig(),
    // mongodb
    setupMongodb(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

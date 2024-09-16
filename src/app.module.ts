import { EventsController } from './events.controller';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Event } from './event.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'example',
    database: 'nest-events',
    entities: [Event],
    synchronize: true,
  })],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}

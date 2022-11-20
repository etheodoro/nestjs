import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type } from 'os';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

const configService = new ConfigService();


@Module({
  imports: [CoursesModule,
    ConfigModule.forRoot({
      envFilePath: 'course.env',
      isGlobal: true,
    }), 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: configService.get('TYPEORM_HOST'),
    port: configService.get('TYPEORM_PORT'),
    username: configService.get('TYPEORM_USERNAME'),
    password: configService.get(''),
    database: configService.get('TYPEORM_DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

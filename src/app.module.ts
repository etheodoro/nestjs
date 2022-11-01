import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './courses/controllers/course/course.controller';
import { CourseService } from './courses/services/course/course.service';

@Module({
  imports: [],
  controllers: [AppController, CourseController],
  providers: [AppService, CourseService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CourseController } from './controllers/course/course.controller';
import { CourseService } from './services/course/course.service';

@Module({
    controllers: [CourseController],
    providers: [CourseService],
})
export class CoursesModule {}

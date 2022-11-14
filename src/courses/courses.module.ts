import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './controllers/course/course.controller';
import { CourseEntity } from './entities/course.entity';
import { TagEntity } from './entities/tags.entity';
import { CourseService } from './services/course/course.service';

@Module({
    imports: [TypeOrmModule.forFeature(
        [CourseEntity, TagEntity]
    )],
    controllers: [CourseController],
    providers: [CourseService],
})
export class CoursesModule {}

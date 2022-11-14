import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoursesDto } from 'src/courses/dto/create-courses.dto/create-courses.dto';
import { UpdateCoursesDto } from 'src/courses/dto/update-courses.dto/update-courses.dto';
import { CourseEntity } from 'src/courses/entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {

    constructor(
        @InjectRepository(CourseEntity)
        private readonly courseRepository: Repository<CourseEntity>,
    ) {}

    findAll(){
        const courses = this.courseRepository.find({
            order: {
                id: "ASC",
            },
        });
        return courses;
    }

    findOne(id: string){
        const course = this.courseRepository.findOne({
            where: {
                "id": + id,
            },
            lock: { mode: "optimistic", version: 1 },
        });
        if (!course) {
            throw new NotFoundException('Nenhum curso encontrado para o id: ' + id);
        }
        return course;
    }

    create(createCourseDto: CreateCoursesDto) {
        const course = this.courseRepository.create(createCourseDto);
        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCoursesDto) {
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto
        });
        
        if (!course) {
            throw new NotFoundException('Nenhum curso encontrado para o id: ' + id);
        }        

        return this.courseRepository.save(course);
    }

    async remove(id: string) {
        const course = await this.courseRepository.findOne({
            where: {
                "id": + id,
            }
        });
        
        if (!course) {
            throw new NotFoundException('Nenhum curso encontrado para o id: ' + id);
        }        

        return this.courseRepository.remove(course);
    }

}

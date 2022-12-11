import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoursesDto } from 'src/courses/dto/create-courses.dto/create-courses.dto';
import { UpdateCoursesDto } from 'src/courses/dto/update-courses.dto/update-courses.dto';
import { CourseEntity } from 'src/courses/entities/course.entity';
import { TagEntity } from 'src/courses/entities/tags.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {

    constructor(
        @InjectRepository(CourseEntity)
        private readonly courseRepository: Repository<CourseEntity>,
        
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>,
    ) {}

    findAll(){
        const courses = this.courseRepository.find({
            relations: ['tags'],
            order: {
                id: "ASC",
            },
        });
        return courses;
    }

    findOne(id: string){
        const course = this.courseRepository.findOne({
            relations: ['tags'],
            where: {
                id: id,
            },
        });
        if (!course) {
            throw new NotFoundException(`Nenhum curso encontrado para o id ${id}`);
        }
        return course;
    }


    async create(createCourseDto: CreateCoursesDto) {
        const tags = await Promise.all(
            createCourseDto.tags.map((name: string) => this.preloadTagByName(name)),
        );

        const course = this.courseRepository.create({
            ...createCourseDto,
            tags,
        });

        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCoursesDto) {
        
        const tags = updateCourseDto.tags && (
            await Promise.all(
                updateCourseDto.tags.map((name: string) => this.preloadTagByName(name)),
            )
        );
        
        const course = await this.courseRepository.preload({
            id: id,
            ...updateCourseDto,
            tags
        });
        
        if (!course) {
            throw new NotFoundException('Nenhum curso encontrado para o id: ' + id);
        }        

        return this.courseRepository.save(course);
    }

    async remove(id: string) {
        const course = await this.courseRepository.findOne({
            where: {
                id: id,
            }
        });
        
        if (!course) {
            throw new NotFoundException('Nenhum curso encontrado para o id: ' + id);
        }        

        return this.courseRepository.remove(course);
    }

    private async preloadTagByName(name: string) : Promise<TagEntity> {
        const tag = await this.tagRepository.findOne({
            where: {
                name: name,
            }
        });

        if (tag) {
            return tag;
        }

        return this.tagRepository.create({name});
    }

}

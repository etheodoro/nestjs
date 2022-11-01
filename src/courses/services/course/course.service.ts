import { BadRequestException, Injectable } from '@nestjs/common';
import { Course } from 'src/courses/entities/course.entity';

@Injectable()
export class CourseService {

    private courses: Course [] = [
        { id: 1, name: 'Programação em Java', description: 'Programação orientada a objetos em Java', tags: ['java','oop']},
        { id: 2, name: 'Fundamentos do framework NestJS', description: 'Fundamentos do framework NestJS', tags: ['javascript','nestjs','nodejs']},
        { id: 3, name: 'Programação em PHP', description: 'Programação orientada a objetos em PHP', tags: ['php','oop']}
    ];

    findAll(){
        return this.courses;
    }

    findOne(id: string){
        
        let course: Course = this.courses.find((c: Course) => c.id === Number(id));

        if ( course == null) {
            throw new BadRequestException('Nenhum curso encontrado para o id: ' + id);
        } else {
            return course;
        }
    }

    create(courseDTO: any) {
        this.courses.push(courseDTO);
        return this.courses;
    }

    update(id: string, courseDTO: any) {
        const indexCourse = this.courses.findIndex((c: Course) => c.id === Number(id));
        this.courses[indexCourse] = courseDTO;        
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex((c: Course) => c.id === Number(id));
         if (indexCourse > 0) {
            this.courses.splice(indexCourse, 1);
         }
        return 'Excluido o curso: ' + id;
    }

}

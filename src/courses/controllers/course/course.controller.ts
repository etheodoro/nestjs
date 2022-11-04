import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CreateCoursesDto } from 'src/courses/dto/create-courses.dto/create-courses.dto';
import { UpdateCoursesDto } from 'src/courses/dto/update-courses.dto/update-courses.dto';
import { CourseService } from 'src/courses/services/course/course.service';
import { CreateContextOptions } from 'vm';

@Controller('courses')
export class CourseController {

    constructor(private readonly courseService: CourseService){}

    @Get('list')
    findAll(@Res() reponse) {      
        return reponse.status(200).send(this.courseService.findAll());        
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.courseService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDTO: CreateCoursesDto) {
        console.info(createCourseDTO);
        return this.courseService.create(createCourseDTO);
    }

    @Patch(':id')
    update( @Param('id') id: string,  @Body() updateCoursesDto: UpdateCoursesDto) {
        return this.courseService.update(id, updateCoursesDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.courseService.remove(id);
    }
}

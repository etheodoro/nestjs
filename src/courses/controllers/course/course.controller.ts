import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CourseService } from 'src/courses/services/course/course.service';

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
    create(@Body() body) {
        return this.courseService.create(body);
    }

    @Patch(':id')
    update( @Param('id') id: string,  @Body() body) {
        return this.courseService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.courseService.remove(id);
    }
}

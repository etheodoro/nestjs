import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import path from 'path';

@Controller('courses')
export class CoursesController {
    
    @Get('list')
    findAll() {

        let listaCursos: { id: number, name: string }[] = [
            { "id": 0, "name": "Java" },
            { "id": 1, "name": "Javascript" },
            { "id": 2, "name": "Php" }
        ];        

        return listaCursos;        
    }

}

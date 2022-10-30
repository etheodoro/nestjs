import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';
import { stringify } from 'querystring';

@Controller('courses')
export class CoursesController {
    
    @Get('list')
    findAll() {

        let listaCursos: { id: number, name: string }[] = [
            { "id": 1, "name": "Java" },
            { "id": 2, "name": "Javascript" },
            { "id": 3, "name": "Php" }
        ];        

        return listaCursos;        
    }

    @Get(':id')
    findOne(@Param('id') id: string) {

        let retorno: string; 

        retorno =  'Curso não encontrado';

        let listaCursos: { id: number, name: string }[] = [
            { "id": 1, "name": "Java" },
            { "id": 2, "name": "Javascript" },
            { "id": 3, "name": "Php" }
        ];        

        listaCursos.forEach(item => {
            if (String(item.id) === id) {
                retorno = item.name;      
            } 
        });

        return retorno;
    }

}

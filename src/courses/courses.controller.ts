import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { get } from 'http';

@Controller('courses')
export class CoursesController {
    
    @Get('list')
    findAll(@Res() reponse) {

        let listaCursos: { id: number, name: string }[] = [
            { "id": 1, "name": "Java" },
            { "id": 2, "name": "Javascript" },
            { "id": 3, "name": "Php" }
        ];        

        return reponse.status(200).send(listaCursos);        
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

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        
        console.info(body);
        return body;
    }


}

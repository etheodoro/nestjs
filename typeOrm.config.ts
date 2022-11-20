import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import Course from './src/courses/entities/course.entity';
import Tags from './src/courses/entities/tags.entity';
import {CourseRefactoring1668729650279} from './src/migrations/1668729650279-CourseRefactoring'; 

config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: configService.get('TYPEORM_HOST'),
  port: configService.get('TYPEORM_PORT'),
  username: configService.get('TYPEORM_USERNAME'),
  password: configService.get('TYPEORM_PASSWORD'),
  database: configService.get('TYPEORM_DATABASE'),
  entities: [Course, Tags],
  migrations: [CourseRefactoring1668729650279],
});
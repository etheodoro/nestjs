import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import Course from './src/courses/entities/course.entity';
import Tags from './src/courses/entities/tags.entity';
import {CreateCourseTable1669686885327} from './src/migrations/1669686885327-CreateCourseTable'; 
import {CreateTagsTable1669769572274} from './src/migrations/1669769572274-CreateTagsTable'; 

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
  migrations: [CreateCourseTable1669686885327, CreateTagsTable1669769572274],
});
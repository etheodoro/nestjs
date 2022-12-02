import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import Course from './src/courses/entities/course.entity';
import Tags from './src/courses/entities/tags.entity';
import {CreateCourseTable1669686885327} from './src/migrations/1669686885327-CreateCourseTable'; 
import {CreateTagsTable1669769572274} from './src/migrations/1669769572274-CreateTagsTable'; 
import {CreateCoursesTagsTable1669858399477} from './src/migrations/1669858399477-CreateCoursesTagsTable';
import {AddTagsIdToCoursesTagsTable1669859723909} from './src/migrations/1669859723909-AddTagsIdToCoursesTagsTable';
import {AddCoursesIdToCoursesTagsTable1669859084234} from './src/migrations/1669859084234-AddCoursesIdToCoursesTagsTable';

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
  migrations: [
      CreateCourseTable1669686885327, 
      CreateTagsTable1669769572274, 
      CreateCoursesTagsTable1669858399477,
      AddTagsIdToCoursesTagsTable1669859723909,
      AddCoursesIdToCoursesTagsTable1669859084234
    ]
});
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CourseEntity } from '../../../courses/entities/course.entity';
import { TagEntity } from '../../../courses/entities/tags.entity';

import { DataSource } from 'typeorm';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseService,
        {
          provide: DataSource, useValue: {}
        },
        {
          provide: getRepositoryToken(CourseEntity), useValue: {}
        },
        {
          provide: getRepositoryToken(TagEntity), useValue: {}
        },
      ],
    }).compile();

    service = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

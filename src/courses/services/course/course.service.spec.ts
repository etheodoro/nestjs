import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CourseEntity } from '../../../courses/entities/course.entity';
import { TagEntity } from '../../../courses/entities/tags.entity';

import { DataSource, Repository } from 'typeorm';
import { CourseService } from './course.service';
import { NotFoundException } from '@nestjs/common';

type MockRepository <T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRepository = <T = any>():  MockRepository<T> => ({
  findOne: jest.fn(),
})

describe('CourseService', () => {
  let service: CourseService;
  let courseRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseService,
        { provide: DataSource, useValue: {}},
        { provide: getRepositoryToken(CourseEntity), useValue: createMockRepository()},
        { provide: getRepositoryToken(TagEntity), useValue: createMockRepository()},
      ],
    }).compile();

    service = module.get<CourseService>(CourseService);
    courseRepository = module.get<MockRepository>(getRepositoryToken(CourseEntity)); 
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    describe('buscar curso pelo ID', () => {
      it('deve retornar o objeto Course',async () => {
        
         const courseId = '1';
         const expectedCourse = {};
         
         courseRepository.findOne.mockReturnValue(expectedCourse);
         const course = await service.findOne(courseId);
         expect(course).toEqual(expectedCourse);
      });

      it('deve retornar NotFoundException', async () => {
        const courseId = '1';
        
        courseRepository.findOne.mockReturnValue(undefined);

        try {
          await service.findOne(courseId);
        } catch (error) {
          expect(error).toBeInstanceOf(NotFoundException);
          expect(error.message).toEqual(`Nenhum curso encontrado para o id ${courseId}`);
        }

      });

    });
  });

});

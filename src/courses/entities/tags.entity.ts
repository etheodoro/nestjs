import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./course.entity";

@Entity('tags')
export class TagEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => CourseEntity, (courseEntity: CourseEntity) => courseEntity.tags)
    courses: CourseEntity[]

}

export default TagEntity;
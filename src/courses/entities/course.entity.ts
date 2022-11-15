import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TagEntity } from "./tags.entity";

@Entity('courses')
export class CourseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable()
    @ManyToMany(() => TagEntity, (tagEntity: TagEntity) => tagEntity.courses, {
        cascade: true,
    })
    tags: TagEntity[];     

}
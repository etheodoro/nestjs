import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "./course.entity";
import { v4 as uuidv4 } from "uuid";

@Entity('tags')
export class TagEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => CourseEntity, (courseEntity: CourseEntity) => courseEntity.tags)
    courses: CourseEntity[]

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;

    @BeforeInsert()
    generatedId() {
        if (this.id) {
            return;
        }
        this.id = uuidv4();
    }

}

export default TagEntity;
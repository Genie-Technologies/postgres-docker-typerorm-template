import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Message {
    
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    other_user_id: number;

    @PrimaryColumn()
    @CreateDateColumn()
    message_id: Date;

    // @Column()
    // message_author_id: number;

    @Column()
    message_body: string;

}
    
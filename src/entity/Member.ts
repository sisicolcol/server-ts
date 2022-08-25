import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"
import * as bcrypt from "bcryptjs";

@Entity()
export class Member extends BaseEntity{
    @PrimaryGeneratedColumn()
    mem_no:number;

    @Column()
    mem_id:string;

    @Column()
    password:string;

    @Column()
    mem_name:string;

    @Column()
    mem_phone:string;

    @Column()
    mem_gender:string;

    @Column()
    mem_card:string;

    @Column()
    mem_address:string;

    hashPassword(){
        this.password = bcrypt.hashSync(this.password,8);
        console.log("hashPassword() : ",this.password);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string){
        console.log("valid: ",bcrypt.compareSync(unencryptedPassword, this.password));
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}
import {Apply} from "../entity/Apply";
import {AppDataSource} from "../datasource";

export const ApplyRepository =AppDataSource.getRepository(Apply).extend({
    findByMem_Id(mem_id: number ){
        return this.createQueryBuilder("apply")
            .where("apply.mem_id = :mem_id",{mem_id})
            .getMany();
    },
    findQuickApply(){
        let date = new Date();

        let today : string = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        let time : number =date.getHours();

        return this.createQueryBuilder("apply")
            .where("apply.service_date = :today",{today})
            .andWhere("apply.service_time > :time",{time})
            .getMany();
    },
    findPreApply(){
        let date = new Date();

        let today : string = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

        return this.createQueryBuilder("apply")
            .where("apply.service_date > :today",{today})
            .getMany();
    }
})
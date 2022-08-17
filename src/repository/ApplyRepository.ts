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

        let today : string = date.getFullYear()+'/'+date.getMonth()+'/'+date.getDate();

        return this.createQueryBuilder("apply")
            .where("apply.service_date = : today",{today})
            .getMany();
    }
})
import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cv_skill" ,{schema:"sabios" } )
export class cv_skill {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("date",{ 
        nullable:false,
        name:"StartDate"
        })
    StartDate:string;
        

    @Column("date",{ 
        nullable:true,
        name:"EndDate"
        })
    EndDate:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:150,
        name:"SkillArea"
        })
    SkillArea:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:150,
        name:"SkillName"
        })
    SkillName:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"SkillDescription"
        })
    SkillDescription:string | null;
        
}

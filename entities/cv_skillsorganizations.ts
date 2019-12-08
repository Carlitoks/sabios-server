import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cv_skillsorganizations" ,{schema:"sabios" } )
export class cv_skillsorganizations {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"CV_SkillID"
        })
    CV_SkillID:number;
        

    @Column("int",{ 
        nullable:false,
        name:"CV_OrganizationID"
        })
    CV_OrganizationID:number;
        
}

import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cv_organization" ,{schema:"sabios" } )
export class cv_organization {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("date",{ 
        nullable:false,
        name:"DateStart"
        })
    DateStart:string;
        

    @Column("date",{ 
        nullable:true,
        name:"DateEnd"
        })
    DateEnd:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"OrganizationName"
        })
    OrganizationName:string;
        

    @Column("int",{ 
        nullable:true,
        name:"OrganizationSize"
        })
    OrganizationSize:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"OrganizationIndustry"
        })
    OrganizationIndustry:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"OrganizationDetail"
        })
    OrganizationDetail:string | null;
        
}

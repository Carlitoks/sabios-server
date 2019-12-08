import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cv_education" ,{schema:"sabios" } )
export class cv_education {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("date",{ 
        nullable:false,
        name:"DateEarned"
        })
    DateEarned:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:150,
        name:"EducationTitle"
        })
    EducationTitle:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"EducationType"
        })
    EducationType:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"GrantingInstitution"
        })
    GrantingInstitution:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"EducationDescription"
        })
    EducationDescription:string | null;
        
}

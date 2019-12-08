import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cv_title" ,{schema:"sabios" } )
export class cv_title {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"TitleName"
        })
    TitleName:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        name:"TitleDescription"
        })
    TitleDescription:string;
        
}

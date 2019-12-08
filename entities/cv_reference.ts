import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cv_reference" ,{schema:"sabios" } )
export class cv_reference {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:150,
        name:"ReferenceType"
        })
    ReferenceType:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"ReferenceDetail"
        })
    ReferenceDetail:string;
        
}

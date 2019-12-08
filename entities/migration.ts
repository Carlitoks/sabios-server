import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("migration" ,{schema:"sabios" } )
export class migration {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:180,
        name:"version"
        })
    version:string;
        

    @Column("int",{ 
        nullable:true,
        name:"apply_time"
        })
    apply_time:number | null;
        
}

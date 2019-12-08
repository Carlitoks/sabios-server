import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cv_location" ,{schema:"sabios" } )
export class cv_location {

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
        nullable:true,
        length:150,
        name:"City"
        })
    City:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"StateOrProvince"
        })
    StateOrProvince:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:150,
        name:"Country"
        })
    Country:string;
        
}

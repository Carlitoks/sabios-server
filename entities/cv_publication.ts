import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cv_publication" ,{schema:"sabios" } )
export class cv_publication {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"PublicationLocation"
        })
    PublicationLocation:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"PublicationTopic"
        })
    PublicationTopic:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        name:"PublicationDescription"
        })
    PublicationDescription:string | null;
        
}

import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("evaluacion" ,{schema:"sabios" } )
export class evaluacion {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"id_sabio"
        })
    id_sabio:number;
        

    @Column("int",{ 
        nullable:false,
        name:"id_proyecto"
        })
    id_proyecto:number;
        

    @Column("enum",{ 
        nullable:false,
        enum:["Excelente","Muy bueno","Bueno","Deficiente","Incompleto"],
        name:"evaluacion"
        })
    evaluacion:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:500,
        name:"comentarios"
        })
    comentarios:string;
        
}

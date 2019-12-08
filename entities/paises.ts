import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ubicaciones} from "./ubicaciones";


@Entity("paises" ,{schema:"sabios" } )
export class paises {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"nombre"
        })
    nombre:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"logo"
        })
    logo:string | null;
        

   
    @OneToMany(()=>ubicaciones, (ubicaciones: ubicaciones)=>ubicaciones.pais,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    ubicacioness:ubicaciones[];
    
}

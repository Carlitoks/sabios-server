import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {lista_subareas_sabio} from "./lista_subareas_sabio";
import {subareas} from "./subareas";


@Entity("areas" ,{schema:"sabios" } )
export class areas {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        

   
    @OneToMany(()=>lista_subareas_sabio, (lista_subareas_sabio: lista_subareas_sabio)=>lista_subareas_sabio.areas,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaSubareasSabios:lista_subareas_sabio[];
    

   
    @OneToMany(()=>subareas, (subareas: subareas)=>subareas.areas,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    subareass:subareas[];
    
}

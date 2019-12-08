import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {sabios} from "./sabios";
import {areas} from "./areas";
import {subareas} from "./subareas";


@Entity("lista_subareas_sabio" ,{schema:"sabios" } )
@Index("id",["id",],{unique:true})
@Index("sabios_id",["sabios",])
@Index("areas_id",["areas",])
@Index("subareas_id",["subareas",])
export class lista_subareas_sabio {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>sabios, (sabios: sabios)=>sabios.listaSubareasSabios,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'sabios_id'})
    sabios:sabios | null;


   
    @ManyToOne(()=>areas, (areas: areas)=>areas.listaSubareasSabios,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'areas_id'})
    areas:areas | null;


   
    @ManyToOne(()=>subareas, (subareas: subareas)=>subareas.listaSubareasSabios,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'subareas_id'})
    subareas:subareas | null;


    @Column("float",{ 
        nullable:false,
        precision:12,
        name:"ponderacion"
        })
    ponderacion:number;
        
}

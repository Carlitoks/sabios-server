import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {areas} from "./areas";
import {lista_capacidades} from "./lista_capacidades";
import {lista_subareas_sabio} from "./lista_subareas_sabio";


@Entity("subareas" ,{schema:"sabios" } )
@Index("areas_id",["areas",])
export class subareas {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>areas, (areas: areas)=>areas.subareass,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'areas_id'})
    areas:areas | null;


    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        

   
    @OneToMany(()=>lista_capacidades, (lista_capacidades: lista_capacidades)=>lista_capacidades.idSubarea,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaCapacidadess:lista_capacidades[];
    

   
    @OneToMany(()=>lista_subareas_sabio, (lista_subareas_sabio: lista_subareas_sabio)=>lista_subareas_sabio.subareas,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaSubareasSabios:lista_subareas_sabio[];
    
}

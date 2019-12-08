import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {subareas} from "./subareas";
import {proyectos} from "./proyectos";


@Entity("lista_capacidades" ,{schema:"sabios" } )
@Index("id_proyecto",["idProyecto",])
@Index("id_subarea",["idSubarea",])
export class lista_capacidades {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>subareas, (subareas: subareas)=>subareas.listaCapacidadess,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_subarea'})
    idSubarea:subareas | null;


   
    @ManyToOne(()=>proyectos, (proyectos: proyectos)=>proyectos.listaCapacidadess,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_proyecto'})
    idProyecto:proyectos | null;

}

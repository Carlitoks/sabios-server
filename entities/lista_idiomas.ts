import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {idiomas} from "./idiomas";
import {sabios} from "./sabios";
import {proyectos} from "./proyectos";


@Entity("lista_idiomas" ,{schema:"sabios" } )
@Index("idiomas_id",["idiomas",])
@Index("owner_id",["owner",])
export class lista_idiomas {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>idiomas, (idiomas: idiomas)=>idiomas.listaIdiomass,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idiomas_id'})
    idiomas:idiomas | null;


   
    @ManyToOne(()=>sabios, (sabios: sabios)=>sabios.listaIdiomass,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:sabios | null;

    @ManyToOne(()=>proyectos, (proyectos: proyectos)=>proyectos.listaIdiomass,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:proyectos | null;


    @Column("enum",{ 
        nullable:true,
        enum:["basico","medio","avanzado"],
        name:"nivel_hablado"
        })
    nivel_hablado:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["basico","medio","avanzado"],
        name:"nivel_lectura"
        })
    nivel_lectura:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["basico","medio","avanzado"],
        name:"nivel_escritura"
        })
    nivel_escritura:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["proyecto","sabio"],
        name:"owner_type"
        })
    owner_type:string | null;
        
}

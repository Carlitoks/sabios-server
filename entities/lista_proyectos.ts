import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {proyectos} from "./proyectos";
import {sabios} from "./sabios";
import {representantes} from "./representantes";


@Entity("lista_proyectos" ,{schema:"sabios" } )
@Index("proyecto_id",["proyecto",])
@Index("owner_id",["owner",])
export class lista_proyectos {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>proyectos, (proyectos: proyectos)=>proyectos.listaProyectoss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'proyecto_id'})
    proyecto:proyectos | null;


   
    @ManyToOne(()=>sabios, (sabios: sabios)=>sabios.listaProyectoss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:sabios | null;

    @ManyToOne(()=>representantes, (representantes: representantes)=>representantes.listaProyectoss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:representantes | null;


    @Column("date",{ 
        nullable:true,
        name:"last_viewed"
        })
    last_viewed:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["wish","activo"],
        name:"type"
        })
    type:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"valoracion"
        })
    valoracion:number | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["sabios","representantes"],
        name:"owner_type"
        })
    owner_type:string | null;
        
}

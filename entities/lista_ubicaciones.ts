import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ubicaciones} from "./ubicaciones";
import {users} from "./users";
import {empresas} from "./empresas";
import {proyectos} from "./proyectos";


@Entity("lista_ubicaciones" ,{schema:"sabios" } )
@Index("fk_ubicaciones",["ubicaciones",])
@Index("fk_owner",["owner",])
export class lista_ubicaciones {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>ubicaciones, (ubicaciones: ubicaciones)=>ubicaciones.listaUbicacioness,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'ubicaciones_id'})
    ubicaciones:ubicaciones | null;


   
    @ManyToOne(()=>users, (users: users)=>users.listaUbicacioness,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:users | null;

    @ManyToOne(()=>empresas, (empresas: empresas)=>empresas.listaUbicacioness,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:empresas | null;

    @ManyToOne(()=>proyectos, (proyectos: proyectos)=>proyectos.listaUbicacioness,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:proyectos | null;


    @Column("enum",{ 
        nullable:true,
        enum:["users","empresas","proyectos"],
        name:"owner_type"
        })
    owner_type:string | null;
        
}

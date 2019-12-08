import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {telefonos} from "./telefonos";
import {users} from "./users";
import {empresas} from "./empresas";


@Entity("lista_telefonos" ,{schema:"sabios" } )
@Index("fk_owner",["owner",],{unique:true})
@Index("fk_telefono",["telefono",])
export class lista_telefonos {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>telefonos, (telefonos: telefonos)=>telefonos.listaTelefonoss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'telefono_id'})
    telefono:telefonos | null;


   
    @OneToOne(()=>users, (users: users)=>users.listaTelefonos,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:users | null;

    @OneToOne(()=>empresas, (empresas: empresas)=>empresas.listaTelefonos,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:empresas | null;


    @Column("enum",{ 
        nullable:true,
        enum:["users","empresas"],
        name:"owner_type"
        })
    owner_type:string | null;
        
}

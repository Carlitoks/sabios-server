import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {empresas} from "./empresas";
import {correos} from "./correos";


@Entity("lista_correos" ,{schema:"sabios" } )
@Index("fk_owner_id",["owner",])
@Index("fk_correo_id",["correo",])
export class lista_correos {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>users, (users: users)=>users.listaCorreoss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:users | null;

    @ManyToOne(()=>empresas, (empresas: empresas)=>empresas.listaCorreoss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'owner_id'})
    owner:empresas | null;


   
    @ManyToOne(()=>correos, (correos: correos)=>correos.listaCorreoss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'correo_id'})
    correo:correos | null;


    @Column("enum",{ 
        nullable:true,
        enum:["users","empresas"],
        name:"owner_type"
        })
    owner_type:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"verificado"
        })
    verificado:boolean | null;
        
}

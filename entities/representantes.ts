import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {empresas} from "./empresas";
import {lista_comunicaciones} from "./lista_comunicaciones";
import {lista_proyectos} from "./lista_proyectos";


@Entity("representantes" ,{schema:"sabios" } )
@Index("empresa_id",["empresa_id",])
@Index("representantes_ibfk_2",["users",])
export class representantes {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>users, (users: users)=>users.representantess,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'users_id'})
    users:users | null;


    @Column("int",{ 
        nullable:false,
        name:"empresa_id"
        })
    empresa_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"cargo"
        })
    cargo:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["gerente","representante","lider_de_proyecto"],
        name:"tipo"
        })
    tipo:string | null;
        

   
    @OneToMany(()=>empresas, (empresas: empresas)=>empresas.representante,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    empresass:empresas[];
    

   
    @OneToMany(()=>lista_comunicaciones, (lista_comunicaciones: lista_comunicaciones)=>lista_comunicaciones.idRepresentante,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaComunicacioness:lista_comunicaciones[];
    

   
    @OneToMany(()=>lista_proyectos, (lista_proyectos: lista_proyectos)=>lista_proyectos.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaProyectoss:lista_proyectos[];
    
}

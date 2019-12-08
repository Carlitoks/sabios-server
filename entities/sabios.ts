import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {lista_comunicaciones} from "./lista_comunicaciones";
import {lista_idiomas} from "./lista_idiomas";
import {lista_proyectos} from "./lista_proyectos";
import {lista_subareas_sabio} from "./lista_subareas_sabio";


@Entity("sabios" ,{schema:"sabios" } )
@Index("sabios_ibfk_1",["users",])
export class sabios {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>users, (users: users)=>users.sabioss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'users_id'})
    users:users | null;


    @Column("varchar",{ 
        nullable:false,
        length:500,
        name:"experticia"
        })
    experticia:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:500,
        name:"experiencia"
        })
    experiencia:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:500,
        name:"proyeccion"
        })
    proyeccion:string;
        

    @Column("enum",{ 
        nullable:false,
        enum:["por horas","parcial","completo"],
        name:"preferencia_tiempo"
        })
    preferencia_tiempo:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"curriculum"
        })
    curriculum:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"imagen_perfil"
        })
    imagen_perfil:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"archivo_imagen"
        })
    archivo_imagen:string;
        

    @Column("int",{ 
        nullable:true,
        name:"anos_experiencia"
        })
    anos_experiencia:number | null;
        

   
    @OneToMany(()=>lista_comunicaciones, (lista_comunicaciones: lista_comunicaciones)=>lista_comunicaciones.idSabio,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaComunicacioness:lista_comunicaciones[];
    

   
    @OneToMany(()=>lista_idiomas, (lista_idiomas: lista_idiomas)=>lista_idiomas.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaIdiomass:lista_idiomas[];
    

   
    @OneToMany(()=>lista_proyectos, (lista_proyectos: lista_proyectos)=>lista_proyectos.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaProyectoss:lista_proyectos[];
    

   
    @OneToMany(()=>lista_subareas_sabio, (lista_subareas_sabio: lista_subareas_sabio)=>lista_subareas_sabio.sabios,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaSubareasSabios:lista_subareas_sabio[];
    
}

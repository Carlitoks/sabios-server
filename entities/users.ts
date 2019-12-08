import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user} from "./user";
import {lista_correos} from "./lista_correos";
import {lista_telefonos} from "./lista_telefonos";
import {lista_ubicaciones} from "./lista_ubicaciones";
import {representantes} from "./representantes";
import {sabios} from "./sabios";


@Entity("users" ,{schema:"sabios" } )
@Index("fk_users_user",["user",])
export class users {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>user, (user: user)=>user.userss,{ onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'user_id'})
    user:user | null;


    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"apellido"
        })
    apellido:string | null;
        

    @Column("enum",{ 
        nullable:false,
        enum:["sabios","representantes"],
        name:"type"
        })
    type:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"profile_picture"
        })
    profile_picture:string | null;
        

   
    @OneToMany(()=>lista_correos, (lista_correos: lista_correos)=>lista_correos.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaCorreoss:lista_correos[];
    

   
    @OneToOne(()=>lista_telefonos, (lista_telefonos: lista_telefonos)=>lista_telefonos.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaTelefonos:lista_telefonos | null;


   
    @OneToMany(()=>lista_ubicaciones, (lista_ubicaciones: lista_ubicaciones)=>lista_ubicaciones.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaUbicacioness:lista_ubicaciones[];
    

   
    @OneToMany(()=>representantes, (representantes: representantes)=>representantes.users,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    representantess:representantes[];
    

   
    @OneToMany(()=>sabios, (sabios: sabios)=>sabios.users,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    sabioss:sabios[];
    
}

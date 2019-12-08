import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {representantes} from "./representantes";
import {lista_correos} from "./lista_correos";
import {lista_telefonos} from "./lista_telefonos";
import {lista_ubicaciones} from "./lista_ubicaciones";


@Entity("empresas" ,{schema:"sabios" } )
@Index("representante_id",["representante",])
export class empresas {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"nombre"
        })
    nombre:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"lema"
        })
    lema:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:1000,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"logo"
        })
    logo:string | null;
        

   
    @ManyToOne(()=>representantes, (representantes: representantes)=>representantes.empresass,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'representante_id'})
    representante:representantes | null;


    @Column("enum",{ 
        nullable:true,
        enum:["guest","basico","premium"],
        name:"plan"
        })
    plan:string | null;
        

   
    @OneToMany(()=>lista_correos, (lista_correos: lista_correos)=>lista_correos.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaCorreoss:lista_correos[];
    

   
    @OneToOne(()=>lista_telefonos, (lista_telefonos: lista_telefonos)=>lista_telefonos.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaTelefonos:lista_telefonos | null;


   
    @OneToMany(()=>lista_ubicaciones, (lista_ubicaciones: lista_ubicaciones)=>lista_ubicaciones.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaUbicacioness:lista_ubicaciones[];
    
}

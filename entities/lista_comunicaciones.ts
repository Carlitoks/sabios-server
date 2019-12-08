import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {representantes} from "./representantes";
import {sabios} from "./sabios";
import {proyectos} from "./proyectos";


@Entity("lista_comunicaciones" ,{schema:"sabios" } )
@Index("id_proyecto",["idProyecto",])
@Index("id_representante",["idRepresentante",])
@Index("id_sabio",["idSabio",])
export class lista_comunicaciones {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(()=>representantes, (representantes: representantes)=>representantes.listaComunicacioness,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_representante'})
    idRepresentante:representantes | null;


   
    @ManyToOne(()=>sabios, (sabios: sabios)=>sabios.listaComunicacioness,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_sabio'})
    idSabio:sabios | null;


    @Column("date",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:string;
        

   
    @ManyToOne(()=>proyectos, (proyectos: proyectos)=>proyectos.listaComunicacioness,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_proyecto'})
    idProyecto:proyectos | null;


    @Column("varchar",{ 
        nullable:false,
        length:500,
        name:"tema"
        })
    tema:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:2000,
        name:"comentarios"
        })
    comentarios:string;
        
}

import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {lista_capacidades} from "./lista_capacidades";
import {lista_comunicaciones} from "./lista_comunicaciones";
import {lista_idiomas} from "./lista_idiomas";
import {lista_proyectos} from "./lista_proyectos";
import {lista_ubicaciones} from "./lista_ubicaciones";


@Entity("proyectos" ,{schema:"sabios" } )
export class proyectos {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:500,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("int",{ 
        nullable:false,
        name:"oferta"
        })
    oferta:number;
        

    @Column("int",{ 
        nullable:false,
        name:"oferta_total"
        })
    oferta_total:number;
        

    @Column("int",{ 
        nullable:true,
        name:"lista_ubicaciones_id"
        })
    lista_ubicaciones_id:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"cantidad_recursos"
        })
    cantidad_recursos:number | null;
        

    @Column("int",{ 
        nullable:false,
        name:"dedicacion"
        })
    dedicacion:number;
        

    @Column("int",{ 
        nullable:false,
        name:"duracion"
        })
    duracion:number;
        

    @Column("enum",{ 
        nullable:false,
        enum:["horas","dias","semanas","meses"],
        name:"tipo_duracion"
        })
    tipo_duracion:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"terminado"
        })
    terminado:boolean;
        

    @Column("date",{ 
        nullable:false,
        name:"inicio"
        })
    inicio:string;
        

    @Column("date",{ 
        nullable:false,
        name:"final"
        })
    final:string;
        

    @Column("enum",{ 
        nullable:false,
        enum:["Informativo","iniciado","en proceso","finalizado"],
        name:"estatus"
        })
    estatus:string;
        

    @Column("date",{ 
        nullable:false,
        name:"fecha_creacion"
        })
    fecha_creacion:string;
        

   
    @OneToMany(()=>lista_capacidades, (lista_capacidades: lista_capacidades)=>lista_capacidades.idProyecto,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaCapacidadess:lista_capacidades[];
    

   
    @OneToMany(()=>lista_comunicaciones, (lista_comunicaciones: lista_comunicaciones)=>lista_comunicaciones.idProyecto,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaComunicacioness:lista_comunicaciones[];
    

   
    @OneToMany(()=>lista_idiomas, (lista_idiomas: lista_idiomas)=>lista_idiomas.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaIdiomass:lista_idiomas[];
    

   
    @OneToMany(()=>lista_proyectos, (lista_proyectos: lista_proyectos)=>lista_proyectos.proyecto,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaProyectoss:lista_proyectos[];
    

   
    @OneToMany(()=>lista_ubicaciones, (lista_ubicaciones: lista_ubicaciones)=>lista_ubicaciones.owner,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaUbicacioness:lista_ubicaciones[];
    
}

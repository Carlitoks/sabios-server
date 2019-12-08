import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {paises} from "./paises";
import {lista_ubicaciones} from "./lista_ubicaciones";


@Entity("ubicaciones" ,{schema:"sabios" } )
@Index("pais_id",["pais",])
export class ubicaciones {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"direccion1"
        })
    direccion1:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"direccion2"
        })
    direccion2:string | null;
        

   
    @ManyToOne(()=>paises, (paises: paises)=>paises.ubicacioness,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'pais_id'})
    pais:paises | null;


    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"ciudad"
        })
    ciudad:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        name:"codigo"
        })
    codigo:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"direccion_personal"
        })
    direccion_personal:boolean | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"publicar"
        })
    publicar:boolean | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["Principal","Oficina Regional","Sucursal"],
        name:"tipo"
        })
    tipo:string | null;
        

   
    @OneToMany(()=>lista_ubicaciones, (lista_ubicaciones: lista_ubicaciones)=>lista_ubicaciones.ubicaciones,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaUbicacioness:lista_ubicaciones[];
    
}

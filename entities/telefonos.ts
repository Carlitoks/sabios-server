import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {lista_telefonos} from "./lista_telefonos";


@Entity("telefonos" ,{schema:"sabios" } )
export class telefonos {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:5,
        name:"codigo_pais"
        })
    codigo_pais:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"numero"
        })
    numero:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["Principal","Movil","Business"],
        name:"tipo"
        })
    tipo:string | null;
        

    @Column("tinyint",{ 
        nullable:true,
        width:1,
        name:"whatsapp"
        })
    whatsapp:boolean | null;
        

   
    @OneToMany(()=>lista_telefonos, (lista_telefonos: lista_telefonos)=>lista_telefonos.telefono,{ onDelete: 'CASCADE' ,onUpdate: 'RESTRICT' })
    listaTelefonoss:lista_telefonos[];
    
}

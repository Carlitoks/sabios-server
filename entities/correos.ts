import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {lista_correos} from "./lista_correos";


@Entity("correos" ,{schema:"sabios" } )
export class correos {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"mail"
        })
    mail:string | null;
        

    @Column("enum",{ 
        nullable:true,
        enum:["personal","corporativo"],
        name:"tipo"
        })
    tipo:string | null;
        

   
    @OneToMany(()=>lista_correos, (lista_correos: lista_correos)=>lista_correos.correo,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaCorreoss:lista_correos[];
    
}

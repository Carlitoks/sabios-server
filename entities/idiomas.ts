import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {lista_idiomas} from "./lista_idiomas";


@Entity("idiomas" ,{schema:"sabios" } )
export class idiomas {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:50,
        name:"nombre"
        })
    nombre:string | null;
        

   
    @OneToMany(()=>lista_idiomas, (lista_idiomas: lista_idiomas)=>lista_idiomas.idiomas,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listaIdiomass:lista_idiomas[];
    
}

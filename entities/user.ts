import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";


@Entity("user" ,{schema:"sabios" } )
@Index("username",["username",],{unique:true})
@Index("email",["email",],{unique:true})
@Index("password_reset_token",["password_reset_token",],{unique:true})
export class user {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"username"
        })
    username:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:32,
        name:"auth_key"
        })
    auth_key:string;
        

    @Column("varchar",{ 
        nullable:false,
        name:"password_hash"
        })
    password_hash:string;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        name:"password_reset_token"
        })
    password_reset_token:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"email"
        })
    email:string;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "'10'",
        name:"status"
        })
    status:number;
        

    @Column("int",{ 
        nullable:false,
        name:"created_at"
        })
    created_at:number;
        

    @Column("int",{ 
        nullable:false,
        name:"updated_at"
        })
    updated_at:number;
        

    @Column("varchar",{ 
        nullable:true,
        name:"verification_token"
        })
    verification_token:string | null;
        

   
    @OneToMany(()=>users, (users: users)=>users.user,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    userss:users[];
    
}

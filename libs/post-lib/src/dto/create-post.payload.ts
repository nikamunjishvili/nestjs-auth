import { Field, ObjectType } from "@nestjs/graphql";
import mongoose from "mongoose";

@ObjectType()
export class PostPayload {
    @Field()
    title: string;

    @Field({ nullable: true })
    content: string;

    @Field(() => String) 
    user: mongoose.Schema.Types.ObjectId;
}

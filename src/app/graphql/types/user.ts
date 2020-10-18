import { Field, InputType } from 'type-graphql';

@InputType()
export class LoginUserInput {
  @Field()
  email: string;
  @Field()
  password: string;
}

@InputType()
export class CreateUserInput extends LoginUserInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  userName: string;
}

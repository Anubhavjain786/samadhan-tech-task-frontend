import {
  ApolloCache,
  DefaultContext,
  gql,
  MutationTuple,
  OperationVariables,
  useMutation,
} from "@apollo/client";

export class AuthService {
  basicLogin(): MutationTuple<
    any,
    OperationVariables,
    DefaultContext,
    ApolloCache<any>
  > {
    return useMutation(gql`
      mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
          message
        }
      }
    `);
  }

  fbLogin(): MutationTuple<
    any,
    OperationVariables,
    DefaultContext,
    ApolloCache<any>
  > {
    return useMutation(gql`
      mutation fbLogin($email: String!, $name: String!) {
        fbLogin(email: $email, name: $name) {
          token
          message
        }
      }
    `);
  }

  register(): MutationTuple<
    any,
    OperationVariables,
    DefaultContext,
    ApolloCache<any>
  > {
    return useMutation(gql`
      mutation register($name: String!, $email: String!, $password: String!) {
        register(name: $name, email: $email, password: $password) {
          token
          message
        }
      }
    `);
  }
}

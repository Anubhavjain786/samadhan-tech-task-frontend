import { gql, useQuery, OperationVariables, QueryResult } from "@apollo/client";

export class UserServices {
  profile(): QueryResult<any, OperationVariables> {
    return useQuery(gql`
      query {
        user {
          id
          name
          email
        }
      }
    `);
  }
}

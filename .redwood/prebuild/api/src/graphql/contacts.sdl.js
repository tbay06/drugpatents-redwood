import gql from "graphql-tag";
export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]!
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZ3JhcGhxbC9jb250YWN0cy5zZGwuanMiXSwibmFtZXMiOlsiZ3FsIiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEc7QUFBdEIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E1Qk8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgQ29udGFjdCB7XHJcbiAgICBpZDogSW50IVxyXG4gICAgbmFtZTogU3RyaW5nIVxyXG4gICAgZW1haWw6IFN0cmluZyFcclxuICAgIG1lc3NhZ2U6IFN0cmluZyFcclxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIGNvbnRhY3RzOiBbQ29udGFjdCFdIVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgQ3JlYXRlQ29udGFjdElucHV0IHtcclxuICAgIG5hbWU6IFN0cmluZyFcclxuICAgIGVtYWlsOiBTdHJpbmchXHJcbiAgICBtZXNzYWdlOiBTdHJpbmchXHJcbiAgfVxyXG5cclxuICBpbnB1dCBVcGRhdGVDb250YWN0SW5wdXQge1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICBlbWFpbDogU3RyaW5nXHJcbiAgICBtZXNzYWdlOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIHR5cGUgTXV0YXRpb24ge1xyXG4gICAgY3JlYXRlQ29udGFjdChpbnB1dDogQ3JlYXRlQ29udGFjdElucHV0ISk6IENvbnRhY3RcclxuICB9XHJcbmBcclxuIl19
import gql from "graphql-tag";
export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZ3JhcGhxbC9wb3N0cy5zZGwuanMiXSwibmFtZXMiOlsiZ3FsIiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEc7QUFBdEIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E1Qk8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHR5cGUgUG9zdCB7XHJcbiAgICBpZDogSW50IVxyXG4gICAgdGl0bGU6IFN0cmluZyFcclxuICAgIGJvZHk6IFN0cmluZyFcclxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIHBvc3RzOiBbUG9zdCFdIVxyXG4gICAgcG9zdChpZDogSW50ISk6IFBvc3RcclxuICB9XHJcblxyXG4gIGlucHV0IENyZWF0ZVBvc3RJbnB1dCB7XHJcbiAgICB0aXRsZTogU3RyaW5nIVxyXG4gICAgYm9keTogU3RyaW5nIVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgVXBkYXRlUG9zdElucHV0IHtcclxuICAgIHRpdGxlOiBTdHJpbmdcclxuICAgIGJvZHk6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgdHlwZSBNdXRhdGlvbiB7XHJcbiAgICBjcmVhdGVQb3N0KGlucHV0OiBDcmVhdGVQb3N0SW5wdXQhKTogUG9zdCFcclxuICAgIHVwZGF0ZVBvc3QoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVQb3N0SW5wdXQhKTogUG9zdCFcclxuICAgIGRlbGV0ZVBvc3QoaWQ6IEludCEpOiBQb3N0IVxyXG4gIH1cclxuYFxyXG4iXX0=
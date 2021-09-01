export const schema = gql`
  type Patent {
    id: Int!
    drugId: String!
    patentNum: String!
    filingDate: DateTime
    dateGranted: DateTime
    expirationDate: DateTime
    companyName: String
    Drug: Drug!
    createdAt: DateTime!
  }
  type PatentsPerCompanyCount {
    id: Int!
  }
  type PatentsPerCompany {
    companyName: String!
    _count: PatentsPerCompanyCount!
  }

  type Query {
    patents: [Patent!]!
    patent(id: Int!): Patent
    expiringSoon: [Patent!]!
    recentlyExpired: [Patent!]!
    totalPatentsPerCompany: [PatentsPerCompany!]!
    activePatentsPerCompany: [PatentsPerCompany!]!
  }

  input CreatePatentInput {
    drugId: String!
    patentNum: String!
    filingDate: DateTime
    dateGranted: DateTime
    expirationDate: DateTime
    companyName: String
  }

  input UpdatePatentInput {
    drugId: String
    patentNum: String
    filingDate: DateTime
    dateGranted: DateTime
    expirationDate: DateTime
    companyName: String
  }

  type Mutation {
    createPatent(input: CreatePatentInput!): Patent!
    updatePatent(id: Int!, input: UpdatePatentInput!): Patent!
    deletePatent(id: Int!): Patent!
  }
`

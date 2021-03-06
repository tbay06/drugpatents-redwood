export const schema = gql`
  type Drug {
    id: String!
    medicinalIngredient: String
    brandName: String
    routeOfAdmin: String
    strengthPerUnit: String
    humanOrVet: String
    therapeuticClass: String
    dosageForm: String
    din: String
    createdAt: DateTime!
    Patent: [Patent]!
    SavedDrug: [SavedDrug]
  }

  type Query {
    drugs(take: Int!, skip: Int!): [Drug!]!
    drug(id: String!): Drug
    drugCount:Int!
  }

  input CreateDrugInput {
    medicinalIngredient: String
    brandName: String
    routeOfAdmin: String
    strengthPerUnit: String
    humanOrVet: String
    therapeuticClass: String
    dosageForm: String
    din: String
  }

  input UpdateDrugInput {
    medicinalIngredient: String
    brandName: String
    routeOfAdmin: String
    strengthPerUnit: String
    humanOrVet: String
    therapeuticClass: String
    dosageForm: String
    din: String
  }

  type Mutation {
    createDrug(input: CreateDrugInput!): Drug!
    updateDrug(id: String!, input: UpdateDrugInput!): Drug!
    deleteDrug(id: String!): Drug!
  }
`

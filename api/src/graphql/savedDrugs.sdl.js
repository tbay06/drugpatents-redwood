export const schema = gql`
  type SavedDrug {
    id: Int!
    userId: String!
    Drug: Drug!
    drugId: String!
  }

  type Query {
    savedDrugs(userId: String!): [SavedDrug!]!
    savedDrug(id: Int!): SavedDrug
    savedDrugsAdmin:[SavedDrug!]!
  }

  input CreateSavedDrugInput {
    userId: String!
    drugId: String!
  }

  input UpdateSavedDrugInput {
    userId: String
    drugId: String
  }

  type Mutation {
    createSavedDrug(input: CreateSavedDrugInput!): SavedDrug!
    updateSavedDrug(id: Int!, input: UpdateSavedDrugInput!): SavedDrug!
    deleteSavedDrug(id: Int!): SavedDrug!
  }
`

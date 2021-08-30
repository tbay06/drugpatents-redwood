export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateDrugInput = {
  medicinalIngredient?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  routeOfAdmin?: Maybe<Scalars['String']>;
  strengthPerUnit?: Maybe<Scalars['String']>;
  humanOrVet?: Maybe<Scalars['String']>;
  therapeuticClass?: Maybe<Scalars['String']>;
  dosageForm?: Maybe<Scalars['String']>;
  din?: Maybe<Scalars['String']>;
};

export type CreatePatentInput = {
  drugId: Scalars['String'];
  patentNum: Scalars['String'];
  filingDate?: Maybe<Scalars['DateTime']>;
  dateGranted?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  companyName?: Maybe<Scalars['String']>;
};



export type Drug = {
  __typename?: 'Drug';
  id: Scalars['String'];
  medicinalIngredient?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  routeOfAdmin?: Maybe<Scalars['String']>;
  strengthPerUnit?: Maybe<Scalars['String']>;
  humanOrVet?: Maybe<Scalars['String']>;
  therapeuticClass?: Maybe<Scalars['String']>;
  dosageForm?: Maybe<Scalars['String']>;
  din?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  Patent: Array<Maybe<Patent>>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createDrug: Drug;
  createPatent: Patent;
  deleteDrug: Drug;
  deletePatent: Patent;
  updateDrug: Drug;
  updatePatent: Patent;
};


export type MutationCreateDrugArgs = {
  input: CreateDrugInput;
};


export type MutationCreatePatentArgs = {
  input: CreatePatentInput;
};


export type MutationDeleteDrugArgs = {
  id: Scalars['String'];
};


export type MutationDeletePatentArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateDrugArgs = {
  id: Scalars['String'];
  input: UpdateDrugInput;
};


export type MutationUpdatePatentArgs = {
  id: Scalars['Int'];
  input: UpdatePatentInput;
};

export type Patent = {
  __typename?: 'Patent';
  id: Scalars['Int'];
  drugId: Scalars['String'];
  patentNum: Scalars['String'];
  filingDate?: Maybe<Scalars['DateTime']>;
  dateGranted?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  companyName?: Maybe<Scalars['String']>;
  Drug: Drug;
  createdAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  drug?: Maybe<Drug>;
  drugs: Array<Drug>;
  patent?: Maybe<Patent>;
  patents: Array<Patent>;
  redwood?: Maybe<Redwood>;
};


export type QueryDrugArgs = {
  id: Scalars['String'];
};


export type QueryPatentArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type UpdateDrugInput = {
  medicinalIngredient?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  routeOfAdmin?: Maybe<Scalars['String']>;
  strengthPerUnit?: Maybe<Scalars['String']>;
  humanOrVet?: Maybe<Scalars['String']>;
  therapeuticClass?: Maybe<Scalars['String']>;
  dosageForm?: Maybe<Scalars['String']>;
  din?: Maybe<Scalars['String']>;
};

export type UpdatePatentInput = {
  drugId?: Maybe<Scalars['String']>;
  patentNum?: Maybe<Scalars['String']>;
  filingDate?: Maybe<Scalars['DateTime']>;
  dateGranted?: Maybe<Scalars['DateTime']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
  companyName?: Maybe<Scalars['String']>;
};

export type DeleteDrugMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteDrugMutation = (
  { __typename?: 'Mutation' }
  & { deleteDrug: (
    { __typename?: 'Drug' }
    & Pick<Drug, 'id'>
  ) }
);

export type FindDrugByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindDrugById = (
  { __typename?: 'Query' }
  & { drug?: Maybe<(
    { __typename?: 'Drug' }
    & Pick<Drug, 'id' | 'medicinalIngredient' | 'brandName' | 'routeOfAdmin' | 'strengthPerUnit' | 'humanOrVet' | 'therapeuticClass' | 'dosageForm' | 'din' | 'createdAt'>
  )> }
);

export type FindDrugsVariables = Exact<{ [key: string]: never; }>;


export type FindDrugs = (
  { __typename?: 'Query' }
  & { drugs: Array<(
    { __typename?: 'Drug' }
    & Pick<Drug, 'id' | 'medicinalIngredient' | 'brandName' | 'routeOfAdmin' | 'strengthPerUnit' | 'humanOrVet' | 'therapeuticClass' | 'dosageForm' | 'din' | 'createdAt'>
  )> }
);

export type EditDrugByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type EditDrugById = (
  { __typename?: 'Query' }
  & { drug?: Maybe<(
    { __typename?: 'Drug' }
    & Pick<Drug, 'id' | 'medicinalIngredient' | 'brandName' | 'routeOfAdmin' | 'strengthPerUnit' | 'humanOrVet' | 'therapeuticClass' | 'dosageForm' | 'din' | 'createdAt'>
  )> }
);

export type UpdateDrugMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateDrugInput;
}>;


export type UpdateDrugMutation = (
  { __typename?: 'Mutation' }
  & { updateDrug: (
    { __typename?: 'Drug' }
    & Pick<Drug, 'id' | 'medicinalIngredient' | 'brandName' | 'routeOfAdmin' | 'strengthPerUnit' | 'humanOrVet' | 'therapeuticClass' | 'dosageForm' | 'din' | 'createdAt'>
  ) }
);

export type CreateDrugMutationVariables = Exact<{
  input: CreateDrugInput;
}>;


export type CreateDrugMutation = (
  { __typename?: 'Mutation' }
  & { createDrug: (
    { __typename?: 'Drug' }
    & Pick<Drug, 'id'>
  ) }
);

export type FindDrugPatentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindDrugPatentQuery = (
  { __typename?: 'Query' }
  & { drug?: Maybe<(
    { __typename?: 'Drug' }
    & Pick<Drug, 'id' | 'medicinalIngredient' | 'brandName' | 'routeOfAdmin' | 'strengthPerUnit' | 'humanOrVet' | 'therapeuticClass' | 'dosageForm' | 'din' | 'createdAt'>
    & { Patent: Array<Maybe<(
      { __typename?: 'Patent' }
      & Pick<Patent, 'id' | 'patentNum' | 'expirationDate' | 'companyName'>
    )>> }
  )> }
);

export type DrugPatentsQueryVariables = Exact<{ [key: string]: never; }>;


export type DrugPatentsQuery = (
  { __typename?: 'Query' }
  & { drugs: Array<(
    { __typename?: 'Drug' }
    & Pick<Drug, 'id' | 'medicinalIngredient' | 'brandName' | 'routeOfAdmin' | 'strengthPerUnit' | 'humanOrVet' | 'therapeuticClass' | 'dosageForm' | 'din'>
    & { Patent: Array<Maybe<(
      { __typename?: 'Patent' }
      & Pick<Patent, 'expirationDate' | 'companyName'>
    )>> }
  )> }
);

export type EditPatentByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditPatentById = (
  { __typename?: 'Query' }
  & { patent?: Maybe<(
    { __typename?: 'Patent' }
    & Pick<Patent, 'id' | 'drugId' | 'patentNum' | 'filingDate' | 'dateGranted' | 'expirationDate' | 'companyName' | 'createdAt'>
  )> }
);

export type UpdatePatentMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdatePatentInput;
}>;


export type UpdatePatentMutation = (
  { __typename?: 'Mutation' }
  & { updatePatent: (
    { __typename?: 'Patent' }
    & Pick<Patent, 'id' | 'drugId' | 'patentNum' | 'filingDate' | 'dateGranted' | 'expirationDate' | 'companyName' | 'createdAt'>
  ) }
);

export type CreatePatentMutationVariables = Exact<{
  input: CreatePatentInput;
}>;


export type CreatePatentMutation = (
  { __typename?: 'Mutation' }
  & { createPatent: (
    { __typename?: 'Patent' }
    & Pick<Patent, 'id'>
  ) }
);

export type DeletePatentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePatentMutation = (
  { __typename?: 'Mutation' }
  & { deletePatent: (
    { __typename?: 'Patent' }
    & Pick<Patent, 'id'>
  ) }
);

export type FindPatentByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindPatentById = (
  { __typename?: 'Query' }
  & { patent?: Maybe<(
    { __typename?: 'Patent' }
    & Pick<Patent, 'id' | 'drugId' | 'patentNum' | 'filingDate' | 'dateGranted' | 'expirationDate' | 'companyName' | 'createdAt'>
  )> }
);

export type FindPatentsVariables = Exact<{ [key: string]: never; }>;


export type FindPatents = (
  { __typename?: 'Query' }
  & { patents: Array<(
    { __typename?: 'Patent' }
    & Pick<Patent, 'id' | 'drugId' | 'patentNum' | 'filingDate' | 'dateGranted' | 'expirationDate' | 'companyName' | 'createdAt'>
  )> }
);

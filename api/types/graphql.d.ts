import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type CreateSavedDrugInput = {
  userId: Scalars['String'];
  drugId: Scalars['String'];
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
  SavedDrug?: Maybe<Array<Maybe<SavedDrug>>>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createDrug: Drug;
  createPatent: Patent;
  createSavedDrug: SavedDrug;
  deleteDrug: Drug;
  deletePatent: Patent;
  deleteSavedDrug: SavedDrug;
  updateDrug: Drug;
  updatePatent: Patent;
  updateSavedDrug: SavedDrug;
};


export type MutationCreateDrugArgs = {
  input: CreateDrugInput;
};


export type MutationCreatePatentArgs = {
  input: CreatePatentInput;
};


export type MutationCreateSavedDrugArgs = {
  input: CreateSavedDrugInput;
};


export type MutationDeleteDrugArgs = {
  id: Scalars['String'];
};


export type MutationDeletePatentArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteSavedDrugArgs = {
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


export type MutationUpdateSavedDrugArgs = {
  id: Scalars['Int'];
  input: UpdateSavedDrugInput;
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

export type PatentsPerCompany = {
  __typename?: 'PatentsPerCompany';
  companyName: Scalars['String'];
  _count: PatentsPerCompanyCount;
};

export type PatentsPerCompanyCount = {
  __typename?: 'PatentsPerCompanyCount';
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  activePatentsPerCompany: Array<PatentsPerCompany>;
  drug?: Maybe<Drug>;
  drugs: Array<Drug>;
  expiringSoon: Array<Patent>;
  patent?: Maybe<Patent>;
  patents: Array<Patent>;
  recentlyExpired: Array<Patent>;
  redwood?: Maybe<Redwood>;
  savedDrug?: Maybe<SavedDrug>;
  savedDrugs: Array<SavedDrug>;
  totalPatentsPerCompany: Array<PatentsPerCompany>;
};


export type QueryDrugArgs = {
  id: Scalars['String'];
};


export type QueryDrugsArgs = {
  take: Scalars['Int'];
  skip: Scalars['Int'];
};


export type QueryPatentArgs = {
  id: Scalars['Int'];
};


export type QuerySavedDrugArgs = {
  id: Scalars['Int'];
};


export type QuerySavedDrugsArgs = {
  userId: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type SavedDrug = {
  __typename?: 'SavedDrug';
  id: Scalars['Int'];
  userId: Scalars['String'];
  Drug: Drug;
  drugId: Scalars['String'];
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

export type UpdateSavedDrugInput = {
  userId?: Maybe<Scalars['String']>;
  drugId?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CreateDrugInput: CreateDrugInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreatePatentInput: CreatePatentInput;
  CreateSavedDrugInput: CreateSavedDrugInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Drug: ResolverTypeWrapper<Drug>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Patent: ResolverTypeWrapper<Patent>;
  PatentsPerCompany: ResolverTypeWrapper<PatentsPerCompany>;
  PatentsPerCompanyCount: ResolverTypeWrapper<PatentsPerCompanyCount>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  SavedDrug: ResolverTypeWrapper<SavedDrug>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateDrugInput: UpdateDrugInput;
  UpdatePatentInput: UpdatePatentInput;
  UpdateSavedDrugInput: UpdateSavedDrugInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CreateDrugInput: CreateDrugInput;
  String: Scalars['String'];
  CreatePatentInput: CreatePatentInput;
  CreateSavedDrugInput: CreateSavedDrugInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Drug: Drug;
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Int: Scalars['Int'];
  Patent: Patent;
  PatentsPerCompany: PatentsPerCompany;
  PatentsPerCompanyCount: PatentsPerCompanyCount;
  Query: {};
  Redwood: Redwood;
  SavedDrug: SavedDrug;
  Time: Scalars['Time'];
  UpdateDrugInput: UpdateDrugInput;
  UpdatePatentInput: UpdatePatentInput;
  UpdateSavedDrugInput: UpdateSavedDrugInput;
  Boolean: Scalars['Boolean'];
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DrugResolvers<ContextType = any, ParentType extends ResolversParentTypes['Drug'] = ResolversParentTypes['Drug']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  medicinalIngredient?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  routeOfAdmin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  strengthPerUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  humanOrVet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  therapeuticClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dosageForm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  din?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Patent?: Resolver<Array<Maybe<ResolversTypes['Patent']>>, ParentType, ContextType>;
  SavedDrug?: Resolver<Maybe<Array<Maybe<ResolversTypes['SavedDrug']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createDrug?: Resolver<ResolversTypes['Drug'], ParentType, ContextType, RequireFields<MutationCreateDrugArgs, 'input'>>;
  createPatent?: Resolver<ResolversTypes['Patent'], ParentType, ContextType, RequireFields<MutationCreatePatentArgs, 'input'>>;
  createSavedDrug?: Resolver<ResolversTypes['SavedDrug'], ParentType, ContextType, RequireFields<MutationCreateSavedDrugArgs, 'input'>>;
  deleteDrug?: Resolver<ResolversTypes['Drug'], ParentType, ContextType, RequireFields<MutationDeleteDrugArgs, 'id'>>;
  deletePatent?: Resolver<ResolversTypes['Patent'], ParentType, ContextType, RequireFields<MutationDeletePatentArgs, 'id'>>;
  deleteSavedDrug?: Resolver<ResolversTypes['SavedDrug'], ParentType, ContextType, RequireFields<MutationDeleteSavedDrugArgs, 'id'>>;
  updateDrug?: Resolver<ResolversTypes['Drug'], ParentType, ContextType, RequireFields<MutationUpdateDrugArgs, 'id' | 'input'>>;
  updatePatent?: Resolver<ResolversTypes['Patent'], ParentType, ContextType, RequireFields<MutationUpdatePatentArgs, 'id' | 'input'>>;
  updateSavedDrug?: Resolver<ResolversTypes['SavedDrug'], ParentType, ContextType, RequireFields<MutationUpdateSavedDrugArgs, 'id' | 'input'>>;
};

export type PatentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Patent'] = ResolversParentTypes['Patent']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  drugId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  patentNum?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filingDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dateGranted?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Drug?: Resolver<ResolversTypes['Drug'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PatentsPerCompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['PatentsPerCompany'] = ResolversParentTypes['PatentsPerCompany']> = {
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _count?: Resolver<ResolversTypes['PatentsPerCompanyCount'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PatentsPerCompanyCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['PatentsPerCompanyCount'] = ResolversParentTypes['PatentsPerCompanyCount']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  activePatentsPerCompany?: Resolver<Array<ResolversTypes['PatentsPerCompany']>, ParentType, ContextType>;
  drug?: Resolver<Maybe<ResolversTypes['Drug']>, ParentType, ContextType, RequireFields<QueryDrugArgs, 'id'>>;
  drugs?: Resolver<Array<ResolversTypes['Drug']>, ParentType, ContextType, RequireFields<QueryDrugsArgs, 'take' | 'skip'>>;
  expiringSoon?: Resolver<Array<ResolversTypes['Patent']>, ParentType, ContextType>;
  patent?: Resolver<Maybe<ResolversTypes['Patent']>, ParentType, ContextType, RequireFields<QueryPatentArgs, 'id'>>;
  patents?: Resolver<Array<ResolversTypes['Patent']>, ParentType, ContextType>;
  recentlyExpired?: Resolver<Array<ResolversTypes['Patent']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  savedDrug?: Resolver<Maybe<ResolversTypes['SavedDrug']>, ParentType, ContextType, RequireFields<QuerySavedDrugArgs, 'id'>>;
  savedDrugs?: Resolver<Array<ResolversTypes['SavedDrug']>, ParentType, ContextType, RequireFields<QuerySavedDrugsArgs, 'userId'>>;
  totalPatentsPerCompany?: Resolver<Array<ResolversTypes['PatentsPerCompany']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SavedDrugResolvers<ContextType = any, ParentType extends ResolversParentTypes['SavedDrug'] = ResolversParentTypes['SavedDrug']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Drug?: Resolver<ResolversTypes['Drug'], ParentType, ContextType>;
  drugId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Drug?: DrugResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Patent?: PatentResolvers<ContextType>;
  PatentsPerCompany?: PatentsPerCompanyResolvers<ContextType>;
  PatentsPerCompanyCount?: PatentsPerCompanyCountResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  SavedDrug?: SavedDrugResolvers<ContextType>;
  Time?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

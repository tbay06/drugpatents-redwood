// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './DrugCell'
import type { FindDrugById, FindDrugByIdVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './DrugCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof FindDrugById | 'updating'
> & FindDrugByIdVariables

export default function (props: CellInputs): ReturnType<SuccessType>

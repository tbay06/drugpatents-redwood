// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './SavedDrugsCell'
import type { FindSavedDrugs, FindSavedDrugsVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './SavedDrugsCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof FindSavedDrugs | 'updating'
> & FindSavedDrugsVariables

export default function (props: CellInputs): ReturnType<SuccessType>

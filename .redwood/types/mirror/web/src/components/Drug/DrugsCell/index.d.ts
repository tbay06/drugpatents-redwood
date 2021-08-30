// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './DrugsCell'
import type { FindDrugs, FindDrugsVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './DrugsCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof FindDrugs | 'updating'
> & FindDrugsVariables

export default function (props: CellInputs): ReturnType<SuccessType>
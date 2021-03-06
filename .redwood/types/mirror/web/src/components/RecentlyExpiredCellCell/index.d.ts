// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './RecentlyExpiredCellCell'
import type { FindRecentlyExpiredCellQuery, FindRecentlyExpiredCellQueryVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './RecentlyExpiredCellCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof FindRecentlyExpiredCellQuery | 'updating'
> & FindRecentlyExpiredCellQueryVariables

export default function (props: CellInputs): ReturnType<SuccessType>

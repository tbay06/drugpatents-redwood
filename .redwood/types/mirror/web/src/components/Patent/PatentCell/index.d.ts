// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './PatentCell'
import type { FindPatentById, FindPatentByIdVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './PatentCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof FindPatentById | 'updating'
> & FindPatentByIdVariables

export default function (props: CellInputs): ReturnType<SuccessType>

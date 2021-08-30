// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './BlogPostCell'
import type { BlogPostQuery, BlogPostQueryVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './BlogPostCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof BlogPostQuery | 'updating'
> & BlogPostQueryVariables

export default function (props: CellInputs): ReturnType<SuccessType>
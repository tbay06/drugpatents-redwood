import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const patents = () => {
  return db.patent.findMany({
    orderby: [{ expirationDate: 'desc' }],
  })
}

export const patent = ({ id }) => {
  return db.patent.findUnique({
    where: { id },
    orderby: [{ expirationDate: 'desc' }],
  })
}

export const createPatent = ({ input }) => {
  requireAuth()
  return db.patent.create({
    data: input,
  })
}

export const updatePatent = ({ id, input }) => {
  requireAuth()
  return db.patent.update({
    data: input,
    where: { id },
  })
}

export const deletePatent = ({ id }) => {
  requireAuth()
  return db.patent.delete({
    where: { id },
  })
}

export const Patent = {
  Drug: (_obj, { root }) =>
    db.patent.findUnique({ where: { id: root.id } }).Drug(),
}

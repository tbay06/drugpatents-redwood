import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const drugs = ({ take = 10000, skip = 0 }) => {
  return db.drug.findMany({
    take: take,
    skip: skip,
    orderBy: [{ brandName: 'asc' }],
  })
}
export const drugCount = () => {
  return db.drug.count()
}

export const drug = ({ id }) => {
  return db.drug.findUnique({
    where: { id },
  })
}

export const createDrug = ({ input }) => {
  requireAuth()
  return db.drug.create({
    data: input,
  })
}

export const updateDrug = ({ id, input }) => {
  requireAuth()
  return db.drug.update({
    data: input,
    where: { id },
  })
}

export const deleteDrug = ({ id }) => {
  requireAuth()
  return db.drug.delete({
    where: { id },
  })
}

export const Drug = {
  Patent: (_obj, { root }) =>
    db.drug
      .findUnique({ where: { id: root.id } })
      .Patent({ orderBy: [{ expirationDate: 'desc' }] }),
  SavedDrug: (_obj, { root }) =>
    db.drug.findUnique({ where: { id: root.id } }).SavedDrug(),
}

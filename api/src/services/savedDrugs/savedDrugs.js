import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const savedDrugsAdmin = () => {
  return db.savedDrug.findMany()
}

export const savedDrugs = () => {
  return db.savedDrug.findMany()
}

export const savedDrug = ({ id }) => {
  return db.savedDrug.findUnique({
    where: { id },
  })
}

export const createSavedDrug = ({ input }) => {
  return db.savedDrug.create({
    data: input,
  })
}

export const updateSavedDrug = ({ id, input }) => {
  return db.savedDrug.update({
    data: input,
    where: { id },
  })
}

export const deleteSavedDrug = ({ id }) => {
  return db.savedDrug.delete({
    where: { id },
  })
}

export const SavedDrug = {
  Drug: (_obj, { root }) =>
    db.savedDrug.findUnique({ where: { id: root.id } }).Drug(),
}

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const patents = () => {
  return db.patent.findMany({
    orderBy: [{ expirationDate: 'desc' }],
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

export const patentCount = () => {
  return db.patent.count()
}

export const expiredPatentCount = () => {
  return db.patent.count({
    where: { expirationDate: { lte: new Date() } },
  })
}
export const activePatentCount = () => {
  return db.patent.count({
    where: { expirationDate: { gte: new Date() } },
  })
}
export const expiringSoonCount = () => {
  const now = new Date()
  const soon = new Date(now.getFullYear() + 1, now.getMonth(), now.getDay())
  return db.patent.count({
    where: {
      AND: [
        { expirationDate: { gte: now } },
        { expirationDate: { lte: soon } },
      ],
    },
  })
}
export const recentlyExpiredCount = () => {
  const now = new Date()
  const recent = new Date(now.getFullYear() - 1, now.getMonth(), now.getDay())
  return db.patent.count({
    where: {
      AND: [
        { expirationDate: { gte: recent } },
        { expirationDate: { lte: now } },
      ],
    },
  })
}

export const expiringSoon = () => {
  const now = new Date()
  const soon = new Date(now.getFullYear() + 1, now.getMonth(), now.getDay())
  return db.patent.findMany({
    distinct: ['patentNum'],
    where: {
      AND: [
        { expirationDate: { gte: now } },
        { expirationDate: { lte: soon } },
      ],
    },
    orderBy: { expirationDate: 'asc' },
  })
}
export const recentlyExpired = () => {
  const now = new Date()
  const recent = new Date(now.getFullYear() - 1, now.getMonth(), now.getDay())
  return db.patent.findMany({
    distinct: ['patentNum'],
    where: {
      AND: [
        { expirationDate: { gte: recent } },
        { expirationDate: { lte: now } },
      ],
    },
    orderBy: { expirationDate: 'desc' },
  })
}
export const totalPatentsPerCompany = () => {
  return db.patent.groupBy({
    by: ['companyName'],
    where: {
      companyName: {
        notIn: [''],
      },
    },
    _count: {
      id: true,
    },
    orderBy: { companyName: 'asc' },
  })
}
export const activePatentsPerCompany = () => {
  return db.patent.groupBy({
    by: ['companyName'],
    where: {
      companyName: {
        notIn: [''],
      },
      expirationDate: { gte: new Date() },
    },
    _count: {
      id: true,
    },
    orderBy: { companyName: 'asc' },
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

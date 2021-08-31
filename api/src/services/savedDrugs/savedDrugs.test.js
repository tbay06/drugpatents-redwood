import {
  savedDrugs,
  savedDrug,
  createSavedDrug,
  updateSavedDrug,
  deleteSavedDrug,
} from './savedDrugs'

describe('savedDrugs', () => {
  scenario('returns all savedDrugs', async (scenario) => {
    const result = await savedDrugs()

    expect(result.length).toEqual(Object.keys(scenario.savedDrug).length)
  })

  scenario('returns a single savedDrug', async (scenario) => {
    const result = await savedDrug({ id: scenario.savedDrug.one.id })

    expect(result).toEqual(scenario.savedDrug.one)
  })

  scenario('creates a savedDrug', async (scenario) => {
    const result = await createSavedDrug({
      input: { userId: 'String', drugId: scenario.savedDrug.two.drugId },
    })

    expect(result.userId).toEqual('String')
    expect(result.drugId).toEqual(scenario.savedDrug.two.drugId)
  })

  scenario('updates a savedDrug', async (scenario) => {
    const original = await savedDrug({ id: scenario.savedDrug.one.id })
    const result = await updateSavedDrug({
      id: original.id,
      input: { userId: 'String2' },
    })

    expect(result.userId).toEqual('String2')
  })

  scenario('deletes a savedDrug', async (scenario) => {
    const original = await deleteSavedDrug({ id: scenario.savedDrug.one.id })
    const result = await savedDrug({ id: original.id })

    expect(result).toEqual(null)
  })
})

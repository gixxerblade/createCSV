import faker from "@faker-js/faker"
import { Factory } from 'rosie'
import { seedUoM } from "./types"

export const seedHeader = {
  path: 'seeds.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'name', title: 'name' },
    { id: 'skuName', title: 'skuName' },
    { id: 'packageName', title: 'packageName' },
    { id: 'packageUnitQuantity', title: 'packageUnitQuantity' },
    { id: 'unitUoM', title: 'unitUoM' },
    { id: 'isActive', title: 'isActive' },
    { id: 'seedsPerUnit', title: 'seedsPerUnit' },
    { id: 'lbsPerUnit', title: 'lbsPerUnit' },
    { id: 'unitPrice', title: 'unitPrice' },
    { id: 'businessProductCategory', title: 'businessProductCategory' },
    { id: 'cropType', title: 'cropType' },
    { id: 'cropSubType', title: 'cropSubType' },
  ]
}

// export const SeedFactory = new Factory().attrs({
export const SeedFactory = (len, cropType, cropSubType) => {
  const seeds = []
  for (let i = 0; i < len; i++) {
      seeds.push({
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        skuName: faker.commerce.productName(),
        packageName: faker.commerce.productName(),
        packageUnitQuantity: faker.random.number(),
        unitUoM: seedUoM[faker.random.number(seedUoM.length - 1)],
        isActive: faker.random.boolean(),
        seedsPerUnit: faker.random.number(),
        lbsPerUnit: faker.random.number(),
        unitPrice: faker.random.number(),
        businessProductCategory: faker.commerce.productName(),
        cropType, 
        cropSubType,
      })
    }
    return seeds
  }

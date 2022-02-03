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

export const SeedFactory = new Factory().attrs({
  id: '',
  name: faker.lorem.slug(2),
  skuName: faker.lorem.slug(2),
  packageName: faker.lorem.slug(2),
  packageUnitQuantity: faker.datatype.number({ min: 1, max: 5 }),
  unitUoM: seedUoM[Math.floor(Math.random() * seedUoM.length)],
  isActive: true,
  seedsPerUnit: faker.datatype.number({ min: 10_000, max: 1_000_000 }),
  lbsPerUnit: faker.datatype.number({ min: 10, max: 60 }),
  unitPrice: faker.datatype.number({ min: 10, max: 60 }),
  businessProductCategory: '',
  // cropType: type,
  // cropSubType: subType,
})
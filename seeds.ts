import faker from "@faker-js/faker"
import { crops } from "./cropTypes";
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

export const SeedFactory = (recordsToCreate) => {
  const seeds = [];
  for (let i = 0; i < recordsToCreate; i++) {
    const { cropType, cropSubType } = crops[Math.floor(Math.random() * crops.length)]
    seeds.push({
        id: '',
        name: faker.commerce.productName(),
        skuName: faker.phone.phoneNumber('##########'),
        packageName: faker.commerce.productName(),
        packageUnitQuantity: faker.datatype.number({ min: 1, max: 5 }),
        unitUoM: seedUoM[Math.floor(Math.random() * seedUoM.length)],
        isActive: true,
        seedsPerUnit: faker.datatype.number({ min: 10_000, max: 1_000_000 }),
        get lbsPerUnit() {
          return this.unitUoM === 'LB' ? 1 : faker.datatype.number({ min: 10, max: 60 })
        },
        unitPrice: faker.commerce.price(10, 60, 2, ''),
        businessProductCategory: '',
        cropType,
        cropSubType,
      });
  }
  return seeds;
}
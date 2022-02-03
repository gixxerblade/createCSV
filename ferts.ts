import faker from "@faker-js/faker"
import { dryUoM, FertilizerChemicalShape } from "./types"

export const fertilizerHeader = {
  path: 'fertilizers.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'name', title: 'name' },
    { id: 'skuName', title: 'skuName' },
    { id: 'packageName', title: 'packageName' },
    { id: 'packageUnitQuantity', title: 'packageUnitQuantity' },
    { id: 'unitUoM', title: 'unitUoM' },
    { id: 'isActive', title: 'isActive' },
    { id: 'formulation', title: 'formulation' },
    { id: 'unitPrice', title: 'unitPrice' },
    { id: 'businessProductCategory', title: 'businessProductCategory' },
  ]
}


export const FertilizerFactory = (recordsToCreate: number) => {
  const ferts: FertilizerChemicalShape[] = [];
  for (let i = 0; i < recordsToCreate; i++) {
    ferts.push({
      id: '',
      name: faker.commerce.productName(),
      skuName: faker.phone.phoneNumber('##########'),
      packageName: faker.commerce.productName(),
      packageUnitQuantity: faker.datatype.number({ min: 1, max: 10 }),
      unitUoM: dryUoM[Math.floor(Math.random() * dryUoM.length)],
      isActive: true,
      formulation: 'DRY',
      unitPrice: faker.commerce.price(10, 60, 2, ''),
      businessProductCategory: '',
    })
  }
  return ferts
}

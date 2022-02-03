import faker from "@faker-js/faker"
import { FertilizerChemicalShape, liquidUoM } from "./types"

export const chemicalHeader = {
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

export const ChemicalFactory = (recordsToCreate: number) => {
  const chemicals: FertilizerChemicalShape[] = []
  for (let i = 0; i < recordsToCreate; i++) {
    chemicals.push({
      id: '',
      name: faker.commerce.productName(),
      skuName: faker.phone.phoneNumber('##########'),
      packageName: faker.commerce.productName(),
      packageUnitQuantity: faker.datatype.number({ min: 1, max: 10 }),
      unitUoM: liquidUoM[Math.floor(Math.random() * liquidUoM.length)],
      isActive: true,
      formulation: 'LIQUID',
      unitPrice: faker.commerce.price(10, 60, 2, ''),
      businessProductCategory: '',
    })
  }
  return chemicals
}
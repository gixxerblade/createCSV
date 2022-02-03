import faker from "@faker-js/faker"
import { Factory } from 'rosie'
import { dryUoM } from "./types"

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

export const FertilizerFactory = new Factory().attrs({
  id: '',
  name: faker.lorem.slug(2),
  skuName: faker.lorem.slug(2),
  packageName: faker.lorem.slug(2),
  packageUnitQuantity: faker.datatype.number({ min: 1, max: 10 }),
  unitUoM: dryUoM[Math.floor(Math.random() * dryUoM.length)],
  isActive: true,
  formulation: 'DRY',
  unitPrice: faker.commerce.price(),
  businessProductCategory: '',
})


export type ProductType = 'Seed' | 'Fertilizer' | 'Chemical'

export interface FertilizerChemicalShape {
  id: string,
  name: string,
  skuName: string,
  packageName: string,
  packageUnitQuantity: number,
  unitUoM: string,
  isActive: boolean,
  formulation: string,
  unitPrice: string,
  businessProductCategory: string,
}

export const productTypes: ProductType[] = ['Seed', 'Fertilizer', 'Chemical']

export const seedUoM = ['LB', 'BAG', 'BU']
export const dryUoM = ['LB', 'TON', 'OZ']
export const liquidUoM = ['OZ', 'PT', 'QT', 'GAL', 'TOTE']

export enum SeedProductUnitOfMeasure {
  POUND = 'LB',
  BAG = 'BAG',
  BUSHEL = 'BU',
}

export enum LiquidFormulationUnitOfMeasure {
  FLUID_OUNCE = 'OZ',
  PINT = 'PT',
  QUART = 'QT',
  GALLON = 'GAL',
  TOTE = 'TOTE',
}

export enum DryFormulationUnitOfMeasure {
  POUND = 'LB',
  TON = 'TON',
  OUNCE = 'OZ',
}

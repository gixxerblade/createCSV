const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const inquirer = require('inquirer');
import { crops } from './cropTypes';
import { ProductType, productTypes } from './types';
import { SeedFactory, seedHeader } from './seeds';
import { fertilizerHeader, FertilizerFactory } from './ferts';
import { ChemicalFactory, chemicalHeader } from './chems';

let data = [];
type TypesOfAnswers = {
  productToCreate: ProductType,
  recordsToCreate: number,
}
const questions = [
  {
    name: 'productToCreate',
    type: 'list',
    message: 'What type of csv do you want to generate?',
    choices: productTypes,
    default: 'Seed'
  },
  {
    name: 'recordsToCreate',
    type: 'number',
    message: 'How many records do you want to create?',
  }
];

const productLookup = {
  Seed: {
    path: seedHeader.path,
    header: seedHeader.header,
    data: SeedFactory
  },
  Fertilizer: {
    path: fertilizerHeader.path,
    header: fertilizerHeader.header,
    data: FertilizerFactory,
  },
  Chemical: {
    path: chemicalHeader.path,
    header: chemicalHeader.header,
    data: ChemicalFactory,
  }
}

inquirer.prompt(questions).then((answers: TypesOfAnswers) => {
  const { productToCreate, recordsToCreate } = answers;
  const csvWriter = createCsvWriter({
    path: productLookup[productToCreate].path,
    header: productLookup[productToCreate].header
  })
  const { cropType, cropSubType } = crops[Math.floor(Math.random() * crops.length)]
  data = productToCreate === "Seed"
    ? productLookup[productToCreate].data(recordsToCreate, cropType, cropSubType)
    : productLookup[productToCreate].data.buildList(recordsToCreate)
  console.log("data:", data)
  csvWriter.writeRecords(data)
    .then(() => {
      console.log(`The CSV file, ${__dirname}/${productLookup[productToCreate].path} was written successfully`);
    }).catch((err: { isTtyError: any; }) => {
      if (err.isTtyError) {
        console.log('Your enviroment is not supported at this time!')
      } else {
        console.log('There was an error and we had to exit', err)
      }
    })
})

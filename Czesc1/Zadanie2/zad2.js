import fs from 'fs';
import { readData } from '../Zadanie1/zad1.js';

const createDataFiles = () => {
  const data = readData();
  data.forEach((element) => {
    fs.writeFileSync(
      `${element.Miasto}-${element.Imie}-${element.Nazwisko}.json`,
      JSON.stringify(element)
    );
  });
};

createDataFiles();

import { Container } from 'inversify';
import { Cat, Tree } from './entities';
import { Animal, Plant } from './interfaces';
import { TYPES } from './types';

const myContainer = new Container();
myContainer.bind<Animal>(TYPES.Animal).to(Cat);
myContainer.bind<Plant>(TYPES.Plant).to(Tree);

export { myContainer };

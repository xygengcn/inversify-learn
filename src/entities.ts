import { injectable } from 'inversify';
import 'reflect-metadata';
import { Animal, Plant } from './interfaces';

@injectable()
class Cat implements Animal {
    public eat() {
        return 'eat!';
    }
}

@injectable()
class Tree implements Plant {
    public water() {
        return 'water!';
    }
}

export { Cat, Tree };

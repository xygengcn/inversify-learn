import { inject } from 'inversify';
import { Controller } from '../decorate';
import { People, Animal, Plant } from '../interfaces';
import { TYPES } from '../types';

@Controller()
export default class Man implements People {
    private _cat: Animal;
    private _plant: Plant;

    public constructor(@inject(TYPES.Animal) Cat: Animal, @inject(TYPES.Plant) shuriken: Plant) {
        this._cat = Cat;
        this._plant = shuriken;
    }

    public food() {
        return this._cat.eat();
    }
    public cook() {
        return this._plant.water();
    }
}

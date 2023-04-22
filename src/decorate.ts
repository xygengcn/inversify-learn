import { injectable } from 'inversify';
import { myContainer } from './inversify.config';
import { People } from './interfaces';
import { TYPES } from './types';

export type Constructor<T = any> = new (...args: any[]) => T;
export function Controller() {
    return (target: Constructor) => {
        console.log('name', target.name);
        injectable()(target);
        myContainer.bind<People>(TYPES.People).to(target);
    };
}

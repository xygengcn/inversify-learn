import { myContainer } from './inversify.config';
import { TYPES } from './types';
import { People } from './interfaces';
import 'reflect-metadata';
import recursive from 'recursive-readdir';
import path from 'path';

(async () => {
    await recursive(path.join(__dirname, './controller'))
        .then((files) => {
            return files.forEach((file: string) => {
                const filename = file.slice(0, file.length - 3);
                const controller = require(filename);
                console.log(111, filename, controller);
                Reflect.defineMetadata('prefix', file, controller.default.prototype);
            });
        })
        .catch((e) => {
            console.error(e);
        });

    const people = myContainer.getAll<People>(TYPES.People);
    people.forEach((p) => {
        console.log(p.food());
        const prefix = Reflect.getMetadata('prefix', p);
        console.log('prefix', prefix);
    });
})();

import {IDataAccess } from './IDataAccess';

export class JsonDirs implements IDataAccess{
    ConnectionString: string;
    getOne(id: any) {
        throw new Error('Method not implemented.');
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
    query() {
        throw new Error('Method not implemented.');
    }
    insertOne(obj: any) {
        throw new Error('Method not implemented.');
    }
    insertMany(objs: any) {
        throw new Error('Method not implemented.');
    }
    deleteOne(id: any) {
        throw new Error('Method not implemented.');
    }
    updateOne(id: any, obj: any) {
        throw new Error('Method not implemented.');
    }

}
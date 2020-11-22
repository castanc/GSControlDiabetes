export interface IDataAccess{
    ConnectionString: string;

    getOne(id);
    getAll();
    query();
    insertOne(obj);
    insertMany(objs)
    deleteOne(id);
    updateOne(id,obj);
}
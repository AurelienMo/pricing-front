export class Model {
    static loadCollection<T extends Model>(data: any, model: {new (data: any): T}): T[] {
        const collection: T[] = [];

        for (let i = 0; i < data.length; i++) {
            collection.push(
                new model(data[i])
            );
        }

        return collection;
    }

    constructor(data: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
}

import { FindManyProps, RowType } from './types';
export interface IORM<RowObj extends RowType> {
    findMany(args: FindManyProps<RowObj>): any;
}
export declare class ORM<RowObj extends RowType> implements IORM<RowObj> {
    private readonly tableName;
    constructor(tableName: string);
    create(record: any): Promise<void>;
    read(key: any): Promise<void>;
    findMany({ key, where }: {
        key: any;
        where: any;
    }): Promise<Record<string, any>[] | undefined>;
    update(key: any, updateExpression: any, expressionAttributeValues: any): Promise<void>;
    delete(key: any): Promise<void>;
}

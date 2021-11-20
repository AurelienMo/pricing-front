import { Model }        from '../Model';
import { ApiValidResponse } from './ApiValidResponse';

export class ApiDataResponse extends ApiValidResponse {
    private rawResponse: any;
    private data: any[];
    private pagination: any;

    constructor(response: any, model: any) {
        super();

        this.rawResponse = response;

        if (response.data instanceof Array) {
            this.data = Model.loadCollection(response.data, model);
        } else {
            this.data = new model(response.data);
        }
    }
}

import {ApiResponse} from "./ApiResponse";

export class ApiErrorResponse extends ApiResponse {
    private error: any;
    private details: any;
    private errorDescription: any;
    private statusCode: any;
    private urlForward: any;

    constructor(reason: any) {
        super(false);
        if (reason) {
            this.error            = reason.error;
            this.errorDescription = reason.errorDescription;
            this.statusCode       = reason.statusCode;
            this.urlForward       = reason.urlForward;
            this.details          = reason.details;
        } else {
            this.error            = 'unknown_error';
            this.errorDescription = 'Unknown error';
            this.statusCode       = null;
        }
    }
}

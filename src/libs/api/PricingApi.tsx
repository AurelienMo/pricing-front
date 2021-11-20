import axios, {AxiosPromise, AxiosResponse} from "axios";
import {ApiErrorResponse} from "./responses/ApiErrorResponse";
import {ApiDataResponse} from "./responses/ApiDataResponse";
import {REFRESH_TOKEN} from "./endpoints";
import {refreshTokenInterceptorError} from "./refreshToken.interceptor";

const SUCCESSFUL_REQUEST_STATUS_CODE = [200, 201, 204]

export interface RefreshTokenResponseI {
    token: string;
    refresh_token: string;
}

let pendingRefreshResponse: AxiosPromise<RefreshTokenResponseI> | undefined;

interface AuthHeaderI {
    headers?: {[key: string]: string},
    params?: {[key: string]: string}
}

export interface RequestOptionsI {
    url: string,
    data?: any;
    addAuthHeader?: boolean;
    model?: any;
    config?: AuthHeaderI
}

axios.interceptors.response.use(
    response => {
        return response;
    },refreshTokenInterceptorError
)

export class PricingApi {
    static __addAuthHeader(config: AuthHeaderI) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${config.headers?.Authorization}`
    }

    static __catchError(reason: any) {
        let error = {
            details: null,
            error: 'unknown_error',
            errorDescription: 'Unknown error',
            statusCode: reason.response.status ?? null,
            urlForward: reason.response.data && reason.response.data.urlForward ? reason.response.data.urlForward : null
        }

        if (reason.response && reason.response.data) {
            if (reason.response.data.error) {
                error.error = reason.response.data.error;
            }
            if (reason.response.data.error_description) {
                error.error = reason.response.data.error_description;
            }
            if (reason.response.data.details) {
                error.details = reason.response.data.details;
            }
            if (reason.response.data.message) {
                error.error = reason.response.data.message;
            }
        } else if (reason.message) {
            error = {
                ...error,
                error           : reason.message,
                errorDescription: reason.message,
                statusCode      : reason.response.status ? reason.response.status : null
            };
        }

        throw new ApiErrorResponse(error);
    }

    static __request(method: string, {url, data, config = {}, addAuthHeader = true, model}: RequestOptionsI) {
        if (addAuthHeader) {
            PricingApi.__addAuthHeader(config);
        }

        method = method.toLowerCase();
        let response;

        if (['post', 'put', 'patch', 'delete'].indexOf(method) !== -1) {
            // @ts-ignore
            response = axios[method](url, data, config);
        } else {
            // @ts-ignore
            response = axios[method](url, config);
        }

        if (model) {
            response = response.then((response: any) => this.__transformResponse(response, model));
        }


        return response.catch(this.__catchError);
    }

    static __transformResponse(response: AxiosResponse, model: any): ApiDataResponse | ApiErrorResponse {

        if (SUCCESSFUL_REQUEST_STATUS_CODE.includes(response.status)) {
            return new ApiDataResponse(response, model);
        }

        return new ApiErrorResponse(response);
    }

    /**
     * @param options
     *
     * @returns {ApiErrorResponse|ApiDataResponse}
     */
    static delete(options: RequestOptionsI) {
        return PricingApi.__request('delete', options);
    }

    static get(options: RequestOptionsI) {
        return PricingApi.__request('get', options);
    }

    static head(options: RequestOptionsI) {
        return PricingApi.__request('head', options);
    }

    static patch(options: RequestOptionsI) {
        return PricingApi.__request('patch', options);
    }

    static post(options: RequestOptionsI) {
        return PricingApi.__request('post', options);
    }

    static put(options: RequestOptionsI) {
        return PricingApi.__request('put', options);
    }

    static async refreshAccessToken(
        refreshToken: string
    ): Promise<AxiosResponse<RefreshTokenResponseI>> {
        // As per the Smartpush's documentation, we need to be authenticated using OAuth2 Client Credentials
        if (!pendingRefreshResponse) {
            pendingRefreshResponse = axios.post<RefreshTokenResponseI>(
                REFRESH_TOKEN,
                {
                    refresh_token: refreshToken
                },
               { timeout: 30000 }
            );
            pendingRefreshResponse!
                .then(() => {
                    pendingRefreshResponse = undefined;
                })
                .catch(e => {
                    // Smartpush API returns 400 if the refresh token is invalid
                    if (typeof e.response !== "undefined" && e.response.status === 400) {
                        // store.dispatch(userFailedLoggedWithRefreshToken());
                    }
                });
        } else {
        }
        return pendingRefreshResponse;
    }
}

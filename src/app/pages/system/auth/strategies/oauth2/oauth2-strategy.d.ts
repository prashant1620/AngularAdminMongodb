import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthRefreshableToken, NbAuthResult, NbAuthToken } from '../../services/';
import { NbOAuth2AuthStrategyOptions, NbOAuth2ResponseType } from './oauth2-strategy.options';
import { NbAuthStrategyClass } from '../../auth.options';
/**
 * OAuth2 authentication strategy.
 *
 * Strategy settings:
 *
 * ```ts
 * export enum NbOAuth2ResponseType {
 *   CODE = 'code',
 *   TOKEN = 'token',
 * }
 *
 * export enum NbOAuth2GrantType {
 *   AUTHORIZATION_CODE = 'authorization_code',
 *   PASSWORD = 'password',
 *   REFRESH_TOKEN = 'refresh_token',
 * }
 *
 * export class NbOAuth2AuthStrategyOptions {
 *   name: string;
 *   baseEndpoint?: string = '';
 *   clientId: string = '';
 *   clientSecret: string = '';
 *   clientAuthMethod: string = NbOAuth2ClientAuthMethod.NONE;
 *   redirect?: { success?: string; failure?: string } = {
 *     success: '/',
 *     failure: null,
 *   };
 *   defaultErrors?: any[] = ['Something went wrong, please try again.'];
 *   defaultMessages?: any[] = ['You have been successfully authenticated.'];
 *   authorize?: {
 *     endpoint?: string;
 *     redirectUri?: string;
 *     responseType?: string;
 *     scope?: string;
 *     state?: string;
 *     params?: { [key: string]: string };
 *   } = {
 *     endpoint: 'authorize',
 *     responseType: NbOAuth2ResponseType.CODE,
 *   };
 *   token?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     redirectUri?: string;
 *     class: NbAuthTokenClass,
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
 *     class: NbAuthOAuth2Token,
 *   };
 *   refresh?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     scope?: string;
 *   } = {
 *     endpoint: 'token',
 *     grantType: NbOAuth2GrantType.REFRESH_TOKEN,
 *   };
 * }
 * ```
 *
 */
export declare class NbOAuth2AuthStrategy extends NbAuthStrategy {
    protected http: HttpClient;
    private route;
    private window;
    static setup(options: NbOAuth2AuthStrategyOptions): [NbAuthStrategyClass, NbOAuth2AuthStrategyOptions];
    readonly responseType: any;
    readonly clientAuthMethod: any;
    protected redirectResultHandlers: {
        [NbOAuth2ResponseType.CODE]: () => Observable<NbAuthResult>;
        [NbOAuth2ResponseType.TOKEN]: () => Observable<NbAuthResult>;
    };
    protected redirectResults: {
        [NbOAuth2ResponseType.CODE]: () => Observable<boolean>;
        [NbOAuth2ResponseType.TOKEN]: () => Observable<boolean>;
    };
    protected defaultOptions: NbOAuth2AuthStrategyOptions;
    constructor(http: HttpClient, route: ActivatedRoute, window: any);
    authenticate(data?: any): Observable<NbAuthResult>;
    getAuthorizationResult(): Observable<any>;
    refreshToken(token: NbAuthRefreshableToken): Observable<NbAuthResult>;
    passwordToken(email: string, password: string): Observable<NbAuthResult>;
    protected authorizeRedirect(): void;
    protected isRedirectResult(): Observable<boolean>;
    protected requestToken(code: string): Observable<NbAuthResult>;
    protected buildCodeRequestData(code: string): any;
    protected buildRefreshRequestData(token: NbAuthRefreshableToken): any;
    protected buildPasswordRequestData(email: string, password: string): any;
    protected buildAuthHeader(): any;
    protected cleanParams(params: any): any;
    protected addCredentialsToParams(params: any): any;
    protected handleResponseError(res: any): Observable<NbAuthResult>;
    protected buildRedirectUrl(): string;
    protected parseHashAsQueryParams(hash: string): {
        [key: string]: string;
    };
    protected createRefreshedToken(res: any, existingToken: NbAuthRefreshableToken): NbAuthToken;
    register(data?: any): Observable<NbAuthResult>;
    requestPassword(data?: any): Observable<NbAuthResult>;
    resetPassword(data?: any): Observable<NbAuthResult>;
    logout(): Observable<NbAuthResult>;
}

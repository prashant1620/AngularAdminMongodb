import { Inject, Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { NB_AUTH_STRATEGIES } from '../auth.options';
import { NbTokenService } from './token/token.service';
/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
var NbAuthService = /** @class */ (function () {
    function NbAuthService(tokenService, strategies) {
        this.tokenService = tokenService;
        this.strategies = strategies;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    /**
       * Retrieves current authenticated token stored
       * @returns {Observable<any>}
       */
    NbAuthService.prototype.getToken = /**
       * Retrieves current authenticated token stored
       * @returns {Observable<any>}
       */
    function () {
        return this.tokenService.get();
    };
    /**
     * Returns true if auth token is presented in the token storage
     * @returns {Observable<any>}
     */
    /**
       * Returns true if auth token is presented in the token storage
       * @returns {Observable<any>}
       */
    NbAuthService.prototype.isAuthenticated = /**
       * Returns true if auth token is presented in the token storage
       * @returns {Observable<any>}
       */
    function () {
        return this.getToken()
            .pipe(map(function (token) { return token.isValid(); }));
    };
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    /**
       * Returns tokens stream
       * @returns {Observable<NbAuthSimpleToken>}
       */
    NbAuthService.prototype.onTokenChange = /**
       * Returns tokens stream
       * @returns {Observable<NbAuthSimpleToken>}
       */
    function () {
        return this.tokenService.tokenChange();
    };
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    /**
       * Returns authentication status stream
       * @returns {Observable<boolean>}
       */
    NbAuthService.prototype.onAuthenticationChange = /**
       * Returns authentication status stream
       * @returns {Observable<boolean>}
       */
    function () {
        return this.onTokenChange()
            .pipe(map(function (token) { return token.isValid(); }));
    };
    /**
     * Authenticates with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Authenticates with the selected strategy
       * Stores received token in the token storage
       *
       * Example:
       * authenticate('email', {email: 'email@example.com', password: 'test'})
       *
       * @param strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.authenticate = /**
       * Authenticates with the selected strategy
       * Stores received token in the token storage
       *
       * Example:
       * authenticate('email', {email: 'email@example.com', password: 'test'})
       *
       * @param strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).authenticate(data)
            .pipe(switchMap(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Registers with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Registers with the selected strategy
       * Stores received token in the token storage
       *
       * Example:
       * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
       *
       * @param strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.register = /**
       * Registers with the selected strategy
       * Stores received token in the token storage
       *
       * Example:
       * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
       *
       * @param strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).register(data)
            .pipe(switchMap(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Sign outs with the selected strategy
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param strategyName
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Sign outs with the selected strategy
       * Removes token from the token storage
       *
       * Example:
       * logout('email')
       *
       * @param strategyName
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.logout = /**
       * Sign outs with the selected strategy
       * Removes token from the token storage
       *
       * Example:
       * logout('email')
       *
       * @param strategyName
       * @returns {Observable<NbAuthResult>}
       */
    function (strategyName) {
        var _this = this;
        return this.getStrategy(strategyName).logout()
            .pipe(switchMap(function (result) {
            if (result.isSuccess()) {
                _this.tokenService.clear()
                    .pipe(map(function () { return result; }));
            }
            return observableOf(result);
        }));
    };
    /**
     * Sends forgot password request to the selected strategy
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Sends forgot password request to the selected strategy
       *
       * Example:
       * requestPassword('email', {email: 'email@example.com'})
       *
       * @param strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.requestPassword = /**
       * Sends forgot password request to the selected strategy
       *
       * Example:
       * requestPassword('email', {email: 'email@example.com'})
       *
       * @param strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (strategyName, data) {
        return this.getStrategy(strategyName).requestPassword(data);
    };
    /**
     * Tries to reset password with the selected strategy
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Tries to reset password with the selected strategy
       *
       * Example:
       * resetPassword('email', {newPassword: 'test'})
       *
       * @param strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.resetPassword = /**
       * Tries to reset password with the selected strategy
       *
       * Example:
       * resetPassword('email', {newPassword: 'test'})
       *
       * @param strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (strategyName, data) {
        return this.getStrategy(strategyName).resetPassword(data);
    };
    /**
     * Sends a refresh token request
     * Stores received token in the token storage
     *
     * Example:
     * refreshToken('email', {token: token})
     *
     * @param {string} strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    /**
       * Sends a refresh token request
       * Stores received token in the token storage
       *
       * Example:
       * refreshToken('email', {token: token})
       *
       * @param {string} strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    NbAuthService.prototype.refreshToken = /**
       * Sends a refresh token request
       * Stores received token in the token storage
       *
       * Example:
       * refreshToken('email', {token: token})
       *
       * @param {string} strategyName
       * @param data
       * @returns {Observable<NbAuthResult>}
       */
    function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).refreshToken(data)
            .pipe(switchMap(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Get registered strategy by name
     *
     * Example:
     * getStrategy('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    /**
       * Get registered strategy by name
       *
       * Example:
       * getStrategy('email')
       *
       * @param {string} provider
       * @returns {NbAbstractAuthProvider}
       */
    NbAuthService.prototype.getStrategy = /**
       * Get registered strategy by name
       *
       * Example:
       * getStrategy('email')
       *
       * @param {string} provider
       * @returns {NbAbstractAuthProvider}
       */
    function (strategyName) {
        var found = this.strategies.find(function (strategy) { return strategy.getName() === strategyName; });
        if (!found) {
            throw new TypeError("There is no Auth Strategy registered under '" + strategyName + "' name");
        }
        return found;
    };
    NbAuthService.prototype.processResultToken = function (result) {
        if (result.isSuccess() && result.getToken()) {
            return this.tokenService.set(result.getToken())
                .pipe(map(function (token) {
                return result;
            }));
        }
        return observableOf(result);
    };
    NbAuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbAuthService.ctorParameters = function () { return [
        { type: NbTokenService, },
        { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_STRATEGIES,] },] },
    ]; };
    return NbAuthService;
}());
export { NbAuthService };
//# sourceMappingURL=auth.service.js.map
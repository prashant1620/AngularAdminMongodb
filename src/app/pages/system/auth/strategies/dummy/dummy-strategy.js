var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NbAuthStrategy } from '../auth-strategy';
import { NbAuthResult } from '../../services/auth-result';
import { dummyStrategyOptions } from './dummy-strategy-options';
/**
 * Dummy auth strategy. Could be useful for auth setup when backend is not available yet.
 *
 *
 * Strategy settings.
 *
 * ```ts
 * export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
 *   name = 'dummy';
 *   token = {
 *     class: NbAuthSimpleToken,
 *   };
 *   delay? = 1000;
 *   alwaysFail? = false;
 * }
 * ```
 */
var NbDummyAuthStrategy = /** @class */ (function (_super) {
    __extends(NbDummyAuthStrategy, _super);
    function NbDummyAuthStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = dummyStrategyOptions;
        return _this;
    }
    NbDummyAuthStrategy.setup = function (options) {
        return [NbDummyAuthStrategy, options];
    };
    NbDummyAuthStrategy.prototype.authenticate = function (data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.register = function (data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.requestPassword = function (data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.resetPassword = function (data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.logout = function (data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.refreshToken = function (data) {
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.createDummyResult = function (data) {
        if (this.getOption('alwaysFail')) {
            return new NbAuthResult(false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        return new NbAuthResult(true, this.createSuccessResponse(data), '/', [], ['Successfully logged in.'], this.createToken('test token'));
    };
    NbDummyAuthStrategy.decorators = [
        { type: Injectable },
    ];
    return NbDummyAuthStrategy;
}(NbAuthStrategy));
export { NbDummyAuthStrategy };
//# sourceMappingURL=dummy-strategy.js.map
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';
import { NbAuthService } from '../../services/auth.service';
var NbLogoutComponent = /** @class */ (function () {
    function NbLogoutComponent(service, options, router) {
        if (options === void 0) { options = {}; }
        this.service = service;
        this.options = options;
        this.router = router;
        this.redirectDelay = 0;
        this.strategy = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
    }
    NbLogoutComponent.prototype.ngOnInit = function () {
        this.logout(this.strategy);
    };
    NbLogoutComponent.prototype.logout = function (strategy) {
        var _this = this;
        this.service.logout(strategy).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbLogoutComponent.prototype.getConfigValue = function (key) {
        return getDeepFromObject(this.options, key, null);
    };
    NbLogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-logout',
                    template: "\n    <div>Logging out, please wait...</div>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbLogoutComponent.ctorParameters = function () { return [
        { type: NbAuthService, },
        { type: undefined, decorators: [{ type: Inject, args: [NB_AUTH_OPTIONS,] },] },
        { type: Router, },
    ]; };
    return NbLogoutComponent;
}());
export { NbLogoutComponent };
//# sourceMappingURL=logout.component.js.map
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NbAuthService } from '../services/auth.service';
import { takeWhile } from 'rxjs/operators';
var NbAuthComponent = /** @class */ (function () {
    // showcase of how to use the onAuthenticationChange method
    function NbAuthComponent(auth, location) {
        var _this = this;
        this.auth = auth;
        this.location = location;
        this.alive = true;
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    NbAuthComponent.prototype.back = function () {
        this.location.back();
        return false;
    };
    NbAuthComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbAuthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-auth',
                    styles: [":host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}:host /deep/ nb-card{height:calc(100vh - 2 * 2.5rem)}:host /deep/ nb-card-header a{text-decoration:none}:host /deep/ nb-card-header a i{font-size:2rem;font-weight:bold}:host /deep/ nb-card{margin:0}:host /deep/ .flex-centered{margin:auto}:host /deep/ nb-card-body{display:flex}@media (max-width: 550px){:host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}:host /deep/ nb-card{border-radius:0;height:100vh}} "],
                    template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>\n            <a href=\"#\" (click)=\"back()\"><i class=\"nb-arrow-thin-left\"></i></a>\n          </nb-card-header>\n          <nb-card-body>\n            <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n              <router-outlet></router-outlet>\n            </div>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbAuthComponent.ctorParameters = function () { return [
        { type: NbAuthService, },
        { type: Location, },
    ]; };
    return NbAuthComponent;
}());
export { NbAuthComponent };
//# sourceMappingURL=auth.component.js.map
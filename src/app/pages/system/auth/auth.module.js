import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule, } from '@nebular/theme';
import { NB_AUTH_FALLBACK_TOKEN, NbAuthService, NbAuthSimpleToken, NbAuthTokenParceler, NbTokenLocalStorage, NbTokenService, NbTokenStorage, } from './services';
import { NbDummyAuthStrategy, NbOAuth2AuthStrategy, NbPasswordAuthStrategy, } from './strategies';
import { defaultAuthOptions, NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_OPTIONS, NB_AUTH_STRATEGIES, NB_AUTH_TOKENS, NB_AUTH_USER_OPTIONS, } from './auth.options';
import { NbAuthComponent } from './components/auth.component';
import { NbAuthBlockComponent } from './components/auth-block/auth-block.component';
import { NbLoginComponent } from './components/login/login.component';
import { NbRegisterComponent } from './components/register/register.component';
import { NbLogoutComponent } from './components/logout/logout.component';
import { NbRequestPasswordComponent } from './components/request-password/request-password.component';
import { NbResetPasswordComponent } from './components/reset-password/reset-password.component';
import { routes } from './auth.routes';
import { deepExtend } from './helpers';
export function nbStrategiesFactory(options, injector) {
    var strategies = [];
    options.strategies
        .forEach(function (_a) {
        var strategyClass = _a[0], strategyOptions = _a[1];
        var strategy = injector.get(strategyClass);
        strategy.setOptions(strategyOptions);
        strategies.push(strategy);
    });
    return strategies;
}
export function nbTokensFactory(strategies) {
    var tokens = [];
    strategies
        .forEach(function (strategy) {
        tokens.push(strategy.getOption('token.class'));
    });
    return tokens;
}
export function nbOptionsFactory(options) {
    return deepExtend(defaultAuthOptions, options);
}
var NbAuthModule = /** @class */ (function () {
    function NbAuthModule() {
    }
    NbAuthModule.forRoot = function (nbAuthOptions) {
        return {
            ngModule: NbAuthModule,
            providers: [
                { provide: NB_AUTH_USER_OPTIONS, useValue: nbAuthOptions },
                { provide: NB_AUTH_OPTIONS, useFactory: nbOptionsFactory, deps: [NB_AUTH_USER_OPTIONS] },
                { provide: NB_AUTH_STRATEGIES, useFactory: nbStrategiesFactory, deps: [NB_AUTH_OPTIONS, Injector] },
                { provide: NB_AUTH_TOKENS, useFactory: nbTokensFactory, deps: [NB_AUTH_STRATEGIES] },
                { provide: NB_AUTH_FALLBACK_TOKEN, useValue: NbAuthSimpleToken },
                { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
                { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
                NbAuthTokenParceler,
                NbAuthService,
                NbTokenService,
                NbDummyAuthStrategy,
                NbPasswordAuthStrategy,
                NbOAuth2AuthStrategy,
            ],
        };
    };
    NbAuthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NbLayoutModule,
                        NbCardModule,
                        NbCheckboxModule,
                        NbAlertModule,
                        NbInputModule,
                        NbButtonModule,
                        RouterModule.forChild(routes),
                        FormsModule,
                        HttpClientModule,
                    ],
                    declarations: [
                        NbAuthComponent,
                        NbAuthBlockComponent,
                        NbLoginComponent,
                        NbRegisterComponent,
                        NbRequestPasswordComponent,
                        NbResetPasswordComponent,
                        NbLogoutComponent,
                    ],
                    exports: [
                        NbAuthComponent,
                        NbAuthBlockComponent,
                        NbLoginComponent,
                        NbRegisterComponent,
                        NbRequestPasswordComponent,
                        NbResetPasswordComponent,
                        NbLogoutComponent,
                    ],
                },] },
    ];
    return NbAuthModule;
}());
export { NbAuthModule };
//# sourceMappingURL=auth.module.js.map
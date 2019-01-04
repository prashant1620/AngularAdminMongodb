import { Injector, ModuleWithProviders } from '@angular/core';
import { NbAuthTokenClass } from './services';
import { NbAuthStrategy } from './strategies';
import { NbAuthOptions } from './auth.options';
export declare function nbStrategiesFactory(options: NbAuthOptions, injector: Injector): NbAuthStrategy[];
export declare function nbTokensFactory(strategies: NbAuthStrategy[]): NbAuthTokenClass[];
export declare function nbOptionsFactory(options: any): any;
export declare class NbAuthModule {
    static forRoot(nbAuthOptions?: NbAuthOptions): ModuleWithProviders;
}

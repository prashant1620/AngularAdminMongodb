import { InjectionToken } from '@angular/core';
var socialLinks = [];
export var defaultAuthOptions = {
    strategies: [],
    forms: {
        login: {
            redirectDelay: 500,
            // delay before redirect after a successful login, while success message is shown to the user
            strategy: 'email',
            // provider id key. If you have multiple strategies, or what to use your own
            rememberMe: true,
            // whether to show or not the `rememberMe` checkbox
            showMessages: {
                // show/not show success/error messages
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        register: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },
        requestPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        resetPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        logout: {
            redirectDelay: 500,
            strategy: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
    },
};
export var NB_AUTH_OPTIONS = new InjectionToken('Nebular Auth Options');
export var NB_AUTH_USER_OPTIONS = new InjectionToken('Nebular User Auth Options');
export var NB_AUTH_STRATEGIES = new InjectionToken('Nebular Auth Strategies');
export var NB_AUTH_TOKENS = new InjectionToken('Nebular Auth Tokens');
export var NB_AUTH_INTERCEPTOR_HEADER = new InjectionToken('Nebular Simple Interceptor Header');
//# sourceMappingURL=auth.options.js.map
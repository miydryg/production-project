import { addDecorator } from '@storybook/react';
import { withI18n } from 'storybook-addon-i18n';
import { I18nextProvider } from 'react-i18next';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from '../../src/app/provider/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },

    i18n: {
        provider: ({ children }) => (
            // eslint-disable-next-line no-undef
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        ),
        // eslint-disable-next-line max-len
        loader: (locale) => fetch(`locales/${locale}/translation.json`).then((response) => response.json()),
        supportedLocales: ['en-US', 'en', 'ua'],
        fallbackLocale: 'en',
    },

    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Themes.Light));
addDecorator(RouterDecorator);
addDecorator(withI18n);

import { StoryFn } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line pp-checker/layer-imports-checker
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const themeDecorator = (theme:Theme) => (Story:StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>
);

import { StoryFn } from '@storybook/react';

// eslint-disable-next-line pp-checker/layer-imports-checker
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const themeDecorator = (theme:Theme) => (Story:StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>
);

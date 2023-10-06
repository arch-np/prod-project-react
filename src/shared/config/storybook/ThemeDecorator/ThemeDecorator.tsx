import { Theme } from 'app/providers/ThemeProvider';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme:Theme) => (Story:StoryFn) => (
    <div className={`app ${theme}`}>
        <Story/>
    </div>
);

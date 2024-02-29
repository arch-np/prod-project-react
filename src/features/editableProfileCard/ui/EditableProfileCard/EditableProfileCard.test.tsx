import 'whatwg-fetch';// https://stackoverflow.com/a/72323038
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 32,
    currency: Currency.USD,
    country: Country.Armenia,
    city: 'Moscow',
    username: 'admin123',
};
const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
describe('features/EditableProfileCard', () => {
    test('Режим readonly должен переключиться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене, значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.InputFirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.InputLastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.InputFirstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.InputLastName'), 'user');

        expect(screen.getByTestId('ProfileCard.InputFirstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.InputLastName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.InputFirstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.InputLastName')).toHaveValue('admin');
    });

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.InputFirstName'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.InputFirstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});

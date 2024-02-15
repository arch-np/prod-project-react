import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'Admin',
            age: 30,
            country: Country.Belarus,
            lastname: 'Fut',
            first: 'Smit',
            city: 'fdg',
            currency: Currency.EUR,
        };
        const state:DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './getSetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({
    on,
    off,
    name,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}

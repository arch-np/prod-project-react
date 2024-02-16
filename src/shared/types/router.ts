import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line pp-checker/layer-imports-checker
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

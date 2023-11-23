export { UserRole } from 'entities/User/model/types/user';
export { getIsUserAdmin, getIsUserManager, getUserRoles } from 'entities/User/model/selectors/roleSelectors';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export {
    userReducer,
    userActions,
} from './model/slice/userSlice';
export type {
    User,
    UserSchema,
} from './model/types/user';

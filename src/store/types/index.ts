import { AuthenticateActionTypes } from './auth';
import { GeneralActionTypes } from './general';

// Combining all possible redux actions
export type AppActions = AuthenticateActionTypes | GeneralActionTypes;

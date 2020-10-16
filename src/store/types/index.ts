import { AuthenticateActionTypes } from './auth';
import { SwitchLanguageAction } from './general';

// Combining all possible redux actions
export type AppActions = AuthenticateActionTypes | SwitchLanguageAction;

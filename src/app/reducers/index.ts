import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer, Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

export interface State {
  router: any;
}

export const reducers = {
  router: routerReducer
};



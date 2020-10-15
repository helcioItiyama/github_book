import { action } from 'typesafe-actions';
import { ActionTypes, Dev } from '../types';

interface IDevs {
  type: string;
  payload: Dev;
}

interface RemoveDev {
  type: string;
  payload: number;
}

export const saveDev = (dev: Dev): IDevs => action(ActionTypes.ADD_DEV, dev);

export const removeDev = (id: number): RemoveDev =>
  action(ActionTypes.REMOVE_DEV, id);

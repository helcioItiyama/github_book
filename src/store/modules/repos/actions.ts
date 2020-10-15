import { action } from 'typesafe-actions';
import { ActionTypes, Repo } from '../types';

interface AddRepo {
  type: string;
  payload: Repo;
}

interface RemoveRepo {
  type: string;
  payload: number;
}

export const saveRepo = (repo: Repo): AddRepo =>
  action(ActionTypes.ADD_REPO, repo);

export const removeRepo = (id: number): RemoveRepo =>
  action(ActionTypes.REMOVE_REPO, id);

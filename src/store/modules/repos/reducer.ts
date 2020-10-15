import { Reducer } from 'redux';
import { ActionTypes, RepoState } from '../types';

const initialState: RepoState = {
  repos: [],
};

const repoReducer: Reducer<RepoState> = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case ActionTypes.ADD_REPO:
      return { repos: [...state.repos, payload] };
    case ActionTypes.REMOVE_REPO:
      return { repos: state.repos.filter(repo => repo.id !== payload) };
    default:
      return state;
  }
};

export default repoReducer;

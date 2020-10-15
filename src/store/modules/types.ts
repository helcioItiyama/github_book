// Action Types
// eslint-disable-next-line no-shadow
export enum ActionTypes {
  ADD_DEV = '@devs/ADD_DEV',
  REMOVE_DEV = '@devs/REMOVE_DEV',
  ADD_REPO = '@repos/ADD_REPO',
  REMOVE_REPO = '@repos/REMOVE_REPO',
}

// Data Types
export interface Dev {
  id: number;
  avatar_url: string;
  login: string;
  url: string;
}

export interface Repo {
  id: number;
  full_name: string;
  description: string;
  svn_url: string;
}

// State Types
export interface DevState {
  readonly devs: Dev[];
}

export interface RepoState {
  readonly repos: Repo[];
}

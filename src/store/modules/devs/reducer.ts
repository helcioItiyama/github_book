import { Reducer } from 'redux';
import { ActionTypes, DevState } from '../types';

const initialState: DevState = {
  devs: [],
};

const devReducer: Reducer<DevState> = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case ActionTypes.ADD_DEV:
      return { devs: [...state.devs, payload] };
    case ActionTypes.REMOVE_DEV:
      return { devs: state.devs.filter(dev => dev.id !== payload) };
    default:
      return state;
  }
};

export default devReducer;

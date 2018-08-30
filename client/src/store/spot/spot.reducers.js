import { spotActionsType } from "./spot.actions";

const initialState = {
  isLoading: false
};

export default function spotReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

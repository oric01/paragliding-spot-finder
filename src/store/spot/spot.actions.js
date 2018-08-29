import SpotModel from "./Spot.model";

export const spotActionsType = {
  FETCH_START: "SPOT_FETCH_START",
  FETCH_SUCCESS: "SPOT_FETCH_SUCCESS",
  FETCH_ERROR: "SPOT_FETCH_ERROR"
};

console.log(SpotModel);

export const fetch = () => dispatch => {
  dispatch({ type: spotActionsType.FETCH_START });

  return SpotModel.get()
    .then(spots =>
      dispatch({
        type: spotActionsType.FETCH_SUCCESS,
        payload: spots
      })
    )
    .catch(() => {
      dispatch({ type: spotActionsType.FETCH_ERROR });
    });
};

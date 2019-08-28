import * as filterAction from "./filter.actions";

const initialState: filterAction.validFilter = "All";

export function filterReducer(
  state = initialState,
  action: filterAction.Actions
): filterAction.validFilter {
  switch (action.type) {
    case filterAction.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

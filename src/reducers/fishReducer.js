let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'FISH_PENDING':
      return [{
        ...state,
        isLoading: true
      }];
    case 'FISH_FULFILLED':
      return action.payload;
    case 'FISH_REJECTED':
      return action.payload;

    default:
      return state;

  }

}

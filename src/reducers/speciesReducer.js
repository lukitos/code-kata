let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'SPECIES_PENDING':
      return [{
        ...state,
        isLoading: true
      }];
    case 'SPECIES_FULFILLED':
      return action.payload;
    case 'SPECIES_REJECTED':
      return action.payload;

    default:
      return state;

  }

}

/**
 * Created by DENG on 3/2/2018.
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state
  }
};
 
export default visibilityFilter;
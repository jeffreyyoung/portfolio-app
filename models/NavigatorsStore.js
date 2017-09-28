import {observable, extendObservable} from "mobx";


// gets the current screen from navigation state
function getCurrentRouteKey(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteKey(route);
  }
  return route.key;
}

class NavigatorsStore {
	@observable currentScreenKey
	
	onNavigationStateChange(prevState, currentState){
		const currentScreen = getCurrentRouteKey(currentState);
		const prevScreen = getCurrentRouteKey(prevState);

		if (prevScreen !== currentScreen) {
			this.currentScreenKey = currentScreen;
		}
	}
}
export default new NavigatorsStore();

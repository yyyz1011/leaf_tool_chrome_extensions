export default function dispatchEventStroage() {
	const signSetItem: any = localStorage.setItem;
	localStorage.setItem = function (key, val) {
		let setEvent: any = new Event('setItemEvent');
		setEvent.key = key;
		setEvent.newValue = val;
		window.dispatchEvent(setEvent);
		// eslint-disable-next-line prefer-rest-params
		signSetItem.apply(this, arguments);
	};
}

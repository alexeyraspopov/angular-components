import App from 'lib/App';

const SERVICE_NAME = 'UsersService';

export default SERVICE_NAME;

App.service(SERVICE_NAME, () => ({
	all() {
		return Promise.resolve([
			{name: 'Ann', isOnline: true},
			{name: 'Lisa', isOnline: true},
		]);
	},
}));

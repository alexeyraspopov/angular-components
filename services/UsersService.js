import App from 'lib/App';

const SERVICE_NAME = 'UsersService';

export default SERVICE_NAME;

App.service(SERVICE_NAME, () => ({
	all() {
		return Promise.resolve([
			{id: 'aa1', name: 'Ann', isOnline: true},
			{id: 'aa2', name: 'Lisa', isOnline: true},
		]);
	},
	async byId(id) {
		const users = await this.all();

		return users.find(user => user.id === id);
	}
}));

import App from 'App';
import 'components/user-info/user-info'
import usersListTemplate from './users-list.html';

const DIRECTIVE_NAME = 'usersList';

export default DIRECTIVE_NAME;

App.directive(DIRECTIVE_NAME, () => ({
	scope: {users: '=', selectUser: '=onSelect'},
	template: usersListTemplate,
}));

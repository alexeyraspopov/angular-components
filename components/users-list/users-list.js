import App from 'lib/App';
import usersListTemplate from './users-list.html';
import 'components/user-info/user-info';

const DIRECTIVE_NAME = 'usersList';

export default DIRECTIVE_NAME;

App.directive(DIRECTIVE_NAME, () => ({
	scope: {users: '=', selectUser: '=onSelect'},
	template: usersListTemplate,
}));

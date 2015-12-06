import App from 'App';
import userInfoTemplate from './user-info.html';

const DIRECTIVE_NAME = 'userInfo';

export default DIRECTIVE_NAME;

App.directive(DIRECTIVE_NAME, () => ({
	scope: {user: '='},
	template: userInfoTemplate
}));

import { ApiException } from '../ApiException';

export class RouteControllerNotAFunction extends ApiException {
	get code(): string {
		return 'API.ROUTE_CONTROLLER.RESOLVER_NOT_A_FUNCTION';
	}

}
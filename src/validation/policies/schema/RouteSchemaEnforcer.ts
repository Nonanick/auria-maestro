import { Maybe, MaybePromise } from '../../../error/Maybe';
import { IProxiedApiRoute } from '../../../proxy/IProxiedApiRoute';
import { IApiRouteRequest } from '../../../request/IApiRouteRequest';

export type RouteSchemaEnforcer = (
  route: IProxiedApiRoute,
  request: IApiRouteRequest
) => Maybe<true> | MaybePromise<true>;
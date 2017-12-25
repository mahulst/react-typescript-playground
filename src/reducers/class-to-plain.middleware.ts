/* tslint:disable */
export const classMiddleware = (store: any) => (next: any) => (action: any) => {
  const simpleAction = Object.assign({}, action);

  return next(simpleAction);
};

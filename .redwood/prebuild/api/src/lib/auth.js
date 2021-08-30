// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.fineUnique({ where: { email } })
//   }
//
// If you want to enforce role-based access ...
//
// You'll need to set the currentUser's roles attributes to the
// collection of roles as defined by your app.
//
// This allows requireAuth() on the api side and hasRole() in the useAuth() hook on the web side
// to check if the user is assigned a given role or not.
//
// How you set the currentUser's roles depends on your auth provider and its implementation.
//
// For example, your decoded JWT may store `roles` in it namespaced `app_metadata`:
//
// {
//   'https://example.com/app_metadata': { authorization: { roles: ['admin'] } },
//   'https://example.com/user_metadata': {},
//   iss: 'https://app.us.auth0.com/',
//   sub: 'email|1234',
//   aud: [
//     'https://example.com',
//     'https://app.us.auth0.com/userinfo'
//   ],
//   iat: 1596481520,
//   exp: 1596567920,
//   azp: '1l0w6JXXXXL880T',
//   scope: 'openid profile email'
// }
//
// The parseJWT utility will extract the roles from decoded token.
//
// The app_medata claim may or may not be namespaced based on the auth provider.
// Note: Auth0 requires namespacing custom JWT claims
//
// Some providers, such as with Auth0, will set roles an authorization
// attribute in app_metadata (namespaced or not):
//
// 'app_metadata': { authorization: { roles: ['publisher'] } }
// 'https://example.com/app_metadata': { authorization: { roles: ['publisher'] } }
//
// Other providers may include roles simply within app_metadata:
//
// 'app_metadata': { roles: ['author'] }
// 'https://example.com/app_metadata': { roles: ['author'] }
//
// And yet other may define roles as a custom claim at the root of the decoded token:
//
// roles: ['admin']
//
// The function `getCurrentUser` should return the user information
// together with a collection of roles to check for role assignment:
import { AuthenticationError, ForbiddenError, parseJWT, context } from '@redwoodjs/api';
/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param {string=, string[]=} role - An optional role
 *
 * @example - No role-based access control.
 *
 * export const getCurrentUser = async (decoded) => {
 *   return await db.user.fineUnique({ where: { decoded.email } })
 * }
 *
 * @example - User info is conatined in the decoded token and roles extracted
 *
 * export const getCurrentUser = async (decoded, { _token, _type }) => {
 *   return { ...decoded, roles: parseJWT({ decoded }).roles }
 * }
 *
 * @example - User record query by email with namespaced app_metadata roles
 *
 * export const getCurrentUser = async (decoded) => {
 *   const currentUser = await db.user.fineUnique({ where: { email: decoded.email } })
 *
 *   return {
 *     ...currentUser,
 *     roles: parseJWT({ decoded: decoded, namespace: NAMESPACE }).roles,
 *   }
 * }
 *
 * @example - User record query by an identity with app_metadata roles
 *
 * const getCurrentUser = async (decoded) => {
 *   const currentUser = await db.user.fineUnique({ where: { userIdentity: decoded.sub } })
 *   return {
 *     ...currentUser,
 *     roles: parseJWT({ decoded: decoded }).roles,
 *   }
 * }
 */

export const getCurrentUser = async (decoded, {
  _token,
  _type
}) => {
  return { ...decoded,
    roles: parseJWT({
      decoded
    }).roles
  };
};
/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param {string=} roles - An optional role or list of roles
 * @param {string[]=} roles - An optional list of roles

 * @example
 *
 * // checks if currentUser is authenticated
 * requireAuth()
 *
 * @example
 *
 * // checks if currentUser is authenticated and assigned one of the given roles
 * requireAuth({ role: 'admin' })
 * requireAuth({ role: ['editor', 'author'] })
 * requireAuth({ role: ['publisher'] })
 */

export const requireAuth = ({
  role
} = {}) => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.");
  }

  if (typeof role !== 'undefined' && typeof role === 'string' && !context.currentUser.roles?.includes(role)) {
    throw new ForbiddenError("You don't have access to do that.");
  }

  if (typeof role !== 'undefined' && Array.isArray(role) && !context.currentUser.roles?.some(r => role.includes(r))) {
    throw new ForbiddenError("You don't have access to do that.");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGguanMiXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb25FcnJvciIsIkZvcmJpZGRlbkVycm9yIiwicGFyc2VKV1QiLCJjb250ZXh0IiwiZ2V0Q3VycmVudFVzZXIiLCJkZWNvZGVkIiwiX3Rva2VuIiwiX3R5cGUiLCJyb2xlcyIsInJlcXVpcmVBdXRoIiwicm9sZSIsImN1cnJlbnRVc2VyIiwiaW5jbHVkZXMiLCJBcnJheSIsImlzQXJyYXkiLCJzb21lIiwiciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBQVNBLG1CQUFULEVBQThCQyxjQUE5QixFQUE4Q0MsUUFBOUMsRUFtRU9DLE9BbkVQLFFBQThELGdCQUE5RDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE9BQU8sTUFBTUMsY0FBYyxHQUFHLE9BQU9DLE9BQVAsRUFBZ0I7QUFBRUMsRUFBQUEsTUFBRjtBQUFVQyxFQUFBQTtBQUFWLENBQWhCLEtBQXNDO0FBQ2xFLFNBQU8sRUFBRSxHQUFHRixPQUFMO0FBQWNHLElBQUFBLEtBQUssRUFBRU4sUUFBUSxDQUFDO0FBQUVHLE1BQUFBO0FBQUYsS0FBRCxDQUFSLENBQXNCRztBQUEzQyxHQUFQO0FBQ0QsQ0FGTTtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsT0FBTyxNQUFNQyxXQUFXLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLElBQVcsRUFBWixLQUFtQjtBQUM1QyxNQUFJLENBQUNQLE9BQU8sQ0FBQ1EsV0FBYixFQUEwQjtBQUN4QixVQUFNLElBQUlYLG1CQUFKLENBQXdCLHVDQUF4QixDQUFOO0FBQ0Q7O0FBRUQsTUFDRSxPQUFPVSxJQUFQLEtBQWdCLFdBQWhCLElBQ0EsT0FBT0EsSUFBUCxLQUFnQixRQURoQixJQUVBLENBQUNQLE9BQU8sQ0FBQ1EsV0FBUixDQUFvQkgsS0FBcEIsRUFBMkJJLFFBQTNCLENBQW9DRixJQUFwQyxDQUhILEVBSUU7QUFDQSxVQUFNLElBQUlULGNBQUosQ0FBbUIsbUNBQW5CLENBQU47QUFDRDs7QUFFRCxNQUNFLE9BQU9TLElBQVAsS0FBZ0IsV0FBaEIsSUFDQUcsS0FBSyxDQUFDQyxPQUFOLENBQWNKLElBQWQsQ0FEQSxJQUVBLENBQUNQLE9BQU8sQ0FBQ1EsV0FBUixDQUFvQkgsS0FBcEIsRUFBMkJPLElBQTNCLENBQWlDQyxDQUFELElBQU9OLElBQUksQ0FBQ0UsUUFBTCxDQUFjSSxDQUFkLENBQXZDLENBSEgsRUFJRTtBQUNBLFVBQU0sSUFBSWYsY0FBSixDQUFtQixtQ0FBbkIsQ0FBTjtBQUNEO0FBQ0YsQ0FwQk0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmUgd2hhdCB5b3Ugd2FudCBgY3VycmVudFVzZXJgIHRvIHJldHVybiB0aHJvdWdob3V0IHlvdXIgYXBwLiBGb3IgZXhhbXBsZSxcclxuLy8gdG8gcmV0dXJuIGEgcmVhbCB1c2VyIGZyb20geW91ciBkYXRhYmFzZSwgeW91IGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlOlxyXG4vL1xyXG4vLyAgIGV4cG9ydCBjb25zdCBnZXRDdXJyZW50VXNlciA9IGFzeW5jICh7IGVtYWlsIH0pID0+IHtcclxuLy8gICAgIHJldHVybiBhd2FpdCBkYi51c2VyLmZpbmVVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pXHJcbi8vICAgfVxyXG4vL1xyXG4vLyBJZiB5b3Ugd2FudCB0byBlbmZvcmNlIHJvbGUtYmFzZWQgYWNjZXNzIC4uLlxyXG4vL1xyXG4vLyBZb3UnbGwgbmVlZCB0byBzZXQgdGhlIGN1cnJlbnRVc2VyJ3Mgcm9sZXMgYXR0cmlidXRlcyB0byB0aGVcclxuLy8gY29sbGVjdGlvbiBvZiByb2xlcyBhcyBkZWZpbmVkIGJ5IHlvdXIgYXBwLlxyXG4vL1xyXG4vLyBUaGlzIGFsbG93cyByZXF1aXJlQXV0aCgpIG9uIHRoZSBhcGkgc2lkZSBhbmQgaGFzUm9sZSgpIGluIHRoZSB1c2VBdXRoKCkgaG9vayBvbiB0aGUgd2ViIHNpZGVcclxuLy8gdG8gY2hlY2sgaWYgdGhlIHVzZXIgaXMgYXNzaWduZWQgYSBnaXZlbiByb2xlIG9yIG5vdC5cclxuLy9cclxuLy8gSG93IHlvdSBzZXQgdGhlIGN1cnJlbnRVc2VyJ3Mgcm9sZXMgZGVwZW5kcyBvbiB5b3VyIGF1dGggcHJvdmlkZXIgYW5kIGl0cyBpbXBsZW1lbnRhdGlvbi5cclxuLy9cclxuLy8gRm9yIGV4YW1wbGUsIHlvdXIgZGVjb2RlZCBKV1QgbWF5IHN0b3JlIGByb2xlc2AgaW4gaXQgbmFtZXNwYWNlZCBgYXBwX21ldGFkYXRhYDpcclxuLy9cclxuLy8ge1xyXG4vLyAgICdodHRwczovL2V4YW1wbGUuY29tL2FwcF9tZXRhZGF0YSc6IHsgYXV0aG9yaXphdGlvbjogeyByb2xlczogWydhZG1pbiddIH0gfSxcclxuLy8gICAnaHR0cHM6Ly9leGFtcGxlLmNvbS91c2VyX21ldGFkYXRhJzoge30sXHJcbi8vICAgaXNzOiAnaHR0cHM6Ly9hcHAudXMuYXV0aDAuY29tLycsXHJcbi8vICAgc3ViOiAnZW1haWx8MTIzNCcsXHJcbi8vICAgYXVkOiBbXHJcbi8vICAgICAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXHJcbi8vICAgICAnaHR0cHM6Ly9hcHAudXMuYXV0aDAuY29tL3VzZXJpbmZvJ1xyXG4vLyAgIF0sXHJcbi8vICAgaWF0OiAxNTk2NDgxNTIwLFxyXG4vLyAgIGV4cDogMTU5NjU2NzkyMCxcclxuLy8gICBhenA6ICcxbDB3NkpYWFhYTDg4MFQnLFxyXG4vLyAgIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUgZW1haWwnXHJcbi8vIH1cclxuLy9cclxuLy8gVGhlIHBhcnNlSldUIHV0aWxpdHkgd2lsbCBleHRyYWN0IHRoZSByb2xlcyBmcm9tIGRlY29kZWQgdG9rZW4uXHJcbi8vXHJcbi8vIFRoZSBhcHBfbWVkYXRhIGNsYWltIG1heSBvciBtYXkgbm90IGJlIG5hbWVzcGFjZWQgYmFzZWQgb24gdGhlIGF1dGggcHJvdmlkZXIuXHJcbi8vIE5vdGU6IEF1dGgwIHJlcXVpcmVzIG5hbWVzcGFjaW5nIGN1c3RvbSBKV1QgY2xhaW1zXHJcbi8vXHJcbi8vIFNvbWUgcHJvdmlkZXJzLCBzdWNoIGFzIHdpdGggQXV0aDAsIHdpbGwgc2V0IHJvbGVzIGFuIGF1dGhvcml6YXRpb25cclxuLy8gYXR0cmlidXRlIGluIGFwcF9tZXRhZGF0YSAobmFtZXNwYWNlZCBvciBub3QpOlxyXG4vL1xyXG4vLyAnYXBwX21ldGFkYXRhJzogeyBhdXRob3JpemF0aW9uOiB7IHJvbGVzOiBbJ3B1Ymxpc2hlciddIH0gfVxyXG4vLyAnaHR0cHM6Ly9leGFtcGxlLmNvbS9hcHBfbWV0YWRhdGEnOiB7IGF1dGhvcml6YXRpb246IHsgcm9sZXM6IFsncHVibGlzaGVyJ10gfSB9XHJcbi8vXHJcbi8vIE90aGVyIHByb3ZpZGVycyBtYXkgaW5jbHVkZSByb2xlcyBzaW1wbHkgd2l0aGluIGFwcF9tZXRhZGF0YTpcclxuLy9cclxuLy8gJ2FwcF9tZXRhZGF0YSc6IHsgcm9sZXM6IFsnYXV0aG9yJ10gfVxyXG4vLyAnaHR0cHM6Ly9leGFtcGxlLmNvbS9hcHBfbWV0YWRhdGEnOiB7IHJvbGVzOiBbJ2F1dGhvciddIH1cclxuLy9cclxuLy8gQW5kIHlldCBvdGhlciBtYXkgZGVmaW5lIHJvbGVzIGFzIGEgY3VzdG9tIGNsYWltIGF0IHRoZSByb290IG9mIHRoZSBkZWNvZGVkIHRva2VuOlxyXG4vL1xyXG4vLyByb2xlczogWydhZG1pbiddXHJcbi8vXHJcbi8vIFRoZSBmdW5jdGlvbiBgZ2V0Q3VycmVudFVzZXJgIHNob3VsZCByZXR1cm4gdGhlIHVzZXIgaW5mb3JtYXRpb25cclxuLy8gdG9nZXRoZXIgd2l0aCBhIGNvbGxlY3Rpb24gb2Ygcm9sZXMgdG8gY2hlY2sgZm9yIHJvbGUgYXNzaWdubWVudDpcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRXJyb3IsIEZvcmJpZGRlbkVycm9yLCBwYXJzZUpXVCB9IGZyb20gJ0ByZWR3b29kanMvYXBpJ1xyXG5cclxuLyoqXHJcbiAqIFVzZSByZXF1aXJlQXV0aCBpbiB5b3VyIHNlcnZpY2VzIHRvIGNoZWNrIHRoYXQgYSB1c2VyIGlzIGxvZ2dlZCBpbixcclxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgYXNzaWduZWQgYSByb2xlLCBhbmQgb3B0aW9uYWxseSByYWlzZSBhblxyXG4gKiBlcnJvciBpZiB0aGV5J3JlIG5vdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmc9LCBzdHJpbmdbXT19IHJvbGUgLSBBbiBvcHRpb25hbCByb2xlXHJcbiAqXHJcbiAqIEBleGFtcGxlIC0gTm8gcm9sZS1iYXNlZCBhY2Nlc3MgY29udHJvbC5cclxuICpcclxuICogZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKGRlY29kZWQpID0+IHtcclxuICogICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5lVW5pcXVlKHsgd2hlcmU6IHsgZGVjb2RlZC5lbWFpbCB9IH0pXHJcbiAqIH1cclxuICpcclxuICogQGV4YW1wbGUgLSBVc2VyIGluZm8gaXMgY29uYXRpbmVkIGluIHRoZSBkZWNvZGVkIHRva2VuIGFuZCByb2xlcyBleHRyYWN0ZWRcclxuICpcclxuICogZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKGRlY29kZWQsIHsgX3Rva2VuLCBfdHlwZSB9KSA9PiB7XHJcbiAqICAgcmV0dXJuIHsgLi4uZGVjb2RlZCwgcm9sZXM6IHBhcnNlSldUKHsgZGVjb2RlZCB9KS5yb2xlcyB9XHJcbiAqIH1cclxuICpcclxuICogQGV4YW1wbGUgLSBVc2VyIHJlY29yZCBxdWVyeSBieSBlbWFpbCB3aXRoIG5hbWVzcGFjZWQgYXBwX21ldGFkYXRhIHJvbGVzXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBnZXRDdXJyZW50VXNlciA9IGFzeW5jIChkZWNvZGVkKSA9PiB7XHJcbiAqICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmVVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogZGVjb2RlZC5lbWFpbCB9IH0pXHJcbiAqXHJcbiAqICAgcmV0dXJuIHtcclxuICogICAgIC4uLmN1cnJlbnRVc2VyLFxyXG4gKiAgICAgcm9sZXM6IHBhcnNlSldUKHsgZGVjb2RlZDogZGVjb2RlZCwgbmFtZXNwYWNlOiBOQU1FU1BBQ0UgfSkucm9sZXMsXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBleGFtcGxlIC0gVXNlciByZWNvcmQgcXVlcnkgYnkgYW4gaWRlbnRpdHkgd2l0aCBhcHBfbWV0YWRhdGEgcm9sZXNcclxuICpcclxuICogY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoZGVjb2RlZCkgPT4ge1xyXG4gKiAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZGIudXNlci5maW5lVW5pcXVlKHsgd2hlcmU6IHsgdXNlcklkZW50aXR5OiBkZWNvZGVkLnN1YiB9IH0pXHJcbiAqICAgcmV0dXJuIHtcclxuICogICAgIC4uLmN1cnJlbnRVc2VyLFxyXG4gKiAgICAgcm9sZXM6IHBhcnNlSldUKHsgZGVjb2RlZDogZGVjb2RlZCB9KS5yb2xlcyxcclxuICogICB9XHJcbiAqIH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VXNlciA9IGFzeW5jIChkZWNvZGVkLCB7IF90b2tlbiwgX3R5cGUgfSkgPT4ge1xyXG4gIHJldHVybiB7IC4uLmRlY29kZWQsIHJvbGVzOiBwYXJzZUpXVCh7IGRlY29kZWQgfSkucm9sZXMgfVxyXG59XHJcblxyXG4vKipcclxuICogVXNlIHJlcXVpcmVBdXRoIGluIHlvdXIgc2VydmljZXMgdG8gY2hlY2sgdGhhdCBhIHVzZXIgaXMgbG9nZ2VkIGluLFxyXG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBhc3NpZ25lZCBhIHJvbGUsIGFuZCBvcHRpb25hbGx5IHJhaXNlIGFuXHJcbiAqIGVycm9yIGlmIHRoZXkncmUgbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZz19IHJvbGVzIC0gQW4gb3B0aW9uYWwgcm9sZSBvciBsaXN0IG9mIHJvbGVzXHJcbiAqIEBwYXJhbSB7c3RyaW5nW109fSByb2xlcyAtIEFuIG9wdGlvbmFsIGxpc3Qgb2Ygcm9sZXNcclxuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIC8vIGNoZWNrcyBpZiBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkXHJcbiAqIHJlcXVpcmVBdXRoKClcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogLy8gY2hlY2tzIGlmIGN1cnJlbnRVc2VyIGlzIGF1dGhlbnRpY2F0ZWQgYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXNcclxuICogcmVxdWlyZUF1dGgoeyByb2xlOiAnYWRtaW4nIH0pXHJcbiAqIHJlcXVpcmVBdXRoKHsgcm9sZTogWydlZGl0b3InLCAnYXV0aG9yJ10gfSlcclxuICogcmVxdWlyZUF1dGgoeyByb2xlOiBbJ3B1Ymxpc2hlciddIH0pXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZUF1dGggPSAoeyByb2xlIH0gPSB7fSkgPT4ge1xyXG4gIGlmICghY29udGV4dC5jdXJyZW50VXNlcikge1xyXG4gICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoYXQuXCIpXHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICB0eXBlb2Ygcm9sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgIHR5cGVvZiByb2xlID09PSAnc3RyaW5nJyAmJlxyXG4gICAgIWNvbnRleHQuY3VycmVudFVzZXIucm9sZXM/LmluY2x1ZGVzKHJvbGUpXHJcbiAgKSB7XHJcbiAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gZG8gdGhhdC5cIilcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIHR5cGVvZiByb2xlICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgQXJyYXkuaXNBcnJheShyb2xlKSAmJlxyXG4gICAgIWNvbnRleHQuY3VycmVudFVzZXIucm9sZXM/LnNvbWUoKHIpID0+IHJvbGUuaW5jbHVkZXMocikpXHJcbiAgKSB7XHJcbiAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gZG8gdGhhdC5cIilcclxuICB9XHJcbn1cclxuIl19
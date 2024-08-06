import { api } from './index';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLoggedInUser: builder.query({
      query: () => `user`,
      method: 'GET',
    }),
    getUserById: builder.query({
      query: (id) => `user/profile/${id}`,
      method: 'GET',
    }),
    getToken: builder.query({
      query: () => `token`,
      method: 'GET',
    }),
    getUserPref: builder.query({
      query: () => 'user/prefs',
      method: 'GET',
    }),
    updateUserPref: builder.mutation({
      query: (queryArgs) => ({
        url: 'user/prefs',
        method: 'POST',
        body: queryArgs,
        credentials: 'include',
      }),
    }),
    getProviderCapabilities: builder.query({
      query: () => 'provider/capabilities',
      method: 'GET',
    }),
  }),
});

export const {
  useGetLoggedInUserQuery,
  useGetUserByIdQuery,
  useLazyGetTokenQuery,
  useGetUserPrefQuery,
  useUpdateUserPrefMutation,
  useGetProviderCapabilitiesQuery,
} = userApi;

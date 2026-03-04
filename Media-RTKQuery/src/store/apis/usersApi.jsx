import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const userApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({     //fetchBaseQuery er en funktion fra RTK Query, som vi bruger til at lave vores baseQuery 
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query({
                query: () => {
                    return {
                        url: '/users',
                        method: 'GET',
                    };
                }
            }),
            addUser: builder.mutation({
                query: () => {
                    return {
                        url: '/users',
                        method: 'POST',
                        body: { name: faker.name.fullName() },
                    };
                }
            }),
            removeUser: builder.mutation({
                query: (user) => {
                    return {
                        url: `/users/${user.id}`,
                        method: 'DELETE',
                    };
                },
            }),
        };
    },
});


export const {
    useFetchUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation,
} = userApi;
export { userApi };
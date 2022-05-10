import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersApi = createApi({
    reducerPath: "UsersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://34.234.48.138:3600/users/",
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => "get_users",
            providesTags: ["User"],
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: "add_user",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `update_user/${user.id}`,
                method: "POST",
                body: {
                    user: user.state,
                    status: user.status,
                },
            }),
            invalidatesTags: ["User"],
        }),
        deleteUser: builder.mutation({
            query: (user) => ({
                url: `delete_user/${user.id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useGetUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = UsersApi.actions;

export default UsersApi.reducer;
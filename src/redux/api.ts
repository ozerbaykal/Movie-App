import { bodyType, detailType, resType } from "../types";
import { AUTHORIZATION_KEY, BASE_URL } from "../constans";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: AUTHORIZATION_KEY,
    },
  }),

  tagTypes: ["Movies", "Favorites"],

  endpoints: (builder) => ({
    getMovies: builder.query<resType, string>({
      query: (url) => url,
    }),

    getDetail: builder.query<detailType, string | undefined>({
      query: (id) => `/movie/${id}`,
    }),

    addToFavorite: builder.mutation<string, bodyType>({
      query: (body: bodyType) => ({
        url: "/account/19719088/favorite",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["Favorites"],
    }),

    getFavorites: builder.query<resType, void>({
      query: () => "/account/19719088/favorite/movies",
      providesTags: ["Favorites"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetDetailQuery,
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
} = api;

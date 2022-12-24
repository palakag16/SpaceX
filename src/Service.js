import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const SpaceX = createApi({
  reducerPath: 'SpaceX',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v3/payloads' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { UseSpaceXapi } = SpaceX
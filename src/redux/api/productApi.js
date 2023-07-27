import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productapi=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints:(builder)=>({
        getproductapi:builder.query({
            query:()=>({
                url:'products',
                method:'GET'
            })
        })
    })
})

export const {useGetproductapiQuery}=productapi
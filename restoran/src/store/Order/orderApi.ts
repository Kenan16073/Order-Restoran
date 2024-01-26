import { api } from "../api";

export const orderApi = api.injectEndpoints({
    endpoints:build=>({
        getTables : build.query({
            query : ()=>{
                return {
                    url : '/tables',
                    method : 'GET'
                }
            }
        }),
        getEmployee : build.query({
            query : ()=>{
                return {
                    url : '/employeer',
                    method : 'GET'
                }
            }
        }),
        getEats : build.query({
            query : ()=>{
                return {
                    url : '/eats',
                    method : 'GET'
                }
            }
        }),
    })
})

export const {useGetTablesQuery, useGetEmployeeQuery, useGetEatsQuery} = orderApi;

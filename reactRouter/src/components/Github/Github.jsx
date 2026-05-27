import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export default function(){
    const data = useLoaderData();
    return(
        <>
    <h1 className="text-center text-3xl">Github Followers: {data.followers} </h1>
    <img src={data.avatar_url} alt="Github Avatar" />

        </>
    )
}

const githubInfo =  async()=>{
    const res = await fetch('https://api.github.com/users/khushpatel173');
    const response = await res.json();
    return response;
}
export {githubInfo};
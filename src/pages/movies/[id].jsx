import React from 'react'
import { getMovie, getMovies } from '@/services/moviesService'
import { useRouter } from 'next/router';
export default function ({ movie }) {
    const router = useRouter();
    if (router.fallback) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <h1>{movie?.name}</h1>
            </div>
        )
    }
}
export async function getStaticProps({ params }) {
    const { data } = await getMovie(params.id);
    return {
        props: {
            movie: data
        }
    }
}
export async function getStaticPaths() {
    const { data } = await getMovies();
    const paths = data.map(m => ({
        params: {
            id: m._id
        }
    }))
    return {
        paths,
        fallback: true
    }
}

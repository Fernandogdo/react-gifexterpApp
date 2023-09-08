import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {


    const { images, isLoading } = useFetchGifs(category)
    console.log("🚀 ~ file: GifGrid.jsx:10 ~ GifGrid ~ images, isLoading :", { isLoading })




    // getGifs(category);

    return (
        <>
            <h3> {category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => {
                        return (
                            <GifItem
                                key={image.id}
                                {...image}

                            />
                        )
                    })
                }
            </div>
        </>
    )
}

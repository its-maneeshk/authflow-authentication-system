import React from 'react'
import DinoGame from '../Game Components/DinoGame'

const Game = () => {
    return (
        <>
            <div className="p-4 text-center">
                <h1 className="text-3xl font-bold">Mini Dino Game</h1>
                <DinoGame />
            </div>
        </>
    )
}

export default Game
import React, { useEffect, useRef, useState } from 'react';

const DinoGame = () => {
  const dinoRef = useRef(null);
  const obstacleRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.key === 'ArrowUp') {
        jump();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let scoreInterval;
    if (!gameOver) {
      scoreInterval = setInterval(() => {
        setScore((prev) => prev + 1);
      }, 200);
    }
    return () => clearInterval(scoreInterval);
  }, [gameOver]);

  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      let position = 0;
      const upInterval = setInterval(() => {
        if (position >= 150) {
          clearInterval(upInterval);
          const downInterval = setInterval(() => {
            if (position <= 0) {
              clearInterval(downInterval);
              setIsJumping(false);
            } else {
              position -= 10;
              dinoRef.current.style.bottom = `${position}px`;
            }
          }, 20);
        } else {
          position += 10;
          dinoRef.current.style.bottom = `${position}px`;
        }
      }, 20);
    }
  };

  useEffect(() => {
    const checkCollision = setInterval(() => {
      if (!dinoRef.current || !obstacleRef.current) return;

      const dinoTop = parseInt(window.getComputedStyle(dinoRef.current).getPropertyValue("bottom"));
      const obstacleLeft = parseInt(window.getComputedStyle(obstacleRef.current).getPropertyValue("left"));

      if (obstacleLeft < 50 && obstacleLeft > 0 && dinoTop < 50) {
        setGameOver(true);
        obstacleRef.current.style.animation = 'none';
        obstacleRef.current.style.left = `${obstacleLeft}px`;
      }
    }, 10);
    return () => clearInterval(checkCollision);
  }, []);

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    obstacleRef.current.style.animation = 'obstacleMove 2s linear infinite';
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gray-100 border border-gray-400 rounded-md shadow-md mt-6">
      <div ref={dinoRef} className="absolute bottom-0 left-12 w-12 h-12 bg-green-500 rounded-sm"></div>
      <div ref={obstacleRef} className="absolute bottom-0 left-full w-10 h-10 bg-red-500 animate-obstacleMove"></div>

      <div className="absolute top-2 left-2 text-lg font-semibold">
        Score: {score}
      </div>

      {gameOver && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h2 className="text-2xl font-bold">Game Over</h2>
          <p className="mt-2 mb-4">Final Score: {score}</p>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default DinoGame;

import React, { FC } from "react";

const App: FC = () => {
  return (
    <section className="h-screen w-full grid grid-cols-2 gap-0">
      <canvas className="h-full w-full bg-red-600"></canvas>
      <canvas className="h-full w-full bg-amber-400"></canvas>
      <canvas className="h-full w-full bg-lime-500"></canvas>
      <canvas className="h-full w-full bg-cyan-400"></canvas>
    </section>
  );
}

export default App;
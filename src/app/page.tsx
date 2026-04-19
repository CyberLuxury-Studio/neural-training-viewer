import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 tracking-widest text-[#00F0FF] uppercase">neural-training-viewer</h1>
      <p className="text-[#b9cacb] max-w-xl text-center">Build a model training visualizer. Feature node-graph visual placeholders, epoch progress rings, and real-time loss/accuracy charts.</p>
    </main>
  );
}

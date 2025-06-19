'use client';

export default function HeroSection() {
  return (
    <section className='relative w-full h-[100vh] overflow-hidden text-white'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 w-full h-full object-cover z-0 brightness-[.3]'
      >
        <source src='/videos/eternal-bg.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg'>
          ETERNAL
        </h1>
        <p className='mt-4 text-lg md:text-2xl text-zinc-200 max-w-2xl drop-shadow'>
          The Official Website of ETERNAL — A modern fusion of rock, metal, and
          rap from Bandung
        </p>
        <div className='mt-8 flex flex-wrap gap-4 justify-center'>
          <a
            href='https://open.spotify.com'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-colors'
          >
            Listen on Spotify
          </a>
          <a
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-semibold rounded-full transition-colors'
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

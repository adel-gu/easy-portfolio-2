import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-[1200px] h-[600px] bg-gradient-to-b from-white to-black blur-[150px] absolute inset-x-[15%] top-[-65%] rounded-full z-[-5]" />
      <Hero />
    </main>
  );
}

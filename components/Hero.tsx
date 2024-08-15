import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { ArrowRightIcon } from 'lucide-react';
import AnimatedShinyText from './magicui/animated-shiny-text';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="text-center h-full flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center gap-y-2">
            <Avatar className="w-14 h-14 grayscale">
              <AvatarImage src="https://avatars.githubusercontent.com/u/68030297?s=400&u=5a0e36cd8954d298b71f768ddbe3c4b97c2b540b&v=4" />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
            <span className="text-sm font-sans text-neutral-500">
              Adel Guitoun
            </span>
            <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-8xl font-medium leading-none text-transparent from-slate-200 to-neutral-700">
              Crafting Memorable <br />
              User & Developer Experiences
              <br />
              for Business Success
            </h1>
          </div>

          <div className="z-10 flex items-center justify-center">
            <div
              className={cn(
                'group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800',
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400 text-xl font-semibold font-sans">
                <span>👋 Let's have a chat</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-[-10] top-0 h-full w-full overflow-hidden [mask-image:radial-gradient(900px_circle_at_top,white,transparent)] opacity-50">
        <AnimatedGridPattern
          numSquares={100}
          maxOpacity={0.2}
          duration={5}
          repeatDelay={1}
          className="h-[150%] inset-y-[-30%] inset-x-2"
        />
      </div>
    </section>
  );
};

export default Hero;

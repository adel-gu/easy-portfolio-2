import Link from 'next/link';
import { Dock, DockIcon } from '@/components/magicui/dock';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="text-center h-full flex flex-col items-center justify-center gap-12">
          <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-8xl font-medium leading-none text-transparent from-slate-200 to-slate-600">
            Crafting Memorable <br />
            User Experiences
            <br />
            for Business Success
          </h1>

          <div className="relative">
            <Dock magnification={60} distance={100}>
              {socialLinks.map((socialLink) => (
                <DockIcon className="bg-slate-200/10">
                  <Link key={socialLink.name} href={socialLink.path}>
                    {socialLink.icon}
                  </Link>
                </DockIcon>
              ))}
            </Dock>
          </div>
        </div>
      </div>

      <div className="absolute z-[-10] top-0 h-full w-full overflow-hidden [mask-image:radial-gradient(900px_circle_at_top,white,transparent)] opacity-50">
        <AnimatedGridPattern
          numSquares={100}
          maxOpacity={0.2}
          duration={5}
          repeatDelay={1}
          className="h-[150%] inset-y-[-30%]"
        />
      </div>
    </section>
  );
};

const socialLinks = [
  {
    name: 'linkedin',
    icon: <Linkedin />,
    path: '#',
  },
  {
    name: 'github',
    icon: <Github />,
    path: '#',
  },
  {
    name: 'twitter',
    icon: <Twitter />,
    path: '#',
  },
  {
    name: 'email',
    icon: <Mail />,
    path: '#',
  },
];

export default Hero;

import IconCloud from './magicui/icon-cloud';

const About = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-left space-y-8 w-[600px]">
            <h2 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-6xl font-medium leading-none text-transparent from-slate-200 to-neutral-700">
              About me
            </h2>
            <p className="font-sans line-clamp-6">
              I am a passionate software engineer with a focus on front-end
              technologies. I excel in collaborative environments, where I can
              contribute to the success of others. If you're looking for an
              exceptional developer with a positive attitude, I am always ready
              to join 🚀.
            </p>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="text-sm text-neutral-300 bg-neutral-800 px-3 py-1 rounded-[4px]"
                >
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
};

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
  'rubyonrails',
  'ruby',
  'mongodb',
];

const skills = [
  {
    name: 'react',
    label: 'React',
  },
  {
    name: 'next',
    label: 'Next.js',
  },
  {
    name: 'typescript',
    label: 'TypeScript',
  },
  {
    name: 'node',
    label: 'Node.js',
  },
  {
    name: 'express',
    label: 'Express.js',
  },
  {
    name: 'ruby',
    label: 'Ruby',
  },
  {
    name: 'rubyonrails',
    label: 'Ruby on Rails',
  },
  {
    name: 'rubyonrails',
    label: 'Ruby on Rails',
  },
  {
    name: 'postgres',
    label: 'Postgres',
  },
  {
    name: 'mongodb',
    label: 'MongoDB',
  },
];
export default About;

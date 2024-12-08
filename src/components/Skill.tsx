/**
 * @copyright 2024 Umrao Bisht
 * @license Apache-2.0
*/


/** 
 * Import Components 
*/
import WrapperCard from "./WrapperCard";

// interface SkillType {
//   icon: string;
//   label: string; // Name of the skill or technology
// }

const skills = {
  frontend: [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript (JS)" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React.js" },
    { icon: "/src/assets/images/tailwindcss.svg", label: "Tailwind CSS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg", label: "Next.js" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", label: "React Redux Toolkit" },
    { icon: "https://recoiljs.org/img/favicon.png", label: "Recoil" },
    { icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg", label: "Zustand" },
    { icon: "https://avatars.githubusercontent.com/u/139895814?s=280&v=4", label: "Shadcn/ui" },
    { icon: "	https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75", label: "Aceternity ui" },
  ],
  backend: [
    { icon: "https://devicon-website.vercel.app/api/nodejs/original.svg", label: "Node.js" },
    { icon: "/src/assets/images/expressjs.svg", label: "Express.js" },
    { icon: "	https://www.prisma.io/images/header/prisma-logo.svg", label: "Prisma" },
    { icon: "https://hono.dev/images/logo-small.png", label: "Hono.js" }, // Updated Hono.js logo
  ],
  databases: [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
  ],
  devopsAndCloud: [
    { icon: "https://icongr.am/devicon/amazonwebservices-original.svg?size=128&color=currentColor", label: "AWS EC2 & S3" }, // Combined AWS logo
    { icon: "https://workers.cloudflare.com/resources/logo/logo.svg", label: "Cloudflare Workers" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", label: "Nginx Reverse Proxy" },
  ],
  versionControlAndTools: [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
  ],
};



const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Tech I use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          discover the tools and technologies I use to create robust, dynamic websites and web applications.
        </p>

        {
          Object.keys(skills).map((category, index) => {

            return (
              <WrapperCard
                key={index}
                category={category}
                skills={skills[category as keyof typeof skills]}
              />
            )
          })
        }

      </div>

    </section>
  )
}

export default Skill
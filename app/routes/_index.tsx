import type { V2_MetaFunction } from "@remix-run/react"
import { Link, useNavigate } from "@remix-run/react"
import shared from '../shared.css'
import Lottie from 'lottie-react'
import Animation from 'public/animation.json'
import { redirect } from "@remix-run/node"

export function links() {
  return [{ rel: "stylesheet", href: shared }];
}

export const meta: V2_MetaFunction = () => {
  return [{ title: "HGBPedro" }];
};

export default function Index() {
  const navigate = useNavigate()
  return (
    <main>
      <div id='#home' className='home'>
        <span className='home__little-triangle'/>
        <aside>
          <h1>I&#39;m Pedro H. G. Bonel,</h1>
          <h4>Full-stack developer</h4>
          <span className='home-text'>Born in 1997,</span><br />
          <span className='home-text'>tinkering with computers since 6yo</span>
          <div className='home__link-container'>
            <Link to='#projects' onClick={() => navigate('#projects')} className='home__link'>Projects{'->'}</Link>
            <Link to='#about' className='home__link'>More info{'->'}</Link>
          </div>
        </aside>
        <Lottie animationData={Animation} loop={true} />
        <span className='home__big-triangle'/>
      </div>
      <div id='#projects' className='projects'>
        <span className='projects__big-triangle'/>
        <div className='projects__grid-container'>
          <div className='projects__grid'>
            {Array(20).fill('').map(() => (
              <div className='projects__card'>
              </div>
            ))}
          </div>
        </div>
        <div className='projects__text-container'>
          <h1 className='projects__text-header'>Projects</h1>
          <p className='projects__text-description'>
            Here’s a glimpse of some projects I developed on my own. Some are simple,&nbsp;
            others have some complexity and all the code can be checked at my <a href='https://github.com/HGBPedro?tab=repositories' target='_blank'>GitHub profile</a>.
          </p>
        </div>
      </div>
      <div id='#about' className='about'>
        <div className='about__content'>
          <div>
            <h1>About me</h1>
            <p className='about__description'>
              Originally I was a back-end developer, but in search to improve my skills, I decided to take a deep-dive in front-end development, where I learned about UX\UI, browser performance and how to
              style your page however you want without depending on libraries like bootstrap (which are good, but I think it’s important to know how to do it myself instead of just relying on a tool that you don’t know much how it works).
              Inspired by what my father always says: “The most simple things are the greatest”, I always try to make beautiful simple pages just by combining colors, spacing, alignment and shadows.
              Feel free to contact me any time on my <a href='https://linkedin.com/in/pedrohbonel/' target='_blank'>LinkedIn</a>.
            </p>
          </div>
          <img src='/images/myself.svg' alt='a memoji of myself' />
        </div>
      </div>
      <span className='spacer waves'/>
    </main>
  );
}

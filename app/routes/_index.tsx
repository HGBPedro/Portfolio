import type { V2_MetaFunction } from "@remix-run/react";
import shared from '../shared.css';
import Lottie from 'lottie-react'
import Animation from 'public/animation.json'

export function links() {
  return [{ rel: "stylesheet", href: shared }];
}

export const meta: V2_MetaFunction = () => {
  return [{ title: "HGBPedro" }];
};

export default function Index() {
  return (
    <main>
      <div id='#home' className='home'>
        <div className='home__little-triangle'/>
        <aside>
          <h1>I&#39;m Pedro H. G. Bonel,</h1>
          <h4>Full-stack developer</h4>
          <span className='home-text'>Born in 1997,</span><br />
          <span className='home-text'>tinkering with computers since 6yo</span>
          <div className='home__link-container'>
            <a href='#projects' className='home__link'>Projects{'->'}</a>
            <a href='#about' className='home__link'>More info{'->'}</a>
          </div>
        </aside>
        <Lottie animationData={Animation} loop={true} />
        <div className='home__big-triangle'/>
      </div>
      <div id='#projects' className='projects'>
        <div className='projects__big-triangle'/>
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
    </main>
  );
}

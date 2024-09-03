import React from 'react'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import image2 from "../Images/image2.jpg"
import "./Home.css"
import karna from "../Images/karna.jpg"
import draupadi from "../Images/draupadi.jpg"
const Home = () => {

  const draupaditext="Draupadi's Vastraharan was a moment of extreme injustice and humiliation. Draupadi, in her moment of despair, called upon Lord Krishna for help, and miraculously, her saree kept extending, protecting her dignity. This incident, however, had far-reaching consequences. \n click to read more..."

  const karnatext="Karna began coming forward but then Karna's chariot wheel was trapped in the mud as a result of the curse he had received earlier from goddess Earth. At the crucial moment, he forgot the incantations to invoke Brahmastra, as a result of his guru Parashurama's curse. \n click to read more..."

  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 300,
      maxHeight:200
    },
  });

  return (
    <div className='wholecontainer'>
        <div className='wholehome'>
          <div className='draupadi'>
          <CustomWidthTooltip placement="right" title={draupaditext} arrow>
          <img src={draupadi}></img>

          </CustomWidthTooltip>
          </div>
          
          <div className='main-img'>
            <img src={image2}></img>
          </div>
        
          <div className='karna'>
          <CustomWidthTooltip placement="left" title={karnatext} arrow>
          <img src={karna}></img>

          </CustomWidthTooltip>
          {/* <img src={karna} ></img> */}
          </div>
      </div>
      <div>
      <p>Bhagavad Gita, also known as the Gita - "The Song of The Lord" is a practical guide to one's life that guides one to re-organise their life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality). It is a 700-verse text in Sanskrit which comprises chapters 23 through 40 in the Bhishma-Parva section of the Mahabharata.
      </p>
      <p>
      The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior and his guide and charioteer Lord Krishna on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters, Gita packs an intense analysis of life, emotions and ambitions, discussion of various types of yoga, including Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the Ultimate Purpose of Life.
      </p>
      </div>

    </div>
    
  )
}

export default Home

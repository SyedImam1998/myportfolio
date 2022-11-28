
import styles from '../styles/Home.module.css'
import ImamImage from '../public/imamImage.png';
import Image from 'next/image';
import WorkComponent from './components/WorkComponent';
import Github from '../public/git.png';
import Hashnode from '../public/icons8-hashnode-32.png';
import React from 'react';
import Close from '../public/icons8-close-30.png';
import Discord from '../public/discord-round-color-icon.svg';
import Facebook from '../public/facebook-round-color-icon.svg';
import Gmail from  '../public/gmail-icon.svg';
import Twitter from '../public/twitter-color-icon.svg';
import Head from 'next/head';
import Symbol from '../public/symbol.png';


export default function Home() {
  const [open, setopen] = React.useState(false);
  console.log("open:",open)

  
  return (
  
   <div>
    <Head>
      <title>Imam DEV</title>
      <link rel="shortcut icon" href="/symbol.png" />
      {/* <link rel="icon" href="../public/symbol.png"></link> */}
      {/* <Image src={Symbol} alt="symbol"/> */}
    </Head>
    <div className={styles.landingpage}>


      {/* Nav Bar */}
      <div className={styles.navBar}>
        <div>
          <h3 className={styles.logo}><label className={styles.color}>I</label>m<label className={styles.color}>am DEV</label></h3>
        </div>


      
         
       
        
        <div className={styles.connectParentDiv}>
          
        <div className={`${styles.socialSites} ${open===true? styles.showSites:""} `}>
            <a href='https://discordapp.com/users/Syed Imam#9267' target="_blank" rel="noopener noreferrer"><Image width={35} className={styles.closeImage}  src={Discord} alt="discordpic" /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/syed.imam.739'><Image  width={35} className={styles.closeImage} src={Facebook} alt="facebookpic" /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/syedimam1998'><Image  width={35} className={styles.closeImage} src={Twitter} alt="twiiterpic" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=syedimam1998@gmail.com"><Image  width={35}className={styles.closeImage} src={Gmail} alt="gmailpic" /></a>
            
          </div>

       


        <div className={`${styles.connectBtnclose} ${open===true?styles.connectRed:""}`}>
          {open===false?<label onClick={()=>{setopen(!open)
          
        }} >Connect</label>:<Image onClick={()=>{
          setopen(!open);
        
        }} src={Close} width={20} height={20} className={styles.closeImage} alt="closetag"/>}


        </div>

        </div>
       

        
       
      </div>

      {/* Image part */}
      <div className={styles.imageParentDiv}>
      <div className={styles.imageCircle}>
       <Image src={ImamImage} className={styles.imagediv} alt="imamjpg"/>
      </div>
      </div>
      
      
      {/*Hero Content  */}
      <div className={styles.heroContent}>
        <h2>Hi, I{`'`}m Imam</h2>
        <p>I am a Full Stack Blockchain Developer. I write smart contracts, test and deploy them. I design and code front-end webpage as well.</p>
        
      </div>

      {/* Work urls */}
      <div className={styles.working}>
      <WorkComponent link="https://github.com/SyedImam1998" image={Github} name="githubImamge"></WorkComponent>
      <WorkComponent link="https://syedimam.hashnode.dev/"image={Hashnode} name="hashnodeimage"></WorkComponent>
    
      </div>

      {/* glowig ball at bottom */}

      <div className={styles.glowingball}></div>




    </div>
   </div>
  )
}

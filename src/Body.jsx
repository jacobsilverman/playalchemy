import background1 from './assets/background1.png';
import background2 from './assets/background2.png';
import background3 from './assets/background3.jpg';
import background4 from './assets/background4.png';
import { useState } from 'react';
import { Button } from '@mui/material';

const Body = () => {
    const [displayText, setDisplayText] = useState(0);
    const dynamicHeightClass = `${(displayText>0) ? 'h-[auto]': 'h-[calc(500px+(10vw*3))]'} text-yellow-100 text-5xl flex items-center justify-center`;

    const handleClickText = (val) => {
        setDisplayText(cur => {
            if (cur===val){
            return 0;
            }
            return val;
        })
    }
    
    return (
        <>
            <div className='relative ml-[calc(100vw/-2)] lg:ml-0'>
                <div className='w-[200vw] lg:w-[100vw]' style={{background: `url(${background1})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
                    <div className='max-h-[100vh] min-h-[500px] h-[calc(500px+(10vw*3))] text-white text-5xl flex items-center justify-center'>
                        <div className='grid'>
                            <div className='max-w-[100vw] text-center p-10 font-special'>
                                THE FATE OF ANKHOS IS IN YOUR HANDS.
                            </div>
                            <div className='justify-self-center'>
                                <Button variant="contained">PLAY NOW</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='relative ml-[calc(100vw/-2)] lg:ml-0'>
                <div className='w-[200vw] lg:w-[100vw]' style={{background: `url(${background2})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
                    <div className='max-h-[100vh] min-h-[500px] h-[calc(500px+(10vw*3))] '>
                        <div className=' flex justify-center items-center w-[100%] h-[100%]'>
                            <div className='bg-white w-[75vw] h-[60%] text-center'>
                                Youtube Video Example
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative ml-[calc(100vw/-2)] lg:ml-0'>
                <div className='w-[200vw] lg:w-[100vw]' style={{background: `url(${background3})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
                    <div className={dynamicHeightClass}>
                        <div className='w-[90vw]'>
                            <div className='m-10 font-special text-6xl'>
                                OPEN DISCORD, START PLAYING 
                            </div>
                            <div className='m-10 text-3xl cursor-pointer'>
                                <div className='relative pt-5 pb-5 border-b border-t' onClick={() => handleClickText(1)}>
                                <span >
                                    What is Alchemy?
                                </span>
                                {displayText!==1 && <span className='absolute right-0'>+</span>}
                                {displayText===1 && 
                                    <>
                                    <span className='absolute right-0'>-</span>
                                    <div className='mt-10 mb-10'>
                                        Alchemy is a fantasy RPG played entirely in Discord and powered by AI.
                                    </div>
                                    <div className='mt-10 mb-10'>
                                        Embark on turn-based adventures in Alchemy’s free-to-play title: Battle for Ankhos.
                                    </div>
                                    <div className='mt-10 mb-10'>
                                        Or, become a God of Alchemy and wage war as a team in Cosmic War, Alchemy’s idle staking game.
                                    </div>
                                    </>
                                }
                                </div>

                                <div className='relative pt-5 pb-5 border-b' onClick={() => handleClickText(2)}>
                                <span >
                                    How does it work?
                                </span>
                                {displayText!==2 && <span className='absolute right-0'>+</span>}
                                {displayText===2 && 
                                    <>
                                    <span className='absolute right-0'>-</span>
                                    <div className='mt-10 mb-10'>
                                        Alchemy is the future of Discord gaming.
                                    </div>
                                    <div className='mt-10 mb-10'>
                                        Our installable game bot allows any Discord server to begin playing Alchemy together with a single click.
                                    </div>
                                    <div className='mt-10 mb-10'>
                                        As you navigate the world of Ankhos through Discord buttons, you receive instant visual feedback. Videos and images are crafted using procedural generation and AI magic.
                                    </div>
                                    </>
                                }
                                </div>

                                <div className='relative pt-5 pb-5 border-b' onClick={() => handleClickText(3)}>
                                <span >
                                    Where can I play?
                                </span>
                                {displayText!==3 && <span className='absolute right-0'>+</span>}
                                {displayText===3 && 
                                    <>
                                        <span className='absolute right-0'>-</span>
                                        <div className='mt-10 mb-10'>
                                            You can play Alchemy right now in our Discord server!
                                        </div>
                                        <div className='mt-10 mb-10'>
                                            Soon, you will be able to play in any server that installs our game bot, including your own! Simply log into Discord and start playing for free.
                                        </div>
                                    </>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='relative bg-purple-rgb'>
                <div className='w-[100vw] min-h-[100vh] md:min-h-0'>
                    <div className=' text-yellow-100 grid grid-cols-1 md:grid-cols-3'>
                        <div className='mt-28 ml-10 mr-10 md:mr-0 mb-28 font-special col-span-1'>
                        <div className='text-7xl mb-5'>
                            JOIN THE COSMIC WAR
                        </div>
                        <div className='text-2xl mb-5'>
                            Command armies of elementals as Gods of Alchemy in our newest idle strategy game, Cosmic War.
                        </div>
                        <div className='text-2xl mb-5'>
                            Will you and your team choose the path of the All or the Self?
                        </div>
                        <div>
                            <Button variant='contained'>PLAY NOW</Button>
                            <Button className='flex float-end' variant='contained'>BUY A GOD</Button>
                        </div>
                        </div>
                        <div className='col-span-2 m-auto mb-10 md:m-auto w-96 h-96 bg-white text-black text-center'>
                            youtube video example
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='relative ml-[calc(90vw/-2)] lg:ml-0'>
                <div className='w-[180vw] lg:w-[100vw]' style={{background: `url(${background4})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
                    <div className='max-h-[100vh] min-h-[700px] h-[calc(700px+(10vw*3))] grid grid-cols-1 grid-rows-2 ml-10'>
                        <div className='ml-auto mr-auto mt-20 font-special col-span-1 max-w-[100vw]'>
                        <div className='text-7xl text-center font-special text-yellow-100'>
                            START PLAYING FOR FREE.
                        </div>
                        <div className='ml-auto mr-auto mt-20 col-span-1 max-w-[100vw] text-center'>
                        <Button variant='contained'>
                            PLAY NOW
                        </Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
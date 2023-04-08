import React from 'react'
import screen from '../images/screen.png';
import mobile from '../images/mobile.jpg';
import rajmachawal from '../images/rajmachawal.png';
import children from '../images/children.png';
import { IoIosArrowForward } from "react-icons/io"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Cards = () => {
    return (
        <>
            <hr className='border-4 border-zinc-800' />

            <div className='w-full h-full flex flex-wrap justify-center items-center gap-10 p-14'>
                <div className='space-y-4'>
                    <div className='text-white text-3xl sm:text-5xl font-sans font-bold sm:font-extrabold text-center sm:text-start w-full sm:w-96'>
                        <h1>Enjoy on your TV.</h1>
                    </div>
                    <div className='flex flex-wrap text-white text-xl sm:text-2xl font-sans w-full sm:w-96 text-center sm:text-start'>
                        <p className='text-white text-2xl font-sans'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                </div >
                <div>
                    <img className='w-full h-52 sm:h-96' src={screen} alt='screen' />
                </div>
            </div >

            <hr className='border-4 border-zinc-800' />

            <div className='w-full h-full flex flex-wrap justify-center items-center gap-10 p-14'>
                <div className='order-last sm:order-first'>
                    <img className='w-full h-52 sm:h-96' src={mobile} alt='mobile' />
                </div>
                <div className='space-y-4 order-first sm:order-last'>
                    <div className='text-white text-3xl sm:text-5xl font-sans font-bold sm:font-extrabold text-center sm:text-start w-full sm:w-96'>
                        <h1 >Download your shows to watch offline.</h1>
                    </div>
                    <div className='flex flex-wrap text-white text-xl sm:text-2xl font-sans w-full sm:w-96 text-center sm:text-start'>
                        <p >Save your favourites easily and always have something to watch.</p>
                    </div>
                </div >
            </div >

            <hr className='border-4 border-zinc-800' />

            <div className='w-full h-full flex flex-wrap justify-center items-center gap-10 p-14'>
                <div className='space-y-4'>
                    <div className='text-white text-3xl sm:text-5xl font-sans font-bold sm:font-extrabold text-center sm:text-start w-full sm:w-96'>
                        <h1 >Watch everywhere.</h1>
                    </div>
                    <div className='flex flex-wrap text-white text-xl sm:text-2xl font-sans w-full sm:w-96 text-center sm:text-start'>
                        <p >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                </div >
                <div>
                    <img className='w-full h-52 sm:h-96' src={rajmachawal} alt='rajmachawal' />
                </div>
            </div >

            <hr className='border-4 border-zinc-800' />

            <div className='w-full h-full flex flex-wrap justify-center items-center gap-10 p-14'>
                <div className='order-last sm:order-first'>
                    <img className='w-full h-52 sm:h-96' src={children} alt='children' />
                </div>
                <div className='space-y-4 order-first sm:order-last'>
                    <div className='text-white text-3xl sm:text-5xl font-sans font-bold sm:font-extrabold text-center sm:text-start w-full sm:w-96'>
                        <h1 >Create profiles for children.</h1>
                    </div>
                    <div className='flex flex-wrap text-white text-xl sm:text-2xl font-sans w-full sm:w-96 text-center sm:text-start'>
                        <p >Send children on adventures with their favourite characters in
                            a space made just for them—free with your membership.</p>
                    </div>
                </div >
            </div >

            <hr className='border-4 border-zinc-800' />

            <div className='w-full h-full flex flex-col flex-wrap justify-center items-center gap-10 p-14'>
                <div className='gap-6 flex flex-col justify-center items-center'>
                    <h1 className='text-white text-3xl sm:text-5xl text-center font-sans font-bold sm:font-extrabold'>Frequently Asked Questions</h1>
                    <div>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography >What is Netflix?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                                    anime, documentaries and more – on thousands of internet-connected devices.
                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly
                                    price. There's always something new to discover, and new TV shows and movies are added every week!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                                <Typography>How much does Netflix cost?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one
                                    fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                                <Typography>Where can I watch?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
                                    at netflix.com from your personal computer or on any internet-connected device that offers the
                                    Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to
                                    watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                                <Typography>How do I cancel?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel
                                    your account online in two clicks. There are no cancellation fees – start or stop your account
                                    anytime.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                                <Typography>What can I watch on Netflix?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                                    award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
                                <Typography>Is Netflix good for kids?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The Netflix Kids experience is included in your membership to give parents control while
                                    kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with
                                    PIN-protected parental controls that let you restrict the maturity rating of content kids
                                    can watch and block specific titles you don’t want kids to see.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    {/* Accordian  */}
                    <div>
                        <h5 className='text-white text-xl text-center font-sans'>Ready to watch? Enter your email to create or restart your membership.</h5>
                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-2 '>
                        <div><input className='rounded border text-white bg-black opacity-75 px-40 py-3 pl-2 w-full' type="email" name='email' placeholder='Email address' /></div>
                        <div><button className="bg-red-600 text-white text-xl sm:text-2xl hover:bg-red-700 rounded box-border cursor-pointer px-6 py-2.5 flex">Get Started<div className='py-1'><IoIosArrowForward /></div></button></div>
                    </div>
                </div >

            </div >
            <hr className='border-4 border-zinc-800' />
        </>
    )
}

export default Cards
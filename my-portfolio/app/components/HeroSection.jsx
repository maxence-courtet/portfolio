"use client"; 
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const handleDownload = () => {
    // URL of the file to be downloaded
    const fileUrl = "/CV_Maxence_Courtet.pdf"; // replace with your file URL
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV_Maxence_Courtet.pdf"; // default file name for the downloaded file
    link.click();
  };

    

const HeroSection = () =>{
    return(
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
            
                <div className="col-span-7 place-self-center text-center sm:text-left">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I'm{" "}</span>
                            <br></br>
                            <TypeAnimation
                                sequence={[
                                    'Max',
                                    1000, 
                                    'A Software Engineer',
                                    2500,
                                    'An EPFL/ETHZ Alumni',
                                    2500,
                                    'Passionate about new technologies',
                                    2500,
                                    'Data-Driven',
                                    2500,
                                    'Max',
                                    2500
                                ]}
                            wrapper="span"
                            speed={10}
                            />
                        </h1>
                        <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
                        Hi, I’m Max, a software engineer passionate about combining technology and business to create secure, data-driven solutions. Welcome to my portfolio!                        </p>
                        <div>
                            <button onClick={handleDownload}
                             className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                    >
                        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                            <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}>
                            </Image>
                        </div>
                    </motion.div>    
                </div>
            </div>
        </section>
    );  
}

export default HeroSection
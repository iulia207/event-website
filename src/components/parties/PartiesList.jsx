import { items } from "./data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./partiesList.scss";

const PartiesList = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [countdown, setCountdown] = useState(null);

    const toggleModal = (item) => {
        setSelectedItem(item);
    };

    useEffect(() => {
        let timer;

        if (selectedItem) {
            const countDownDate = new Date(selectedItem.date).getTime();

            timer = setInterval(() => {
                const now = new Date().getTime();
                const distance = countDownDate - now;

                if (distance < 0) {
                    clearInterval(timer);
                    setCountdown('Expired');
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [selectedItem]);

    useEffect(() => {
        if (selectedItem) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [selectedItem]);
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      
      const textVariants = {
        initial: {
          x: -500,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        },
        scrollButton: {
          opacity: 0,
          y: 10,
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        },
      };

    return (
        <div>
            <motion.h1 
                className="title" 
                variants={textVariants}
                initial="initial"
                animate="animate"
            > 
                Check Out Our Parties!
            </motion.h1>
            <div  className="list">
                    <Carousel 
                        className="items"
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        draggable={true}
                    >
                        {items.map((item) => {
                            return (
                                <motion.div className="card" key={item.id} initial={false} > 
                                    <motion.img 
                                        whileHover={{
                                            scale: 1.025,
                                            transition: {
                                                duration: 0.2,
                                            },
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        onClick={() => toggleModal(item)}
                                        src={item.url}
                                        layoutId={`card-${item.id}`}
                                        initial={false}
                                    />
                                </motion.div> 
                            );
                        })}
                    </Carousel>
                
                {selectedItem && (
                    <div className="modal">
                        <div className="overlay" onClick={() => toggleModal(null)}></div>
                        <div className="modal-content">
                            <div className="modal-header">
                                <img src={selectedItem.url} alt={selectedItem.title} className="modal-image" />
                                {countdown && <div className="countdown">{countdown}</div>}
                            </div>
                            <div className="modal-body"> 
                                <h1>{selectedItem.title}</h1>
                                <p>{selectedItem.description}</p>  
                            </div>
                            <div className="modal-footer">
                                <a href={selectedItem.link_url} target="_blank"><button>Get Tickets Now</button></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>    
    );
};

export default PartiesList;

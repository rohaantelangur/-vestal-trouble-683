import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomePage.css"

import {bestSeller} from "./SliderData"
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import {  Navigation } from "swiper";
import { Box, Image, Stack, Text } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <div className="Main_1">
      <div className='nav_1'>
      <div className='free'>
        
<h3>FREE SAMPLES WITH ALL ORDERS </h3>
      </div>

      {/* ## slider */}
<div>
<AliceCarousel autoPlay autoPlayInterval="3000">
  
<img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fos-2022-july-hero-des_1600x.jpg?v=1657144325"
             alt=""   />
        <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-des_7a459285-a1a6-4c17-8383-f26887d149ba_1600x.jpg?v=1656625184"
             alt=""   />
                <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-dyson-july-2022-hero-des_1600x.jpg?v=1657144840"
               alt="" />
                <img className="sliderimg" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-moroccanoil-july-hp-hero-des-2_1600x.jpg?v=1657227342"
              alt=""  />        
      
</AliceCarousel>
</div>

</div>



 {/* First coursal------------------------------------------------------- */}


 <Box h="350px" mt="5" mb="10">
  <div className='nav_a'>
  <h2>SIMILAR PRODUCTS</h2>
  </div>
  
      
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {bestSeller.map((item)=>
        {
          return  <SwiperSlide>
          <Stack fontSize={"14px"}>

          <Image color={"#12284c"} h="50px"src={item.image} />
          <Text>{item.brand}</Text>
          <Text color={"gray"} >
            {item.name}
          </Text>
          <Text color={"gray"}>
            $. {item.price}
          </Text>
          </Stack>
        </SwiperSlide>
       
        })

        }
       
        
      </Swiper>
    </Box>



       

       






    </div>
  )
}

export default HomePage
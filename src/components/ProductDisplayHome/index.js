import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import coldequip from '../../assets/images/equip/cold equipment.png';
import displaycab from '../../assets/images/equip/display cabinet.png';
import hotequip from '../../assets/images/equip/hot equipment.png';
import kitexhaust from '../../assets/images/equip/kitchen exhaust system.png';
import preprep from '../../assets/images/equip/pre-preparation equipment.png';
import sselectri from '../../assets/images/equip/ss electrical products.png';
import trolley from '../../assets/images/equip/trolleys.png';
import washingequipment from '../../assets/images/equip/washing equipment.png';
import pantry from '../../assets/images/equip/pantry and fastfood.png';
import './product_display_style.css';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductDisplay = () => {
  const images = [
    {
      name: 'Cold Equipments',
      img: coldequip,
      link: 'ColdEquips',
    },
    {
      name: 'Display Cabinet',
      img: displaycab,
      link: 'Display',
    },
    {
      name: 'Hot Equipments',
      img: hotequip,
      link: 'HotEquips',
    },
    { name: 'Pantry & Fast Foods', img: pantry, link: 'Pantry' },
    {
      name: 'Kitchen Exhaust Systems',
      img: kitexhaust,
      link: 'Exhaust',
    },
    {
      name: 'Pre-preparation Equipments',
      img: preprep,
      link: 'Ppe',
    },
    {
      name: 'Signature Equipments',
      img: sselectri,
      link: 'Signatureequips',
    },
    {
      name: 'Trolleys',
      img: trolley,
      link: 'Trolley',
    },
    {
      name: 'Washing Equipments',
      img: washingequipment,
      link: 'WashEquips',
    },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdKeyboardArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdKeyboardArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current, next) => setImageIndex(next),
  };

  return (
    <Box
      p={10}
      height={'400px'}
      paddingInline={{ base: '10px', md: '75px' }}
      display={'flex'}
      justifyContent="center"
      alignItems={'center'}
      bgColor={'#282828'}
      overflowY={'hidden'}
      borderBottom={'5px solid #F6821F'}
    >
      <Box w={{ base: '100%', md: '90%', lg: '70%' }}>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
            >
              {idx === imageIndex ? (
                <Link to={`product/${img.link}`} title={'Click Me'}>
                  <Image
                    src={img.img}
                    alt={img.name}
                    boxSize="500px"
                    objectFit={'contain'}
                  />
                  <Text
                    w={'100%'}
                    textAlign={'center'}
                    pos={'absolute'}
                    color={'white'}
                    bottom={'18%'}
                  >
                    {img.name}
                  </Text>
                </Link>
              ) : (
                <>
                  <Image
                    src={img.img}
                    alt={img.name}
                    boxSize="500px"
                    objectFit={'contain'}
                  />
                  <Text
                    w={'100%'}
                    textAlign={'center'}
                    pos={'absolute'}
                    color={'white'}
                    bottom={'20%'}
                  >
                    {img.name}
                  </Text>
                </>
              )}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProductDisplay;

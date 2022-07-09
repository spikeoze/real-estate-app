import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

function ImageScrollbar({ photos }) {
  const [isLargerThan500] = useMediaQuery("(min-width: 935px)");

  if (isLargerThan500) {
    return (
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        style={{ overflow: "hidden" }}
      >
        {photos.slice(0, 3).map((item) => (
          <Box width='910px' itemID={item.id} key={item.id} p="1">
            <Image
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              alt="house photo"
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            />
          </Box>
        ))}
      </ScrollMenu>
    );
  } else {
    return (
      <Flex
        justifyContent="center"
        m={2}
        mb={5}
        height={430}
        padding={5}
        boxShadow="inner"
        wrap="wrap"
        borderRadius={7}
        overflowY="scroll"
      >
        {photos.slice(0, 3).map((item) => (
          <Box width={700} itemID={item.id} key={item.id} p="1">
            <Image
              placeholder="blur"
              blurDataURL={item.url}
              quality={30}
              src={item.url}
              width={500}
              height={300}
              alt="house photo"
              layout="responsive"
            />
          </Box>
        ))}
      </Flex>
    );
  }

  
}

export default ImageScrollbar;

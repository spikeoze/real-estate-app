import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, Spacer, Divider } from "@chakra-ui/react";

import { baseURL } from "../utils/fetchAPi.js";
import { fetchApi } from "../utils/fetchApi.js";
import Property from "../components/Property";

export const Banner = ({
  purpose,
  imageSrc,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Flex justifyContent="center" mb={10}>
    <Image src={imageSrc} width={500} height={300} alt="banner" />
    <Box p={5}>
      <Text color={"gray.500"} fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br /> {title2}
      </Text>
      <Text color="gray.700" fontSize="lg" pt={3} pb={3} fontWeight="medium">
        {desc1} <br /> {desc2}
      </Text>

      <Button colorScheme="blue" fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForRent, propertiesForSale }) {
  // console.log({ propertiesForRent }, { propertiesForSale });
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageSrc="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Divider mb={10} mt={10} variant="solid" />
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageSrc="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

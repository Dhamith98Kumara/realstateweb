import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"

const Banner = ({purpose , title1 , title2, desc1, desc2, linkname,buttonText, imageURL}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageURL} width={500} height={300} alt="banner" />
      <Box>
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
        <Text  fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
        <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={linkname}>{buttonText}</Link>
        </Button>
      </Box>
  </Flex>
)

export default function Home() {
  return (
    <div>
        <h1>Hello World</h1>
        <Banner purpose={'For Sale'}/>
        <Banner purpose={'For Rent'}/>
    </div>
  )
}

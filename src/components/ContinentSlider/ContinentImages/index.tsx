import { Box } from "@chakra-ui/react";
import continents from "../../../constants/continents";
import ContinentImage from "./ContinentImage";


function ContinentImages() {
    const renderContinentImages = () => {
        let arr = [] as any[]; 
        let continentImagesArr = continents

        continentImagesArr.forEach(
            (continentImage, index) => {
                
                arr.push(<ContinentImage key={continentImage.id} data={continentImage} index={index} />);
                
            })
            console.log(arr)
            return arr
    }


    return (
        <Box
        >
            {renderContinentImages()}
        </Box>
    )
}

export default ContinentImages
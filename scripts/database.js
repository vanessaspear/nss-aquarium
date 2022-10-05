/* Martin requested the following properties be displayed for his fish list: 
    - Image
    - Species
    - Length
    - Name 
    - Harvested location
    - Food
*/

const database = {
    fish: [
        {
            image: "Pictures/mahi-mahi.jpeg",
            name: "Mahi Mahi",
            length: "4 ft",
            location: "Caribbean",
            food: "Small fish"
        }, 
        {
            image: "Pictures/sailfish.webp",
            name: "Sailfish",
            length: "7 ft",
            location: "Atlantic Ocean",
            food: "Fish and squids"
        },
        {
            image: "Pictures/salmon.jpeg",
            name: "Salmon",
            length: "3 ft",
            location: "Pacific Ocean",
            food: "Small amphibians, fish, and crustaceans"
        }
    ]
}

//Function to copy the fish array and allow other modules to use it's data
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

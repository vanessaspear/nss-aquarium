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
            image: <img class="fish-image" src="pictures/mahi-mahi.jpeg"></img>,
            species: "Mahi Mahi",
            length: "4 ft",
            location: "Caribbean",
            food: "Small fish"
        }, 
        {
            image: "",
            species: "Sailfish",
            length: "7 ft",
            location: "Atlantic Ocean",
            food: "Fish and squids"
        },
        {
            image: "",
            species: "Salmon",
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
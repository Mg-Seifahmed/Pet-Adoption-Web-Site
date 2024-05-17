import Pet from "../model/Pet.js";


export const addPet = async (req, res) => {
    try {
        const 
        {
            name,
            characteristics,
            health,
            color,
            description,
            adult,
            houseTrained,
            spayedNeutered,
            gender,
            img
  
        } = req.body;
        

        const pet = new Pet({
            name: name,
            characteristics: characteristics,
            health: health,
            color: color,
            description: description,
            adult: adult,
            houseTrained: houseTrained,
            spayedNeutered: spayedNeutered,
            gender: gender,
            img: img
        });



        await pet.save();

        res.json(pet);




       
    } catch (err) {
        // Handle errors
        res.json("not filled");
    }
};
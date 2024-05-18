import Pet_Request from "../model/Pet_Request.js";


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
                img,
                breed,
                publisher,
                pEmail

            } = req.body;


        const pet = new Pet_Request({
            name: name,
            characteristics: characteristics,
            health: health,
            color: color,
            description: description,
            adult: adult,
            houseTrained: houseTrained,
            spayedNeutered: spayedNeutered,
            gender: gender,
            img: img,
            breed: breed,
            publisher: publisher,
            pEmail: pEmail
        });

        console.log(pet);



        await pet.save();

        console.log("okay");
        

        res.json(pet);





    } catch (err) {
        // Handle errorsf
        res.json("not filled");
    }
};
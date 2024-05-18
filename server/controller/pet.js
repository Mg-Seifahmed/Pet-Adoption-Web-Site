import Pet_Request from "../model/Pet_Request.js";
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
                img,
                breed,
                publisher,
                pEmail

            } = req.body;


            let a = "";
            let h = "";
            let s = "";
            if(adult === true)
                {
                    a = "Adult";
                }

                console.log("hehe2");

            if(houseTrained == true)
                {
                    h = "House Trained";
                }

            if(spayedNeutered == true)
                {
                    s = "Spayed Neutered";
                }


            
                


        const pet = new Pet_Request({
            name: name,
            characteristics: characteristics,
            health: health,
            color: color,
            description: description,
            adult: a,
            houseTrained: h,
            spayedNeutered: s,
            gender: gender,
            img: img,
            breed: breed,
            publisher: publisher,
            pEmail: pEmail
        });


        



        await pet.save();

        

        res.json(pet);





    } catch (err) {
        // Handle errorsf
        res.json("not filled");
    }
};





export const getPet = async (req, res) => {
    try {

        const pet = await Pet_Request.find({});
        res.json(pet);
        




    } catch (err) {
        // Handle errorsf
        res.json("error");
    }
};

export const rejectPet = async (req, res) => {
    try {

        const {pEmail, name} = req.body;

        await Pet_Request.deleteOne({name: name, pEmail: pEmail});
        res.json("Successful");
        




    } catch (err) {
        // Handle errorsf
        res.json("not Successful");
    }
};

export const acceptPet = async (req, res) => {
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
                img: img,
                breed: breed,
                publisher: publisher,
                pEmail: pEmail
            });


            await pet.save();
            await Pet_Request.deleteOne({name: name, pEmail: pEmail});
            
            res.json("Successful");

        
        




    } catch (err) {
        // Handle errorsf
        res.json("not Successful");
    }
};
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
                pEmail,
                type

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
            pEmail: pEmail,
            type: type
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
                pEmail,
                type

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
                pEmail: pEmail,
                type: type
            });

            console.log(pet);


            await pet.save();
            await Pet_Request.deleteOne({name: name, pEmail: pEmail});
            
            res.json("Successful");

        
        




    } catch (err) {
        // Handle errorsf
        res.json("not Successful");
    }
};




export const getCat = async (req, res) => {
    try {


        const pet = await Pet.find({type:"Cat"});
        res.json(pet);
        




    } catch (err) {
        // Handle errorsf
        res.json("error");
    }
};

export const getCustomCat = async (req, res) => {
    try {
        

        const filters = req.body;
        let query = { type: "Cat" };
        console.log(filters);

        // Handle gender filter
        if (filters.gender.male && !filters.gender.female) {
            query.gender = "Male";
        } else if (!filters.gender.male && filters.gender.female) {
            query.gender = "Female";
        } else if (filters.gender.male && filters.gender.female) {
            query.gender = { $in: ["Male", "Female"] };
        }


        // Handle color filter
        const colors = [];
        if (filters.color.black) colors.push("Black");
        if (filters.color.brown) colors.push("Brown");
        if (filters.color.orange) colors.push("Orange");
        if (filters.color.white) colors.push("White");
        if (colors.length > 0) {
            query.color = { $in: colors };
        }

        // Handle house trained filter
        if (filters.houseTrained) {
            query.houseTrained = "House Trained";
        }

        // Handle adult filter
        if (filters.adult) {
            query.adult = "Adult";
        }

        // Handle spayed/neutered filter
        if (filters.spayedNeutered) {
            query.spayedNeutered = "Spayed Neutered";
        }


        const pets = await Pet.find(query);
        res.json(pets);
        




    } catch (err) {
        // Handle errorsf
        res.json("error");
    }
};


export const getDog = async (req, res) => {
    try {
        


        const pet = await Pet.find({type:"Dog"});
        res.json(pet);
        




    } catch (err) {
        // Handle errorsf
        res.json("error");
    }
};

export const getCustomDog = async (req, res) => {
    try {
        

        const filters = req.body;
        let query = { type: "Dog" };
        console.log(filters);

        // Handle gender filter
        if (filters.gender.male && !filters.gender.female) {
            query.gender = "Male";
        } else if (!filters.gender.male && filters.gender.female) {
            query.gender = "Female";
        } else if (filters.gender.male && filters.gender.female) {
            query.gender = { $in: ["Male", "Female"] };
        }


        // Handle color filter
        const colors = [];
        if (filters.color.black) colors.push("Black");
        if (filters.color.brown) colors.push("Brown");
        if (filters.color.orange) colors.push("Orange");
        if (filters.color.white) colors.push("White");
        if (colors.length > 0) {
            query.color = { $in: colors };
        }

        // Handle house trained filter
        if (filters.houseTrained) {
            query.houseTrained = "House Trained";
        }

        // Handle adult filter
        if (filters.adult) {
            query.adult = "Adult";
        }

        // Handle spayed/neutered filter
        if (filters.spayedNeutered) {
            query.spayedNeutered = "Spayed Neutered";
        }

        console.log(query);


        const pets = await Pet.find(query);
        res.json(pets);
        




    } catch (err) {
        // Handle errorsf
        res.json("error");
    }
};


export const getSearch = async (req, res) => {
    try {


        const { searchTerm } = req.body;


        const query = {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { breed: { $regex: searchTerm, $options: 'i' } },
                { color: { $regex: searchTerm, $options: 'i' } },
               // { adult: { $regex: searchTerm, $options: 'i' } },
                //{ houseTrained: { $regex: searchTerm, $options: 'i' } },
                //{ spayedNeutered: { $regex: searchTerm, $options: 'i' } },
                //{ gender: { $regex: searchTerm, $options: 'i' } },
               // { type: { $regex: searchTerm, $options: 'i' } }
            ]
        };

        const pets = await Pet.find(query);
        res.json(pets);




    } catch (err) {
        // Handle errorsf
        res.json("error");
    }
};


export const getCustom = async (req, res) => {
    try {
        

        const filters = req.body;
        let query = {};
        console.log(filters);

        // Handle gender filter
        if (filters.gender.male && !filters.gender.female) {
            query.gender = "Male";
        } else if (!filters.gender.male && filters.gender.female) {
            query.gender = "Female";
        } else if (filters.gender.male && filters.gender.female) {
            query.gender = { $in: ["Male", "Female"] };
        }


        // Handle color filter
        const colors = [];
        if (filters.color.black) colors.push("Black");
        if (filters.color.brown) colors.push("Brown");
        if (filters.color.orange) colors.push("Orange");
        if (filters.color.white) colors.push("White");
        if (colors.length > 0) {
            query.color = { $in: colors };
        }

        // Handle house trained filter
        if (filters.houseTrained) {
            query.houseTrained = "House Trained";
        }

        // Handle adult filter
        if (filters.adult) {
            query.adult = "Adult";
        }

        // Handle spayed/neutered filter
        if (filters.spayedNeutered) {
            query.spayedNeutered = "Spayed Neutered";
        }


        const pets = await Pet.find(query);
        res.json(pets);
        




    } catch (err) {
        // Handle errorsf
        res.json("error");
    }
};

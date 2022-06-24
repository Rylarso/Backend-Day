setupAnimal = function (animalData) {
    let discovery = new Date();
    // check deadline and make sure its good
    if (animalData.deadline) {
        discovery = new Date(animalData.discovery);
    }
    // set defaults for eveything else
    return {
        name: animalData.name || "",
        description: animalData.description || "",
        location: animalData.location || "",
        discovery: discovery,
    };
};

module.exports = setupAnimal;
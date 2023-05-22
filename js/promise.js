var promise= new Promise(
    function(resolve, reject) {
        resolve([
                    {
                        "name": "mèo 1",
                        "species": "mèo",
                        "food": {
                            "like": ["catnip", "tuna", "fish"], 
                            "hate": ["onion"]
                        }
                    },

                    {
                        "name": "chó 1",
                        "species": "chó",
                        "food": {
                            "like": ["bone", "fish", "meat"], 
                            "hate": ["cat"]
                        }
                    },

                    {
                        "name": "mèo 2",
                        "species": "mèo",
                        "food": {
                            "like": ["catnip", "soup", "fish"], 
                            "hate": ["onion"]
                        }
                    }
                ]);
        reject('Co loi');

    }    
);

promise
    .then(function(pets){
        console.log(pets)
    })
    .catch(function(){
        console.log('Failure')
    })
    .finally(function(){
        console.log('Done')
    })

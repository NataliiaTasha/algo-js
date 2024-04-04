(() => {
    /**
     * A function to generate an object with the user's values.
     * @param {string} serie 
     */
        function askTvSerie() {
            let serie = prompt("Enter the name of your favorite TV serie:");
            let year = prompt("Enter the year of production of this TV serie:");
            let actors = [];
            let moreActors = true;

            while (moreActors) {
                let actor = prompt("Enter the name of the cast member:");
                actors.push(actor);
                moreActors = confirm("Do you want to enter another actor?");
            }    

        let tvSerie = {
            "Name of serie": serie,
            "Production year": year,
            "Cast members": actors,
        };  
        return tvSerie;
    }

        let favoriteSerie = askTvSerie();
        
        alert(JSON.stringify(favoriteSerie));    
})()
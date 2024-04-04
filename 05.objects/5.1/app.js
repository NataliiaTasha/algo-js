(() => {
    /**
     * A function to generate an object with the user's values.
     * @param {string} serie 
     */
        function askTvSerie() {
            serie = prompt("What is the name of your favorite TV serie?");
            year = prompt("What is the year of production of this TV serie?");
            actors = prompt("What are the names of the cast members?");

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
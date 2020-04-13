    /* Global Variables */
    const baseURL = 'http://api.geonames.org/countryInfoJSON?username=millzz';
    const username = 'millzz';
    // Create a new date instance dynamically with JS
    // let d = new Date();
    // let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
    // console.log(newDate);

    // Async GET
    const retrieveData = async (baseURL, userZip, username) => {
        const res = await fetch(`${baseURL}${userZip}${username}`);
        try {
            // Transform into JSON
            const userData = await res.json()
            return userData;
        }
        catch (error) {
            console.log("error", error);
            // appropriately handle the error
        }
    };

    //eventListener for element with ID #generate
    document.getElementById('generate').addEventListener('click', onClick);

    //callback function for the element #generate
    function onClick() {
        const userCity = document.getElementById('city').value;
        // const mood = document.getElementById('feelings').value;

        retrieveData(baseURL, userCity, username)
        .then(function (userData) {
            const apiData = {latitude: userData.south, longitude: userData.geonames[0].lng, country: userData.geonames[0].countryName};
            console.log(apiData);
                postData('/add', {latitude: userData.south, longitude: userData.geonames[0].lng, country: userData.geonames[0].countryName})
            }).then(function (newData) {
                updateUI()
            })
    };

    // Async POST
    const postData = async (url = '', data = {}) => {

        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cityLat: apiData.latitude,
                cityLong: apiData.longitude,
                dataCountry: apiData.country
            })
        });

        try {
            const newData = await res.json();
            return newData;
        } catch (error) {
            console.log("error", error);
        }
    };

    // Update UI
    const updateUI = async () => {
        const req = await fetch('/all');
        try {
            const Data = await req.json()
            document.getElementById('latitude').innerHTML = Data.cityLat;
            document.getElementById('longitude').innerHTML = Data.cityLong;
            document.getElementById('country').innerHTML = Data.dataCountry;
        }
        catch (error) {
            console.log("error", error);
        }
    };

    export { onClick }

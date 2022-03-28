function showone() {
    let request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:8080/Api_war/availabilities', true)
    console.log('hallo');
    request.onload = function () {
        // Begin accessing JSON data here
        data = JSON.parse(this.response)
        console.log("Hier kom ik");
        if (request.status >= 200 && request.status < 400) 
        {
            let results = [];
            console.log(results);
            data.forEach(data => {
                if (data.name == input)
                {
                    results.push(data);
                }
            });
        }
        else
        {
            console.log('error')
        }
    }
    request.send();
}
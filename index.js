fetch("http://www.boredapi.com/api/activity/")
    .then(data => data.json())
    .then((activity) => {
        const boredText = activity.message;

        document.getElementById("bored-text").innerHTML = `
        <p
            '${boredText}'>
            `;
    })

const boredBtn = document.getElementById("bored-btn")


fetch("http://www.boredapi.com/api/activity/")
   .then(response => console.log(response));


fetch("http://www.boredapi.com/api/activity/")
       .then(response => response.json())
       .then((activity) => {
        const boredText = activity.message;

        document.getElementById("bored-text").innerHTML = `
        <p>
        ${boredText}
        </p>
            `;
       });
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    if ((!isNaN(height) && height > 0) && (!isNaN(weight) && weight > 0)) {
        const heightM = height / 100;
        let BMI = weight / (heightM ** 2);
        BMI = BMI.toFixed(2);
        
        // Clear any previous result
        const existingResult = document.querySelector("#bmi-result");
        if (existingResult) {
            existingResult.remove();
        }
        
        // Create and display new result
        const result = document.createElement("p");
        result.id = "bmi-result";
        result.textContent = `BMI: ${BMI}`;
        form.appendChild(result);

        const existingmassage = document.querySelector("#massage")

        if (existingmassage){
            existingmassage.remove()
        }

        // under
        massage = document.createElement("p")
        massage.id = "massage";

        if (BMI < 18.6){
            massage.textContent = "You are Under Weight..!"
            form.appendChild(massage)
        }
        else if (BMI > 18.6 && BMI < 24.9){
            massage.textContent = "You have a Normal Weight..!"
            form.appendChild(massage)
        }
        else {
            massage.textContent = "You are Over Weight..!"
            form.appendChild(massage) 
        }


    } else {
        alert("Please provide valid numbers for height and weight.");
    }
});


const input = form.querySelectorAll("input")

input.forEach((field)=>{
    form.addEventListener("reset",(e)=>{
        field.value = ""
        const existingResult = document.querySelector("#bmi-result");
        if (existingResult) {
            existingResult.remove();
        }

        const massage = document.querySelector("#massage")

        if (massage){
            massage.remove()
        }
    })
})
const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/chat/completions"

const promptInput = document.getElementById('promptInput');
const generateBtn = document.getElementById('generateBtn');
const stopBtn = document.getElementById('stopBtn');
const resultText = document.getElementById('resultText');

// generateBtn.addEventListener("click", generate);
promptInput.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        generate();
    }
});

const generate = async () => {
    try{
        const response = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Application:`Bearer ${API_KEY}`,

            },
            body: JSON.stringify({
                model:"gpt-3.5turbo",
                messages:[{role:'user',content:promptInput.value }]
            })
        })

        const data = await response.json();
        console.log("data",data)
    }catch(error){
        console.error("error",error);
    }
}
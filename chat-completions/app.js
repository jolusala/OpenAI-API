const API_KEY = "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"

async function fetchData() {
  const response = await fetch('https://api.openai.com/v1/chat/completions',{
    method: 'POST',
    headers : {
        Authorization : `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages : [{
          role : "user",
          content : "Hello!"
        }]
    })

  })

  const data = await response.json()
  console.log(data)
  console.log("Fetching data")
}

fetchData()



//import { isValidURL } from './validateUrl'
let meaningData = {}
function handleSubmit (event) {
    event.preventDefault();
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if (Client.isValidURL(formText)) {
        postUrl('/analyze', {url:formText})
        .then(function (apiData) {
            console.log(apiData)
            meaningData = {
                Polarity:apiData.score_tag,
                confidence:apiData.confidence,
                subjectivity:apiData.subjectivity,
                agreement:apiData.agreement,
                irony:apiData.irony
            }
            updateUI();
        });
    } else {
        alert("Please Enter A valid blog URL")
    }
} 
    //Client.checkForName(formText)
    console.log("::: Form Submitted :::")
//function to post the data studied it at the professional nanodegree course UDACITY AWESOME :D
const postUrl = async (url ='', data = {}) => {
    // console.log('Analyzing:', data);
    const req = await fetch(url, {
        method :'POST',
        credentials:'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await req.json();
        return newData;
    } catch(error) {
        console.log("error" , error);
    }
};
const updateUI =  () => {
    
    document.getElementById('polarity').innerHTML = ` ${meaningData.Polarity}`;
    document.getElementById('confidence').innerHTML = ` ${meaningData.confidence}`;
    document.getElementById('subjectivity').innerHTML = ` ${meaningData.subjectivity}`;
    document.getElementById('agreement').innerHTML = ` ${meaningData.agreement}`;
    document.getElementById('irony').innerHTML = ` ${meaningData.irony}`;
}
export { handleSubmit }
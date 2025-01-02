function handleJsonUpload() {
    const file = document.getElementById('ip-file').files[0];
    if (!file) {
        alert('Please select JSON file.')
        return
    }

    const reader = new FileReader()

    reader.onload = async (event) => {
        try {
            const data = JSON.parse(event.target.result)
            console.log(data)
            const response = await fetch('/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                alert('File is uploaded successfully')
            }
            else {
                const err = await response.json()
                console.log(err)
                alert('Failed to upload')
            }
        }
        catch (err) {
            console.log(err);
            alert('Invalid JSON File')
        }
    }

    reader.readAsText(file)
}

async function postData(data){
    try {
        const response = await fetch('/admin', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            alert('Data is uploaded successfully')
        }
        else {
            const err = await response.json()
            console.log(err)
            alert('Failed to upload')
        }
    }
    catch (err) {
        console.log(err);
        alert('Invalid Data', err)
    }
}

function handleFormSubmit() {
    const data = {}

    const firstHeadlineElement = document.getElementById('first-headline');
    const secondHeadlineElement = document.getElementById('second-headline');
    const viewLinkElement = document.getElementById('viewlink');
    const fileElement = document.getElementById('file');
    const pNameElement = document.getElementById('project-name')
    const pliveLinkElement = document.getElementById('livelink');
    const psrcLinkElement = document.getElementById('srclink');
    const pImageElement = document.getElementById('imagelink')

    function getData(...elements) {

        return elements.map((element) => (
            element.value.trim()
        ))
    }

    const [firstHeadline, secondHeadline, viewLink, file, pName, pLive, pSrc, pImage] =
        getData(firstHeadlineElement, secondHeadlineElement, viewLinkElement, fileElement, pNameElement, pliveLinkElement, psrcLinkElement, pImageElement)

    function getProject() {
        if ((!!pName ^ !!pLive) || (!!pLive ^ !!pSrc) || (!!pLive ^ !!pImage)) {
            console.log('Enter all headlines')
        }
     
        else if (pName && pLive && pSrc && pImage) {
            console.log('Project: Data Recieved')
            data.projects = {
                name: pName,
                description: '',
                image: pImage,
                previewLink: pLive,
                sourceCodeLink: pSrc
            }
            pNameElement.value = ''
            pImageElement.value = ''
            pliveLinkElement.value = ''
            psrcLinkElement.value = ''
        }
        else {
            console.log('Project: No Data')
        }
    }

    function getHeadines() {
        if ((!!firstHeadline ^ !!secondHeadline)) {
            console.log('Enter all headlines')
        }
        else if (firstHeadline && secondHeadline) {
            console.log('Headlines: Data Recieved')
            data.headline = [firstHeadline, secondHeadline]
            secondHeadlineElement.value = ''
            firstHeadlineElement.value = ''
        }
        else {
            console.log('Headlines: No Data')
        }
    }

    function getResume() {
        if ((!!viewLink ^ !!file)) {
            console.log('Enter all resume details')
        }
        else if (viewLink && file) {
            console.log('Resume: Data Recieved')
            data.resume = {
                updateMonth: new Date().toLocaleString('en-US', { month: 'short' }),
                updateYear: new Date().getFullYear(),
                viewurl: viewLink,
                file
            }
            viewLinkElement.value = ''
            fileElement.value = ''
        }
        else {
            console.log('Resume: No Data')
        }
    }

    getHeadines();
    getResume();
    getProject();
    console.log(data);
    if(data){
        postData(data);
    }
    else{
        console.log('error before seding data');
    }
}
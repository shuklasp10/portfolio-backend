const btnUpload = document.getElementById('btn-upload');

function handleUpload(){
    const file = document.getElementById('ip-file').files[0];
    if(!file){
        alert('Please select JSON file.')
        return 
    }

    const reader = new FileReader()

    reader.onload = async (event) => {
        try{
            const data = JSON.parse(event.target.result)
            console.log(data)
            const response = await fetch('/admin',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
    
            if(response.ok){
                alert('File is uploaded successfully')
            }
            else{
                const err = await response.json()
                console.log(err)
                alert('Failed to upload')
                
            }
        }
        catch(err){
            console.log(err);
            alert('Invalid JSON File')
        }
    }

    reader.readAsText(file)
}

btnUpload.addEventListener('click',handleUpload);
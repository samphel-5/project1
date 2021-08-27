import React,{Component} from 'react'
import axios from 'axios';

class FileUploader extends Component {
    state={
        //initially no file is selected
        selectedFile:null
    };

    //on file select (from the pop up)
    onFileChange = event =>{
       
        //updating the state
        this.setState({ selectedFile: event.target.files[0]});
    };

    //on file upload click the upload button
    onFileUpload = () => {
        //change this according to the server or storage we use

        //creating an object of formData
        const formData = new FormData();

        //update the formData object 
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        //details of the uploaded file 
        console.log(this.state.selectedFile);

        //making request to the backend api
        //send formdata object
        axios.post('api/uploadfile', formData);
    
    };

    //file content to be displayed after 
    //file upload is complete

    fileData = () => {
        if(this.state.selectedFile){
            return(
                <div>
                    <h2>File Details</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } 
        else {
            return(
                <div>
                    <br/>
                    <h4>Choose your file and upload</h4>
                </div>
            );
        }
    };

    render() {
        return(
            <div>
                <h3>upload your id card</h3>
                <div>
                    <input type='file' onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>Upload</button>
                </div>
                {this.fileData}
            </div>
        );
    }
}
export default FileUploader

import React, {useState} from 'react';
import './App.css';
import './styles/Adminform.css';
import axios from 'axios';


function Adminform() {
  const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const result = await axios.post('http://localhost:3000/api/upload',{ data: base64EncodedImage})
            console.log(result)
            
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };

  const handleSubmit = event => {
   event.preventDefault();
   alert('You have submitted the data')
 }

  return(
    <div className="wrapper">
      <h1>Input Project Data</h1>
      <form onSubmit={handleSubmit} >
        <fieldset>
          <label>
            <p>Project Name</p>
            <input name="name" required/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Project Leader</p>
            <input name="leader" required/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Project description</p>
            <input name="description" required />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Image Link</p>
            <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                    required
                />
            <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                    required
                />
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                    required
                />
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                    required
                />
                {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Github Link</p>
            <input name="github" required />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Demo Link</p>
            <input name="demolink" required/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Documentation</p>
            <input name="documentation" required />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Tech Stack</p>
            <input name="tech" required/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Adminform;

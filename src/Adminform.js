import React, {useState} from 'react';
import './App.css';
import './styles/Adminform.css';
import axios from 'axios';
import imageCompression from 'browser-image-compression';

const options = { 
  maxSizeMB: 1,        
  useWebWorker: true,    
}

function Adminform() {
 
  const [developerName, setDeveloperName] = useState('')
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  const [repoUrl, setRepoUrl] = useState('')
  const [demoUrl, setDemoUrl] = useState('')
  const [documentationUrl, setDocumenationUrl] = useState('')
  const [stack, setStack] = useState('')
  const [tags, setTags] = useState([])

  const [selectedFiles, setSelectedFiles] = useState([]);
  
  function resetStates() {
    setSelectedFiles([])
    setDeveloperName('')
    setProjectName('')
    setDescription('')
    setRepoUrl('')
    setDemoUrl('')
    setTags([])
    setDocumenationUrl('')
    setStack('')
  }

  function handleImageInput(event) {
    const file = event.target.files[0]
    const newSelectedFiles = [...selectedFiles,file]
    setSelectedFiles(newSelectedFiles)
  }

//   const handleSubmitImage = async () => {
//     if (selectedFiles.length === 0) return null;
//     try{
//         // const imageFile = selectedFile
//         let images = []
//         selectedFiles.forEach(async (imageFile)=>{
//           const file = await imageCompression(imageFile, options)
//           const reader = new FileReader();
//           reader.readAsDataURL(file);
//           reader.onloadend = async() => {
//               // uploadImage(reader.result)
//             images.push(reader.result)
//           };
//           reader.onerror = () => {
//               console.log('some error happened')
//           };
//         });
//         console.log(images)
//         return images

//        }catch(err) {
//         console.log(err)
//         return null
//        }
    
// };

  const handleSubmit = async(event) => {
    event.preventDefault();
    let user = {
      developer_name: developerName,
      project_name: projectName,
      description: description,
      repo_url: repoUrl,
      demo_url: demoUrl,
      documentation_url: documentationUrl,
      main_stack: stack
    }

    try{

        let images = []

        for(let i=0;i<selectedFiles.length;i++){
          let imageFile = selectedFiles[i]
          const file = await imageCompression(imageFile, options)
                   
          const uploadFileAsText = (file)=> {
            return new Promise((resolve,reject)=>{
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = async() => {
                resolve(reader.result)
              };
              reader.onerror = () => {
                reject()
              };
            })
          }

          let res = await uploadFileAsText(file);
          images.push(res)
        }
        let Tags = tags.split(' ')
        console.log(Tags)
        let result = await axios.post('https://code-crud.herokuapp.com/addproject',{...user,images:images,tags:Tags})
        resetStates()
        console.log(result)
        alert('project added successfully')

    }catch(err){
      console.log(err)
    }

 }

  return(
    <div className="wrapper">
      <h1>Input Project Data</h1>
      <form onSubmit={handleSubmit} >
        <fieldset>
          <label>
            <p>Project Name</p>
            <input name="name"  value={projectName} onChange={(evt)=>{setProjectName(evt.target.value)}}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Project Leader</p>
            <input name="leader"  value={developerName} onChange={(evt)=>{setDeveloperName(evt.target.value)}}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Project description</p>
            <input name="description"  value={description} onChange={(evt)=>{setDescription(evt.target.value)}}  />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Image Link</p>
            <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleImageInput}
                    // value={fileInputState}
                    className="form-input"
                />
            <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleImageInput}
                    // value={fileInputState}
                    className="form-input"
                />
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleImageInput}
                    // value={fileInputState}
                    className="form-input"
                />
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleImageInput}
                    // value={fileInputState}
                    className="form-input"
                />
                {/* {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )} */}
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Repository Link</p>
            <input name="github"  value={repoUrl} onChange={(evt)=>{setRepoUrl(evt.target.value)}}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Demo Link</p>
            <input name="demolink"  value={demoUrl} onChange={(evt)=>{setDemoUrl(evt.target.value)}}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Documentation</p>
            <input name="documentation"  value={documentationUrl} onChange={(evt)=>{setDocumenationUrl(evt.target.value)}} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Tech Stack</p>
            <input name="tech"  value={stack} onChange={(evt)=>{setStack(evt.target.value)}}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Tags</p>
            <input name="tags"  value={tags} onChange={(evt)=>{setTags(evt.target.value)}}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Adminform;

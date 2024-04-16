import React, {useState} from 'react'
import "./styles/global.css";

const App = () => {
  const [text, setText] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    
    setText(event.target.value);

    fetch("http://localhost:7000/api/text", {
      method: "POST",
      body: JSON.stringify({text: event.target.value}),
      headers:{
        'Content-Type': 'application/json'
      }

    })
    .then((res)=>{

      return res.json();

      
    })
    .then((res)=>{

      if(res?.status === 200){
        setResponse(res.text);
      }

    })
    .catch((err)=>{
        console.log(err, "Error");
    })

  }



  return (
    <div className="flex flex-row gap-4 w-screen h-screen">

      <div className="h-full w-1/2 p-4  box-border">
        <h1 className="text-center text-2xl mb-4">Markdown Editor</h1>
        <textarea className="outline-none w-full h-5/6"  value={text} placeholder="Enter text here" onChange={handleChange}>

        </textarea>
      </div>

      <div className="bg-black w-1/2 h-full p-4 text-white">
        <h1 className="text-center text-2xl mb-4">Preview</h1>
        
         {
          response.split("\n")?.map((item:string, index:number)=>{
              let count = 0;
              item.split("")?.forEach((el:string)=>{
                if(el==="#")count++;
              })
              return <div key={index}>
                 {
                  count === 1 && <h1>{item?.substring(count, item?.length)}</h1>
                 }
                 {
                  count === 2 && <h2>{item?.substring(count, item?.length)}</h2>
                 }
                 {
                  count === 3 && <h3>{item?.substring(count, item?.length)}</h3>
                 }
                 {
                  count === 4 && <h4>{item?.substring(count, item?.length)}</h4>
                 }
                 {
                  count === 5 && <h5>{item?.substring(count, item?.length)}</h5>
                 }
                 {
                  count === 6 && <h6>{item?.substring(count, item?.length)}</h6>
                 }
                 {
                  count === 0 && <p>{item?.substring(count, item?.length)}</p>
                 }
                   
              </div>
          })
         }

      </div>
      
    </div>
  )
}

export default App;

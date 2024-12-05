```javascript
// pages/index.js

export default async function Home() {
  //Added try and catch block to handle the error during fetching.
  try{
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return (
      <div>{JSON.stringify(data)}</div>
    );
  }
  catch(error){
    console.error('Error fetching data:',error);
    return <div>Error Fetching Data!</div>
  }
}
```
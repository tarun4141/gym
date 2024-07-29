export const exerciseOptions =  {
    method: 'GET',
   // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'x-rapidapi-key': 'a443cabb4dmsh33a3410e264697fp1e9481jsn5e49bded317d',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  



export const fetchData = async (url,options) =>{
    const res =await fetch(url,options);
    const data = await res.json();

    return data;
}
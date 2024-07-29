export const exerciseOptions =  {
    method: 'GET',
   // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'x-rapidapi-key': 'a443cabb4dmsh33a3410e264697fp1e9481jsn5e49bded317d',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };



export const fetchData = async (url,options) =>{
    const res =await fetch(url,options);
    const data = await res.json();

    return data;
}
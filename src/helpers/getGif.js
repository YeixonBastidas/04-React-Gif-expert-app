export const getGif = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=gmBDoqGS62PfvJFghwL13mtZoVIE6e1I`;
    
    let listImages = [];
    await fetch(url)
          .then(x => x.json())
          .then(x =>  {                
            x.data.map(items => (
                listImages = [...listImages,{
                    id: items.id,
                    title : items.title,
                    url: items.images.downsized_medium.url
                }]
            ));  
          });

          return listImages;
}

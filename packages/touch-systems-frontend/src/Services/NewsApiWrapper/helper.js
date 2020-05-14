const uuidv4 = require("uuid/v4")

export const MapDtoToNewsEntity= (dto)=>{
    return {
        guid:uuidv4(),
        source:dto.source.name,
        author:dto.author,
        description:dto.description,
        title:dto.title,
        linkToNewsSource:dto.url,
        imageThumb:dto.urlToImage,
        datePublished:(new Date(dto.publishedAt)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")
    }
}
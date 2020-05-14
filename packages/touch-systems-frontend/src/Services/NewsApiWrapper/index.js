import Axios from "axios";
import * as Helper from "./helper";

export const getTopHeadlinesUK = async () => {
  try {
    const res = await Axios.get(
      ` https://newsapi.org/v2/top-headlines?country=gb&apiKey=d694359125554e2ea00bbb5914d48d3f`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const formattedArray = res.data.articles.map((articleDto) => {
      return Helper.MapDtoToNewsEntity(articleDto);
    });

    return formattedArray;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to GET getTopHeadlinesUK`);
  }
};

export const getHeadlinesBasedOnPublication = async (publications) => {
  try {
    const publicationsToGetNewsFrom = publications.toString();
    const res = await Axios.get(
      ` https://newsapi.org/v2/top-headlines?sources=${publicationsToGetNewsFrom}&apiKey=d694359125554e2ea00bbb5914d48d3f`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const formattedArray = res.data.articles.map((articleDto) => {
      return Helper.MapDtoToNewsEntity(articleDto);
    });

    return formattedArray;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to GET getHeadlinesBasedOnPublication`);
  }
};

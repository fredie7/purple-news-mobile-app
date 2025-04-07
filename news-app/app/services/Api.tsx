import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});
const apiKey = "?country=us&apiKey=09f20bd7125649cd8f8d8f550863dd13";
const headLines = api.get("/top-headlines" + apiKey);
const getCategory = (category: any) =>
  api.get(
    "/everything?q=" + category + "&apiKey=09f20bd7125649cd8f8d8f550863dd13"
  );

export default { headLines, getCategory };

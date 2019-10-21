import { Client } from "contensis-delivery-api";

let contensisConfig = {
  rootUrl: "https://cms-ps-dev-sandbox.cloud.contensis.com",
  accessToken: "AfTWtGox8aKdgO85rXXSJrWUXa97BA1aXP4fwaIrliDSvWNz",
  projectId: "dtp",
  language: "en-GB",
  versionStatus: "published",
  pageSize: 25
};

export async function fetchArticles() {
  let client = Client.create(contensisConfig);
  let articleList = await client.entries.list({
    contentTypeId: "article",
    pageOptions: { pageIndex: 0, pageSize: 10 },
    orderBy: ["-dateTime"]
  });
  return articleList.items;
}

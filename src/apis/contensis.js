import { Client, Query, Op } from "contensis-delivery-api";

const contensisConfig = {
  rootUrl: "https://cms-ps-dev-sandbox.cloud.contensis.com",
  accessToken: "AfTWtGox8aKdgO85rXXSJrWUXa97BA1aXP4fwaIrliDSvWNz",
  projectId: "website",
  language: "en-GB",
  versionStatus: "published",
  pageSize: 25
};

export async function fetchArticles() {
  const client = Client.create(contensisConfig);
  const articleList = await client.entries.list({
    contentTypeId: "article",
    pageOptions: { pageIndex: 0, pageSize: 10 },
    orderBy: ["-dateTime"]
  });
  return articleList.items;
}

export async function fetchEntry(slug) {
  const client = Client.create(contensisConfig);
  const query = new Query(Op.equalTo("sys.slug", slug));

  const entry = await client.entries.search(query, 1);

  console.log(entry.items);

  return entry.items.length ? entry.items[0] : {};
}

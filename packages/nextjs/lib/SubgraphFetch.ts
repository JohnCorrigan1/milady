export async function query() {
  const endpointUrl = "https://api.thegraph.com/subgraphs/name/mercuricchloride/cli-milady";

  const query = `
{
  users(where: {id: "0x4a2c786651229175407d3a2d405d1998bcf40614"}) {
   	id
    miladys
    remilios
    pixeladys
  }
}
`;

  // Define the Fetch API options
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  };
  const res = await fetch(endpointUrl, options);
  const json = await res.json();
  console.log("from game", json);
  return json;
}

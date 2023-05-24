export async function query(address: string) {
  const endpointUrl = "https://api.thegraph.com/subgraphs/name/mercuricchloride/cli-milady";
  const query = `
{
  users(where: {id: "${address.toLowerCase()}"}) {
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

const baseUrl = `http://localhost:4000/api/v1/valuations/`;

export const valuationsService = {
  getAverageValuationForCity,
};

async function getAverageValuationForCity(city: String): Promise<any> {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(`${baseUrl}${city}`, requestOptions).then(async (r) => {
    if (r.ok) {
      return await r.json();
    }
    throw new Error(r.status.toString());
  });
}

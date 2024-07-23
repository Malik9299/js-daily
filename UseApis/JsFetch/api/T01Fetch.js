async function getData() {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/categories?limit=5"
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
getData();

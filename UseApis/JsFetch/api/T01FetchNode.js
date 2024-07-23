const getData = async (req, res) => {
  try {
    const apiUrl = "https://api.escuelajs.co/api/v1/categories";
    const limit = req.query.limit || 5;
    const response = await fetch(`${apiUrl}?limit=${limit}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const categories = await response.json();
    let htmlResponse =
      "<html><head><title>Categories</title></head><body><h1>Categories</h1><ul>";
    categories.forEach((category) => {
      htmlResponse += `<li>${category.name}</li>`;
    });
    htmlResponse += "</ul></body></html>";
    return res.send(htmlResponse);
    // return res.status(200).json(categories);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to fetch categories", error: error.message });
  }
};
getData();
// module.exports = {
//   getData,
// };

const getData = async (csv) => {
  const response = await fetch(csv);
  const rawData = await response.text();
  const rawRows = rawData.split("\n");
  rawRows.forEach((rawRow) => {
    row = rawRow.split(",").slice(1);
    row.splice(1, 1);
    row.splice(6, 2);
    console.log(row);
  });
};
getData("TechCrunchcontinentalUSA.csv");

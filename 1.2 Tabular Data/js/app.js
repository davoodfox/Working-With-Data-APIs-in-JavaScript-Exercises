const chartIt = async (csv) => {
  const data = await getData(csv);
  const ctx = document.getElementById("chart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.xs,
      datasets: [
        {
          label: "Companies Fundings Over Fifty Million Dollars",
          data: data.ys,
          backgroundColor: "rgba(255, 159, 64, 0.8)",
        },
      ],
    },
  });
};

const getData = async (csv) => {
  const xs = [];
  const ys = [];
  const allData = [];
  let sortedData = [];
  const response = await fetch(csv);
  const rawData = await response.text();
  const rawRows = rawData.split("\n");
  rawRows.splice(0, 1);
  rawRows.forEach((rawRow) => {
    row = rawRow.split(",").slice(1);
    row.splice(1, 1);
    row.splice(6, 2);
    row.splice(1, 3);
    const dataSet = {
      name: row[0],
      date: row[1],
      funds: row[2],
    };
    allData.push(dataSet);
    sortedData = allData.sort(
      (a, b) => parseFloat(b.funds) - parseFloat(a.funds)
    );
  });
  allData.forEach((row) => {
    if (row.funds > 50000000) {
      xs.push([`${row.name} ${row.date}`]);
      ys.push(row.funds);
    }
  });
  return { xs, ys };
};
chartIt("csv/TechCrunchcontinentalUSA.csv");

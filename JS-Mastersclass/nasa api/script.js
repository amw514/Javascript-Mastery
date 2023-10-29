chartIt();

async function chartIt() {
  const data = await getData();

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.xs,
      datasets: [
        {
          label: "Global Average Temperature in C°",
          data: data.ys,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return `${value.toFixed(2)}°`;
            },
          },
        },
      },
    },
  });
}

async function getData() {
  const xs = [];
  const ys = [];

  let response = await fetch("ZonAnn.Ts+dSST.csv");
  let data = await response.text();
  //   console.log(data);

  const table = data.split("\n").slice(1);
  //   console.log(rows);

  table.forEach((row) => {
    const cols = row.split(",");

    const year = cols[0];

    xs.push(year);
    const temp = cols[1];

    ys.push(temp);
  });

  return { xs, ys };
}

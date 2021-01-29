<script>
  import * as d3 from "d3";

  const paragraph = d3.select("body").append("p").text("Text tree");
  paragraph.enter();

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", 1500)
    .attr("height", 1500)
    .append("g")
    .attr("transform", "translate(50,50)");

  interface Node {
    child: string;
    parent: string;
  }

  const data: Node[] = [
    { child: "Jhon", parent: "" },
    { child: "Aaron", parent: "Kevin" },
    { child: "Kevin", parent: "Jhon" },
    { child: "Kevin1", parent: "Jhon" },
    { child: "Kevin2", parent: "Jhon" },
    { child: "Kevin3", parent: "Jhon" },
    { child: "Kevin4", parent: "Jhon" },
    { child: "Kevin5", parent: "Jhon" },
    { child: "Kevin6", parent: "Jhon" },
    { child: "KevinS1", parent: "Kevin1" },
    { child: "KevinS2", parent: "Kevin1" },
    { child: "KevinS3", parent: "Kevin1" },
    { child: "KevinS4", parent: "Kevin1" },
    { child: "KevinS5", parent: "Kevin1" },
    { child: "KevinS6", parent: "Kevin1" },
    { child: "Hannah", parent: "Ann" },
    { child: "Rose", parent: "Sarah" },
    { child: "Ann", parent: "Jhon" },
    { child: "Sarah", parent: "Kevin" },
    { child: "Mark", parent: "Ann" },
    { child: "Angel", parent: "Sarah" },
  ];

  const dataStructure = d3
    .stratify()
    .id((d) => {
      // console.log(d);
      return (d as Node).child;
    })
    .parentId((d) => {
      // console.log(d);
      return (d as Node).parent;
    })(data);

  console.log(dataStructure, "dataStructure");

  const treeStructure = d3.tree().size([1000, 1000]);

  const information = treeStructure(dataStructure as any);

  const circles = svg
    .append("g")
    .selectAll("circle")
    .data(information.descendants());

  circles
    .enter()
    .append("circle")
    .style("fill", "blue")
    .attr("cx", (d) => {
      return d.x;
    })
    .attr("cy", (d) => d.y)
    .attr("r", (d) => {
      console.log(d, "attr data");
      return 5;
    })
    .on("click", (d) => console.log(d, "data"));

  const connections = svg
    .append("g")
    .selectAll("path")
    .data(information.links());

  connections
    .enter()
    .append("path")
    .style("fill", "none")
    .style("stroke", "red")
    .attr(
      "d",
      (d) =>
        "M" +
        d.source.x +
        "," +
        d.source.y +
        " C " +
        d.source.x +
        "," +
        (d.source.y + d.target.y) / 2 +
        " " +
        d.target.x +
        "," +
        (d.source.y + d.target.y) / 2 +
        " " +
        d.target.x +
        "," +
        d.target.y
    );

  const names = svg
    .append("g")
    .selectAll("text")
    .data(information.descendants());

  names
    .enter()
    .append("text")
    .text((d: any) => d.data.child)
    .attr("x", (d: any) => d.x + 5)
    .attr("y", (d: any) => d.y + 2);
</script>

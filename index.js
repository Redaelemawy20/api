const express = require("express");
const departments = require("./data/departments");
const programmes = require("./data/programmes");
const staff = require("./data/staff");

const app = express();
app.use(express.static("public"));
app.get("/api/staff", (req, res) => {
  res.send(staff);
});
app.get("/api/programmes", (req, res) => {
  return res.send(programmes);
});
app.get("/api/departments", (req, res) => {
  let deps = departments.map((departement) => {
    return {
      id: departement.id,
      name: departement.name,
      about: departement.about,
    };
  });
  res.send(deps);
});
app.get("/api/departments/:name", (req, res) => {
  const { name } = req.params;

  let department = departments.find((d) => d.name == name);
  if (department) {
    res.send({
      id: department.id,
      name: department.name,
      target: department.target,
      staff: department.staffMembers,
      passedHeight: department.passedHeight,
      devices: department.Devices,
      activity: department.activity,
      services: department.services,
      backgroundService: department.backgrounImageService,
      target: department.target,
      about: department.about,
    });
  }
  res.status(404).send("not found");
});
app.get("/api/departments/:name/:unitName", (req, res) => {
  const { name, unitName } = req.params;

  let department = departments.find((d) => d.name == name);
  if (department) {
    let unit = department.units.find((u) => u.name === unitName);
    if (unit) return res.send(unit);
    else return res.status(404).send("unit not found");
  }
  return res.status(404).send("department not found");
});
app.get("*", (req, res) => {
res.send("not found route")} )
console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

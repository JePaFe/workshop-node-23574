let tareas = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: false },
  { id: 3, title: "Tarea 3", completed: false },
];

const index = (req, res) => {
  res.render("index", { tareas });
};

module.exports = {
  index,
};

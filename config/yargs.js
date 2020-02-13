/*jshint esversion: 6 */

const descripcion = {
    demand: true,
    alias: "d",
    desc: "descripcion de la tarea por hacer"
};

const completado = {
    default: true,
    alias: "c",
    desc: "marca como completado o pendiente la tarea"
};

const argv = require("yargs")
    .command("crear", "actualiza el estado completo de una tarea", { descripcion })
    .command("actualizar", "actualiza el estado completo de una tarea", { descripcion, completado })
    .command("borrar", "deletea una tarea", { descripcion })
    .help().argv;

module.exports = {
    argv
};
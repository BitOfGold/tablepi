import TablePi from "./components/TablePi.vue"

export default {
  install: (app, options) => {
    app.component("tablepi", TablePi)
  }
}

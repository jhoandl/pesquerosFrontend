export default {
  data() {
    return {
      isSidebarExpanded: false,
    };
  },
  created() {
    // Obtener el valor de modo oscuro del localStorage
    const isExpandedMode = localStorage.getItem("toggle") === "false";
    this.isSidebarExpanded = isExpandedMode;
  },
  methods: {
    toggleExpandedMode() {
      // Cambiar el valor en localStorage
      localStorage.setItem("toggle", this.isSidebarExpanded);
      // Actualizar el valor de isDarkMode
      this.isSidebarExpanded = !this.isSidebarExpanded;
      console.log(this.isSidebarExpanded);
    },
  },
};

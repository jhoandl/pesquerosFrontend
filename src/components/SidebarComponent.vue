<template>
  <div class="sidebar">
    <div class="side-content">
      <div class="header">
        <h1 class="sidebar-title">
          <i class="fa-solid fa-fish"></i>
          PESQUEROS
        </h1>
      </div>
      <div class="w-full cursor-pointer ml-auto mr-auto content-menu">
        <ul class="mt-6">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            :class="{ 'bg-gray-300 text-black': item.isActive }"
          >
            <a
              class="flex items-center px-4 py-2 text-black"
              :class="{ 'bg-gray-300 text-black': item.isActive }"
              @click="toggleCollapse(index)"
            >
              <i class="mr-3" :class="item.icon"></i>
              <span>{{ item.label }}</span>
              <i
                class="ml-auto"
                v-show="item.children.length > 0"
                :class="
                  item.isCollapsed
                    ? 'fa-solid fa-chevron-down'
                    : 'fa-solid fa-chevron-up'
                "
              ></i>
            </a>
            <ul
              class="collapsible"
              v-if="item.children.length > 0"
              :style="{
                maxHeight: item.isCollapsed
                  ? '0'
                  : item.children.length * 3 + 'rem',
              }"
            >
              <li v-for="(child, i) in item.children" :key="i">
                <router-link
                  :to="child.path"
                  class="flex items-center px-4 py-2 text-gray-400"
                  :class="{
                    'ml-8': item.children.length > 1,
                    'bg-gray-300 text-black w-60': child.isActiveChild,
                    'rounded-lg': child.isActiveChild,
                  }"
                  @click="toggleChildActive(item, child)"
                >
                  <i class="mr-3 fa-regular fa-circle"></i>
                  <span>{{ child.label }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="mt-96">
            <a
              class="flex items-center px-4 py-4 text-black bg-gray-300 w-full ml-auto mr-auto justify-center"
            >
              <i class="mr-3 fa-solid fa-sign-out"></i>
              <span>Cerrar sesión</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      menuItems: [
        {
          label: "Dashboard",
          icon: "fa-solid fa-home",
          isActive: true,
          children: [],
        },
        {
          label: "Configuración",
          icon: "fa-solid fa-cog",
          isActive: false,
          isCollapsed: true,
          children: [
            {
              label: "Empresa",
              isActiveChild: false,
              path: "",
            },
            {
              label: "Cargo",
              isActiveChild: false,
              path: "",
            },
            {
              label: "Personal",
              isActiveChild: false,
              path: "/personal",
            },
          ],
        },
        {
          label: "Procesos",
          icon: "fa-solid fa-list",
          isActive: false,
          isCollapsed: true,
          children: [
            {
              label: "Alimentación",
              isActiveChild: false,
              path: "/Alimentacion",
            },
            {
              label: "Oxigenación",
              isActiveChild: false,
              path: "/Oxigenacion",
            },
          ],
        },
        {
          label: "Estadisticas",
          icon: "fa-solid fa-chart-bar",
          isActive: false,
          children: [],
        },
      ],
    };
  },
  methods: {
    toggleCollapse(index) {
      this.menuItems.forEach((item, i) => {
        if (i !== index) {
          item.isCollapsed = true;
          item.isActive = false;
        } else {
          item.isCollapsed = !item.isCollapsed;
          item.isActive = !item.isCollapsed;
          // Desactivamos el estado 'isActive' del ítem padre si tiene hijos activos
          if (item.children.some((child) => child.isActiveChild)) {
            item.isActive = false;
          }
          this.menuItems[index].isCollapsed = false;
        }
      });
    },
    toggleChildActive(parent, child) {
      parent.children.forEach((c) => {
        if (c !== child) {
          c.isActiveChild = false;
        }
      });
      child.isActiveChild = true;
      parent.isActive = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "~@fortawesome/fontawesome-free/css/brands.css";
@import "~@fortawesome/fontawesome-free/css/solid.css";
@import "~@fortawesome/fontawesome-free/css/regular.css";

.collapsible {
  transition: max-height 0.3s ease-out;
  overflow: hidden;
}

.sidebar {
  background-color: rgba($color: #cacfd2, $alpha: 80);
  // height: 100vh;
}
.side-content {
  background-color: rgba($color: #ffffff, $alpha: 1);
  // height: 100vh;
}
.header {
  display: flex;
  text-align: center;
  background-color: #66a394;
  height: 78px;
}
.sidebar-title {
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  color: #ffffff;
}
.fa-fish {
  margin-right: 10px;
  font-size: 25px;
}
.content-menu {
  height: 89vh;
}
</style>

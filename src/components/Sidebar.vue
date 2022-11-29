<template>
    <div class="sidebar">
        <div class="title">
            pesqueros
        </div>
        <div class="menu-items">
            <router-link to="/home" active-class="active" exact="" tag="button" class="side-btn">
                <div class="link-container">
                    Inicio
                </div>
            </router-link>
             <router-link to="/users" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    Usuarios
                </div>
            </router-link> 
           <!-- <router-link to="/roles" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    Roles
                </div>
            </router-link> -->
            <router-link to="/food" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    Alimentación
                </div>
            </router-link>
            <router-link to="/oxigeno" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    Oxigenación
                </div>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
.title {
    color: white;
    font-size: 24px;
    margin-top: 50px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Courier New', Courier, monospace;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}

.menu-items > * {
    margin-top: 68px;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: #67AB9F;
    font-weight: 500;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    position: absolute;
    content: "";
    top: -30px;
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active::after {
    position: absolute;
    content: "";
    bottom: -30px;
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Courier New', Courier, monospace;
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    color: white;
    background-color: transparent;
}

.side-btn.active .link-container::before {
    position: absolute;
    top: -60px;
    right: 0;
    content: "";
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #67AB9F;
}

.side-btn.active .link-container::after {
    position: absolute;
    bottom: -60px;
    right: 0;
    content: "";
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #67AB9F;
    z-index: 99;
}
</style>
<template>
<v-row align="center" justify="center">
    <h1>This is User index page</h1>
    <router-link :to="{ name: 'users.create' }" class="btn">Create</router-link> |
    <router-link :to="{ name: 'users.createplat' }" class="btn">Create plat</router-link>
    <router-view name="dialog"></router-view>
    <br>
    <router-view></router-view>
    <br>
    <p>It has sub components</p>
    <div id="nav">
      <router-link :to="{ name: 'users.edit', params: { id: '1' } }">edit 1</router-link> |
      <router-link :to="{ name: 'users.edit', params: { id: '2' } }">edit 2</router-link> |
      <router-link :to="{ name: 'users.edit', params: { id: '3' } }">edit 3</router-link> |
      <router-link :to="{ name: 'users.edit', params: { id: '4' } }">edit 4</router-link>
    </div>
    <hr>
    <div id="nav">
      <router-link :to="{ name: 'users.editplat', params: { id: '1' } }">edit plat 1</router-link> |
      <router-link :to="{ name: 'users.editplat', params: { id: '2' } }">edit plat 2</router-link> |
      <router-link :to="{ name: 'users.editplat', params: { id: '3' } }">edit plat 3</router-link> |
      <router-link :to="{ name: 'users.editplat', params: { id: '4' } }">edit plat 4</router-link>
    </div>
  </v-row>
    
</template>
<script>
export default {
  name: 'UserIndex'
}
</script>
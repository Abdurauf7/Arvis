<template>
<div class="container mx-auto w-1/3 mt-3">
    <ul class="flex">
    <li class="flex-1 mr-2">
        <router-link to="/">
            <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" >Comments</a>
        </router-link>
        
    </li>
    <li class="flex-1 mr-2">
        <router-link to="/users">
            <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" >Users</a>
        </router-link>
    </li>
    </ul>
</div>
  <router-view/>
</template>

<style  scoped>

</style>
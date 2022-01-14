<template>
  <div class="container h-screen mx-auto mt-7">
    <Loading 
    v-model:active="isLoading"
    :is-full-page="fullPage"
    :color="`#3377FF`"
    />
    
    <div class="my-3 flex justify-between">
      <div>
        <button class="bg-green-500 hover:bg-dark-700 text-white font-bold py-2 px-4 rounded" @click="openAddComentsModal"> Add comments</button>
      </div>
      <div class="flex w-2/6">
        <input v-model="searchItem" placeholder="Please enter name to search..." class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <button @click="handleSearch" class="ml-3 bg-gray-200 border-2 hover:bg-dark-700 text-white font-bold py-2 px-4 rounded">
          <img src="../../assets/icons/search.png" alt="" >
          </button>
      </div>
    </div>
      <Table :data="data" :handleDelete="handleDelete" :handleEdit="handleEdit" />
      <EditModal :editModalVisible="editModalVisible" 
      :editableData="editableData" 
      :handleClose="handleClose" 
      :handleSubmit="handleSubmit"
      :handleChange="onChange"
      @input="input"
      />
    <AddModal 
    :addModalVisible="addModalVisible" 
    :handleAddComment="handleAddComment"
    :handleAddModalClose="handleAddModalClose"
    />
  </div>
</template>

<script>

// Loader Components
import Loading from 'vue-loading-overlay';

// Custom Components
import Table from '../../components/common/table.vue'
import EditModal from './editModal.vue'
import AddModal from './addModal.vue'

// Styles
import 'vue-loading-overlay/dist/vue-loading.css';

// Services
import { getAllData,deleteData,updateData,addData,searchData } from '../../service/dataServices'

export default {
  name: 'Home',
  components: {
   Table,
   EditModal,
   AddModal,
   Loading,
  },

  
  data(){
    return {
      data:[],
      editModalVisible:false,
      addModalVisible:false,
      isLoading:false,
      searchItem:'',
      editableData:{
        name:'',
        email:'',
        body:'',
      },
    }
  },
 created(){

  // Geting all comments from server 

   getAllData().then(res=>{
     this.isLoading = true
     if(res.status === 200) {
       this.data = res.data;
     }
     this.isLoading = false
   })
   
 },
  methods:{
    // Get all comments if search fiels id empty
    getDatas (){
      this.isLoading = true
      getAllData().then(res=>{
          if(res.status === 200){
            this.$toast.success("Sucessfully")
            this.isLoading = false
            this.data = res.data

          }else {
            this.isLoading = false
            this.$toast.error("Internal server error")
          }
        })
    },
//  handling delete event 
    handleDelete (props){
      this.isLoading = true
      deleteData(props).then(res=>{
        if(res.status === 200) {
          this.$toast.success("Sucessfully Deleted")
          let filteredData = this.data.filter(data=>data.id !== props)
          this.data = filteredData
          this.isLoading = false
        }else {
          this.isLoading = false
          this.$toast.error("Internal server error")
        }
      });
    },
    
// Getting editing comments data

    handleEdit (props){
      this.editModalVisible = true;
      this.editableData = props
    },

// handling close modal
    handleClose () {
      this.editModalVisible = false
      this.editableData = {}
    },
// handling add comments modal
    handleAddModalClose () {
      this.addModalVisible = false
    },

// handling edit comments 
    handleSubmit () {
      this.isLoading = true
      updateData(this.editableData.id).then(res=>{
        if(res.status === 200){
        this.$toast.success("Information were changed")
        this.editModalVisible = false
        this.isLoading = false
        }else{
          this.isLoading = false
          this.$toast.error("Internal server error")
        }
      })      
    },

// onChage event when editing data
    input(e){
      this.editableData[e.target.name] = e.target.value
    },

// handling open comments modal
    openAddComentsModal(){
      this.addModalVisible = true
    },

// handling add comments
    handleAddComment(props){
      this.isLoading = true
      addData(props).then(res=>{
        if(res.status === 201){
          let newData = [...this.data,res.data]
          this.data = newData
          this.isLoading = false
          this.$toast.success("Information added sucessfully")
        } else {
          this.isLoading = false
           this.$toast.error("Internal server error")
        }
      })
      this.addModalVisible = false
    },

// handling search datas
    handleSearch(){
      this.isLoading = true
      let filteredData = this.data.find(f => f.name.includes(this.searchItem))
      if(filteredData && this.searchItem.length !== 0) {
        searchData(filteredData.postId).then(res=> {
          if(res.status === 200) {
            this.$toast.success("Infomation found")
            this.data = res.data
            this.isLoading = false
          }
      })
      } else if (filteredData === undefined) {
         this.$toast.success("No data")
         this.isLoading = false
      } else {
      this.getDatas()
      this.isLoading = false
      }
      
    }
  }
}
</script>

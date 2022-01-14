<template>
    <div v-show="addModalVisible" class="fixed inset-0 w-full h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 h-3/5">
        <h1 class="text-3xl text-gray-600 ml-3">Add Modal</h1>
                 <hr class="w-full h-0.5 bg-gray-300 rounded" />
            <div class="flex flex-col justify-center w-5/6 h-4/5 mx-auto ">
                <div class="mb-4" style="width:100%;">
                            <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="name">
                                Name
                            </label>
                            <input
                            :class="{'appearance-none border border-red-500':v$.name.$error}"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="name" 
                            name="name"
                            type="text" 
                            placeholder="Write your name"
                            v-model="v$.name.$model"
                        >
                        <div class="input-errors mt-2" v-for="(error, index) of v$.name.$errors" :key="index">
                            <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                        </div>
                </div>
                <div class="mb-4" style="width:100%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input 
                        v-model.trim="v$.email.$model"
                        :class="{'appearance-none border border-red-500':v$.email.$error}"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Write your email"
                        >
                        <div class="input-errors mt-2" v-for="(error, index) of v$.email.$errors" :key="index">
                            <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                        </div>
                </div>
                <div class="mb-4" style="width:100%;">
                        <label class="input-label block text-gray-700 text-sm font-bold mb-2" for="desc">
                            Description
                        </label>
                        <textarea 
                        v-model.trim="v$.body.$model"
                        :class="{'appearance-none border border-red-500':v$.body.$error}"
                        class="
                        h-full
                        shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" name="body" type="text" placeholder="Write your description"> </textarea>
                        <div class="input-errors mt-2" v-for="(error, index) of v$.body.$errors" :key="index">
                            <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                        </div>
                </div>
            </div>
                <div class="flex justify-end w-5/6 mx-auto">
                    <button 
                    :class="{'opacity-50 cursor-not-allowed': name.length === 0,'opacity-50 cursor-not-allowed':email.length === 0,'opacity-50 cursor-not-allowed':body.length === 0}"
                    :disabled="name.length === 0 && email.length === 0 && body.length === 0"  @click="handleSubmit(name,email,body)" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
                    <button class="bg-red-500 ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" @click="handleClose">
                        <span class="font-bold text-white text-2xl">x</span>
                    </button>
                </div>
        </div>
    </div>
</template>

<script>

// Validation package
import useVuelidate from '@vuelidate/core'
import { required,email } from '@vuelidate/validators'

export default {
    setup () {
    return { v$: useVuelidate() }
  },
    props:['addModalVisible','handleAddComment','handleAddModalClose'],
    data(){
        return {
            name:'',
            email:'',
            body:'',
            isActive:false
        }
    },
    validations() {
        return {
            name:{required},
            email:{required, email},
            body:{required}
        }
    },
    methods:{
// handle Adding new commits 
        handleSubmit(){
            let data ={
                name:this.name,
                email:this.email,
                body:this.body,
            }
            if(this.name.length !== 0 && this.email.length !== 0 && this.body.length !== 0){
            this.isActive = true;
            this.handleAddComment(data)
            this.name = ''
            this.email = ''
            this.body = ''
            }else {
                this.isActive = false
            }
            
            
        },
// handle closing add modal 
        handleClose (){
            this.handleAddModalClose()
            this.name = ''
            this.email = ''
            this.body = ''
        }
    }
}
</script>
<template>
  <div>
    <el-table :data="selects" border style="width: 37%;margin-left:30%">

      <el-table-column prop="id" label="编号" width="180">
      </el-table-column>

      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>

      <el-table-column prop="age" label="年龄">
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>


    </el-table>

    <el-button type="primary" plain style="margin-top :10px" @click="select">查询</el-button>
  </div>

</template>


<script>
  import axios from 'axios'
  import {
    postRequest
  } from '../utils/api'
  export default {
    data() {
      return {
        selects: [],
        delarr:[]
      }
    },
    methods: {
      select() {
        axios.get('http://localhost:8080/select').then(resp => {
          this.selects = resp.data
        }).catch(error => {
          console.log(error)
        })

      },
      handleDelete(index, row) {
        this.idx = index;
        this.msg = row; //每一条数据的记录
        this.delarr.push(this.msg.PackingId); //把单行删除的每条数据的id添加进放删除数据的数组
        this.delVisible = true;
        console.log(this.delarr)
      },
    } 
  }
</script>

<style>

</style>
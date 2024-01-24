

// const express = require('express')
// const router = require('/router')
// const bodyparser = require("bodyparser")
import express from 'express'
import router from './router.js';
import bodyparser from 'body-parser'
const app = express()


app.use(bodyparser.urlencoded({
    extended: true
}))

// 监听端口
app.listen(5170, () => {
    console.log('5170端口已监听')
})
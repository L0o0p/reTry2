

import express from 'express'
import validator from 'validator'
// var validator = require('validator')
// var isEmpty = require('lodash/isEmpty')
// import validator from 'validator'
import _ from 'lodash';
const isEmpty = _.isEmpty;

const router = express.Router()


// 验证器：验证信息是否符合规则
const validatorInput = (data) => {
    let errors = {}
    if (validator.isEmpty(data.username)) {
        errors.username = '用户名不能为空'
    }
    if (validator.isEmpty(data.password)) {
        errors.password = '密码不能为空'
    }
    // 取反：即符合条件默认被判断为false，不符合才判断为true
    if (validator.equals(data.repassword, data.repassword)) {
        errors.repassword = '两次输入的密码不一致'
    }

    return {
        isValid: !isEmpty(errors),
        errors
    }
}

// 发送器：发送数据
router.post('/register', (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;
    // const repassword = req.body.repassword;
    const { isValid, errors } = validatorInput(req.body)
    if (isValid) {
        res.send(errors)
    }
    else {
        res.send({
            msg: "success"
        })
    }
})


export default router;
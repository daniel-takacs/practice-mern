const express = require('express')
const Note = require('../models/noteModel')
const router = express.Router()

router.route('/create').post((req, res) => {
    const title = req.body.title
    const content = req.body.content
    const newNote = new Note({
        title,
        content
    })
    newNote.save()
})

module.exports = router


const fs=require('fs')
const chalk=require('chalk')
const getNote=function () {
    return "Your notes"
    
}

const addNotes=function (title,body) {
    const list=listJson()
    var double=0
    var i=0
    for(i=0;i<list.length;i++)
    {
        if(list[i].title==title)
        {
            double=1
            break
        }
    }

    if(double!=1)
    { const no={
        title:title,
        body:body
    }
        list.push(no)
        saveJson(list)
        console.log("Note added")
    }
    else
    console.log("Title already exists")
    
    
}

const saveJson=function (list) {
    const jlist=JSON.stringify(list)
    fs.writeFileSync('noteJson.json',jlist)
    
}
const listJson=function () {
    try {
        ls=fs.readFileSync('noteJson.json')
        lst=JSON.parse(ls)
        return lst
    } catch (e) {
        return []
    }
    
}

const removeNotes=function (title) {
    const list=listJson()
    var double=0
    var i=0
    for(i=0;i<list.length;i++)
    {
        if(list[i].title==title)
        {
            double=i
            break
        }
    }
    if(double!=0)
    {
        list.splice(i,1)
        saveJson(list)
        console.log("Note deleted")
    }
    else
    {
        console.log("Note not found")
    }
}

const readNotes=function (title) {
    const list=listJson()
    var double=0
    var i=0
    for(i=0;i<list.length;i++)
    {
        if(list[i].title==title)
        {
            double=i
            break
        }
    }
    if(double!=0)
    {
        console.log(title)
        console.log(list[i].body)
    }
    else
    {
        console.log("Note not found")
    }
}

module.exports={
    listJson:listJson,
    addNotes:addNotes,
    removeNotes:removeNotes,
    readNotes:readNotes
}
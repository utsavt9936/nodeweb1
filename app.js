const chk=require('chalk')
const yargs=require('yargs')
var val=require('validator')
const ref=require('./notes')
//console.log(ref())

yargs.command({
    command: 'add',
    describe:'Add new notes',
    builder:{
        title:{
            describe:'title of note',
            type:'string',
           // demandOption=true
        },
        body:{
            describe:'Body of note',
            type:'string',
           // demandOption=true

        }

    },
    handler:function (argv) {
        ref.addNotes(argv.title,argv.body)
        
        
    }
})

yargs.command({
    command: 'remove',
    describe:'Remove notes',
    handler:function (argv) {
        ref.removeNotes(argv.title)
        
    }
})
debugger
yargs.command({
    command: 'list',
    describe:'List of notes',
    handler:function () {
        const list=ref.listJson()
        for(i=0;i<list.length;i++)
        console.log(list[i].title)
        
    }
})

yargs.command({
    command: 'read',
    describe:'Read notes',
    handler:function (argv) {
        ref.readNotes(argv.title)
        
    }
})

yargs.parse()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const schema = {
    name: String,
    age: Number,
    health: String,
    hobby:String,
}
const Cat = mongoose.model('Cat', schema);

// const kitty = new Cat({ name: 'testZildjian' });
// kitty.save().then(() => console.log('testmeow'));
// const kitty1 = new Cat({name:'zhang1',age:1,helth:'good'});
// kitty1.save().then(()=>console.log('new schema writed'));
Cat.find({name:'zhang3'},(err,data)=>{console.log(data[0]._doc.name)})
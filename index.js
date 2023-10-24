const express = require('express')//membuat variable baru dengan nama express 
const app = express()//membuat variable baru dengan nama app yang isisnya variable express
const port = 3000 // membuat variable dengan nama port yang isinya 3000 
const cors = require('cors')
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public/images')))

const bodyPS = require('body-parser');
app.use(bodyPS.urlencoded({ extended: false}));
app.use(bodyPS.json());

app.use(cors())
const mhsRouter = require('./routes/mahasiswa');
app.use('/api/mhs', mhsRouter);
const jrsRouter = require('./routes/jurusan');
app.use('/api/jrs', jrsRouter);


//membuat route baru dengan method Get yang isinya kalimat ohayo gozaimasu
//app.get('/', (req, res) =>{
    //res.send('Ohayo Gozaimasu')
//})
//kita listen Express.js ke dalam port yang  kita buat diatas
app.listen(port, () => {
    //dan kita tampilkan log sebagai penanda bahwa Express.js berhasil dijalankan
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})
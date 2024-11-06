use("test")

db.createCollection("aluno");

db.aluno.insertMany([
    {nome:"João",idade:15},
    {nome:"Maria",idade:18},
    {nome:"Pedro",idade:14},
    {nome:"Guilherme",idade:19}
])

use("test")
db.aluno.find({},{"_id":0})

//Buscar onde nome igual maria
use("test")
db.aluno.find({nome:"Maria"},{"_id":0})

//db.aluno.find({WHERE},{PROJEÇÃO})

//Buscar Idades maiores que 15
use("test")
db.aluno.find({"idade":{$gt:15}})


//Buscar Idades maiores que 15
//E que o nome seja "Guilherme"

use("test")
db.aluno.find({"idade":{$gt:15},nome:"Guilherme"})


//Buscar Idades maiores que 15 e menores ou iguais 19
//Ou que o nome seja "João"

use("test")
db.aluno.find(
    {
        $or:
        [
            {"idade":{$gt:15,$lte:19}},
            {"nome":"João"}
        ]
    },
    {"_id":0}
)

//Mude a idade da Maria para 22 anos.
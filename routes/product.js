const {  DataTypes } = require("sequelize");
const db = require("../db/database");
const router = require('express').Router();

const database = db.define('Products',
{
  name: DataTypes.STRING,
  price: DataTypes.STRING,
  flag: DataTypes.STRING,
  image: DataTypes.STRING
}
)

const multer = require("multer");

const fileStroageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStroageEngine });





router.post('/',upload.single("image"), async (req, res) => {
    try {
        const { name,price,flag} =  req.body;

        console.log(name,price,flag);

        const data = await database.create({
          name: name,
          price: price,
          flag: flag,
          image: req.file.filename,
  
        });
        res.status(200).json(data);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );

router.get('/', async (req, res) => {
  const data = await database.findAll();
    res.json(data);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const data = await database.findByPk(id);
    res.status(200).json(data);
});

router.put('/',upload.single("image"), async (req, res) => {
    try {
        const { name,price,flag, image} =
          req.body;
        const data = await database.update(
          {
            name: name,
            price: price,
            flag: flag,
            image: req.file.filename,
          },
          { where: { id: id } }
        );
        res.status(200).json(data);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );


router.delete('/:id', async (req, res) => {
  const {id} = req.params;
 await database.destroy({where: {id:id}})
 res.status(200).json('deleted!')
})


module.exports = router;

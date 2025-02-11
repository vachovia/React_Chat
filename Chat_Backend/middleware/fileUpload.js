const multer = require("multer");
const fs = require("fs");
const path = require("path");

module.exports.userFile = ((req, res, next) => {

  const getFileType = (file) => {
    const mymeType = file.mimetype.split("/");
    return mymeType[mymeType.length - 1];
  };

  const generateFileName = (req, file, cb) => {
    const extension = getFileType(file);
    const fileName = Date.now() + "-" + Math.round(Math.random() * 1e9) + "." + extension;
    cb(null, file.fieldname + "-" + fileName);
  };

  const fileFilter = (req, file, cb) => {
    const extension = getFileType(file);
    const allowedType = /jpeg|jpg|png/;
    const passed = allowedType.test(extension);
    if(passed){
        return cb(null, true);
    }
    return cb(null, false);
  };

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const { id } = req.user;
      const dest = `uploads/user/${id}`;

      fs.access(dest, (err) => {
        if (err) {
          fs.mkdir(dest, (error) => {
            cb(error, dest);
          });
        } else {
          fs.readdir(dest, (error, files) => {
            if (error) {
              throw error;
            } else {
              for (const file of files) {
                fs.unlink(path.join(dest, file), (error) => {
                  if (error) {
                    throw error;
                  }
                });
              }
            }
          });
          cb(null, dest);
        }
      });
    },
    filename: generateFileName,
  });

  return multer({ storage, fileFilter }).single("avatar");
})();

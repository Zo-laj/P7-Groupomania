const Sequelize = require("sequelize");

const Note = sequelize.define("notes", {
  note: Sequelize.TEXT,
  tag: Sequelize.STRING,
});

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);

  // Note.bulkCreate([
  //   { note: 'pick up some bread after work', tag: 'shopping' },
  //   { note: 'remember to write up meeting notes', tag: 'work' },
  //   { note: 'learn how to use node orm', tag: 'work' }
  // ]).then(function() {
  //   return Note.findAll();
  // }).then(function(notes) {
  //   console.log(notes);
  // });
});
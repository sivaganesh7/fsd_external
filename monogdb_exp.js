const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/kiranDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection Error:', err));

const Student = mongoose.model('Student', {
  name: String,
  Reg_no: Number,
});

async function performCRUD() {
  try {
    await Student.create([
      { name: 'Bob', Reg_no:102 },
      { name: 'Charlie', Reg_no:103 }
    ]);

    const updated = await Student.findOneAndUpdate(
      { name: 'Bob' },
      { Reg_no: 202 },
      { new: true }
    );
    // console.log('Updated Student:', updated);

    const deleted = await Student.findOneAndDelete({ name: 'Charlie' });
    // console.log('Deleted Student:', deleted);

    const students = await Student.find();
    console.log('All Final Students:', students);

  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

performCRUD();

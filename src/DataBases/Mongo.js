// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const Veda = require('./RigVeda'); // Replace with the correct path to your Veda model

// const app = express();

// app.use(cors());
// app.use(express.json()); // To parse JSON bodies

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://teenu5456:1234@cluster0.he6pv.mongodb.net/Vedas?retryWrites=true&w=majority&appName=Cluster0', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

// // POST endpoint to create a new Veda entry
// app.post('/RigVeda', async (req, res) => {
//     try {
//         const newVeda = new Veda(req.body);
//         await newVeda.save();
//         res.status(201).json(newVeda);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const Veda = require('./RigVeda'); // Correct path to your Veda model

// const app = express();

// app.use(cors());
// app.use(express.json()); // To parse JSON bodies

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://teenu5456:1234@cluster0.he6pv.mongodb.net/Vedas?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

// // POST endpoint to append new verses to an existing Veda document
// app.post('/RigVeda', async (req, res) => {
//     try {
//         // Replace "Rigveda" with the specific Veda name if needed
//         const vedaName = "Rigveda";
//         const mandalaNumber = req.body.Mandala[0].MandalaNumber;
//         const suktaNumber = req.body.Mandala[0].Suktas[0].SuktaNumber;
//         const verses = req.body.Mandala[0].Suktas[0].Verses;

//         // Find the document and append new verses
//         const result = await Veda.updateOne(
//             { "Veda": vedaName, "Mandala.MandalaNumber": mandalaNumber, "Mandala.Suktas.SuktaNumber": suktaNumber },
//             { $push: { "Mandala.$.Suktas.$.Verses": { $each: verses } } }
//         );

//         if (result.modifiedCount > 0) {
//             res.status(200).json({ message: 'Verses appended successfully' });
//         } else {
//             res.status(404).json({ message: 'Document not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const Veda = require('./RigVeda'); // Correct path to your Veda model

// const app = express();

// app.use(cors());
// app.use(express.json()); // To parse JSON bodies

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://teenu5456:1234@cluster0.he6pv.mongodb.net/Vedas?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

// // POST endpoint to append new verses to an existing Veda document
// app.post('/RigVeda', async (req, res) => {
//   try {
//       const vedaName = "Rigveda";
//       const mandalaNumber = req.body.Mandala[0].MandalaNumber;
//       const suktaNumber = req.body.Mandala[0].Suktas[0].SuktaNumber;
//       const verses = req.body.Mandala[0].Suktas[0].Verses;

//       console.log("Update Criteria:", {
//           "Veda": vedaName,
//           "Mandala.MandalaNumber": mandalaNumber,
//           "Mandala.Suktas.SuktaNumber": suktaNumber
//       });

//       console.log("Verses to Append:", verses);

//       const result = await Veda.updateOne(
//           { "Veda": vedaName, "Mandala.MandalaNumber": mandalaNumber, "Mandala.Suktas.SuktaNumber": suktaNumber },
//           { $push: { "Mandala.$[mandala].Suktas.$[sukta].Verses": { $each: verses } } },
//           { arrayFilters: [
//               { "mandala.MandalaNumber": mandalaNumber },
//               { "sukta.SuktaNumber": suktaNumber }
//           ] }
//       );

//       console.log("Update Result:", result);

//       if (result.modifiedCount > 0) {
//           res.status(200).json({ message: 'Verses appended successfully' });
//       } else {
//           res.status(404).json({ message: 'Document not found' });
//       }
//   } catch (err) {
//       res.status(400).json({ error: err.message });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Initialize the Express app
// const app = express();
// const port = 5000;

// // Middleware
// app.use(express.json());
// app.use(cors()); // Enable CORS

// // MongoDB connection URL
// const mongoURI = 'mongodb+srv://teenu5456:1234@cluster0.he6pv.mongodb.net/Vedas?retryWrites=true&w=majority&appName=Cluster0';

// // Connect to MongoDB
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Failed to connect to MongoDB', err);
// });

// // Import the Veda model
// const Veda = require('./RigVeda'); // Assuming your schema is in RigVeda.js

// // POST method to add or append verses to a Mandala
// app.post('/veda/add-verses', async (req, res) => {
//   try {
//     const { vedaName, mandalaNumber, suktaNumber, verses } = req.body;

//     // Find the Veda document
//     let veda = await Veda.findOne({ Veda: vedaName });

//     // If the Veda does not exist, create a new document
//     if (!veda) {
//       veda = new Veda({
//         Veda: vedaName,
//         Mandala: [{
//           MandalaNumber: mandalaNumber,
//           Suktas: [{
//             SuktaNumber: suktaNumber,
//             Verses: verses
//           }]
//         }]
//       });
//     } else {
//       // Find the Mandala in the existing Veda
//       let mandala = veda.Mandala.find(m => m.MandalaNumber === mandalaNumber);

//       if (!mandala) {
//         // If the Mandala does not exist, create a new Mandala
//         mandala = {
//           MandalaNumber: mandalaNumber,
//           Suktas: [{
//             SuktaNumber: suktaNumber,
//             Verses: verses
//           }]
//         };
//         veda.Mandala.push(mandala);
//       } else {
//         // Find the Sukta in the existing Mandala
//         let sukta = mandala.Suktas.find(s => s.SuktaNumber === suktaNumber);

//         if (!sukta) {
//           // If the Sukta does not exist, create a new Sukta
//           sukta = {
//             SuktaNumber: suktaNumber,
//             Verses: verses
//           };
//           mandala.Suktas.push(sukta);
//         } else {
//           // Append the new verses to the existing Sukta
//           sukta.Verses.push(...verses);
//         }
//       }
//     }

//     // Save the Veda document
//     await veda.save();
//     res.status(200).json({ message: 'Verses added successfully', veda });
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while adding verses' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


//Rohit

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Initialize the Express app
// const app = express();
// const port = 5000;

// // Middleware
// app.use(express.json());
// app.use(cors()); // Enable CORS

// // MongoDB connection URL
// const mongoURI = 'mongodb+srv://teenu5456:1234@cluster0.he6pv.mongodb.net/Vedas?retryWrites=true&w=majority&appName=Cluster0';

// // Connect to MongoDB
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Failed to connect to MongoDB', err);
// });

// // Import the Veda model
// const Veda = require('./RigVeda'); // Assuming your schema is in RigVeda.js

// // POST method to add or append verses to a Mandala
// app.post('/veda/add-verses', async (req, res) => {
//   try {
//     const { veda, mandalas } = req.body;
//     // console.log(veda)
//     // Find the Veda document
//     let vedaData = await Veda.findOne({ veda });
//     console.log(vedaData)
//     // If the Veda does not exist, create a new document
//     if (!vedaData) {
//       const nveda = new Veda({
//         veda,
//         mandalas
//       });
//       await nveda.save();
//     } else {
//       // Find the Mandala in the existing Veda
//       // let mandala = veda.Mandalas.find(m => m.MandalaName === mandalaName);

//       const mandalaData = vedaData.mandalas
//       mandalas.forEach((mandala) => {
//         const {MandalaNumber,Hymns}=mandala
//         const reqMandala = mandalaData.find(val=>val.MandalaNumber===MandalaNumber)
//         if(!reqMandala) {
//           mandalaData.push({MandalaNumber,Hymns})  
//         }
//         else{
//           const hymnsData = reqMandala.Hymns
//           Hymns.forEach((hymn)=>{
//             const {HymnNumber,Deity,Verses}=hymn
//             const reqHymn = hymnsData.find(val=>val.HymnNumber===HymnNumber)
//             if(!reqHymn){
//               hymnsData.push({HymnNumber,Deity,Verses})
//               mandalaData[MandalaNumber]=hymnsData
//             }
//             else{
//               const versesData = reqHymn.Verses
//               Verses.forEach((verse)=>{
//                 const {VerseNumber,Sanskrit,Transliteration,Translation,Text}=verse
//                 const reqVerse = versesData.find(val=>val.VerseNumber===VerseNumber)
//                 if(!reqVerse){
//                   versesData.push({VerseNumber,Sanskrit,Transliteration,Translation,Text})
//                   hymnsData[HymnNumber]=versesData
//                   mandalaData[MandalaNumber]=hymnsData
//                 }
//               })
//             }
//           })
//         }
        
//       });
      
//       vedaData[mandalas]=mandalaData
//       await vedaData.save()

//     //   if (!mandala) {
//     //     // If the Mandala does not exist, create a new Mandala
//     //     mandala = {
//     //       MandalaName: mandalaName,
//     //       Hymns: [{
//     //         HymnNumber: hymnNumber,
//     //         Deity: deity,
//     //         Verses: verses
//     //       }]
//     //     };
//     //     veda.Mandalas.push(mandala);
//     //   } else {
//     //     // Find the Hymn in the existing Mandala
//     //     let hymn = mandala.Hymns.find(h => h.HymnNumber === hymnNumber);

//     //     if (!hymn) {
//     //       // If the Hymn does not exist, create a new Hymn
//     //       hymn = {
//     //         HymnNumber: hymnNumber,
//     //         Deity: deity,
//     //         Verses: verses
//     //       };
//     //       mandala.Hymns.push(hymn);
//     //     } else {
//     //       // Append the new verses to the existing Hymn
//     //       hymn.Verses.push(...verses);
//     //     }
//     //   }
//     }

//     // Save the Veda document
//     // await veda.save();
//     res.status(200).json({ message: 'Verses added successfully', veda });
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ error: 'An error occurred while adding verses' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// Rohit

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the Express app
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB connection URL
const mongoURI = 'mongodb+srv://teenu5456:1234@cluster0.he6pv.mongodb.net/Vedas?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Import the Veda model
const Veda = require('./RigVeda'); // Assuming your schema is in RigVeda.js

// POST method to add or append verses to a Mandala
app.post('/veda/add-verses', async (req, res) => {
  try {
    const { veda, mandalas } = req.body;

    // Find the Veda document
    let vedaData = await Veda.findOne({ veda });

    if (!vedaData) {
      // If the Veda does not exist, create a new document
      vedaData = new Veda({
        veda,
        mandalas
      });
    } else {
      // Loop through each Mandala in the request
      mandalas.forEach((mandala) => {
        const existingMandala = vedaData.mandalas.find(m => m.MandalaNumber === mandala.MandalaNumber);

        if (!existingMandala) {
          // If the Mandala does not exist, add it
          vedaData.mandalas.push(mandala);
        } else {
          // Loop through each Hymn in the Mandala
          mandala.Hymns.forEach((hymn) => {
            const existingHymn = existingMandala.Hymns.find(h => h.HymnNumber === hymn.HymnNumber);

            if (!existingHymn) {
              // If the Hymn does not exist, add it
              existingMandala.Hymns.push(hymn);
            } else {
              // Loop through each Verse in the Hymn
              hymn.Verses.forEach((verse) => {
                const existingVerse = existingHymn.Verses.find(v => v.VerseNumber === verse.VerseNumber);

                if (!existingVerse) {
                  // If the Verse does not exist, add it
                  existingHymn.Verses.push(verse);
                }
              });
            }
          });
        }
      });
    }

    // Save the Veda document
    await vedaData.save();
    res.status(200).json({ message: 'Verses added successfully', veda: vedaData });

  } catch (error) {
    console.error('Error adding verses:', error);
    res.status(500).json({ error: 'An error occurred while adding verses' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


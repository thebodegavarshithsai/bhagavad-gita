// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // Define Verse Schema
// const VerseSchema = new Schema({
//   VerseNumber: {
//     type: Number,
//     required: true
//   },
//   Sanskrit: {
//     type: String,
//     required: true
//   },
//   Transliteration: {
//     type: String,
//     required: true
//   },
//   Translation: {
//     type: String,
//     required: true
//   }
// });

// // Define Sukta Schema
// const SuktaSchema = new Schema({
//   SuktaNumber: {
//     type: Number,
//     required: true
//   },
//   Verses: [VerseSchema]
// });

// // Define Mandala Schema
// const MandalaSchema = new Schema({
//   MandalaNumber: {
//     type: Number,
//     required: true
//   },
//   Suktas: [SuktaSchema]
// });

// // Define Veda Schema
// const VedaSchema = new Schema({
//   Veda: {
//     type: String,
//     enum: ['Rigveda'], // Can be extended if needed
//     required: true
//   },
//   Mandala: [MandalaSchema]
// });

// // Create Mongoose Model
// const Veda = mongoose.model('Veda', VedaSchema,'RigVeda');

// module.exports = Veda;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // Define Verse Schema
// const VerseSchema = new Schema({
//   VerseNumber: {
//     type: Number,
//     required: true
//   },
//   Text: {
//     type: String,
//     required: true
//   },
//   Translation: {
//     type: String,
//     required: true
//   },
//   Transliteration: {
//     type: String,
//     required: true
//   }
// });

// // Define Hymn Schema
// const HymnSchema = new Schema({
//   HymnNumber: {
//     type: Number,
//     required: true
//   },
//   Deity: {
//     type: String,
//     required: true
//   },
//   Verses: [VerseSchema]
// });

// // Define Mandala Schema
// const MandalaSchema = new Schema({
//   MandalaName: {
//     type: String,
//     required: true
//   },
//   Hymns: [HymnSchema]
// });

// // Define Veda Schema
// const VedaSchema = new Schema({
//   Veda: {
//     type: String,
//     enum: ['Rigveda'], // Can be extended if needed
//     required: true
//   },
//   Mandalas: [MandalaSchema]
// });

// // Create Mongoose Model
// const Veda = mongoose.model('Veda', VedaSchema, 'RigVeda');

// module.exports = Veda;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Verse Schema
const VerseSchema = new Schema({
  VerseNumber: {
    type: Number,
    required: true
  },
  Sanskrit: {
    type: String,
    required: true
  },
  Telugu:{
    type:String,
    required:true
  },
  Hindi:{
    type:String,
    required:true
  },
  Transliteration: {
    type: String,
    required: true
  },
  Translation: {
    type: String,
    required: true
  },
  Text: {
    type: String,
    required: true
  },
  HindiTranslation:{
    type:String,
    required:true
  },
  TeluguTranslation:{
    type:String,
    required:true
  }
});

// Define Hymn Schema
const HymnSchema = new Schema({
  HymnNumber: {
    type: Number,
    required: true
  },
  Deity: {
    type: String,
    required: true
  },
  Verses: [VerseSchema]
});

// Define Mandala Schema
const MandalaSchema = new Schema({
  MandalaNumber: {
    type: Number,
    required: true
  },
  Hymns: [HymnSchema]
});

// Define Veda Schema
const VedaSchema = new Schema({
  veda: {
    type: String,
    enum: ['Rigveda'], // Can be extended if needed
    required: true
  },
  mandalas: [MandalaSchema]
});

// Create Mongoose Model
const Veda = mongoose.model('Veda', VedaSchema);

module.exports = Veda;


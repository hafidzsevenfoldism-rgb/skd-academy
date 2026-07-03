const fs = require('fs');

[['config/seed-soal.js', 'Paket 1'], ['config/seed-soal-paket2.js', 'Paket 2']].forEach(function(fp, label) {
  label = fp[1];
  const code = fs.readFileSync(fp[0], 'utf-8');
  const lines = code.split('\n');
  
  // Cek teks yang mengandung double space
  var doubleSpaces = [];
  var noPeriod = [];
  
  lines.forEach(function(line, i) {
    // Cek teks: "..." baris untuk double space
    var m = line.match(/teks:\s*"([^"]+)/);
    if (m) {
      var clean = m[1].replace(/<[^>]+>/g, ' ').replace(/\\n/g, ' ');
      if (/\s{2,}/.test(clean)) {
        doubleSpaces.push({line: i+1, text: clean.substring(0, 80)});
      }
    }
  });
  
  console.log('=== ' + label + ' ===');
  if (doubleSpaces.length > 0) {
    console.log('Double space ditemukan: ' + doubleSpaces.length);
    doubleSpaces.forEach(function(d) {
      console.log('  L' + d.line + ': "' + d.text + '"');
    });
  } else {
    console.log('Tidak ada double space.');
  }
  console.log('');
});

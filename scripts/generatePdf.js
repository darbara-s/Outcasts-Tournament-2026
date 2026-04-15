import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('Team_Logins.pdf'));

doc.fontSize(24).text('Outcasts Cricket Tournament 2026', { align: 'center' });
doc.moveDown();
doc.fontSize(16).text('Official Team Login Credentials', { align: 'center' });
doc.moveDown(2);

doc.fontSize(12);

for (let i = 1; i <= 16; i++) {
  const teamId = `team_${i.toString().padStart(3, '0')}`;
  doc.text(`Team ID: ${teamId}`, { continued: true }).text(`   |   Password: password123`);
  doc.moveDown(0.5);
}

doc.end();
console.log('PDF generated successfully at Team_Logins.pdf');

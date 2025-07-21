// Test script to verify imports
const fs = require('fs');
const path = require('path');

console.log('Testing constants imports...');

try {
  // Read the constants file directly
  const constantsPath = path.join(__dirname, 'lib', 'constants.ts');
  const constantsContent = fs.readFileSync(constantsPath, 'utf8');
  
  console.log('Constants file size:', constantsContent.length);
  console.log('Contains PROJECTS:', constantsContent.includes('export const PROJECTS'));
  console.log('Contains EDUCATION:', constantsContent.includes('export const EDUCATION'));
  
  // Check for syntax issues
  const projectsMatch = constantsContent.match(/export const PROJECTS:.*?\[(.*?)\]/s);
  const educationMatch = constantsContent.match(/export const EDUCATION:.*?\[(.*?)\]/s);
  
  if (projectsMatch) {
    console.log('PROJECTS export found, content length:', projectsMatch[1].length);
  } else {
    console.log('PROJECTS export NOT found properly');
  }
  
  if (educationMatch) {
    console.log('EDUCATION export found, content length:', educationMatch[1].length);
  } else {
    console.log('EDUCATION export NOT found properly');
  }
  
} catch (error) {
  console.error('Error reading constants file:', error);
}

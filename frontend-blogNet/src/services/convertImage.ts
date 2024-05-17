import * as fs from 'fs/promises';

export async function imageToBase64(filePath: string) {
  try {
    const data = await fs.readFile(filePath);
    return data
  } catch (err) {
    console.log(err);
    return 'error';
  }
}

export async function base64ToImage(base64String: string, outputPath: string) {
  try {
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    await fs.writeFile(outputPath, buffer);
  } catch (err) {
    return 'error';
  }
}
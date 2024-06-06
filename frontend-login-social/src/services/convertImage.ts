export const convertImage = (imageFile: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    let imagebase64 = '';
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const image = new Image();
        if (typeof event.target?.result !== 'string') return reject(new Error('Invalid result'));
        image.src = event.target.result as string;
        image.onerror = function() {
          reject(new Error('Failed to load image'));
        };

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('Canvas context is null'));
        image.onload = function() {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
          const dataURL = canvas.toDataURL('image/jpeg', 0.4);
          imagebase64 = dataURL;
          resolve(imagebase64);
        };
      };
      reader.readAsDataURL(imageFile);
    } else {
      reject(new Error('No image file provided'));
    }
  });
};

export const convertImageToBase64 = async (imageFiles: FileList | null) => {
  try {
    if (imageFiles === null) return '';
    if (imageFiles.length > 1) return 'Only one image is allowed';

    const inputImage = imageFiles[0];

    if (inputImage.type !== 'image/png' && inputImage.type !== 'image/jpeg') {
      return 'Only png and jpeg images are allowed';
    }

    if (inputImage.size > 1000000) {
      return 'Image size must be less than 1MB';
    }

    const imageBase64 = await convertImage(inputImage);

    return { imageBase64 };
  } catch (error) {
    return 'Unable to convert image';
  }
};

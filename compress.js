function compressImage(file, quality) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Exportar como JPEG comprimido
      canvas.toBlob((blob) => {
        const compressedFile = new File([blob], file.name, {
          type: 'image/jpeg',
        });
        console.log(compressedFile);
      }, 'image/jpeg', quality);
    };
  };
  reader.readAsDataURL(file);
}

function compressImage(file, quality) 
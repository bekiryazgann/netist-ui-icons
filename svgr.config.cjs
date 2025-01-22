const path = require('path');

module.exports = {
    icon: true,
    template: undefined,
    svgProps: {
        strokeWidth: 0.20
    },
    componentName: (filePath) => {
        const fileName = path.basename(filePath, '.svg');
        return fileName.replace(/-/g, ''); // Tireleri kaldırıp bileşen adını oluştur
    },
};

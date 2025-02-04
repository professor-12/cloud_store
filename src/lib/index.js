export async function Authenticate(key, value) {
    localStorage.setItem(key, value);
}

export function generateFileIcon(_iconType) {
    const iconType = _iconType.toLowerCase();
    switch (iconType) {
        case "pdf":
            return "/public/pdf.png";
        case "docx":
            return "/public/docx.png";
        case "doc":
            return "/public/google-docs.png";
        case "ppt":
            return "/public/ppt.png";
        case "pptx":
            return "/public/pptx.png";
        case "xls":
            return "/public/xls.png";
        case "xlsx":
            return "/public/xlsx.png";
        case "txt":
            return "/public/txt.png";
    }
}

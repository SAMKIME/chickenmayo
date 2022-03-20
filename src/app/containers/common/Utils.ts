export const moveLogin = () => {
    localStorage.removeItem('access_token');
    // todo 수정 사항
    // history.push('/login');
};

/**
 * Image Size 조절하기
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * @param file : File
 * @param maxWidth : resize width value
 * @param callback
 */
export const setImageResize = (file: any, maxWidth: number, callback: any) => {
    let image: HTMLImageElement = new Image();

    image.onload = function () {
        let canvas = document.createElement("canvas");
        let max_size = maxWidth;
        let width = image.width;
        let height = image.height;

        if (width > height) {
            if (width > max_size) {
                height *= max_size / width;
                width = max_size;
            }
        } else {
            if (height > max_size) {
                width *= max_size / height;
                height = max_size;
            }
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")?.drawImage(image, 0, 0, width, height);
        if (callback) {
            callback(canvas.toDataURL("image/png"));
        }
    };
    image.src = file.target?.result;
};
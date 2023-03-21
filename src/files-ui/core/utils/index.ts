import { fileListToExtFileArray, fileListToExtFileInstanceArray } from "./fileListParser";

import { fileSizeFormater } from "./fileSizeFormatter";

import { getExt } from "./getExt";

import { FileIdGenerator } from "./IdGenerator";

export {
    FileIdGenerator,
    fileListToExtFileArray,
    fileListToExtFileInstanceArray,
    fileSizeFormater,
    getExt,
};

export { handleDragUtil, handleDropUtil } from "./dragdrop.utils";

export { handleClickInput, handleClickUtil } from "./click.utils";

export { isValidateActive } from "./dropzone.utils";

export { shrinkWord } from "./shrinkWord";

export {
    fakeFuiUpload,
    prepToUploadOne,
    setPrepToUploading,
    sleepPreparing,
    uploadOne,
    uploadOneExtFile
} from "./fakeupload.utils";

export { getRandomInt } from "./randomInt";

export { cleanInput } from "./input.utils";


export { addClassName } from "./addClassName";

export { isUploadAbleExtFile } from "./isUploadAbleExtFile";

export { getLocalFileItemData } from "./getLocalFileItemData"
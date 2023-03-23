/**
 * Resize an image resolution given maxWidth and maxHeight
 *
 * Should be called with await
 * @param base64Str a string representation of an imae file
 * @param maxWidth the max width of he image
 * @param maxHeight the max height of he image
 * @returns the resized image
 */
export declare function resizeImage(base64Str: string, maxWidth?: number, maxHeight?: number): Promise<string | undefined>;

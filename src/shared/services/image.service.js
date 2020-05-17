/**
 * Helper functions to help in image transformations and manipulations from "cloudinary"
 * Example URL: https://res.cloudinary.com/dykflps8g/image/upload/v1589723243/ptzm3gerhluytrwoswyv.png
 *
 * @param {string} imageUrl
 */
export const getImageUrlParts = (imageUrl) => {
  let urlParts = imageUrl.split("/");
  let cloudName = urlParts[3];
  let publicId = urlParts[urlParts.length - 1];
  let version = getVersionNumberFromUrl(urlParts[urlParts.length - 2]);

  return {
    cloudName,
    publicId,
    version,
  };
};

/**
 * Gets version string --> "v1589723243" and returns --> "1589723243"
 *
 * @param {string} imageVersion
 */
const getVersionNumberFromUrl = (imageVersion) => {
  return imageVersion.slice(1);
};

export type ImagesSubcategory = {
  name: string;
  name_encoded: string;
};

// export type GifType = {
//   alt_text: string;
//   analytics: {
//     onload: { url: string };
//     onclick: { url: string };
//     onsent: { url: string };
//   };
//   analytics_response_payload: string;
//   bitly_gif_url: string;
//   bitly_url: string;
//   content_url: string;
//   embed_url: string;
//   id: string;
//   images: {
//     original: {
//       frames: string;
//       hash: string;
//       height: string;
//       mp4: string;
//       mp4_size: string;
//       size: string;
//       url: string;
//       webp: string;
//       webp_size: string;
//       width: string;
//     };
//     downsized: {
//       height: string;
//       size: string;
//       url: string;
//       width: string;
//     };
//     downsized_large: {
//       height: string;
//       size: string;
//       url: string;
//       width: string;
//     };
//     downsized_medium: {
//       height: string;
//       size: string;
//       url: string;
//       width: string;
//     };
//     downsized_small: {
//       height: string;
//       mp4: string;
//       mp4_size: string;
//       width: string;
//     };
//     downsized_still: {
//       height: string;
//       size: string;
//       url: string;
//       width: string;
//     };
//   };
//   import_datetime: string;
//   is_low_contrast: boolean;
//   is_sticker: number;
//   rating: string;
//   slug: string;
//   source: string;
//   source_post_url: string;
//   source_tld: string;
//   title: string;
//   trending_datetime: string;
//   type: string;
//   url: string;
//   username: string;
// };
export type GifType = {
  blur_preview: string;
  id: number;
  slug: string;
  tags: string[];
  title: string;
  type: string;
  file: GifFileType;
};
export type ImagesCategory = {
  // gif: GifType;
  // name: string;
  // name_encoded: string;
  // subcategories: Array<ImagesSubcategory>;
  category: string;
  preview_url: string;
  query: string;
};

export type GifFileType = {
  hd: {
    gif: FileType;
    webp: FileType;
    jpg: FileType;
    mp4: FileType;
    webm: FileType;
  };
  md: {
    gif: FileType;
    webp: FileType;
    jpg: FileType;
    mp4: FileType;
    webm: FileType;
  };
  sm: {
    gif: FileType;
    webp: FileType;
    jpg: FileType;
    mp4: FileType;
    webm: FileType;
  };
  xs: {
    gif: FileType;
    webp: FileType;
    jpg: FileType;
    mp4: FileType;
    webm: FileType;
  };
};

type FileType = {
  height: number;
  size: number;
  url: string;
  width: number;
};

export type FileIndex = {
  name: string;
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
  type: 'md' | 'svg' | 'png' | 'jpg' | 'jpeg';
  date: Date;
} 

/**
 * @description Read the index.json of `publicRootLocation` then recursively get the same for each
 * @param publicRootLocation Specify where the function need to start digging data, must contain a json index file
 * @param customIndexFileName specify a custom name for the index file (default is index.json)
 * @throws Folder will not be found if it is outside the public directory!
 */
export const getListOfAllFile = async (publicRootLocation: string, customIndexFileName: string = "index.json"): Promise<FileIndex[] | null> => {
  try {
    const files = await (await fetch(`${publicRootLocation}/${customIndexFileName}`)).json() as { sample: any, data: FileIndex[] };
    console.log(files.data)
    return files && files.data && files.data.length > 0 
      ? removeMalformattedEntries(files.data) 
      : null;
  } catch(err) {
    console.log(err)
    return null
  }
}

const removeMalformattedEntries = (data: FileIndex[]): FileIndex[] => {
  const res = data.filter(d =>
    d.category 
    && d.date
    && d.description && d.description.length > 3
    && d.image
    && d.link
    && d.name && d.name.length > 3
    && d.title && d.title.length > 3
    && d.type
  )
  console.log(res)
  return res;
}
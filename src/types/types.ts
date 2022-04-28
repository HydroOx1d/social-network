export type ProfilePostDataType = {
  id: number;
  text: string;
};
export type ProfileDataContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type ProfileDataPhotosType = {
  small: string | null;
  large: string | null;
};
export type ProfileDataType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ProfileDataContactsType;
  photos: ProfileDataPhotosType;
};


export type UsersType = {
  followed: boolean;
  id: number;
  name: string;
  photos: ProfileDataPhotosType;
  status: string | null;
  uniqueUrlName: string | null;
};